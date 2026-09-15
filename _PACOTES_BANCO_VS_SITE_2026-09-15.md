# Pacotes do Clearix: banco × site (15/09/2026)

**Pedido do dono (15/09, sessão da landing):** "temos os valores corretos dos pacotes, e a lista dos pacotes? para termos a
verdade na landing, e em todos os lugares, é uma ordem que os orquestradores têm que se preocupar".
**Medido por:** Agent do Site Clearix, SELECT só de leitura no banco `crm_erp` (`mhgbuplnxtfgipbemchb`), 15/09 ~17:45 UTC.
**Para:** Orquestrador Geral (dono da folha única e do preço, tema 07) e orquestrador do eco Clearix (mede e corrige).

## 1. O que o banco diz

`iam.clearix_packages` (preço, limites) + `iam.clearix_package_apps` (módulos liberados, `is_included`):

| slug | Nome | R$/mês | Lojas | Usuários | Pacientes | OS/mês | Módulos liberados no banco |
|---|---|---|---|---|---|---|---|
| piloto_assistido | Piloto Assistido | — | — | — | — | — | hub, vendas, clinics, dcl, estoque, finance, bi (7) |
| starter | Essencial | 349 | 1 | 3 | 500 | 50 | hub, vendas, paciente, client, finance (5) |
| pro | Controle | 899 | 4 | 15 | 10.000 | — | + clinics, dcl, estoque, rh (9) |
| crescimento | Crescimento | 1.499 | 8 | 40 | — | — | + bi, marketing, fone, loyalty, ar_vision, express (15) |
| enterprise | Completo | — | — | — | — | — | + lens, import (17) |
| demo | Demo (is_demo) | 0 | 2 | 10 | 100 | 50 | hub, vendas, paciente, client, clinics, dcl, finance, fone, loyalty (9) |
| custom | Personalizado | — | — | — | — | — | — |

Complementos (`iam.clearix_addons`, todos sem preço): migração de base legada (avulso, libera `import`), inclusão de
laboratório parceiro (avulso, a partir do Controle), site institucional (mensal, a partir do Controle), e-commerce
(sob medida, a partir do Crescimento). Pacotes atribuídos hoje: 1 tenant em cada um de starter, pro, crescimento e
enterprise (a Mello e os 3 de teste).

## 2. Onde o site (clearix.app.br/planos, main 2a9ff97) diverge do banco

| # | Site hoje | Banco | Tipo |
|---|---|---|---|
| P1 | **Essencial inclui "Lentes"** (e por "Tudo do Essencial", Controle e Crescimento também) | `lens` só no **Completo** | ❌ fato: o site promete módulo que o plano não libera |
| P2 | Home S3/S4 vendem "compare preço e prazo entre laboratórios" sem dizer o plano | a comparação usa o catálogo de lentes (Lens) e o laboratório (DCL); DCL a partir do Controle, Lens só no Completo | ❌ fato a decidir: quem compra Essencial ou Controle tem a comparação? |
| P3 | Crescimento sem Loyalty, AR Vision, Express (saíram na verificação de promessas) | banco libera `loyalty`, `ar_vision`, `express`, `fone` no Crescimento | ⚠ banco × termo de piloto §2(d) × folha §3: decisão |
| P4 | Limites não aparecem | Essencial: **3 usuários, 500 pacientes, 50 OS/mês**; Controle: 15 usuários, 10.000 pacientes; Crescimento: 40 usuários | ⚠ verdade que o comprador precisa saber antes de assinar (50 OS/mês é pouco para muita ótica) |
| P5 | Essencial "Login único, Vendas, Portal do paciente, WhatsApp da loja, Financeiro, Lentes" | 5 módulos (sem Lens) | ❌ = P1 |
| P6 | Não mostra "Piloto Assistido" nem "Personalizado" | existem ativos no banco; piloto sem preço | ⚠ o site vende "piloto pago e assistido": o pacote do banco é esse? |
| P7 | Complementos: só migração | banco tem 4 ativos | ✅ decisão já tomada (eco 14/09, termo §2): os outros 3 fora da página; a tabela não se toca |
| P8 | Preços 349 / 899 / 1.499 / sob consulta; Controle até 4 lojas; Crescimento até 8 | iguais | ✅ |

## 3. O que o site precisa para ter "a verdade em todos os lugares"

1. **Uma fonte:** o banco (`iam.clearix_packages` + `clearix_package_apps` + `clearix_addons`) é o que o Hub usa para
   liberar; o site deveria derivar dele (hoje `src/data/planos.ts` é cópia à mão, com data). Se a casa quiser vender
   diferente do que o banco libera, **muda o banco primeiro** (regra já dita pelo eco no caso das 4 lojas).
2. **Decisões que não são do site** (Geral/dono, tema 07 e D5): P1/P2 (Lentes e comparação por plano), P3 (os 4 módulos sem
   uso no Crescimento), P4 (mostrar limites), P6 (piloto assistido como pacote).
3. **Varredura fora do site** (orquestradores): todo lugar que cita preço, lojas ou módulos por plano — Hub
   (tela de pacotes), app digiai (billing, `fn_registrar_venda_clearix`), folha única, folha de mesa, kit PODE, termo de
   piloto, pitch (`clearix_docs/clearix_pitch`), digiai-site (/clearix), calculadora, material do MKT e da OSI.

## 4. Proposta de correção imediata no site (espera OK do Geral)

- Tirar "Lentes" do card Essencial (P1), já que o banco não libera; o card fica com os 5 módulos do banco.
- Nada mais no /planos até as decisões do §3.2.
