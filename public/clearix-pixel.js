/**
 * Pixel da Meta do site institucional — atrás de consentimento explícito (LGPD).
 * ============================================================================
 * POR QUE COM BANNER, e não solto: o pixel é rastreamento de TERCEIRO com cookie. A medição própria
 * (clearix-attrib.js) é anônima e não precisa de consentimento; esta aqui precisa. É a mesma régua que o
 * próprio MKT exigiu da landing do Polá Petit em 27/08/2026 — "instalar o pixel sem resolver o consentimento
 * é exposição de LGPD real, não formalidade".
 *
 * SEM ID, NÃO CARREGA: o número vem de window.CLEARIX_META_PIXEL_ID, preenchido no BaseLayout a partir da
 * variável PUBLIC_META_PIXEL_ID do build. Pixel com ID de palpite mede para a conta de outro — pior que
 * não medir. Enquanto a variável não existir, este arquivo só não faz nada; nem o banner aparece.
 *
 * A fonte do ID é o inventário do app DIGIAI (ops.contas_servicos), nunca este arquivo.
 * PUSH DESTE REPO É DO DONO (CLAUDE.md §5, ecossistema Clearix): aqui fica commitado, não publicado.
 */
(function () {
  'use strict';

  var ID = (window.CLEARIX_META_PIXEL_ID || '').trim();
  if (!ID) return;

  // Só produção: preview do Cloudflare (*.pages.dev) e localhost não podem disparar pixel. Visita de
  // agente conferindo deploy viraria audiência dentro da conta de anúncios, e público de remarketing
  // sujo custa dinheiro real depois.
  if (['clearix.app.br'].indexOf(location.hostname) === -1) return;

  var CHAVE = 'clearix_consent_v1';
  var carregado = false;

  function consentimento() {
    try {
      var v = localStorage.getItem(CHAVE);
      return v === 'granted' || v === 'denied' ? v : null;
    } catch (_) { return null; }
  }
  function gravar(v) { try { localStorage.setItem(CHAVE, v); } catch (_) {} }

  function carregar() {
    if (carregado || consentimento() !== 'granted') return;
    carregado = true;
    /* eslint-disable */
    // Snippet oficial da Meta SEM a tag <noscript>: ela dispararia sem consentimento.
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', ID);
    window.fbq('track', 'PageView');
  }

  function banner() {
    if (consentimento() !== null || document.getElementById('clearix-consent')) return;
    var el = document.createElement('div');
    el.id = 'clearix-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Escolha sobre medição de audiência');
    // Cores pelos tokens do site (--t-*, triplas RGB): o fallback antigo (--color-on-surface) não existe no Clearix e deixava
    // texto branco sobre fundo branco no tema claro. Em tela larga fica à direita, acima do botão do WhatsApp (cobre a foto, não o texto nem o CTA); no celular, embaixo.
    var T = function (n, f) { return 'rgb(var(--' + n + ',' + f + '))'; };
    var largo = window.innerWidth >= 900;
    el.style.cssText = 'position:fixed;' + (largo ? 'right:16px;bottom:84px;' : 'left:16px;bottom:16px;') + 'z-index:9999;width:min(380px,calc(100vw - 32px));' +
      'background:' + T('t-ink-surface', '255 255 255') + ';color:' + T('t-off', '11 27 51') + ';border:1px solid ' + T('t-line', '203 213 225') + ';border-radius:12px;' +
      'box-shadow:0 12px 32px -12px rgb(0 0 0 / .35);padding:14px 16px;font-size:13px;line-height:1.45';
    el.innerHTML =
      '<p style="margin:0 0 12px">Usamos medição da Meta para entender de onde vêm as visitas. ' +
      'A contagem própria do site é anônima e acontece de qualquer forma.</p>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end">' +
      '<button type="button" data-v="denied" style="background:transparent;color:inherit;border:1px solid ' + T('t-line', '203 213 225') + ';border-radius:8px;padding:8px 14px;cursor:pointer;font:inherit">Agora não</button>' +
      '<button type="button" data-v="granted" style="background:' + T('t-btn', '14 116 144') + ';color:' + T('t-on-btn', '255 255 255') + ';border:0;border-radius:8px;padding:8px 14px;cursor:pointer;font:inherit;font-weight:600">Pode medir</button>' +
      '</div>';
    el.addEventListener('click', function (e) {
      var b = e.target && e.target.closest ? e.target.closest('button[data-v]') : null;
      if (!b) return;
      gravar(b.getAttribute('data-v'));
      el.remove();
      carregar();
    });
    document.body.appendChild(el);
  }

  function iniciar() { carregar(); banner(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
