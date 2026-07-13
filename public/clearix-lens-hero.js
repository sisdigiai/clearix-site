/**
 * Clearix Lens — <clearix-lens-hero> driver (cinematográfico / scroll-scrub)
 *
 * A assinatura visual do Clearix é a LENTE. Este hero encena a promessa da marca —
 * "transformando informação em decisão", "clareza com profundidade":
 *
 *   Rolagem 0%   → luz/dados DISPERSOS e desfocados (a ótica no improviso: ruído,
 *                  clientes que somem, dados que não se falam).
 *   Rolagem 100% → tudo CONVERGE por uma lente até um PONTO DE FOCO nítido + feixe
 *                  (a operação vira decisão: clareza).
 *
 * Encena via canvas 2D (leve, sem WebGL). Cyan/blue, vidro, brilho — vocabulário
 * Clearix Lens (≠ malha de quadrados do DIGIAI House).
 *
 * Markup (Astro):
 *   <section data-clearix-hero style="height:300vh">
 *     <div data-hero-sticky style="position:sticky;top:0;height:100vh">
 *       <canvas data-hero-canvas></canvas>
 *       <div data-chapter="0">…</div><div data-chapter="1">…</div><div data-chapter="2">…</div>
 *       <span data-hero-hud></span>
 *     </div>
 *   </section>
 *   <div data-hero-rail><div data-hero-rail-fill></div></div>   (opcional, fixo)
 *
 * reduced-motion: não fixa/scrub — mostra o estado FOCADO estático (capítulo 0).
 * Idempotente + compatível com Astro View Transitions. Robusto a rAF estrangulado
 * (render também dispara no scroll).
 */
(function () {
  var instances = [];
  function ease(p) { return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; }
  function lerp(a, b, k) { return a + (b - a) * k; }

  function build(stage) {
    if (stage._cxInit) return; stage._cxInit = true;
    var canvas = stage.querySelector('[data-hero-canvas]');
    var chapters = Array.prototype.slice.call(stage.querySelectorAll('[data-chapter]'));
    var hud = stage.querySelector('[data-hero-hud]');
    var railFill = document.querySelector('[data-hero-rail-fill]');
    if (!canvas) return;
    var ctx = canvas.getContext('2d'); if (!ctx) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var W = 0, H = 0, DPR = 1, raf = 0, poll = 0, polls = 0, t = 0;
    var mx = 0, my = 0, tmx = 0, tmy = 0;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      var r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    // Partículas: origem dispersa (ruído) → destino convergente (anel de foco).
    var N = 120, P = [];
    for (var i = 0; i < N; i++) {
      var ang = Math.random() * Math.PI * 2, rr = 0.25 + Math.random() * 0.9;
      // foco: distribuídas num anel apertado perto do ponto focal
      var fang = Math.random() * Math.PI * 2, fr = 0.02 + Math.random() * 0.16;
      var cyan = Math.random() > 0.5;
      P.push({
        sx: Math.cos(ang) * rr, sy: (Math.random() - 0.5) * 1.7, sd: Math.random(),
        fx: Math.cos(fang) * fr, fy: Math.sin(fang) * fr * 0.7,
        cyan: cyan, tw: Math.random() * Math.PI * 2, sp: 0.4 + Math.random() * 0.9,
      });
    }

    function onMove(e) { var r = canvas.getBoundingClientRect(); tmx = (e.clientX - r.left) / r.width - 0.5; tmy = (e.clientY - r.top) / r.height - 0.5; }
    window.addEventListener('mousemove', onMove); this && (this._m = onMove);

    function render() {
      var cr = canvas.getBoundingClientRect();
      if (Math.abs(cr.width - W) > 0.5 || Math.abs(cr.height - H) > 0.5) resize();

      var progress = 0, total = stage.offsetHeight - window.innerHeight;
      if (total > 0) progress = Math.max(0, Math.min(1, -stage.getBoundingClientRect().top / total));
      if (reduce) progress = 1;
      var m = ease(progress);

      chapters.forEach(function (el, idx) {
        var centers = [0.0, 0.5, 1.0];
        // janela estreita (0.26): um capítulo apaga antes do próximo acender —
        // sem dupla exposição de texto no meio do scrub
        var a = 1 - Math.abs(progress - centers[idx]) / 0.26; a = Math.max(0, Math.min(1, a));
        if (reduce) a = idx === 0 ? 1 : 0;
        el.style.opacity = String(a);
        el.style.transform = 'translateY(' + ((1 - a) * 20) + 'px)';
        el.style.pointerEvents = a > 0.5 ? 'auto' : 'none';
      });
      if (hud) hud.textContent = 'FOCO ' + String(Math.round(m * 100)).padStart(2, '0') + '%';
      var hint = stage.querySelector('[data-hero-hint]');
      if (hint) hint.style.opacity = String(Math.max(0, 1 - progress * 2.5));
      if (railFill) { var pt = document.documentElement.scrollHeight - window.innerHeight; railFill.style.transform = 'scaleX(' + (pt > 0 ? Math.max(0, Math.min(1, window.scrollY / pt)) : 0) + ')'; }

      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05; if (!reduce) t += 0.016;

      ctx.clearRect(0, 0, W, H);
      var cx = W * 0.62 + mx * 26, cy = H * 0.5 + my * 20;
      var unit = Math.min(W, H) * 0.42;
      var focusX = cx, focusY = cy;

      // ---- feixe de luz convergente (aparece com o foco) ----
      if (m > 0.04) {
        var bg = ctx.createLinearGradient(0, cy, cx, cy);
        bg.addColorStop(0, 'rgba(34,211,238,0)');
        bg.addColorStop(1, 'rgba(34,211,238,' + (0.10 * m) + ')');
        ctx.fillStyle = bg;
        ctx.beginPath(); ctx.moveTo(0, cy - unit * 0.9 * (1 - m * 0.5)); ctx.lineTo(cx, cy - 4);
        ctx.lineTo(cx, cy + 4); ctx.lineTo(0, cy + unit * 0.9 * (1 - m * 0.5)); ctx.closePath(); ctx.fill();
      }

      // ---- partículas: dispersas → foco ----
      for (var i = 0; i < N; i++) {
        var p = P[i];
        var px = lerp(cx + p.sx * unit * 1.6 - unit * 0.7, focusX + p.fx * unit, m);
        var py = lerp(cy + p.sy * unit, focusY + p.fy * unit, m);
        if (!reduce) { px += Math.cos(p.tw + t * p.sp) * (1 - m) * 10; py += Math.sin(p.tw + t * p.sp) * (1 - m) * 10; }
        var blur = (1 - m) * p.sd; // desfoque quando disperso
        var size = lerp(1.2 + p.sd * 2.4, 1.4, m) * (1 + (1 - m) * blur * 2.5);
        var alpha = lerp(0.12 + p.sd * 0.2, 0.85, m);
        var tw = reduce ? 1 : 0.7 + Math.sin(p.tw + t * 1.6) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = (p.cyan ? 'rgba(103,232,249,' : 'rgba(96,165,250,') + (alpha * tw).toFixed(3) + ')';
        ctx.arc(px, py, size, 0, Math.PI * 2); ctx.fill();
      }

      // ---- a LENTE (assinatura Clearix): anéis refrativos que se firmam no foco ----
      ctx.save();
      ctx.translate(cx, cy);
      var lr = unit * (0.6 + m * 0.06);
      // halo
      var halo = ctx.createRadialGradient(0, 0, lr * 0.1, 0, 0, lr * 1.15);
      halo.addColorStop(0, 'rgba(34,211,238,' + (0.05 + m * 0.12) + ')');
      halo.addColorStop(0.6, 'rgba(59,130,246,' + (0.03 + m * 0.05) + ')');
      halo.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(0, 0, lr * 1.15, 0, Math.PI * 2); ctx.fill();
      // anel externo (gira devagar, nitidez cresce com foco)
      ctx.rotate(t * 0.06);
      ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(34,211,238,' + (0.25 + m * 0.5) + ')';
      ctx.setLineDash([lr * 0.28, lr * 1.5]); ctx.beginPath(); ctx.arc(0, 0, lr, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      // anel médio
      ctx.rotate(-t * 0.1);
      ctx.lineWidth = 0.6; ctx.strokeStyle = 'rgba(147,197,253,' + (0.15 + m * 0.35) + ')';
      ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.arc(0, 0, lr * 0.74, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      // anel interno nítido
      ctx.rotate(t * 0.04);
      ctx.lineWidth = 0.8; ctx.strokeStyle = 'rgba(103,232,249,' + (0.2 + m * 0.5) + ')';
      ctx.beginPath(); ctx.arc(0, 0, lr * 0.5, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // ---- ponto focal: nasce difuso, vira nítido e brilhante ----
      var fr2 = lerp(unit * 0.16, 4.5, m);
      var fg = ctx.createRadialGradient(focusX, focusY, 0, focusX, focusY, fr2 * 3.4);
      fg.addColorStop(0, 'rgba(190,245,255,' + (0.5 + m * 0.5) + ')');
      fg.addColorStop(0.4, 'rgba(34,211,238,' + (0.3 + m * 0.4) + ')');
      fg.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.fillStyle = fg; ctx.beginPath(); ctx.arc(focusX, focusY, fr2 * 3.4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(230,250,255,' + (0.6 + m * 0.4) + ')';
      ctx.beginPath(); ctx.arc(focusX, focusY, Math.max(1.5, fr2 * (0.5 - m * 0.3) + 2 * m), 0, Math.PI * 2); ctx.fill();
    }

    // pausa o loop quando o hero sai da viewport (perf: canvas não pinta à toa)
    var visible = true;
    var io = window.IntersectionObserver ? new IntersectionObserver(function (en) {
      visible = en[0].isIntersecting;
      if (visible && !raf) loop();
    }) : null;
    if (io) io.observe(stage);

    function loop() {
      if (!visible) { raf = 0; return; }
      render(); raf = requestAnimationFrame(loop);
    }
    function onScroll() { render(); }

    resize();
    var ro = window.ResizeObserver ? new ResizeObserver(render) : null; if (ro) ro.observe(canvas);
    window.addEventListener('resize', render);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', render);
    poll = setInterval(function () { render(); if ((W > 1 && H > 1) || ++polls > 80) { clearInterval(poll); poll = 0; } }, 120);
    stage.__cxRender = render;
    loop();

    instances.push({ stage: stage, stop: function () {
      if (raf) cancelAnimationFrame(raf); if (poll) clearInterval(poll); if (ro) ro.disconnect(); if (io) io.disconnect();
      window.removeEventListener('resize', render); window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove); document.removeEventListener('visibilitychange', render);
    } });
  }

  function initAll() { document.querySelectorAll('[data-clearix-hero]').forEach(build); }
  function teardown() { instances.forEach(function (x) { x.stop(); if (x.stage) x.stage._cxInit = false; }); instances = []; }

  document.addEventListener('astro:before-swap', teardown);
  document.addEventListener('astro:page-load', initAll);
  if (document.readyState !== 'loading') initAll(); else document.addEventListener('DOMContentLoaded', initAll);
})();
