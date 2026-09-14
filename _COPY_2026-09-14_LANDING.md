# Copy da landing de vendas do Clearix: etapa 2 (14/09/2026)

**De:** Agent do Site Clearix · **Para:** eco (controle), que repassa ao Geral para revisão com
`copywriting` / `cro` / `marketing-psychology` (revisão, não reescrita).
**Base:** estrutura S1–S10 aprovada no rodapé do eco em `_DESENHO_2026-09-14_LANDING.md`, com as correções dele.
**Números:** todos em `src/data/landing.ts`, com a fonte em cada linha. Esta copy não tem número fora desse arquivo.
**Estado:** nenhuma página alterada; build travado até o portão 135 (D5, D8) e as lacunas D2/D3b/D7.
**Revisão:** substância aprovada pelo eco; estilo revisado pelo Geral (`_REVISAO_GERAL_2026-09-14_COPY.md`). As 3 respostas e
os 7 ajustes do Geral **já estão aplicados abaixo** (marcados "Geral n"). Única divergência registrada: ajuste 4 (ver S9).

Convenções:
- `{{D2 WHATSAPP}}`, `{{D4 REDE}}`, `{{D7 PILOTO}}`, `{{D3b RODAPÉ}}` = lacunas que esperam resposta (dono/eco/MKT).
- Quem fala é **a DIGIAI / o Clearix**, nunca uma pessoa (D1 + COPY_BRIEFING §1).
- H1 e títulos marcados **[aprovada]** saem da lista do COPY_BRIEFING §4; os marcados **[nova]** precisam de OK.

---

## S1. Hero

**Rótulo:** Sistema para óticas · feito dentro de uma ótica

**H1 [aprovada, COPY_BRIEFING §4]:** De orçamento a entrega, sem perder ninguém no caminho.
- "Da receita à entrega, sem improviso" saiu (Geral 1): usa o slogan do OSI e confunde os dois produtos. Só em A/B futuro.

**Sub:** Venda, carnê, laboratório, WhatsApp e financeiro da ótica no mesmo sistema. O mesmo que roda hoje no balcão de
uma ótica de verdade. *(D4, forma curta autorizada pelo eco)*

**Linha de prova** (mono, com data):
`1.694 OS em 2026` · `1.477 parcelas de carnê recebidas` · `746 caixas fechados` — *números do banco, 14/09/2026*

**CTA:** [Agendar 20 minutos de demonstração] *(Geral ajuste 2; mesmo texto em todos os botões)*
**Link secundário (texto, não botão):** ou fale com a gente no WhatsApp → `{{D2 WHATSAPP}}`

Gatilhos: especificidade (três números exatos com data), prova real, um único botão.

---

## S2. Espelho da dor

**Rótulo:** Se isso acontece na sua loja
**Título [nova]:** O problema não é a equipe. É o dado espalhado.

| Dor (voz do balcão) | Resposta curta |
|---|---|
| O cliente liga para perguntar se o óculos chegou, e ninguém sabe responder sem ligar para o laboratório. | Cada OS aparece por etapa, com alerta quando atrasa. |
| O óculos saiu com saldo em aberto e ninguém percebeu. | A entrega não passa enquanto houver saldo sem carnê. |
| O carnê mora num caderno e a parcela paga não foi baixada. | Carnê próprio da loja, com baixa e recibo na hora. |
| O caixa fecha em planilha, não bate com o banco, e o dono só descobre no fim do mês. | Caixa conferido, extrato conciliado e o painel do dono mostrando o dia. |

Base: PODE DCL 1, Vendas 1 e 2, BI 1; INV §1, §2, §3, §11. Nenhum número nesta seção, de propósito.
Linha 4 fecha na dor do comprador, o dono (Geral ajuste 3).

---

## S3. O mecanismo: a vida de uma OS

**Rótulo:** Como funciona
**Título [nova]:** Uma OS, do grau à comissão, sem redigitar nada.
**Abertura (padrão da v2, cadeia apagada × fluxo único):**
- Linha apagada: *Venda no balcão → baixa no estoque → pedido ao laboratório → lançamento no financeiro* — cada um num lugar.
- Linha acesa: *o mesmo pedido, correndo num fluxo só.*

| # | Passo | Texto | Números (`jornadaOS`) |
|---|---|---|---|
| 01 | Receita | A venda começa pelo grau. O sistema filtra as lentes que servem para aquela receita e barra combinação impossível antes de fechar. | 5.569 lentes oftálmicas ativas · 274 de contato |
| 02 | Venda | À vista ou no carnê, no mesmo fluxo, com contrato e promissória gerados na hora. | 1.694 OS em 2026 · 399 promissórias |
| 03 | Laboratório | Antes de comprar a lente, veja preço e prazo lado a lado entre os laboratórios. A escolha é sua. A OS segue para o laboratório pelo WhatsApp. | 319 acordos de laboratório · 341 OS enviadas por WhatsApp |
| 04 | Acompanhamento | Kanban por etapa, linha do tempo de cada pedido e alerta de atraso. A loja sabe antes do cliente perguntar. | Mediana de 7 a 10 dias do pedido à entrega (abr→ago/2026) |
| 05 | Entrega | Só sai quitada ou com carnê. Garantia e segundo par ficam ligados à OS original. | 1.955 entregas registradas em 2026 · 76 garantias |
| 06 | Fechamento | Parcela baixada, caixa conferido e comissão calculada da venda entregue, não de planilha. | 1.477 parcelas de carnê recebidas · 746 caixas fechados · 5.366 linhas de comissão |

Travas respeitadas: nada de "avisa o paciente sozinho" (ECO item 5); "a OS segue para o laboratório pelo WhatsApp" é o
envio ao laboratório (INV §2b, 341 enviadas), não aviso ao paciente. Passo 04 diz "a loja sabe", não "o cliente é
avisado".

---

## S4. O momento de valor

**Rótulo:** O que a gente mostra primeiro na demonstração
**Título [nova]:** A mesma lente, em laboratórios diferentes. Veja onde sai melhor antes de comprar.
**Texto:** Para a lente vendida, o Clearix lista as equivalentes nos laboratórios com que você tem acordo, com o custo e o
prazo de cada um. **Compara preço e prazo. Quem decide é você.**
**Nota pequena:** Não avaliamos qualidade de laboratório; esse julgamento continua sendo seu.
**Imagem:** nenhuma até as capturas do tenant sintético chegarem em `public/capturas/` (ECO item 4). Sem ilustração.

Base: PODE DCL 3 (limite obrigatório), INV §10.

---

## S5. Prova: números do banco

**Rótulo:** Operação real · medido em 14/09/2026
**Título:** Números do banco, não de pesquisa. *(Geral 2)*
**Texto:** Em vez de logotipos, mostramos o que o sistema registrou numa ótica real, com data.

Cartões (`provaBanco`, 5, nenhum repete o hero — Geral ajuste 1):
1. **3.401** mensagens de WhatsApp trocadas em 30 dias
2. **1.630** avisos por WhatsApp enviados pelo sistema desde abril
3. **1.562** links do portal do paciente emitidos
4. **2.410** linhas de extrato bancário conciliadas em 2026
5. **20.375** OS no histórico preservado

Fora de S5: 1.694 OS e 1.477 parcelas (já no hero), 2.227 etiquetas (fraco).

**Texto de contexto (D4, frase autorizada pelo eco; o Geral pode ajustar a redação, não a substância):**
Uma rede de óticas da Grande São Paulo opera no Clearix: uma loja vende nele todos os dias e o histórico de outras cinco
lojas da mesma rede está preservado no mesmo banco.

**Rodapé do bloco (obrigatório):** OS de 2020 a 2025 vieram do sistema anterior: é histórico preservado, não processado
pelo Clearix. Números do banco de produção, sem dado pessoal, medidos em 14/09/2026.

Proibido nesta página (D4): "10 lojas", "6 lojas ativas", "5+ anos", "desde 2020".

Gatilho: transparência (o rodapé que expõe o limite aumenta a credibilidade do resto) + especificidade.

---

## S6. Quem está por trás

**Rótulo:** Feito por quem opera ótica
**Título [nova]:** Construído dentro do balcão, não numa sala de reunião.
**Texto:** O Clearix é da DIGIAI Ótica e Tecnologia. Cada tela nasceu de um problema real de balcão: OS atrasada, carnê
perdido, caixa que não fecha. Primeiro resolvemos na nossa operação; depois oferecemos a outras óticas.
**Assinatura:** DIGIAI · **Sem foto, sem nome de pessoa** (D1 + COPY_BRIEFING §1).
Autorizado pelo eco (14/09): a rede é da casa, e o PODE já registra "é um grupo, e é a nossa casa". Vai junto com a frase
D4 de S5.

---

## S7. Módulos em uso

**Rótulo:** O que vem no sistema
**Título [nova]:** Tudo o que a loja usa num dia, com um login só.
**Texto:** Um acesso abre os módulos que cada pessoa pode ver, por loja e por papel.

| Grupo | Módulo (nome de uso) | Uma linha |
|---|---|---|
| Vender | Vendas | Orçamento, venda, carnê, caixa, entrega e garantia. |
| Vender | Pacientes e receitas | Ficha do paciente e receita que não se perde. 652 receitas registradas no balcão desde abril. |
| Laboratório | Laboratório (DCL) | Kanban da OS, montagem, retrabalho e alerta de atraso. |
| Laboratório | Lentes (Lens) | Catálogo por fornecedor, a mesma lente em vários laboratórios, preço por acordo. |
| Gerir | Financeiro | Contas a pagar e receber, extrato conciliado, plano de contas, DRE. |
| Gerir | Estoque | Armações e acessórios, movimentação, transferência e etiqueta com código de barras. |
| Gerir | Equipe (RH) | Ponto com localização, escalas e comissão calculada da venda entregue. |
| Gerir | Painel do dono (BI) | Vendas, entregas, recebimentos e metas por vendedor. |
| Relacionar | WhatsApp da loja | Várias pessoas atendendo o mesmo número, com o histórico na ficha do cliente. |
| Relacionar | Portal do paciente | Link sem senha para o cliente ver pedido, receita e parcelas. |
| Relacionar | Quem chamar hoje | Lista diária de clientes para retomar contato, sem repetir quem já foi chamado. |

Fora da home e do `/ecossistema` (ECO item 3): Loyalty, AR Vision, Express, Fone, Import, Aura.
Sem contagem de módulos (D3). Sem "Marketing com IA", "automação", "disparo em massa" (INV §14.5).
O total de fichas fica fora da linha de Pacientes (eco, 14/09). Se algum dia entrar, é 15.870 (INV), só em S5, como
"fichas no histórico preservado".

---

## S8. Oferta: como começa

**Rótulo:** Como começar
**Título [nova]:** Primeiro você vê. Depois decide.

| Fase | Título | Texto |
|---|---|---|
| Fase 01 | Demonstração assistida | Vinte minutos, com a gente na tela: da receita à entrega, no fluxo que a sua loja já tem. |
| Fase 02 | Olhar o seu processo | Antes de propor qualquer coisa, entendemos como a sua loja trabalha hoje. |
| Fase 03 | Piloto pago e assistido | Implantamos junto, do seu lado. O que você usar define o que fica. |

D7: a minuta está em `Cockpit/comercial/termo-de-piloto-clearix-v1.md` e segue o caminho Geral → fórum → dono → contador.
**A página não cita o termo até ele voltar assinado.** Quando voltar, entram 3 linhas: o que entra (fluxo definido no
diagnóstico, módulos em uso), o que não entra (fiscal/NF-e, customização) e como termina (sem conversão automática,
aceite expresso, sem multa).

**Planos** (bloco curto, dados de `planos.ts` sem alteração, sem selo):
Título: *Preço público.* · Essencial R$ 349/mês · Controle R$ 899/mês · Crescimento R$ 1.499/mês ·
Completo sob consulta · link: Ver o que cada plano inclui →
- Conteúdo dos planos (lojas, Loyalty/AR Vision/Express, SLA) espera D5. Até lá a home mostra só nome e preço.
- "sem letra miúda" só entra no título depois que D5 tirar "SLA 99,9%" e "enterprise" do `/planos` (eco, 14/09).

**CTA:** [Agendar 20 minutos de demonstração]

---

## S9. Perguntas

**Título:** Perguntas de quem está pensando em trocar de sistema

1. **E se a minha equipe não se adaptar?**
   A implantação começa por uma parte da operação, com a gente acompanhando a equipe no começo. Ninguém recebe um sistema
   inteiro de uma vez.
2. **O processo da minha loja é diferente.**
   Por isso a demonstração vem antes da proposta: olhamos como a sua loja trabalha e mostramos onde o Clearix encaixa, e
   onde não encaixa.
3. **Vocês trazem os dados do meu sistema antigo?**
   Sim, como serviço assistido e orçado à parte. Conferimos os dados antes de subir, porque dado errado na origem vira erro
   no balcão.
4. **Funciona para mais de uma loja?** *(nova, Geral ajuste 5)*
   Sim. Uma rede de óticas da Grande São Paulo opera no Clearix: uma loja vende nele todos os dias e o histórico de outras
   cinco lojas da mesma rede está preservado no mesmo banco. Cada pessoa vê o que pode, por loja e por papel.
5. **Quem me atende quando eu precisar?**
   Uma pessoa da DIGIAI, em horário comercial.
6. **O Clearix emite nota fiscal?**
   Não nesta fase. Preferimos dizer isso agora do que prometer e não entregar.
7. **Quanto custa?**
   Os planos começam em R$ 349 por mês, sem período grátis. O piloto é pago e combinado depois da demonstração.
   *(Geral ajuste 6)*

Fora (ECO item 1): a pergunta sobre separação de dados entre óticas (D6).
**Divergência no Geral ajuste 4 (resolvida: o Geral aceitou, 14/09):** a redação sugerida termina em "com o teto de atendimento combinado por escrito no
piloto". Isso cita o termo de piloto, e o eco fixou que a página não cita o termo até ele voltar assinado (D7). Fica
"Uma pessoa da DIGIAI, em horário comercial."; o complemento e o "com o escopo por escrito" da resposta 7 entram quando
o termo voltar assinado. "Horário comercial" também espera o MKT confirmar quem atende (D2).
Base da resposta 4: frase D4 (eco) + Hub com papel por loja (PODE Hub 1, INV §12).
JSON-LD `FAQPage` com exatamente estas perguntas e respostas (padrão da v2).

---

## S10. CTA final

**Título [nova]:** Vinte minutos para ver a sua ótica da receita à entrega.
**Texto:** Agende uma demonstração assistida. Se não fizer sentido para a sua loja, a gente fala isso na hora.
**CTA:** [Agendar 20 minutos de demonstração]
**Linha de prova sob o botão (mono, Geral ajuste 7):** 1.694 OS em 2026 numa ótica real · números do banco, 14/09/2026
**Link secundário:** Prefere o WhatsApp? `{{D2 WHATSAPP}}` · Já é cliente? Entrar no Hub →

---

## Formulário (`/contato`, padrão da v2 dentro do `lead-capture` atual)

Campos visíveis: Nome · WhatsApp · E-mail (opcional) · Você é: dono(a) / gerente / outro · Quantas lojas: 1 / 2 a 4 /
5 ou mais · Sistema que usa hoje (texto livre) · O que mais atrapalha hoje (opcional).
Envio: função, sistema atual e principal problema entram em `notes`, junto com as lojas (`contato.astro:117`).
Botão: Solicitar demonstração.
Bloco lateral **"O que acontece agora?"**: 1. A gente responde pelo WhatsApp em horário comercial. 2. Marcamos 20 minutos
no melhor horário para você. 3. Na demonstração, olhamos a sua loja antes de falar de preço.
Sucesso: *Recebido. A gente te chama no WhatsApp em horário comercial.*
Erro (COPY_BRIEFING §7): *Sua conexão está fora de foco. Tente de novo ou fale pelo WhatsApp.*
⚠ "horário comercial" é o texto já publicado; confirmar com o MKT junto com D2 quem atende e em que horário.

---

## Frases da v2 que entram nesta copy (lido `clearix-site-v2/src/pages/Home.tsx` inteiro)

| Frase da v2 (linha) | Onde entra | Ajuste |
|---|---|---|
| "Venda no Balcão → Baixa no Estoque → OS para Laboratório → Lançamento Financeiro" (112-118) | S3, linha apagada | nenhum |
| "O mesmo pedido através de um único fluxo" (127) | S3, linha acesa | "o mesmo pedido, correndo num fluxo só" |
| "Módulos especializados, não puxadinhos." (156) | S7, abaixo do título | nenhum; é voz de balcão e não promete número |
| "O plano de transição é definido após o diagnóstico, conforme os dados e a operação de cada ótica." (192) | S8, fase 02 | fundido em "entendemos como a sua loja trabalha hoje" |
| "Diagnóstico · Configuração · Migração · Acompanhamento" com rótulo "Fase 0N" (196-204) | S8 | a fase "Resultado: métricas e KPIs validados" sai (sem medição) |
| "Você conta um pouco sobre a operação…" (224) + "O que acontece agora?" (253) | formulário | reescrito em 3 passos |
| Campos função / lojas / sistema atual / principal problema e `notes` montado (35-50, 280-307) | formulário | idêntico ao que já está aqui |
| "Sua conexão está fora de foco. Tente de novo ou fale pelo WhatsApp." (321) | formulário, erro | nenhum; é o COPY_BRIEFING §7 |

Ficam fora: "Operação desde 2020", "6 Lojas operacionais", "20.915 Vendas processadas" (71-76); "Visão multi-loja real e
consolidada" (155); "Os sete módulos" (128); "Não é apenas outro ERP. É um sistema operacional." (151, frase sem prova);
"Funciona para mais de uma loja? A landing apresenta…" (223, resposta que não responde); aceite de Termos em minuta
(322-324).

## Rodapé

**Agora:** *© 2026 DIGIAI ÓTICA E TECNOLOGIA LTDA · CNPJ 12.549.582/0001-49 · Suzano-SP* (igual à OSI).

`{{D3b RODAPÉ}}` pronto para receber, **depois que o dono conferir o cartão CNPJ atual**:
*© 2026 DIGIAI ÓTICA E TECNOLOGIA LTDA · CNPJ 12.549.582/0001-49 · Rua General Francisco Glicério, 940, Térreo, Sala 02 ·
Jardim Guaio · Suzano/SP · CEP 08674-000*
Fonte: `company.identity` do digiai (Agent Projetos, via eco, 14/09). O cadastro traz a nota "CNPJ em transição na RFB"
(natureza jurídica, nome e endereço em migração na JUCESP/RFB, sem data), por isso a linha completa ainda não vai ao ar.

## Capturas de tela (S4 e S3, quando chegarem)

Tenant sintético "Ótica Olhar Certo", verificado pelo eco em 14/09: 4.563 CPFs gerados, sem coincidência de CPF ou
telefone com o tenant real. **CPF e telefone não aparecem na captura** (borrar ou escolher uma vista sem eles), porque um
CPF gerado válido pode existir na vida real. Entrega em `public/capturas/`.

## WhatsApp: resposta do MKT (14/09)

- **Número definitivo: não existe ainda, e a decisão é do dono.** Nenhum canal de WhatsApp do MKT está ligado e não há data.
- `(11) 98602-7415`: **não consta em nenhum registro do MKT** (quem é o dono do número e quem atende: não identificado).
  Hoje ele está publicado no site no ar em 6 lugares: botão flutuante em todas as páginas (`BaseLayout.astro:87`),
  `/contato` (`contato.astro:5` e `:150`), dados estruturados (`StructuredData.astro:42` e `:69`), `llms.txt:62` e
  `llms-full.txt:129`.
- `(11) 99154-7229`: WhatsApp Business da OSI (em uso manual) **e** canal de saída de vendas `digiai_vendas` (desligado).
- **Risco apontado pelo MKT:** se o número de prospecção fria via Z-API for banido, derruba junto o botão da landing.
  Recomendação: um número de **atendimento** (quem chega pela landing) separado do de **prospecção**.
- **Origem:** o WhatsApp não carrega UTM; a origem vai escrita no fim do texto. Lista enviada ao MKT:
  - `Quero conhecer o Clearix (site)`: hero, oferta, FAQ, CTA final e botão flutuante;
  - `Quero agendar uma demonstração do Clearix (site-contato)`: página `/contato`.

- **Webhook do MKT (14/09, código escrito, não implantado):** reconhece só `(site)` → origem `site` e `(site-contato)` →
  origem `site-contato`, gravados em `mkt.mensagens.origem`. Só no fim da frase (com ou sem ponto). **Código novo exige
  aviso ao MKT antes de publicar**, senão a mensagem chega sem origem.
- **Efeito do número atual:** mensagem para o `(11) 98602-7415` não passa pelo webhook do MKT. Enquanto o site apontar
  para ele, a origem não é gravada e essas conversas ficam fora da base de leads e do A/B.

Até o dono escolher, a copy segue com `{{D2 WHATSAPP}}`. O número no ar só muda com a escolha do dono e o push dele.

## Medição (aprovada)

`data-cta` em cada botão ou link: `hero`, `hero_whatsapp`, `oferta`, `faq`, `final`, `final_whatsapp`, `contato_submit`.
Evento `click_checkout` com `metadata.cta_id`.

---

## O que sai da home atual (confirmação para a revisão)

Frases que **não voltam em nenhuma forma**: "20 a 40 clientes somem", "4h por dia", "12 min → 90 s", "3% → 33%", "10×",
"recall com IA", "o laboratório avisa sozinho", "10 lojas reais", "5+ anos em produção", "desde 2020 em produção",
"painel ao vivo", "Aura", "LGPD / isolamento", "garantia de migração sem trauma", "cancele quando quiser", "dados
exportáveis", "no ar em semanas", "mais escolhido", "16 apps", "tecnologia de ponta / Anthropic".

## Pontos levados ao revisor (resolvidos)

1. H1: fica a aprovada (Geral 1).
2. S5 abre com "Números do banco, não de pesquisa." (Geral 2).
3. Ordem S3 → S4 → S5 fica (Geral 3).
4. COPY_BRIEFING §4 sem "grátis": corrigido pelo eco no Cockpit.
