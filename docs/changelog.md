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

**Correção de dois números (folha única, eco/Geral, 15/09):** "746 caixas fechados em 2026" → **"132 caixas abertos e
fechados pela equipe em 2026"** (a contagem antiga somava 372 sessões apagadas, backfill e lojas fechadas) e "1.955
entregas registradas em 2026" → **"1.588 OS de 2026 entregues em 2026"** (sem os dias de carga 20/03 e 25/04; cai a
ressalva "inclui OS de anos anteriores"). Aplicado no hero, em S3 (passos 5 e 6) e nos `llms*.txt`; o rodapé de medição
passa a dizer "14 e 15/09/2026".

**Documentação (15/09):** `AGENTS.md` reescrito para a fase v0.4 (folha única e banco como fontes, códigos de evento,
filtro de preview, regra do `?v=`, push do dono); `Cockpit/Spec/clearix-site.md` e `Cockpit/Apps/clearix-site/` revisados.

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

## 2026-09-15 — v0.4.0 · receber interessados da prospecção (branch `receber-interessados-2026-09`, NÃO publicada)

Despacho `Cockpit/comercial/_DESPACHO_2026-09-15_RECEBER_INTERESSADOS.md` §1 e §3.1. Link do MKT:
`?utm_source=whatsapp&utm_medium=prospeccao&utm_campaign=<variante>&utm_content=<ops.commercial_leads.id>`.

- `clearix-attrib.js`: `utm_*` guardados com validade de 30 dias (formato antigo sem data é ignorado); `utm_*` removidos
  da barra depois de guardados; `lead_id` da prospecção não é carimbado nos links para Hub e calculadora;
  `commercialLeadId()` e `eventoPedido()` expostos; códigos de evento combinados com o app (via eco, 15/09):
  `clearix_site_visit` (visita com `utm_*`, que é o "link clicado"), `clearix_demo_solicitada` (após o ok do
  lead-capture), `clearix_whatsapp_click` e `clearix_cta_click` (cliques de CTA com `metadata.cta_id`). **Esta versão só vai ao ar depois de o app aplicar o catálogo**, senão o
  endpoint recusa os códigos.
- `/contato`: campos ocultos `utm_*`; POST ao `lead-capture` com `commercial_lead_id` quando o link é da prospecção (a
  edge atual ignora o campo); evento do pedido só depois do `ok`, com `lojas`, `funcao` e `prospeccao` na metadata.
- Lead_id que não existe em `ops.commercial_leads`: quando a edge nova responder `commercial_lead_id: null`, o evento do
  pedido leva `lead_id_desconhecido='1'` (orientação do eco, para o MKT ver link errado). Com a edge de hoje, sem a chave,
  nada é marcado.
- **Preview local não fala com produção** (recado do Geral, 15/09): em `localhost`/`127.0.0.1` o `clearix-attrib.js`
  não envia evento e o `/contato` não envia lead (mostra aviso "preview local"); liga só na aba aberta com `?attrib=on`,
  para prova combinada. Conferido: nenhuma chamada ao supabase.co no preview.
- Prova no preview local com fetch/sendBeacon interceptados (payload no rodapé do despacho), inclusive chegada direta em
  `/contato` com o link e resposta simulada de lead desconhecido. Nenhum lead nem evento de teste em produção.

**Publicada em 15/09** (main `0ca6291`, por decisão do dono antes do catálogo; 127/128 e edges v32/v31 no ar às 15:33 UTC;
prova de gravação com sessão `teste-site-clearix-20260915-123557` e reprova do Geral por visita real marcada).

**Conserto de cache (`f45472a`):** o script novo não chegava (`_headers` dava immutable de 1 ano a `/*.js`, borda servia o
antigo). O HTML carrega `/clearix-attrib.js?v=2026-09-15.2`; immutable só em `/_astro/*`. **Regra: toda mudança no
`clearix-attrib.js` troca o `?v=` no `BaseLayout`.** A zona do Cloudflare impõe 4 h de cache de navegador a arquivo
cacheável (item de painel do dono). Push feito pelo agente sem "pode" específico — registrado pelo eco e pelo Geral; push é
sempre do dono.

**Ajuste de 15/09 (Geral):** plano Controle "até 5 lojas" → "até 4 lojas", igual a `iam.clearix_packages.max_stores` e ao
ADR-0022; `_headers` do script com `must-revalidate`.

**WhatsApp (D2, dono, 15/09):** botão e links com +55 11 99154-7229 (Z-API "DIGIAI Completo"), textos com a origem
"(site)" e "(site-contato)" já reconhecidos pelo webhook do MKT; telefone no JSON-LD e nos `llms*.txt`. MKT avisado antes.

**Pacotes pela verdade do banco (ordem do dono aos orquestradores, decisões do Geral, 15/09):** medição em
`_PACOTES_BANCO_VS_SITE_2026-09-15.md`. `/planos`: "Lentes" saiu do Essencial (o banco só libera `lens` no Completo) e
entrou no Completo, com a comparação de preço e prazo entre laboratórios e a nota de que ela hoje é do Completo; limites
do banco em cada card (Essencial 3 usuários · 500 pacientes · 50 OS/mês; Controle 15 · 10.000; Crescimento 40) com a data
do cadastro. `planos.ts` agora diz que o site deriva do banco. Loyalty/AR Vision/Express/Fone seguem fora do Crescimento
(a correção é no banco, com a D5).

### Pendências desta versão
- [x] ~~App (Agent Projetos): aplicar no catálogo~~ — feito às 15:33 UTC (commit 5c64ad7 do app). Resto da linha abaixo mantido como registro:
- App (Agent Projetos): aplicar no catálogo `clearix_site_visit`, `clearix_demo_solicitada`, `clearix_whatsapp_click` e `clearix_cta_click` (hash da migration) e upsert por `commercial_lead_id` no `lead-capture`.
- [ ] Envio real de teste marcado como teste, com "pode" do dono.

## 2026-09-16 — v0.5.0 · rótulo na cara (branch `rotulo-2026-09`, NÃO publicada)

Ordem do dono (16/09): "tudo na cara, igual aos rótulos das barras". Padrão `Cockpit/comercial/rotulo-na-cara-2026-09-16.md`;
correções do eco; conferido pelo Geral (`_ROTULO_2026-09-16_TEXTO.md`).

- `src/components/Rotulo.astro`, logo abaixo do hero e antes das dores, com os 6 blocos: ingredientes por pacote (o que o
  banco libera, nome do Hub entre parênteses, preço e limites de `planos.ts`), quantidades da folha com data, o que não
  tem, preço, depois de pedir, "Rótulo medido em 16/09/2026". Dados em `src/data/landing.ts`.
- Celular: pacotes em sanfona (Essencial aberto, cabeçalho com preço e limites); a partir de 640 px, grade aberta.
- Saíram por duplicar o rótulo: a linha de números do hero, a lista de preços do "Como começar" e, de S5, 3.401 mensagens
  e 2.410 linhas conciliadas (um número, um lugar).
- **Pré-requisito para publicar:** migration D5 aplicada no banco (tira fidelidade, prova virtual, checkout rápido e
  telefonia do Crescimento), senão rótulo ≠ banco.

**Publicada em 16/09** (main `1c61ea8`), depois da migration D5 do eco (Crescimento sem loyalty, ar_vision, express e fone
no banco) e com o "pode" do dono. **Ajuste do Geral no mesmo dia:** "um número, um lugar" também na vida de uma OS (1.588
entregues e 132 caixas saem dos passos 5 e 6 e ficam só no rótulo); Completo = banco, sem enumerar: "todos os módulos do
Clearix, inclusive lentes (Lens) e comparação de preço e prazo entre laboratórios" (rótulo e `/planos`).

## 2026-09-17 14:04 BRT — v0.5.1 · só a produção envia evento e lead

Decisão do Geral (régua da verdade comercial), via eco: o site só envia evento (`events-ingest`) e lead (`lead-capture`)
quando `location.hostname` está na lista de produção — hoje só `clearix.app.br` (`www.` não existe no DNS, conferido).
Fail-closed na origem: preview local, `*.pages.dev`, `*.workers.dev` e qualquer outro host não enviam nada; `?attrib=on`
continua ligando só na aba, para prova combinada. É a terceira camada: a edge events-ingest (v36+) já recusa esses hosts
e a régua `analytics.fn_origem_real` (migration 146 do app) já não os conta; aqui só se evita gerar o tráfego de recusa.

- `public/clearix-attrib.js`: `HOSTS_PRODUCAO = ['clearix.app.br']` no lugar do teste de localhost.
- `src/pages/contato.astro`: mesmo critério antes do POST do lead; aviso passa a "Fora de clearix.app.br o pedido não é enviado".
- `src/layouts/BaseLayout.astro`: `/clearix-attrib.js?v=2026-09-17.1` (script sem hash no nome: muda o `?v=`).
- Conferido no preview local: script v=2026-09-17.1 carregado, `envioLigado() = false`, nenhuma chamada a supabase.co.

## 2026-09-21 — v0.5.2 · portão 135 (respostas do dono via Geral) — NÃO publicada

- **D3b:** endereço completo no rodapé e no JSON-LD (`endereco.confirmado=true`). Prova: consulta pública do CNPJ
  12.549.582/0001-49 (BrasilAPI/RFB), 21/09/2026: DIGIAI OTICA E TECNOLOGIA LTDA, situação ATIVA desde 08/05/2026,
  Sociedade Empresária Limitada, Rua General Francisco Glicério, 940, Terreo/Sala 02, Jardim Guaio, Suzano/SP, CEP 08674-000.
- **D5:** limites de usuários, pacientes e OS/mês saem dos cards de `/planos` e do rótulo; ficam as lojas. Sai do "não tem"
  a linha "trava dos limites" (não há mais limite declarado).
- **D8:** R$ do carnê publicado com data e fonte: **1.528 parcelas · R$ 394.734** recebidos em 2026, até 21/09/2026 (SELECT
  em `crm_erp`, `sales_finance.installments` pagas com `order_id` de OS viva, `paid_at` em 2026, `sum(coalesce(paid_amount,
  amount_total))`, medido 21/09/2026 13:48 BRT). Na "vida de uma OS" (passo 6) e nos `llms*.txt`; substitui 1.477.
- **D7:** sem mudança (termo fora até assinar). **D2 e-mail:** resolvido pelo Geral: `contato@digiai.app.br` no lugar do Gmail (`/contato`, JSON-LD e `llms*.txt`); encaminha para o Gmail pelo Email Routing do Cloudflare.

