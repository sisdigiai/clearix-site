# Revisão do Orquestrador Geral — copy da landing do Clearix (14/09/2026)

**Base:** `_COPY_2026-09-14_LANDING.md` (etapa 2) + `src/data/landing.ts`. Revisão com as skills `copywriting`, `cro` e
`marketing-psychology`; **revisão, não reescrita** — o agente decide a redação final dentro do que está aqui.
**Veredito: copy aprovada na substância.** Nenhuma promessa sem lastro, nenhum número fora do `landing.ts`, travas do eco
respeitadas. Abaixo: as 3 respostas pedidas, 7 ajustes recomendados (pequenos) e o que fica como está.

## As três respostas pedidas
1. **H1: fica a aprovada — "De orçamento a entrega, sem perder ninguém no caminho."** Motivo: é resultado + dor
   (perder cliente/OS no fluxo) na língua do dono da ótica. "Da receita à entrega, sem improviso" usa o slogan e o nome do
   produto OSI: na página do Clearix isso confunde os dois produtos e enfraquece o OSI como marca própria; o eco
   OSI → Clearix já existe no lugar certo (E2 do leitor, "É dono ou gerente? Conheça o Clearix"). Se quiserem testar a
   nova, é A/B depois, nunca a base.
2. **S5 não abre pela ausência.** "Não temos parede de logotipos" é franqueza (Pratfall funciona), mas o leitor B2B
   decide em 5 segundos e a primeira frase de uma seção de prova não pode soar pequena. Título recomendado: **"Números do
   banco, não de pesquisa."** e a primeira frase: *"Em vez de logotipos, mostramos o que o sistema registrou numa ótica
   real, com data."* Mantém a honestidade sem se diminuir.
3. **Ordem S3 → S4 → S5 fica.** É AIDA: mecanismo (interesse) → momento de valor (desejo) → prova (confiança) → oferta.
   Inverter põe a prova antes de o leitor saber o que está sendo provado.

## Sete ajustes recomendados
1. **Hero e S5 repetem os mesmos números** (1.694 OS e 1.477 parcelas aparecem nos dois). Repetição lê como enchimento.
   Hero fica com os 3 (`1.694 OS · 1.477 parcelas · 746 caixas`); **S5 mostra 5 diferentes**, não 8 (Hick's law; 8
   cartões diluem): 3.401 mensagens/30 d · 1.630 avisos desde abril · 1.562 links do portal · 2.410 linhas de extrato
   conciliadas · 20.375 OS no histórico (com o rodapé obrigatório). Fora: 2.227 etiquetas (fraco), e os dois repetidos.
2. **CTA com custo explícito e baixo**: "Agendar demonstração" → **"Agendar 20 minutos de demonstração"** (ou "Ver o
   Clearix com a minha loja na tela"). Especificidade reduz a energia de ativação; o "20 minutos" já está no S8 e no
   S10, então o botão ganha coerência. Um CTA só, como está ✓. `data-cta` como aprovado.
3. **S2, dor do dono**: as 4 dores são de balcão; o comprador é o dono. Na linha 4, fechar com o dono: *"O caixa fecha
   em planilha, não bate com o banco, e o dono só descobre no fim do mês."* → *"Caixa conferido, extrato conciliado e o
   painel do dono mostrando o dia."* (similaridade: o leitor se vê na frase).
4. **FAQ 4 promete demais**: "Uma pessoa da nossa equipe, não um robô." — a equipe é pequena e o termo de piloto fixa
   2 h/semana em horário comercial. Redação honesta: *"Uma pessoa da DIGIAI, em horário comercial, com o teto de
   atendimento combinado por escrito no piloto."*
5. **FAQ nova, verdadeira e que o comprador faz**: *"Funciona para mais de uma loja?"* → a frase D4 autorizada
   ("Uma rede de óticas da Grande São Paulo opera no Clearix: uma loja vende nele todos os dias e o histórico de outras
   cinco lojas da mesma rede está preservado no mesmo banco.") + "cada pessoa vê o que pode, por loja e por papel". A v2
   tinha a pergunta com resposta que não respondia; esta responde. (Entra no JSON-LD.)
6. **FAQ 6 (preço)**: acrescentar "sem período grátis" — antecipa a pergunta seguinte e é a decisão D3/D5 dita com
   todas as letras: *"Os planos começam em R$ 349 por mês, sem período grátis. O piloto é pago e combinado depois da
   demonstração."*
7. **Prova ao lado do CTA final (S10)**: uma linha em mono sob o botão — *"1.694 OS em 2026 numa ótica real · números
   do banco, 14/09/2026"* — prova encostada no ponto de decisão (regra de posicionamento do CRO). Não repete o hero em
   bloco; é uma linha.

## O que fica como está (e por quê)
- S1 sub, S3 inteira (a "linha apagada × linha acesa" é o melhor contraste da página; passo 03 "A escolha é sua" =
  autonomia), S4 com a nota "não avaliamos qualidade de laboratório" (Pratfall bem usado), S6 sem pessoa (D1), S7 sem
  contagem de módulos, S8 fases (Fase 03 "o que você usar define o que fica" é ótimo), S10 "Se não fizer sentido para a
  sua loja, a gente fala isso na hora" (aversão ao arrependimento, honesto), formulário (5 obrigatórios, 2 opcionais —
  dentro do limite), rodapé com o CNPJ atual até o D3b, lacunas `{{D2}}`, `{{D7}}`, `{{D3b}}` como estão.
- Psicologia conferida: sem escassez falsa ✓, sem urgência falsa ✓, perda antes do ganho em S2 ✓, autoridade por origem
  ("feito dentro de uma ótica") ✓, unidade ("de quem opera ótica") ✓, viés do status quo tratado (FAQ 1 e 3) ✓, regret
  aversion (S10) ✓. Nada a acrescentar de gatilho — a página já usa os que a casa permite.

## Fora do escopo do agente, comigo
- O `COPY_BRIEFING §4` que ainda recomenda "Começar grátis por 30 dias" como CTA: é documento do Cockpit/design; corrijo eu.
- `{{D2 WHATSAPP}}`: o alerta do MKT (número (11) 98602-7415 sem dono identificado, fora do webhook) está com o dono.

**Assinatura:** Orquestrador Geral, 14/09 — aprovada com os 7 ajustes; o eco dá o OK final de substância; build só depois
do portão 135 (D5, D8) e das lacunas D2/D3b/D7.
