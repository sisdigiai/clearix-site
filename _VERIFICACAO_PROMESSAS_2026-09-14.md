# Verificação das promessas no ar em clearix.app.br (14/09/2026, depois da publicação 27295bf)

**De:** Agent do Site Clearix · **Para:** orquestrador do eco Clearix (valida) · **Pedido do dono:** "verificar com o
orquestrador do Clearix nossas promessas, e já atualizar se preciso".

Fontes: **INV** (inventário 14/09 + correções do eco), **PODE** (o-que-pode-prometer 02/09), **TERMO**
(`Cockpit/comercial/termo-de-piloto-clearix-v1.md`, minuta com revisão do Geral), **MKT** (resposta de 14/09 sobre
WhatsApp). Só entram frases que prometem capacidade, serviço, prazo, atendimento ou condição comercial. Números já foram
validados pelo eco e não se repetem aqui.

Legenda: ✅ sustentada · ⚠️ sustentada com ressalva · ❌ conflita com fonte (proposta de troca ao lado).

## A. Conflitos (proponho corrigir já)

| # | Onde está no ar | Promessa | Conflito | Proposta |
|---|---|---|---|---|
| A1 | `/contato` bloco "O que acontece agora?" e mensagem de sucesso | "A gente responde pelo WhatsApp em horário comercial." / "A gente te chama no WhatsApp em horário comercial." | MKT: nenhum WhatsApp da empresa ligado. TERMO §6: atendimento só por canal oficial, **nunca número pessoal**. Hoje só daria para cumprir por número pessoal. | "A gente entra em contato em horário comercial, pelo WhatsApp ou e-mail que você deixou." (o canal volta a ser nomeado quando o D2 ligar o número) |
| A2 | `/planos`, plano Completo | "SLA 99,9%" | TERMO §10: a DIGIAI **não garante** percentual de disponibilidade ("SLA 99,9%"). Contradição direta entre o site e o termo. | Tirar a linha já (a composição do Completo segue na D5, mas esta linha é promessa que o próprio termo nega) |
| A3 | `/planos`, plano Completo | "Integrações enterprise" e "Suporte dedicado" | Sem lastro no INV; TERMO §2(g) exclui integração que não exista; TERMO §6 fixa teto de 2 h/semana, um piloto por vez (não há "dedicado"). | Tirar as duas linhas; o card fica "Todos os módulos" + "Sob consulta" |
| A4 | `/planos`, plano Crescimento | "Loyalty", "AR Vision", "Express" | INV §13/§14.6: sem uso. TERMO §2(d): fidelidade por pontos e prova virtual **fora**. O eco já tirou os três da vitrine. | Tirar os três nomes do card (a decisão de preço/lojas do plano continua na D5) |
| A5 | `/planos`, complementos | "Site institucional — site da sua ótica hospedado em domínio próprio" | TERMO §2(h): "e-commerce **e site**" fora. Sem lastro no INV. | Tirar; fica só "Migração de base legada" |

## B. Sustentadas com ressalva (peço o seu OK ou ajuste)

| # | Onde | Promessa | Base | Ressalva |
|---|---|---|---|---|
| B1 | Home S3 passo 04 e `/para-quem` | "A loja sabe antes do cliente perguntar." | Kanban + alerta de atraso (INV §2, PODE DCL 1) | É resultado, não capacidade. Alternativa mais seca: "O atraso aparece na tela antes de virar ligação do cliente." |
| B2 | Home S9 FAQ 1 | "A implantação começa por uma parte da operação, com a gente acompanhando a equipe no começo." | TERMO §1 (fluxo definido no diagnóstico) e §6 (treinamento incluído) | O termo ainda não foi assinado; a frase não cita o termo. OK? |
| B3 | Home S9 FAQ 3 e `llms-full.txt` | "Sim, como serviço assistido e orçado à parte. Conferimos os dados antes de subir." | TERMO §4 (amostra real, conferência por contagem) | Portão 85 (travas de importação) aberto. Alternativa: "Sim, como serviço orçado à parte, depois de examinarmos uma amostra do seu banco. Os dados são conferidos antes de a loja operar." |
| B4 | Home S8 fase 03 | "Implantamos junto, do seu lado. O que você usar define o que fica." | PODE (fechamento do roteiro) + TERMO §1 | "Do seu lado" pode ler como presencial; TERMO §6 fala em WhatsApp/vídeo. Trocar por "com a gente acompanhando"? |
| B5 | `/planos` subtítulo | "Os planos usam o mesmo sistema e os mesmos dados; muda o que fica liberado." | Hub libera por entitlement (FC) | OK? |
| B6 | `/planos` card Demonstração | "Mostramos o Clearix rodando com dados parecidos com os da sua ótica, sem compromisso." | Tenant sintético "Ótica Olhar Certo" (eco, 14/09) | OK? |
| B7 | `/ecossistema` | Calculadora: "Funciona offline no celular… não pede login e não expira." | `clearix_calc/public/sw.js` com cache do app (conferido no código) | Texto anterior à obra, sustentado pelo código. OK? |

## C. Sustentadas (sem ação)

| Onde | Promessa | Base |
|---|---|---|
| Home S1 | Venda, carnê, laboratório, WhatsApp e financeiro no mesmo sistema | INV §1–§4 |
| Home S2 | Cada OS por etapa com alerta; entrega bloqueada com saldo sem carnê; carnê com baixa e recibo; caixa conferido e extrato conciliado | PODE DCL 1, Vendas 1–2; INV §1, §3 |
| Home S3 01–03, 05–06 | Lentes pelo grau e combinação barrada; contrato e promissória; preço e prazo entre laboratórios, a escolha é sua; OS ao laboratório pelo WhatsApp; entrega quitada ou com carnê; garantia e segundo par na OS; comissão da venda entregue | PODE Vendas 3, DCL 3; INV §1, §2, §8 |
| Home S4 | Compara preço e prazo; não avalia qualidade | PODE DCL 3 (limite obrigatório) |
| Home S6 | "Primeiro resolvemos na nossa operação" | eco, 14/09 |
| Home S7 e `/ecossistema` | 11 linhas de módulo; um acesso por loja e por papel | INV §1–§12, PODE Hub 1 |
| Home S9 | Mais de uma loja (frase D4); pessoa da DIGIAI em horário comercial; não emite nota; a partir de R$ 349, sem período grátis, piloto pago | eco D4; TERMO §3, §6; D4 fiscal |
| Home S10 | "Se não fizer sentido para a sua loja, a gente fala isso na hora." | postura, sem capacidade |
| `/ecossistema` | a venda gera a OS e baixa a armação; a conta do laboratório nasce da OS; comissão da venda entregue | INV §2c, §3c, §8c, §9c |
| `/contato` | 20 minutos no melhor horário; olhamos a loja antes do preço; dados só para contato comercial | roteiro PODE; consentimento (eco: fica) |

## Veredito do eco (14/09) e aplicação

- **A1–A5: aprovadas e aplicadas.** Os complementos ficam só com "Migração de base legada" (`iam.clearix_addons` intocada).
- **B1** alternativa aplicada · **B2** fica · **B3** alternativa aplicada (FAQ, complemento e `llms-full.txt`) · **B4**
  "com a gente acompanhando" · **B5** fica · **B6** trocada por "Mostramos o Clearix rodando com dados de demonstração, sem
  compromisso." ("parecidos com os da sua ótica" prometia adaptação que não se faz) · **B7** fica.
- Extra, pelo mesmo critério: subtítulo dos complementos "Serviço à parte · Sob consulta, combinado com você." (o texto
  anterior era plural e dizia "ativados com você"); `llms-full.txt` ganhou a linha do que não entra (fiscal, fidelidade,
  prova virtual, site e e-commerce, customização, percentual de disponibilidade), igual ao termo §2 e §10.
- Build ok, `dist/` sem nenhuma das frases corrigidas, `/planos` conferido no navegador sem erro de console. Commit e push
  autorizados pelo dono; hash no changelog.
