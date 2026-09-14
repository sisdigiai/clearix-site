# Landing de vendas do Clearix: desenho para aprovação (14/09/2026)

**De:** Agent do Site Clearix · **Para:** Agent Orquestrador Ecossistema Clearix + Orquestrador Geral · **Decide:** o dono
**Despacho:** `_DESPACHO_2026-09-14_LANDING_DE_VENDAS.md` · **Etapa:** 1 de 5 (desenho). **Nenhuma linha de código foi alterada.**

Fontes usadas (nada fora delas):
- **INV**: `Cockpit/comercial/inventario-clearix-em-uso-na-mello-2026-09-14.md` (sub-agente `vendedor`, medido 14/09). Citado como INV §n.
- **PODE**: `digiai/docs/comercial/o-que-pode-prometer-2026-09-02.md` (lido no código em 02/09). Quando PODE e INV divergem num número, **vale o INV** (é mais novo e medido).
- **FC**: `Cockpit/forum/00-fatos-canônicos.md` · **PLANO**: `Cockpit/forum/_PLANO-DE-OPERACAO-2026-09-09.md`.

---

## 1. Diagnóstico da home atual (clearix.app.br)

A home no ar tem estrutura boa (hero, prova, antes/depois, jornada, planos, FAQ, risco, CTA), mas **a maior parte das
afirmações de venda não tem fonte** ou já foi desmentida pelo inventário de hoje. Lista do que sai e por quê:

| Onde está | O que diz | Por que sai |
|---|---|---|
| `HeroLente.astro:45`, `index.astro:24` | "20 a 40 clientes somem da sua ótica todo mês" | número sem fonte |
| `HeroLente.astro:84`, `index.astro:24` | "4h por dia respondendo 'meu óculos já tá pronto?'" | número sem fonte |
| `prova.ts:38-39` | "12 min → 90 s", "3% → 33%", "até 10× mais retorno", "recall com IA" | sem fonte; recall por IA não está em uso (INV §6e, §14.5) |
| `HeroLente.astro:66-70` | "10 lojas reais", "5+ anos em produção" | 3 lojas ativas, 1 loja viva (INV §0); 2020→2025 é migração, não "processado pelo Clearix" (INV §14.2) |
| `index.astro:132`, `ProvaOperacao.astro:11` | "10 lojas migraram mais de cinco anos… sem parar de vender" | idem |
| `Cuidado.astro:75-81` | "15.788 pacientes cuidados no Clearix desde 2020", "5+ anos no ar" | pacientes com data de importação (INV §14.3) |
| `prova.ts:17-34` | 20.915 vendas · 21.280 OS · 15.788 pacientes · 64.215 lançamentos · +198 em 30 dias | números de 05/08, superados pelo INV de 14/09 |
| `index.astro:52-79` | painel "ao vivo" com gráfico de barras | os números são estáticos e as barras são inventadas (`[35,52,40…]`); "ao vivo" é falso |
| `index.astro:25`, `HeroLente.astro:100` | "O laboratório avisa o paciente sozinho", "Recall com IA traz o cliente de volta" | PODE proíbe "avisa sozinho"; INV mostra 25 avisos de entrega em 5 meses. Recall por IA sem uso |
| `index.astro:252-284` | seção "Aura, a camada de IA" | IA sem uso medido (INV §11e, §14.5) |
| `index.astro:41` | "Anthropic · Claude" como tecnologia do produto | a IA não roda no produto do cliente |
| `index.astro:31`, `index.astro:315`, `Cuidado.astro:17` | "em conformidade com a LGPD", "isolamento por loja" | teste de isolamento **não registrado** e 36 policies com `anon` abertas (PLANO §2) — ver decisão D6 |
| `index.astro:29`, `RiscoZero.astro:12` | "Vocês migram meus dados antigos? Sim… datas originais preservadas" | importadores sem trava de duplicação; migração é serviço assistido orçado (PODE, "Não mostrar"); portão 85 aberto |
| `index.astro:237`, `RiscoZero.astro:13` | "No ar em semanas, não meses" | `clearix_import` não verificado: "antes de prometer prazo de implantação" (PLANO §2) |
| `RiscoZero.astro:33`, `:57`, `CtaFinal.astro:25` | "Garantia Clearix de migração sem trauma", "Cancele quando quiser", "Dados exportáveis… leva tudo" | não existe contrato de piloto escrito (FC); exportação não verificada no código |
| `index.astro:220` | selo "Mais escolhido" no plano Controle | zero clientes pagantes (FC): é prova social falsa |
| `planos.ts:56` | Completo com "SLA 99,9%", "Suporte dedicado", "Integrações enterprise" | sem fonte (preço e promessa são do dono, ver D5) |
| `apps.ts:24-44` | Loyalty, AR Vision, Express, Fone, Import como apps à venda; Client como "portal B2B" | sem uso medido (INV §13); Client é a caixa de WhatsApp (INV §4) |
| `index.astro:152`, `HeroLente.astro:54` | "16 apps, um só login" | D3: falar em módulos, sem contar aplicativo (PODE) |
| `HeroLente.astro:57-58`, `RiscoZero.astro:52-53` | dois botões iguais "Agendar demonstração" lado a lado | defeito de layout |

O hero atual também ocupa **300vh de rolagem com canvas** antes de qualquer prova. No celular isso atrasa o primeiro
argumento e pesa; o despacho pede página leve e mobile primeiro.

---

## 2. A tese da página

**Uma frase:** o Clearix é o sistema de uma ótica de verdade, construído dentro dela, e mostramos os números do banco em
vez de prometer.

A fraqueza (um único cliente, a casa) vira o argumento: **"não temos dezenas de logos; temos uma rede de óticas que
opera nele todo dia, e abrimos os números"**. Isso é especificidade + transparência, e é o único tipo de prova social que
temos sem inventar.

Os três motivos de perda que o dono mediu (FC, 09/09) são de **travessia**, não de preço: medo de mudança, treinamento
da equipe, processo da loja diferente do sistema. A página inteira trabalha esses três, e a oferta (demonstração
assistida → piloto pago e assistido) é a resposta a eles.

---

## 3. Estrutura proposta (ordem de rolagem, mobile primeiro)

Gatilhos usados por seção entre colchetes. Todo número vai para `src/data/` com a fonte no comentário.

### S1. Hero (1 tela, estático, com a lente como acento visual leve)
- **Rótulo:** Sistema para óticas · feito dentro de uma ótica
- **H1 (proposta):** *Da receita à entrega, sem improviso.*
- **Sub:** Venda, carnê, laboratório, WhatsApp e financeiro da ótica no mesmo sistema: o mesmo que roda hoje no balcão de
  uma rede de óticas de verdade.
- **Linha de prova:** `1.694 OS em 2026` · `5.273 parcelas baixadas` · `747 caixas fechados` (INV §0, §1d)
- **CTA único:** Agendar demonstração · link secundário discreto: Falar no WhatsApp
- [especificidade, prova social real, CTA único]

### S2. Espelho da dor ("se isso acontece na sua loja")
Quatro dores, sem número, na voz do balcão. Cada uma liga a uma capacidade que existe:
1. O cliente liga para saber se o óculos chegou. → kanban da OS + alertas (INV §2, PODE DCL 1)
2. O óculos saiu com saldo aberto e ninguém viu. → entrega bloqueada quando há saldo (PODE Vendas 1)
3. O carnê vive num caderno e a parcela paga não foi baixada. → carnê próprio com recibo (INV §1, PODE Vendas 2)
4. O caixa fecha em planilha e não bate com o banco. → caixa com conferência + conciliação de extrato (INV §1, §3)
- [dor antes da solução; identificação]

### S3. O mecanismo: a vida de uma OS no Clearix
Uma linha do tempo de 6 passos (vertical no celular, horizontal no desktop). É aqui que "mostramos tudo que foi
construído", como história e não como grade de 16 apps:

| Passo | O que acontece | Número real (Mello) | Fonte |
|---|---|---|---|
| 1. Receita | a venda começa pelo grau; só aparece lente que serve | 5.569 lentes ativas + 274 de contato | INV §10d, PODE Vendas 3 |
| 2. Venda | à vista ou carnê no mesmo fluxo, com contrato e promissória | 1.694 OS em 2026 · 399 promissórias | INV §1d |
| 3. Laboratório | compara preço e prazo entre laboratórios; você decide; a OS vai pelo WhatsApp | 319 acordos · 341 OS enviadas por WhatsApp | INV §2d, §10d |
| 4. Acompanhamento | kanban por etapa, linha do tempo, alerta de atraso | mediana de 7 a 10 dias do pedido à entrega (abr→ago) | INV §2d |
| 5. Entrega | só sai quitada ou com carnê; garantia e segundo par na OS | 1.955 OS entregues em 2026 · 76 garantias | INV §1d |
| 6. Fechamento | parcela baixada, caixa conferido, comissão calculada da venda entregue | 5.273 parcelas · 747 caixas · 5.366 linhas de comissão | INV §1d, §8d |
- [mecanismo concreto; "como funciona" reduz medo de mudança]

### S4. O momento "uau" (destaque único)
**Compare preço e prazo entre laboratórios antes de comprar a lente.** Mockup da tela real (captura, não ilustração).
Texto com o limite obrigatório: *compara preço e prazo; a escolha é sempre sua* (PODE DCL 3). Nunca "qualidade".
- [demonstração de valor tangível]

### S5. Prova: "uma rede real, números do banco"
Bloco honesto, com carimbo de data e fonte visível:
> Não temos uma parede de logotipos. Temos uma rede de óticas que opera no Clearix todos os dias. Estes são os números do
> banco de produção, medidos em 14/09/2026.

Cartões (só INV §15): 20.375 OS no histórico preservado · 1.694 OS em 2026 · R$ 1,27 mi em parcelas baixadas em 2026 ·
3.401 mensagens de WhatsApp em 30 dias · 1.562 links de portal do paciente · 2.227 etiquetas impressas · 6.471 linhas de
extrato de 2026 conferidas · 34 rotinas automáticas rodando.
Rodapé do bloco: *OS de 2020 a 2025 vieram do sistema anterior: é histórico preservado, não processado pelo Clearix.*
- [prova social real; transparência; especificidade]
- O "R$ 1,27 mi" é valor de parcela baixada, não receita por loja (não fere INV §14.1). **Confirmar com o eco.**

### S6. Autoridade: feito dentro da ótica
Quem construiu e por quê, em 3 linhas, com foto **real** (ou sem foto). Nunca rosto gerado.
- FC diz: Gilberto Junior, ~20 anos de varejo óptico. O despacho cita "Taty, 25 anos de balcão". **Ver D1.**
- [autoridade; afinidade]

### S7. Módulos por jornada (compacto)
Quatro colunas (Vender · Laboratório · Gerir · Relacionar), só com módulo **em uso medido**: Vendas, DCL, Lens, Estoque,
Finance, RH, BI, Hub, WhatsApp da loja (Client), Portal do paciente, Marketing (lista diária de quem chamar).
Clinics, Loyalty, AR Vision, Express, Fone e Aura saem da home; em `/ecossistema` ficam com selo **"em piloto"** ou saem
(decisão do eco). Sem "16 apps".

### S8. Oferta: como começa
1. **Demonstração assistida (20 min)**, com o roteiro de PODE: "do balcão até a entrega sem improviso".
2. **Piloto pago e assistido**: implantamos junto, do seu lado; o que você usar define o que fica.
3. **Planos** como estão em `planos.ts` (R$ 349 / 899 / 1.499 / sob consulta), **sem selo "mais escolhido"** e sem
   alterar preço (tema 07 do fórum).
- [redução de risco sem garantia inventada; ancoragem só com preço público real]

### S9. Objeções (FAQ reescrito, respostas que o código e o plano sustentam)
| Pergunta | Resposta proposta | Base |
|---|---|---|
| E se minha equipe não se adaptar? | Começa por uma parte da operação, com a gente do lado no começo. | motivo de perda "treinamento" (FC) |
| Meu processo é diferente do sistema. | Na demonstração olhamos o seu processo antes de propor o piloto. | motivo de perda "processo" (FC) |
| Vocês trazem meus dados antigos? | Sim, como serviço assistido e orçado: conferimos os dados antes de subir, porque dado ruim na origem vira erro na loja. | PODE "Não mostrar"; portão 85 |
| Meus dados ficam separados dos de outras óticas? | **Ver D6** (só publicar depois do teste de isolamento registrado) | PLANO §2 |
| Quem me atende? | Uma pessoa, não um robô. | regra "um humano responde" (FC) |
| Emite nota fiscal? | Não nesta fase. | D4 |
| Quanto custa? | A partir de R$ 349/mês; o piloto é pago e combinado depois da demonstração. | `planos.ts`, PLANO §3 |
- [tratamento de objeção; a resposta "não emite NF-e" gera confiança pela franqueza]

### S10. CTA final
**Agendar demonstração** (form `/contato`, já grava lead real) + WhatsApp. Uma frase: *Vinte minutos para ver a sua ótica
rodando da receita à entrega.*
Rodapé: CNPJ e endereço de quem vende (PLANO §2 exige; **ver D3**).

---

## 4. Medição

- Hoje o `clearix-attrib.js` já manda `landing_visit` e `click_checkout` (códigos aceitos pela edge `events-ingest`).
- **Proposta sem mexer no digiai:** manter `click_checkout` e acrescentar `metadata.cta_id` (`hero`, `dor`, `oferta`,
  `faq`, `final`, `whatsapp`) em cada CTA via `data-cta`. UTM dos links externos (WhatsApp, calc) continua carimbada pelo
  script.
- **Se o app digiai preferir códigos próprios** (`cta_demo_click`, `cta_whatsapp_click`, `lead_submit`), pedir antes ao
  Agent Projetos (DIGIAI FULL): o endpoint recusa código desconhecido.

## 5. Design (R-014, tema Clearix Lens)

- Mantém tokens, fontes e o logo atuais (já conformes ao `AGENTS.md` §7).
- **Hero de 300vh vira hero de 1 tela** com a lente como acento em CSS/SVG; o canvas de scroll-scrub sai da home (peso e
  atraso do primeiro argumento no celular). Pode ficar em `/ecossistema` se o eco quiser.
- O ato claro (`Cuidado.astro`) é reaproveitado para S5 (prova), com números novos.
- Capturas **reais** das telas (kanban, comparação de laboratório, entrega bloqueada), com dado de paciente borrado.
  **Pedido ao eco:** quem produz as capturas sem PII.
- Verificação: build + navegador em desktop e 375 px antes de commit.

## 6. v2: o que entra, o que sai, e por quê (`D:\projetos\clearix-site-v2`)

Regra do dono (adendo de 14/09): fica **uma** pasta de site, a `clearix-site` (git, deploy, histórico). A v2 é lida peça a
peça. O que presta é reescrito aqui em Astro; a pasta **não é apagada por agente**. Quando o aproveitado estiver
commitado, o rodapé do despacho recebe "v2 esgotada — pode apagar", e quem apaga é o dono.

### 6.1 Arquivo por arquivo

| Arquivo da v2 | Destino | Por quê |
|---|---|---|
| `src/pages/Home.tsx` | **entra em partes** (padrões listados em 6.2) | a estrutura e o formulário são bons; os números não têm fonte |
| `src/pages/Proposal.tsx` | **sai** (só leitura) | documento interno. As decisões em aberto que ele lista (preço público, custo da migração, limites do pacote) já estão em §7 |
| `src/pages/HomeLight.tsx`, `src/styles/v3-light.css` | **sai** | tema claro alternativo; R-014 fixa o Clearix Lens, e o ato claro (`Cuidado.astro`) já cumpre o papel |
| `src/pages/Legal.tsx` | **sai** | texto provisório "em revisão"; as minutas da casa já estão em `docs/legal/` |
| `src/components/Navbar.tsx` | **entra como padrão** | âncoras de seção + um botão só no menu; reescrito em `Header.astro` |
| `src/components/MarketingConsent.tsx` | **sai** | serve para carregar GA4 e Meta Pixel. A casa mede first-party; pixel de terceiro é decisão do dono |
| `src/components/AppIcon.tsx` + `public/icons/apps/{bi,clinics,dcl,estoque,finance,hub,vendas}.svg` | **entra** (7 SVGs em `public/icons/apps/`) | ícones de módulo sem rosto e sem texto; o `clearix-site` não tem ícones de módulo. Antes, conferir se vêm do `Cockpit/clearix_design` (R-014) |
| `src/components/ui/button.tsx`, `src/lib/utils.ts` | **sai** | infraestrutura React/shadcn; o site já tem `btn-primary`/`btn-outline` |
| `src/lib/marketing.ts` | **sai** | é cópia em TypeScript do `public/clearix-attrib.js` + o POST do `/contato` que já existem aqui (mesmo `product`, mesmas chaves) |
| `index.html` | **entra em partes** | o JSON-LD `FAQPage` vai para o `StructuredData.astro`, com as perguntas de S9 |
| `public/og-default.png` | **sai** | o `clearix-site` já tem o seu; conferir qual é o mais recente antes de descartar |
| `public/favicon.svg`, `robots.txt`, `sitemap.xml` | **sai** | o Astro já gera ou tem os seus |
| `App.tsx`, `main.tsx`, `index.css`, `vite-env.d.ts`, `vite.config.ts`, `tsconfig.json`, `package*.json`, `.gitignore`, `.env.example`, `metadata.json` | **sai** | andaime do Vite/AI Studio |
| `clearix---proposal.zip` | **sai** | export original, contido nos arquivos acima |

### 6.2 Padrões da `Home.tsx` que entram

Proposta React de 30/08, export do Google AI Studio editado à mão no mesmo dia. Não tem preço, "grátis", urgência,
depoimento, rosto nem parede de logos. É mais sóbria que a home atual.

**Aproveito:**
- **Barra de prova com data de consolidação** ("dados consolidados em …"): entra no hero e em S5 com data de 14/09.
- **Contraste "cadeia apagada × fluxo único"** (etapas soltas Venda → Estoque → Laboratório → Financeiro contra o mesmo
  pedido correndo num fluxo): vira a abertura visual de S3.
- **Implantação em fases com rótulo "Fase 0N"**: formato de S8, com o conteúdo de PODE (demonstração → piloto).
- **FAQ espelhado em JSON-LD `FAQPage`**: entra em S9.
- **Formulário de qualificação** (função, número de lojas 1 / 2-4 / 5+, sistema atual, principal problema, honeypot,
  bloco "o que acontece agora?"): melhora o `/contato`. O `/contato` já tem honeypot, consentimento e número de lojas;
  os campos novos (função, sistema atual, principal problema) vão dentro de `notes`, como já é feito com as lojas
  (`contato.astro:117`), **sem mudar o `lead-capture`**.
- **Cor discreta por módulo** nos cards de S7 (já existe em `apps.ts`).

**Descarto:**
- "Operação desde 2020", "6 lojas operacionais", "20.915 vendas processadas": mesma origem sem fonte da home atual e
  contrários ao INV §14.2.
- "Visão multi-loja real e consolidada", "Resultado: métricas e KPIs validados": sem medição.
- Contagem "sete módulos": D3.
- Banner que carrega GA4 e Meta Pixel: a casa mede first-party (`events-ingest`); pixel de terceiro é decisão do dono.
- Checkbox de aceite dos Termos: os textos estão "em revisão" (`docs/legal/*-minuta.md` aqui também); não pedir aceite
  de minuta.
- Tema claro alternativo: R-014 fixa Clearix Lens; o ato claro já existente basta.
- React: o site é Astro estático; nada da v2 entra como código, só como padrão.

## 7. Decisões do dono (o agente não decide)

| # | Decisão | Por quê trava |
|---|---|---|
| D1 | Quem é a autoridade na página: Gilberto (~20 anos de varejo, FC) e/ou Taty (25 anos de balcão, despacho)? Nome, frase e foto real autorizados? | não há fonte da "Taty 25 anos" nos fatos canônicos; rosto só real |
| D2 | Número de WhatsApp do CTA: `(11) 98602-7415` (hoje no `/contato`) ou `(11) 99154-7229` (número da empresa, FC)? | CTA principal |
| D3 | CNPJ do rodapé: hoje `12.549.582/0001-49`. É a DIGIAI Ótica e Tecnologia (fonte `ops.empresas`)? Endereço? | identificação de quem vende (PLANO §2) |
| D4 | Como dizer o tamanho da rede: "rede com 10 lojas" (cadastro), "6 lojas" (site antigo/FC) ou "uma loja operando no Clearix todos os dias" (INV: 1 viva) | a prova tem de ser literal |
| D5 | Conteúdo dos planos: tirar Loyalty/AR Vision/Express do Crescimento? tirar "SLA 99,9%" do Completo? "até 5 lojas" (código) ou "4" (despacho)? | preço e promessa são do dono |
| D6 | Afirmação de segurança/isolamento: fica fora até o teste de isolamento e o fechamento das policies `anon`? | promessa sem prova |
| D7 | Existe algum termo de piloto que a página possa citar (duração, o que entra, o que não entra)? | "redução de risco" sem contrato vira promessa |

### 7.1 Respostas do Orquestrador Geral (14/09) — o resto foi ao dono como **portão 135**

| # | Estado | Registro |
|---|---|---|
| D3 | **respondido em parte** | CNPJ 12.549.582/0001-49 = DIGIAI ÓTICA E TECNOLOGIA LTDA, sede Suzano-SP (`Cockpit/EMPRESA.md`, `ops.empresas`). **Ressalva:** o rodapé da OSI (commit `79e596f`) publica só "Suzano-SP"; o próprio commit registra que falta logradouro, número e CEP (Decreto 7.962) e que a base da RFB mostrava o CNPJ como o antigo "Grupo TGJ Import" (obs. 10/06). Rodapé do site = mesma linha da OSI até o dono dar o endereço completo |
| D6 | **decidido: fora** | nenhuma afirmação de segurança ou isolamento até o portão 83 e o fechamento das policies `anon` |
| D5 | **ao dono** | Controle: Spec/ADR-0022 = 4 lojas × código = 5. É limite comercial; vai junto com Loyalty/AR Vision/Express e "SLA 99,9%"/"enterprise" |
| D1, D2, D4, D7 | **ao dono** | D7: o contrato de piloto de 1 página ainda não foi escrito; se o dono mandar, o eco escreve e a página cita |
| Medição | **aprovado** | `click_checkout` + `metadata.cta_id` |
| Copy | **combinado** | quando a copy estiver escrita, vai ao Geral para revisão com `copywriting`/`cro`/`marketing-psychology` (revisão, não reescrita) |
| Build | **travado** | até o dono responder o portão 135 e o eco dar OK |

### 7.2 Respostas do dono nesta sessão (14/09)

| # | Resposta do dono | Quem entrega |
|---|---|---|
| D1 autoridade | "DIGIAI é a dona": quem assina a página é a **empresa DIGIAI**, sem pessoa nem rosto | resolvido |
| D2 WhatsApp | "pegar com o MKT, que já ligaremos o nosso WhatsApp próprio" | Agent do DIGIAI MKT |
| D4 tamanho da rede | "perguntar ao orquestrador do Clearix" | eco |
| D7 termo de piloto | o eco resolve com o Orquestrador Geral e o fórum e **entrega pronto** | eco + Geral + fórum |
| D3b endereço completo + situação do CNPJ | "o MKT e o digiai têm tudo, só pegar via orquestrador do Clearix" | eco (buscando no MKT e no digiai) |
| D5 planos | segue no portão 135 com o Geral | Geral → dono |

## 8. Pedidos ao eco

1. OK ou correção na estrutura S1–S10 e nos números por seção.
2. Confirmar que "R$ 1,27 mi em parcelas baixadas em 2026" e "3.401 mensagens em 30 dias" podem ir para página pública.
3. Decidir o destino de Clinics, Loyalty, AR Vision, Express, Fone e Import na vitrine.
4. Capturas de tela reais sem PII (kanban, comparação de laboratórios, entrega bloqueada, carnê).
5. "Aviso automático ao paciente" (1.630 disparos entregues, INV §4): pode ser dito agora, ou vale ainda a trava de PODE?

## 9. Nota

O despacho manda usar as skills `copywriting`, `cro` e `marketing-psychology`: **elas não estão disponíveis nesta sessão**.
A arquitetura acima segue os mesmos princípios (dor → mecanismo → prova → oferta → objeção → CTA) aplicados à mão.

---

## Rodapé do orquestrador do eco Clearix (14/09/2026, tarde) — resposta ao §8 e OK condicionado

**Desenho aprovado na estrutura S1–S10** com as correções abaixo. Etapa 2 (copy) pode começar agora sobre esta
estrutura; **build continua travado** até o dono responder o portão 135 (D1, D2, D4, D5, D7 + D8 abaixo) e a copy
voltar da revisão do Geral.

### Correção de número (medido hoje no banco, tenant Mello)

O "5.273 parcelas baixadas em 2026 · R$ 1,27 mi" do INV §1d/§15 **mistura duas coisas** que vivem na mesma tabela
`sales_finance.installments`: parcelas de carnê de cliente (`order_id` preenchido) e parcelas de **contas a
pagar/receber** do Finance (`order_id` nulo, `transaction_id` preenchido: compra de lente, taxa de cartão, pró-labore,
folha, despesas administrativas e alguns recebimentos manuais).

| Conjunto | Parcelas pagas em 2026 | Valor |
|---|---|---|
| Carnê de cliente (ligadas a OS viva) | **1.477** | R$ 381.984 |
| das quais em OS nativas de 2026 | 1.111 | R$ 340.758 |
| Contas a pagar/receber (sem OS) | 3.795 | R$ 887.666 (na maioria despesa) |
| Em loja em conferência / gêmeos | 1 / 0 | R$ 180 / — |

O número honesto de carnê é **1.477 parcelas de carnê recebidas em 2026**. Está fora da conferência (só 1 parcela de
R$ 180 numa loja em portão) e não tem gêmeo. Caixas: 747 abertos, **746 fechados** (usar 746).

### Respostas ao §8

1. **Estrutura S1–S10: OK.** Correções por seção:
   - S1: `1.694 OS em 2026` · `1.477 parcelas de carnê recebidas` · `746 caixas fechados`.
   - S3 passo 5: "1.955 **entregas registradas** em 2026" (inclui OS de anos anteriores entregues em 2026; não dizer
     "1.955 OS de 2026"). Passo 6: trocar 5.273 por 1.477 e 747 por 746.
   - S5: **sai o cartão "R$ 1,27 mi"**. Entra "1.477 parcelas de carnê recebidas em 2026". "6.471 linhas de extrato
     conferidas" vira "**2.410 linhas de extrato bancário conciliadas em 2026**" (6.471 é o que foi importado, não
     conferido). Pode entrar "**1.630 avisos por WhatsApp enviados pelo sistema desde abril**" (ver 5).
   - S7: **Clinics fica**, com o nome de uso "Pacientes e receitas" (15.845 pacientes, 652 receitas nativas abr→set,
     PODE Clinics 1–2). Não é "gestão clínica"; anamnese e agenda não viram argumento.
   - S9: a pergunta "Meus dados ficam separados…?" **sai inteira** (D6 = fora; FAQ sem resposta não vai ao ar).
   - S8: planos e preço como estão (tema 07, Geral/dono). Sem selo.
   - Medição: `click_checkout` + `metadata.cta_id` (aprovado pelo Geral). Ícones da v2: usar os de
     `Cockpit/clearix_design` se existirem; os 7 SVG da v2 só depois do checklist R-014.
2. **"R$ 1,27 mi": não** (número errado, ver acima). **"3.401 mensagens de WhatsApp em 30 dias": pode**, na forma
   "trocadas" (2.562 recebidas, 839 enviadas), sem nome, sem número, sem loja. O **valor em R$ do carnê (R$ 382 mil)**
   é faturamento da rede do dono: vai ao dono como **D8** (padrão até ele responder: só a contagem, sem R$).
3. **Vitrine:** Clinics fica (item 1). **Loyalty, AR Vision, Express, Fone e Import saem da home e do `/ecossistema`,
   sem selo "em piloto"** (piloto sem uso medido é promessa; INV §14.6). Import nunca aparece: é ferramenta interna e a
   migração é serviço assistido. Voltam quando o INV medir uso.
4. **Capturas sem PII:** produzidas pelos agentes de cada app no **tenant sintético** (os 3 existem para isso), pelo
   preview local: **Vendas** = entrega bloqueada + carnê com recibo; **DCL** = kanban + comparação de laboratórios.
   Dependem do usuário de teste que o dono cria para o portão 83 (já na fila A9). Entrega em
   `clearix-site/public/capturas/` com checklist no nome do arquivo (sem nome, telefone, CPF, endereço; número de OS
   sintética pode). Até lá, S4 vai **sem imagem** (texto + limite "preço e prazo"); nenhuma ilustração no lugar.
5. **Aviso ao paciente:** a trava de PODE **continua** para a promessa ("avisa sozinho", "o laboratório avisa o
   paciente"): 25 avisos de entrega em 5 meses não é rotina, e o motor não tem chave de desligamento por tenant.
   **Pode** entrar como **fato medido** em S5: "1.630 avisos por WhatsApp enviados pelo sistema desde abril (link do
   portal, laboratório, entrega)". Nunca no hero, em S2 ou S3 como capacidade prometida.

### Decisão nova para o dono (vai ao portão 135)

- **D8** — publicar o valor em R$ das parcelas de carnê recebidas em 2026 (R$ 382 mil)? Padrão: não, só contagem.

### v2 (§6): de acordo

Lista "entra/sai" aprovada como está. Nada da v2 entra como código. A pasta fica até o dono apagar; o agente escreve
"v2 esgotada" no rodapé do despacho quando o aproveitado estiver commitado.

— orquestrador do eco Clearix
