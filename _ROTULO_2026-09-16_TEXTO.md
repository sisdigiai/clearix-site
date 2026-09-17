# Rótulo do Clearix — texto final para conferência do Geral (16/09/2026)

**Ordem do dono (16/09):** "tudo na cara, igual aos rótulos das barras". **Padrão:** `Cockpit/comercial/rotulo-na-cara-2026-09-16.md`.
**Correções do eco aplicadas:** (1) Essencial sem lentes; (2) Crescimento sem os 4 módulos sem uso; (3) limites completos;
(4) nome de uso com o do Hub entre parênteses; (5) preço sem "Mercado Pago"; (6) "depois de pedir" como combinado;
(7) quantidades só da folha §1, com data.
**Estado:** branch `rotulo-2026-09`, conferido no preview (1280 px: o título e os pacotes aparecem acima da dobra; 375 px:
o título cabe na primeira tela, sem rolagem lateral). **Não publicar** antes de: conferência do Geral, "pode" do dono
para a migration D5 (tira os 4 módulos do Crescimento no banco) e "pode" do dono para commit e push.

**Posição:** logo abaixo do hero (título, subtítulo, CTA), antes da seção de dores. Saíram, por duplicar o rótulo: a
linha de números do hero (1.694 OS · 1.477 parcelas · 132 caixas) e a lista de preços da seção "Como começar".

---

## RÓTULO DO CLEARIX · Rótulo medido em 16/09/2026

### Ingredientes por pacote

| Essencial · R$ 349/mês | Controle · R$ 899/mês | Crescimento · R$ 1.499/mês | Completo · Sob consulta |
|---|---|---|---|
| 1 loja · 3 usuários · 500 pacientes · 50 OS por mês | 4 lojas · 15 usuários · 10.000 pacientes | 8 lojas · 40 usuários | lojas e usuários sob consulta |
| vendas, carnê e caixa (Vendas) | tudo do Essencial + | tudo do Controle + | tudo do Crescimento + |
| financeiro (Finance) | pacientes e receitas (Clinics) | quem chamar hoje (Marketing) | lentes (Lens) |
| WhatsApp da loja (Client) | estoque | painel do dono (BI) | comparação de preço e prazo entre laboratórios |
| portal do paciente (Paciente) | laboratório (DCL) | | |
| login único (Hub) | equipe: ponto, escalas, comissão (RH) | | |

Nota de fonte: o rascunho do padrão põe "caixa" em Finance; no código o caixa diário é do `clearix_vendas`
(`src/app/caixa`, `rpc_sf_open_cash_session`, inventário §1), por isso "vendas, carnê e caixa (Vendas)".

### Quantidades
| | data |
|---|---|
| 1.694 OS em 2026 | 14/09 |
| 1.588 OS de 2026 entregues em 2026 | 15/09 |
| 7 a 10 dias do pedido à entrega (mediana, abr→ago/2026) | 14/09 |
| 132 caixas abertos e fechados pela equipe em 2026 | 15/09 |
| 2.410 linhas de extrato bancário conciliadas em 2026 | 14/09 |
| 3.401 mensagens de WhatsApp em 30 dias | 14/09 |

Medido numa rede de óticas da casa, com 1 loja vendendo todo dia.

### O que não tem
- ✕ emissão de nota fiscal (NF-e)
- ✕ conciliação sozinha: o sistema sugere, a loja confirma
- ✕ trava dos limites: são declarados no pacote, o sistema não bloqueia
- ✕ implantação e migração na mensalidade: orçadas à parte, depois de examinarmos uma amostra do seu banco
- ✕ período grátis
- ✕ mais de um piloto por vez
- ✕ cliente externo pagante ainda: a prova é a operação da casa

### Preço
Mensal. Cobrança combinada na proposta. Completo sob consulta.

### Depois de pedir
01 pedido gravado · 02 a gente responde em horário comercial · 03 demonstração de 20 minutos · 04 olhamos o seu processo ·
05 piloto pago e assistido, um por vez

---

## Pontos para o Geral decidir
1. **Duplicação com S5:** "3.401 mensagens" e "2.410 linhas conciliadas" aparecem no rótulo e de novo em "Números do banco".
   Manter (contexto diferente) ou tirar de S5?
2. **A linha "cliente externo pagante"** é verdade e está no rascunho; confirmar que vai na cara, logo no topo.
3. **Tamanho no celular:** o rótulo completo ocupa ~2.300 px em 375 px. Alternativa: no celular, "o que não tem" e "depois
   de pedir" abertos e os 4 pacotes em sanfona (conteúdo continua no HTML).

## Conferência do Geral (16/09) — aplicada

Rótulo conferido contra a folha e o padrão: números, linha de origem, "não tem", preço e "depois de pedir" batem; nota de
fonte do caixa aceita. Decisões aplicadas na branch:
1. **Um número, um lugar:** 3.401 e 2.410 saíram de "Números do banco" (S5), que fica com 1.630 avisos, 1.562 links do
   portal e 20.375 OS no histórico.
2. **"✕ cliente externo pagante ainda: a prova é a operação da casa"** — na cara.
3. **Sanfona no celular:** "o que não tem" e "depois de pedir" abertos; pacotes em sanfona com o Essencial aberto e o
   cabeçalho fechado mostrando preço e limites; a partir de 640 px todos abertos em grade (o clique não fecha). Conferido:
   375 px sem rolagem lateral, rótulo com ~1.980 px (era ~2.300); 1280 px com os 4 abertos e o rótulo começando a 627 px.

Falta: "pode" do dono para a migration D5 e para commit/merge/push.

## No ar (16/09) e ajuste final do Geral
Publicado em `1c61ea8`. Ajuste: 1.588 e 132 saem da "vida de uma OS" (ficam só no rótulo); Completo passa a
"todos os módulos do Clearix, inclusive lentes (Lens) e comparação de preço e prazo entre laboratórios" (rótulo = banco).

