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
    el.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:620px;margin:0 auto;' +
      'background:var(--color-surface,#101418);color:var(--color-on-surface,#F5F7FA);border:1px solid var(--color-outline,rgba(245,247,250,.12));' +
      'padding:16px 18px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;font-size:14px;line-height:1.5';
    el.innerHTML =
      '<span style="flex:1 1 260px">Usamos medição da Meta para entender de onde vêm as visitas. ' +
      'A contagem própria do site é anônima e acontece de qualquer forma.</span>' +
      '<button type="button" data-v="denied" style="background:transparent;color:inherit;border:1px solid var(--color-outline,rgba(245,247,250,.24));padding:8px 14px;cursor:pointer;font:inherit">Agora não</button>' +
      '<button type="button" data-v="granted" style="background:var(--color-action,#2F6BFF);color:var(--color-on-action,#FFFFFF);border:0;padding:8px 14px;cursor:pointer;font:inherit;font-weight:600">Pode medir</button>';
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
