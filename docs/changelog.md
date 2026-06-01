# Changelog — clearix-site

## 2026-06-01 — v0.1.0 · nascimento do site

Site dedicado do ecossistema Clearix criado do zero (Astro 5 + Tailwind 3), espelhando a stack do `digiai-site` com identidade própria da marca Clearix.

**Páginas:**
- `/` — home: hero, prova rápida, antes/depois, operação real, ecossistema por jornada, planos (preview), Aura (IA), FAQ, CTA
- `/ecossistema` — os 16 apps de cliente agrupados por jornada (vender/atender/gerir/crescer)
- `/planos` — 4 tiers + demo + add-ons
- `/para-quem` — 5 personas (ótica solo → franquia)
- `/contato` — formulário de demo + canais diretos

**Dados:** apps, planos e números de prova centralizados em `src/data/` (fonte: banco Clearix + clearix_pitch).

**Design:** tema Clearix (dark editorial cyan/navy), logo mark canônico inline, classes `lux`/HUD reaproveitadas da família de marcas DIGIAI.

### Pendências conhecidas
- [ ] `public/og-default.png` — imagem Open Graph (1200×630) ainda não gerada; meta aponta para ela.
- [ ] Endpoint real do formulário de contato (hoje usa atributo Netlify Forms; validar no provedor de deploy escolhido).
- [ ] Confirmar domínio `clearix.app.br` no DNS e no provedor.
- [ ] Apontar o `/clearix` do `digiai-site` para este novo site (teaser → site dedicado).
- [ ] `docs/migrations/` não se aplica (app sem banco próprio).
