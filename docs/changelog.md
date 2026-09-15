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
- [x] ~~"Garantia Clearix de migração sem trauma" (RiscoZero): validar com o comercial~~ — não se pratica; saiu da home em 2026-09-14 (ver abaixo).

## 2026-09-14 — v0.3.0 · landing de vendas com prova do banco (branch `landing-vendas-2026-09`, NÃO publicada)

Despacho `_DESPACHO_2026-09-14_LANDING_DE_VENDAS.md`. Desenho (`_DESENHO_2026-09-14_LANDING.md`) e copy
(`_COPY_2026-09-14_LANDING.md`) aprovados pelo orquestrador do eco Clearix e revisados pelo Orquestrador Geral
(`_REVISAO_GERAL_2026-09-14_COPY.md`). Fonte única de números: `Cockpit/comercial/inventario-clearix-em-uso-na-mello-2026-09-14.md`
+ correções medidas pelo eco. **Build travado** até o portão 135 (D5, D8) e as lacunas D2 (WhatsApp), D3b (endereço) e D7 (termo de piloto).

**Home (`/`) reescrita em S1–S10:** hero de 1 tela (sai o scroll-scrub de 300vh) → espelho da dor → a vida de uma OS em 6
passos com número real → comparação de laboratórios (preço e prazo) → números do banco com data → assinatura DIGIAI →
módulos em uso → fases + preço público → FAQ (mesma lista no JSON-LD) → CTA final com linha de prova. CTA único:
"Agendar 20 minutos de demonstração", com `data-cta` por posição.

**Saiu do site inteiro (sem fonte ou contra o inventário):** "20 a 40 clientes somem", "4h por dia", "12 min → 90 s",
"3% → 33% / recall com IA", "10 lojas / 5+ anos / desde 2020", painel "ao vivo" com barras inventadas, Aura, "laboratório
avisa sozinho", LGPD/isolamento (D6), garantia de migração, "cancele quando quiser", "no ar em semanas", "mais escolhido",
"preço de lançamento / garanta agora", "5 sistemas separados", "16 apps", "Anthropic · Claude", R$ 12,4 mi / R$ 19,5 mi
nos `llms*.txt`, Loyalty/AR Vision/Express/Fone/Import da vitrine, fundador no JSON-LD (D1).

**Dados novos:** `src/data/landing.ts` (números com fonte por linha, CTA, FAQ) e `src/data/contato.ts` (lacunas `null`:
WhatsApp some enquanto D2 não chega; endereço completo só com `endereco.confirmado`). `apps.ts` com 11 módulos em uso e
nomes de uso. `planos.ts` sem `destaque`.

**Outras páginas:** `/contato` com formulário de qualificação (função, sistema atual, principal problema em `notes`) e
bloco "o que acontece agora?"; `/ecossistema`, `/para-quem`, `/planos` sem as promessas acima; Header com faixa sem
número; Footer com razão social + CNPJ + cidade; `clearix-attrib.js` manda `metadata.cta_id`.

**Da `clearix-site-v2`:** padrões (cadeia apagada × fluxo único, fases, FAQ com JSON-LD, formulário de qualificação,
"módulos especializados, não puxadinhos"); nenhum código. Lista em `_DESENHO_…` §6.

**Verificado:** `npm run build` ok; home no navegador em 375 px (capturas; sem rolagem horizontal) e em 1280 px (captura
do hero + grades medidas 3/5/4/3 colunas; a captura do meio da página falhou no painel); `/contato` renderiza; console
sem erro; formulário **não** foi enviado (grava lead real); varredura do `dist/` sem os termos proibidos (restam só SLA/enterprise e
Loyalty/AR Vision/Express na composição de `/planos`, que esperam a D5). OK de tela do eco em desktop e 375 px.

### Pendências desta versão
- [x] ~~Contadores "7 / 11 / 16 apps" em `/planos`~~ — saíram (D3); nomes dos módulos no vocabulário da vitrine (eco, 14/09).
- [ ] D5 (dono): composição dos planos em `planos.ts` e `/planos` (4 × 5 lojas, Loyalty/AR Vision/Express, SLA/enterprise).
- [ ] D2: número de WhatsApp em `src/data/contato.ts` (com o código de origem já combinado com o MKT).
- [ ] D3b: `endereco.confirmado = true` depois do cartão CNPJ.
- [ ] D7: 3 linhas do termo de piloto em S8 e o complemento do FAQ "Quem me atende?".
- [ ] D8: valor em R$ do carnê (padrão: só contagem).
- [ ] Capturas do tenant sintético em `public/capturas/` para S4 (sem CPF e telefone).
- [x] ~~Add-ons sem lastro~~ — "E-commerce" e "Inclusão de laboratório parceiro" saíram da página; migração reescrita como serviço assistido e orçado (eco, 14/09). `iam.clearix_addons` intocada.
- [x] ~~Componentes sem uso~~ — HeroLente, LenteFundo, ProvaOperacao, Cuidado, RiscoZero, `prova.ts` e `public/clearix-lens-hero.js` removidos (OK do eco; ficam no histórico do git).
- [ ] Canal oficial de e-mail: `/contato` segue com `sisdigiai@gmail.com`; vai ao dono junto com D2 (e-mail do domínio).

## 2026-09-14 — v0.3.1 · verificação de promessas (publicada)

A v0.3.0 foi publicada em 14/09 por decisão do dono (main `27295bf`). Em seguida o dono pediu **verificar com o
orquestrador do eco Clearix todas as promessas no ar e corrigir o que fosse preciso**. Levantamento e veredito em
`_VERIFICACAO_PROMESSAS_2026-09-14.md`; fontes: inventário de 14/09, kit o-que-pode-prometer, termo de piloto v1 e
resposta do MKT.

**Corrigido (conflitavam com o termo de piloto ou com o MKT):**
- `/contato`: "a gente responde / te chama no WhatsApp" → "a gente entra em contato em horário comercial, pelo WhatsApp ou
  e-mail que você deixou" (não há WhatsApp da empresa ligado; o termo proíbe número pessoal).
- `/planos`: saíram "SLA 99,9%", "Suporte dedicado" e "Integrações enterprise" (Completo) e Loyalty, AR Vision e Express
  (Crescimento); saiu o complemento "Site institucional". Preço, lojas e o resto da composição seguem na D5.

**Reescrito (sustentado, mas prometia mais que o fato):** "A loja sabe antes do cliente perguntar" → "O atraso aparece na
tela antes de virar ligação do cliente"; migração → "orçada à parte, depois de examinarmos uma amostra do seu banco; os
dados são conferidos antes de a loja operar" (home, `/planos`, `llms-full.txt`); "Implantamos junto, do seu lado" →
"Implantamos com a gente acompanhando"; demonstração "com dados parecidos com os da sua ótica" → "com dados de demonstração".

**Conferência contra a folha única (`Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md`, dona: Orquestrador
Geral):** "WhatsApp da loja… com o histórico na ficha do cliente" → "o que passa pelo sistema fica na ficha do cliente"
(folha §2: o que a equipe responde pelo celular não entra na ficha), na home, em `/ecossistema` e no `llms-full.txt`.
Daqui em diante, número ou promessa só entra no site depois de entrar na folha.
