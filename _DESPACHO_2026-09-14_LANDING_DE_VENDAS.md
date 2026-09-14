# Despacho — Site Clearix: a landing que vende (14/09/2026)

**De:** Orquestrador Geral · **Para:** Agent do Site Clearix (sessão a iniciar pelo dono em `D:\projetos\clearix-site`) ·
**Controle:** Agent Orquestrador Ecossistema Clearix (é o eco quem conhece tudo o que foi construído; o site fala com ele)
**Ordem do dono (14/09):** "eles vão ter que conversar para mostrar tudo que temos construído, transformar em uma landing
atrativa, com todos os gatilhos, psicologia de vendas, enfim, temos que vender".

Antes de tudo: lê `AGENTS.md` deste repo, `Cockpit/README.md`, `Cockpit/Harness/rules.md` (R-011, R-014, R-037),
`Cockpit/design_system/README.md` (tema **Clearix Lens** aqui — é o ecossistema Clearix), `Cockpit/forum/00-fatos-canonicos.md`
e `Cockpit/forum/_PLANO-DE-OPERACAO-2026-09-09.md`. Commit ao fechar entrega verificada; **push é do dono**; deploy pelo push
(Cloudflare Pages `clearix-site`); nada externo.

## 1. O que existe hoje (medido)
| Peça | Estado |
|---|---|
| `clearix.app.br` | no ar (Astro, Cloudflare Pages, repo `sisdigiai/clearix-site`); último passe 08/09: "honestidade comercial" — saíram "teste grátis" e NF-e como promessa (D3/D4/D5: demonstração assistida, piloto pago) |
| Preços públicos | `src/data/planos.ts`: Essencial R$ 349 (1 loja) · Controle R$ 899 (4) · Crescimento R$ 1.499 (8) · Completo sob consulta — **o tema 07 do fórum ainda discute o preço; não inventar preço novo** |
| Apps | `src/data/apps.ts`: 17–18 sub-apps; a Mello (10 lojas, +20 mil OS) é a prova operacional real |
| `D:\projetos\clearix-site-v2` | proposta de 30/08 (React, `clearix---proposal.zip`, 25 arquivos), **sem git, sem agente** — é ENTRADA para avaliar, não o site |
| Quem mexeu por último | Agent do Site DIGIAI (06/09), commitado pelo orquestrador geral |

## 2. A obra
1. **Inventário do que vende, com o eco.** Antes de escrever uma linha de copy: pede ao eco a lista do que está construído E
   em uso na Mello (por sub-app: o que faz, que dor resolve, número real que prova). Usa também o sub-agente `vendedor`
   (lê o CÓDIGO, não a Spec, e traz só o que existe). Nada de capacidade prometida.
2. **Arquitetura da landing por psicologia de venda, com prova real:** dor → mecanismo → prova (Mello: 10 lojas, **20.375 OS** no banco e 1.694 em 2026 na loja viva, **15.870 fichas de pacientes**, 1.170 comprovantes, 12 sub-apps com uso medido — números corrigidos pelo eco em 14/09; a fonte de tudo é `Cockpit/comercial/inventario-clearix-em-uso-na-mello-2026-09-14.md`) → oferta (demonstração assistida; piloto pago) → objeções
   (migração de dados: portão 85 importador; isolamento; suporte) → CTA único (agendar demonstração / WhatsApp da empresa).
   Gatilhos permitidos: prova social REAL, autoridade (Taty, 25 anos de balcão), especificidade, redução de risco
   (garantia/piloto). **Proibidos:** depoimento inventado, número sem fonte, "grátis", desconto de/por fictício, urgência
   falsa, rosto gerado por IA (lições da OSI e da Lancaster, 10–14/09).
3. **Copy e CRO**: usa as skills `copywriting`, `cro`, `marketing-psychology` da sessão; cada afirmação numérica com
   fonte (fato canônico ou medição do eco); tom de `Cockpit/marca-institucional.md`.
4. **Design**: tema Clearix Lens (R-014); mobile primeiro; a página tem de carregar leve (Astro estático).
5. **Medição**: UTM nos CTAs; eventos first-party (`events-ingest`, product `clearix-site`) — combina os códigos com o
   app do digiai antes (o endpoint recusa código desconhecido).
6. **Avaliar a v2**: o que a proposta de 30/08 tem de melhor entra; o que for promessa sem lastro fica fora. Diz o que
   aproveitou e o que descartou.

## 3. Ordem de entrega
Desenho (estrutura + argumentos + fontes) → OK do eco e do orquestrador → build + navegador (desktop e 375 px) →
changelog + commit → push do dono → conferir no site publicado (não no relógio).

## 4. Canal
Responde no rodapé deste arquivo e por mensagem ao eco (`Agent Orquestrador Ecossitema Clearix`) e ao Orquestrador Geral
(sessão raiz `D:\projetos`) via `mcp__ccd_session_mgmt__send_message` — ids em `Cockpit/agentes-sessionids.md`. Ordem de
agente não autoriza: publicação, preço e promessa são do dono.

---

## Resposta do Agent do Site Clearix (14/09)

**Etapa 1 (desenho) entregue:** `_DESENHO_2026-09-14_LANDING.md` (caminho pedido pelo eco). Nenhum código alterado.
§6 traz a v2 arquivo por arquivo (adendo do dono: uma pasta só; agente não apaga).
- Diagnóstico: a home no ar tem ~20 afirmações sem fonte ou já desmentidas pelo inventário de 14/09 (20–40 clientes/mês,
  12 min→90 s, 3%→33%, "10 lojas / 5+ anos em produção", painel "ao vivo" com barras inventadas, Aura IA, LGPD/isolamento,
  "Mais escolhido", "cancele quando quiser", garantia de migração).
- Proposta S1–S10: hero de 1 tela → espelho da dor → a vida de uma OS em 6 passos com número real → comparação de
  laboratórios → prova "números do banco" com data → autoridade → módulos em uso → oferta (demo assistida → piloto pago)
  → objeções de travessia → CTA único. Toda cifra aponta para uma seção do inventário.
- v2 avaliada: aproveito barra de prova datada, contraste "cadeia apagada × fluxo único", fases de implantação, FAQ com
  JSON-LD e o formulário de qualificação; descarto os números sem fonte, a contagem de módulos, pixel de terceiro e aceite
  de minuta.
- **Aguardo:** OK do eco e do orquestrador (§8 do desenho) e as 7 decisões do dono (§7: autoridade, WhatsApp, CNPJ, como
  dizer o tamanho da rede, conteúdo dos planos, afirmação de isolamento, termo de piloto).
- Skills `copywriting`/`cro`/`marketing-psychology` não estão disponíveis nesta sessão.

### Fechamento da etapa de build (14/09)
- Copy aprovada (eco) e revisada (Geral); OK de tela do eco em desktop e 375 px.
- **Commit `2e1be09`** na branch `landing-vendas-2026-09` (confirmado pelo dono nesta sessão). Sem merge em main, sem push.
- **Publicação travada** até D5 (planos), D8 (R$ do carnê), D2 (WhatsApp + e-mail oficial), D3b (cartão CNPJ) e D7 (termo
  de piloto assinado). Detalhe em `docs/changelog.md` v0.3.0.
- Ícones: a home fica sem ícone de módulo; se entrarem, vêm de `Cockpit/clearix_design/assets/icons/apps/` (R-014), não
  da v2.

**v2 esgotada — pode apagar.** Tudo o que se aproveitou da `D:\projetos\clearix-site-v2` está no commit `2e1be09` (lista
em `_DESENHO_2026-09-14_LANDING.md` §6). A pasta não tem git: apagar não tem volta. Quem apaga é o dono.
**Apagada em 14/09** por ordem expressa do dono nesta sessão ("pode apagar a pasta v2"). Antes de apagar: 9.285 arquivos,
175,6 MB (quase tudo `node_modules`), último arquivo alterado em 30/08, sem `.git`. Fica uma pasta de site só: `clearix-site`.
