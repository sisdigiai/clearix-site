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
   * event_code precisa existir em analytics.events_catalog (FK) E na allowlist
   * da edge. `landing_visit` e `click_checkout` já estão nos dois — por isso
   * ligar a landing não exige nenhuma mudança no lado digiai.
   */
  var EV_VISIT = 'landing_visit';
  var EV_CTA = 'click_checkout';

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
      if (achou) { safeSet(UTM_KEY, JSON.stringify(out)); return out; }
      var stored = safeGet(UTM_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (_) {
      return {};
    }
  }

  function enviar(eventCode, metadata) {
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
            if (Object.prototype.hasOwnProperty.call(u, k)) url.searchParams.set(k, u[k]);
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
        enviar(EV_CTA, {
          destino: destinoDoLink(el),
          cta_id: el.getAttribute('data-cta') || '',
          texto: (el.textContent || '').trim().slice(0, 80)
        });
      });
    }
  }

  var ultimaVisita = '';
  function aoCarregarPagina() {
    utms();       // captura na 1a visita, antes de qualquer navegação apagar a query
    carimbarLinks();
    ligarCliques();
    // ClientRouter dispara astro:page-load em toda navegação: uma visita por
    // caminho, não uma por evento de router.
    if (ultimaVisita !== location.pathname) {
      ultimaVisita = location.pathname;
      enviar(EV_VISIT, { path: location.pathname, referrer: (document.referrer || '').slice(0, 200) });
    }
  }

  /** Exposto para o form de /contato usar a MESMA atribuição persistida. */
  window.clearixAttrib = { sessionId: sessionId, utms: utms, track: enviar };

  document.addEventListener('astro:page-load', aoCarregarPagina);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aoCarregarPagina);
  } else {
    aoCarregarPagina();
  }
})();
