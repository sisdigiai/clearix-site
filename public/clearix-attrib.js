/**
 * Atribuição first-party (keyless) da landing Clearix.
 * ============================================================================
 * O site é estático e não tem cliente Supabase. O único canal de dados são dois
 * POSTs keyless para as edge functions públicas do projeto digiai — o mesmo
 * contrato que a landing OSI e a Clearix Calc já usam (ADR-0036/ADR-0041):
 *
 *   events-ingest → analytics.events_log   (visita e clique de CTA)
 *   lead-capture  → marketing.landing_leads (o form de /contato)
 *
 * POR QUE ISTO EXISTE
 * O form de /contato lia UTM de `location.search` no momento do submit. Mas o
 * tráfego da calc chega em `/` com ?utm_source=clearixcalc, navega até /planos,
 * depois /contato — e a query string já se perdeu. A atribuição evaporava
 * exatamente no caminho que a isca cria. Aqui a UTM é capturada na PRIMEIRA
 * visita e persiste pela sessão inteira.
 *
 * ZERO PII: só sessão anônima + UTM. Nada aqui identifica pessoa; o dado
 * pessoal só entra pelo form, com consentimento explícito.
 *
 * IDEMPOTENTE: o site usa Astro ClientRouter (View Transitions), então cada
 * navegação é client-side. Tudo aqui tolera ser chamado de novo.
 */
(function () {
  'use strict';

  var INGEST_URL = 'https://hswyopqvnolqpmprqvzh.supabase.co/functions/v1/events-ingest';
  var PRODUCT = 'clearix-site';
  var SID_KEY = 'clearix_site_sid';
  var UTM_KEY = 'clearix_site_utms';
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  /**
   * event_code precisa existir em analytics.events_catalog (FK) E na allowlist da edge, senão o endpoint recusa.
   * Códigos combinados com o app digiai em 15/09 (via eco), para o funil do MKT ler:
   *   clearix_site_visit       — visita, com utm_*; a chegada pelo link da prospecção é esta visita
   *   clearix_demo_solicitada  — só depois do ok do lead-capture
   *   clearix_whatsapp_click   — clique no WhatsApp da landing (quando o botão voltar com a D2)
   *   clearix_cta_click        — clique de CTA para /contato, Hub e calculadora, com metadata.cta_id
   * `landing_visit`/`click_checkout` saem quando estes entram no catálogo: esta versão só vai ao ar depois disso.
   *
   * Interessado vindo da prospecção do MKT (despacho 15/09 "receber interessados"):
   *   ?utm_source=whatsapp&utm_medium=prospeccao&utm_campaign=<variante>&utm_content=<ops.commercial_leads.id>
   */
  var EV_VISIT = 'clearix_site_visit';
  var EV_DEMO_SUBMIT = 'clearix_demo_solicitada';
  var EV_WHATSAPP = 'clearix_whatsapp_click';
  var EV_CTA = 'clearix_cta_click';
  var MEDIUM_PROSPECCAO = 'prospeccao';
  var UTM_TTL_MS = 30 * 24 * 60 * 60 * 1000;
  var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  /**
   * Preview local não fala com produção: `npm run dev` mandava visita, clique e lead de teste para o banco do digiai
   * (recado do Geral, 15/09). Em localhost nada sai, a não ser que a página seja aberta com ?attrib=on — liga só
   * naquela aba, para uma prova deliberada e combinada.
   */
  var EM_PREVIEW = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  function envioLigado() {
    if (!EM_PREVIEW) return true;
    try {
      if (/[?&]attrib=on\b/.test(location.search)) sessionStorage.setItem('clearix_site_attrib_on', '1');
      return sessionStorage.getItem('clearix_site_attrib_on') === '1';
    } catch (_) { return false; }
  }

  function safeGet(k) {
    try { return localStorage.getItem(k); } catch (_) { return null; }
  }
  function safeSet(k, v) {
    try { localStorage.setItem(k, v); } catch (_) { /* modo anônimo / storage cheio */ }
  }

  function sessionId() {
    var v = safeGet(SID_KEY);
    if (!v) {
      v = (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : Date.now() + '-' + Math.random().toString(36).slice(2);
      safeSet(SID_KEY, v);
    }
    return v;
  }

  /**
   * UTM da URL vence e é gravada; sem UTM na URL, devolve a da primeira visita.
   * Primeiro toque ganha: quem chegou pela calc continua sendo da calc mesmo
   * depois de navegar pelo site.
   *
   * Validade de 30 dias: sem isso, uma visita orgânica meses depois ainda
   * carregaria o lead_id da prospecção e contaria como venda do braço do A/B.
   */
  function utms() {
    var out = {};
    try {
      var p = new URLSearchParams(location.search);
      var achou = false;
      for (var i = 0; i < UTM_KEYS.length; i++) {
        var val = p.get(UTM_KEYS[i]);
        if (val) { out[UTM_KEYS[i]] = val.slice(0, 120); achou = true; }
      }
      if (achou) { safeSet(UTM_KEY, JSON.stringify({ u: out, t: Date.now() })); return out; }
      var stored = safeGet(UTM_KEY);
      if (!stored) return {};
      var parsed = JSON.parse(stored);
      if (!parsed || !parsed.u || !parsed.t) return {};   // formato antigo, sem data: não confia
      if (Date.now() - parsed.t > UTM_TTL_MS) return {};
      return parsed.u;
    } catch (_) {
      return {};
    }
  }

  /** lead_id de ops.commercial_leads, só quando o link é da prospecção e o valor tem forma de uuid. */
  function commercialLeadId() {
    var u = utms();
    if (u.utm_medium !== MEDIUM_PROSPECCAO) return null;
    return UUID_RE.test(u.utm_content || '') ? u.utm_content.toLowerCase() : null;
  }

  /**
   * Tira os utm_* da barra de endereço depois de guardá-los. O link da prospecção é pessoal (leva o lead_id): se o
   * dono da ótica copia a URL e manda a um colega, a visita do colega não pode entrar na conta do lead errado.
   */
  function limparUtmDaBarra() {
    try {
      var url = new URL(location.href);
      var mudou = false;
      for (var i = 0; i < UTM_KEYS.length; i++) {
        if (url.searchParams.has(UTM_KEYS[i])) { url.searchParams.delete(UTM_KEYS[i]); mudou = true; }
      }
      if (mudou) history.replaceState(history.state, '', url.pathname + url.search + url.hash);
    } catch (_) { /* navegador antigo: fica como está */ }
  }

  function enviar(eventCode, metadata) {
    if (!envioLigado()) return;
    try {
      var ev = { event_code: eventCode, product: PRODUCT, session_id: sessionId(),
                 url: location.href.slice(0, 500), metadata: metadata || {} };
      var u = utms();
      for (var k in u) { if (Object.prototype.hasOwnProperty.call(u, k)) ev[k] = u[k]; }
      var body = JSON.stringify({ events: [ev] });

      // text/plain é CORS-safelisted → sem preflight → sendBeacon funciona
      // mesmo quando a página está sendo abandonada. A edge faz req.json().
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
        if (navigator.sendBeacon(INGEST_URL, blob)) return;
      }
      fetch(INGEST_URL, {
        method: 'POST', body: body, keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      }).catch(function () {});
    } catch (_) {
      /* telemetria nunca pode derrubar a página */
    }
  }

  /**
   * Carimba UTM + sessão nos links que saem do site.
   *
   * Sem isto o funil quebra na fronteira: quem veio da calc e clica em "Entrar
   * no Hub" ou na própria calculadora chega do outro lado como tráfego direto,
   * e o loop de indicação não fecha.
   */
  var DESTINOS_RASTREADOS = /^https?:\/\/(clearixhub\.netlify\.app|clearixcalc\.netlify\.app|calc\.clearix\.app\.br|hub\.clearix\.app\.br)/i;

  function carimbarLinks() {
    var u = utms();
    var sid = sessionId();
    var links = document.querySelectorAll('a[href^="http"]:not([data-attrib-done])');

    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      a.setAttribute('data-attrib-done', '1');
      if (!DESTINOS_RASTREADOS.test(a.href)) continue;

      try {
        var url = new URL(a.href);
        // Link que já traz UTM própria manda — é intenção explícita de quem
        // escreveu a marcação, não sobrescrever.
        if (!url.searchParams.get('utm_source')) {
          for (var k in u) {
            if (!Object.prototype.hasOwnProperty.call(u, k)) continue;
            // O lead_id da prospecção não sai do site: do outro lado vai só a sessão anônima.
            if (k === 'utm_content' && u.utm_medium === MEDIUM_PROSPECCAO) continue;
            url.searchParams.set(k, u[k]);
          }
          if (!url.searchParams.get('utm_source')) {
            url.searchParams.set('utm_source', 'clearix');
            url.searchParams.set('utm_medium', 'landing');
          }
        }
        // Sessão anônima atravessa a fronteira: é o que permite ligar
        // "usou a calc" a "virou lead" mais tarde (camada 2 de indicação).
        if (!url.searchParams.get('utm_content')) url.searchParams.set('utm_content', sid);
        a.href = url.toString();
      } catch (_) { /* href exótico — deixa como está */ }
    }
  }

  /**
   * Classifica pelo HOSTNAME, nunca por substring do href.
   *
   * Depois que carimbamos os links, um link do Hub passa a conter a string
   * "clearixcalc" dentro de ?utm_source=clearixcalc — casar por substring
   * confundiria destino com origem.
   */
  function destinoDoLink(el) {
    var host;
    try { host = new URL(el.href).hostname.toLowerCase(); } catch (_) { return null; }
    if (host === 'wa.me') return 'whatsapp';
    if (host.indexOf('clearixhub') === 0 || host.indexOf('hub.clearix') === 0) return 'hub';
    if (host.indexOf('clearixcalc') === 0 || host.indexOf('calc.clearix') === 0) return 'calc';
    if (host === location.hostname && el.pathname.indexOf('/contato') === 0) return 'contato';
    return null;
  }

  /** CTAs que valem como intenção comercial, não navegação qualquer. */
  function ligarCliques() {
    var alvos = document.querySelectorAll('a[href]:not([data-cta-done])');
    for (var i = 0; i < alvos.length; i++) {
      var a = alvos[i];
      var destino = destinoDoLink(a);
      if (!destino) continue;
      a.setAttribute('data-cta-done', '1');
      a.addEventListener('click', function (e) {
        var el = e.currentTarget;
        // cta_id diz QUAL botão converteu (hero, oferta, faq, final…); código aprovado pelo Geral em 14/09.
        enviar(destinoDoLink(el) === 'whatsapp' ? EV_WHATSAPP : EV_CTA, {
          destino: destinoDoLink(el),
          cta_id: el.getAttribute('data-cta') || '',
          texto: (el.textContent || '').trim().slice(0, 80)
        });
      });
    }
  }

  var ultimaVisita = '';
  function aoCarregarPagina() {
    var chegouComUtm = /[?&]utm_/.test(location.search);
    utms();       // captura na 1a visita, antes de qualquer navegação apagar a query
    // ClientRouter dispara astro:page-load em toda navegação: uma visita por
    // caminho, não uma por evento de router.
    if (ultimaVisita !== location.pathname) {
      ultimaVisita = location.pathname;
      enviar(EV_VISIT, { path: location.pathname, referrer: (document.referrer || '').slice(0, 200) });
    }
    if (chegouComUtm) limparUtmDaBarra();
    carimbarLinks();
    ligarCliques();
  }

  /** Exposto para o form de /contato usar a MESMA atribuição persistida. */
  window.clearixAttrib = {
    sessionId: sessionId,
    utms: utms,
    track: enviar,
    commercialLeadId: commercialLeadId,
    eventoPedido: function () { return EV_DEMO_SUBMIT; },
    envioLigado: envioLigado,
  };

  document.addEventListener('astro:page-load', aoCarregarPagina);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aoCarregarPagina);
  } else {
    aoCarregarPagina();
  }
})();
