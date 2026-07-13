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

## 2026-06-01 — v0.2.0 · brilhar + paridade de deploy

Polimento e preparação para publicação no mesmo nível do `digiai-site`.

**Brilhar:**
- Seção "painel ao vivo" no hero (visualização do produto com sparkline + números reais).
- Faixa-manifesto ("Clareza com profundidade · Transformando informação em decisão").
- OG image branded (`public/og-default.png`, 1200×630) gerada com o mark Clearix.

**Paridade de deploy (Cloudflare Pages, igual digiai-site):**
- `robots.txt` com allowlist completa de crawlers de LLM + sitemap.
- `public/_headers` (segurança + cache + content-type dos llms).
- `llms-full.txt` (conteúdo completo em markdown para LLMs).
- IndexNow: chave `8f4004a3…txt` + `.github/workflows/indexnow.yml`.
- Links de descoberta LLM no `<head>`.
- README com guia de deploy Cloudflare + DNS `clearix.app.br`.

## 2026-07-13 — v0.4.0 · formulário liga no banco digiai (leads reais)

**O form de contato agora grava lead de verdade** — fim do atributo Netlify Forms
que não funcionava no Cloudflare (lead caía no vazio).

- Pipeline: `/contato` → fetch POST → edge fn **`lead-capture`** (projeto digiai
  `hswyopqvnolqpmprqvzh`, keyless) → RPC `fn_capture_landing_lead` → **`marketing.landing_leads`**
  com `product='clearix'`. Intenções moram no app da DIGIAI (decisão do dono, 2026-07-13).
- Campos extras do Clearix (`lojas` + `mensagem`) vão em `notes` (migration 047 no digiai
  adicionou `p_notes` à RPC). UTM da URL + `source_url` + consent LGPD registrados.
- Honeypot `website`, estados de sucesso/erro na UI (erro oferece o WhatsApp), telefone
  normalizado E.164 na RPC. Testado de ponta a ponta (form local → linha no banco → limpo).
- `AGENTS.md` e `docs/README.md`: encoding corrompido (mojibake de outra sessão) consertado,
  preservando o roteamento documental para `Cockpit/Apps/clearix-site/`.
- `export/` (handoff de agente) adicionado ao `.gitignore`.

## 2026-07-11 — v0.3.2 · 2ª zona lente-fundo (sutil) no fechamento

`LenteFundo` ganha prop `sutil` (intensidades via CSS vars: `--dim-max`, `--lente-max`,
`--halo-max`, `--lente-tam`). Segunda zona envolve **Planos → FAQ** em voz baixa (véu 0.45,
lente 105vh) — o site fecha com o mesmo vocabulário do 1º ato sem competir com ele.
Fundo do "Como começar" translúcido (`bg-ink-deep/50`); cards continuam sólidos (legibilidade).

## 2026-07-11 — v0.3.1 · fundo-lente com escurecimento + correção do scrub

**LenteFundo (`src/components/LenteFundo.astro`)** — zona do "Veja rodando" à Operação Real
ganha fundo-lente scroll-driven (CSS puro, zero JS): véu escurece ao rolar (profundidade)
enquanto a lente **se forma** (invertido a pedido do dono: rolar = focar), com **rim light**
anular acima do véu (contorno ganha presença no escuro — resolve lente sumida no fundo preto).
Termina no auge exatamente onde a página abre no ato claro (Cuidado): a lente deixa a luz passar.
Fallback estático sem `animation-timeline`; `reduced-motion` sem animação.

**Correções:**
- Hero: janela de crossfade dos capítulos 0.4 → 0.26 no driver — eliminada a dupla
  exposição de texto que quebrava a leitura em ~30% do scrub.
- Dica "role para focar" esvai conforme o foco fecha (`data-hero-hint`).
- `global.css`: comentário-guarda no `overflow-x: hidden` do body (não mover para o html —
  Chromium ≥148 mata a rolagem; não trocar por clip — não propaga pro viewport).

## 2026-07-10 — v0.3.0 · hero-lente 3D + Precisão e Cuidado + conversão

Home reencenada como experiência cinematográfica da marca (a lente Clearix focando) + gatilhos de compra amplificados. Pacote iniciado pelo claude-designer (`export/clearix-site/`, só o driver JS veio; componentes criados nesta sessão).

**Hero-lente (scroll-scrub):**
- `public/clearix-lens-hero.js` — driver canvas 2D: luz dispersa → converge pela lente até foco nítido; HUD "FOCO 00→100%"; 3 capítulos cruzando (dor → problema → virada); régua de progresso. Pausa o loop fora da viewport (IntersectionObserver, perf).
- `src/components/HeroLente.astro` — 300vh sticky, capítulos, prova social ancorada; `prefers-reduced-motion` colapsa para 1 viewport estático.

**Linguagem 3D no site inteiro (CSS scroll-driven, sem JS):**
- `.focus3d` (tilt + desfoque→nítido) em grids/cards de todas as páginas; `.focus3d-soft` (foco sem tilt) em faixas de texto; `.lens-card`/`.unfold3d` — vitrines que desdobram em 3D no clique (Ecossistema por jornada, FAQ), conteúdo sempre no HTML (SEO).

**Precisão e Cuidado (conceito claude-designer, mock em 01-brand):**
- `src/components/Cuidado.astro` — único ato claro da página escura (papel frio nos tokens da casa): "A precisão de um sistema. O cuidado de quem entende de saúde." + 19.737 pacientes (número real, prova.ts) + LGPD/continuidade/confiança. Hero claro do mock NÃO adotado (quebraria o design system Clearix Lens — vidro escuro canônico).

**Conversão:**
- `src/components/RiscoZero.astro` — ataca objeção nº 1 (medo de migrar): 30 dias grátis, migração guiada, dados exportáveis, no ar em semanas + selo de garantia.
- Faixa do topo reposicionada (Header): autoridade primeiro (10 lojas · +20 mil vendas · 5+ anos), oferta de lançamento como gancho discreto — fim do fundo cyan sólido ("azul berrante").
- CTA primário com `cta-pulse` em 3 pontos.

### Pendências conhecidas
- [ ] Endpoint real do formulário de contato (hoje usa atributo Netlify Forms; no Cloudflare Pages usar Pages Functions ou webhook).
- [ ] Confirmar domínio `clearix.app.br` no DNS (Registro.br) e conectar no Cloudflare Pages.
- [x] ~~Criar repo GitHub `mellooticas/clearix_site` e fazer o push inicial~~ — produção mudou: o Cloudflare observa **`sisdigiai/clearix-site`** (verificado 2026-07-11); `mellooticas/clearix_site` é só espelho.
- [ ] Apontar o `/clearix` do `digiai-site` para este novo site (teaser → site dedicado).
- [ ] Verificação Bing/Google (meta tags) quando os tokens existirem.
- [ ] `docs/migrations/` não se aplica (app sem banco próprio).
- [x] ~~Depoimento da home ainda é MOCK~~ — reescrito como case factual (2026-07-11): sem citação inventada, só fatos verificáveis + números de `prova.ts`. Depoimento com nome/cargo pode substituir no futuro.
- [ ] "Garantia Clearix de migração sem trauma" (RiscoZero): validar com o comercial que a promessa (30 dias + dados exportáveis) é o que se pratica.
