# DPA — Acordo de Tratamento de Dados (Anexo do MSA Clearix) — MINUTA

> ⚠️ **MINUTA / ESQUELETO — gap crítico do ADR-0020 (era o único dos 4 documentos sem minuta).** É **bloqueante da 1ª venda Clearix**: sem DPA, a DIGIAI não pode legalmente operar dados de pacientes (incl. saúde) das óticas-clientes. **Exige redação completa + revisão por advogado humano.** Não usar como contrato final.
> **Base legal:** LGPD art. 39 (operador) + art. 42 (responsabilidade) + arts. 33-36 (transferência internacional).

## Enquadramento

| Parte | Papel LGPD | Por quê |
|---|---|---|
| **Ótica-cliente** | **Controladora** (art. 5º VI) | Decide por que/como tratar os dados dos seus pacientes/clientes |
| **DIGIAI** | **Operadora** (art. 5º VII) | Processa os dados **em nome e por instrução** da ótica (art. 39) |

> Os dados dos **usuários da própria ótica** (login, faturamento da conta Clearix) a DIGIAI trata como **Controladora** — isso vai na Política/MSA, não aqui. Este DPA cobre os **dados de paciente/cliente final** (onde a DIGIAI é Operadora).

## Cláusulas mínimas (art. 39)

| # | Cláusula | Conteúdo mínimo |
|---|---|---|
| 1 | **Objeto e duração** | Operar o Clearix em nome da ótica enquanto durar o MSA |
| 2 | **Natureza e finalidade** | Prontuário, prescrição/grau, vendas, fidelidade, mensageria — **só conforme instrução documentada da ótica** |
| 3 | **Categorias de dados** | Identificação, contato, histórico de compra; **dados sensíveis de saúde (art. 5º II + art. 11)** |
| 4 | **Categorias de titulares** | Pacientes e clientes finais — **incluindo menores (art. 14)** |
| 5 | **Instruções do controlador** | DIGIAI trata apenas conforme instrução documentada; não usa para finalidade própria |
| 6 | **Suboperadores** | Lista (Supabase, Cloudflare, Meta WhatsApp, provedores de IA) + dever de informar mudança + responsabilidade pela cadeia |
| 7 | **Transferência internacional** | **Cláusulas-padrão da ANPD (Res. CD/ANPD nº 19/2024)** para Supabase/IA nos EUA. **NÃO usar consentimento como base p/ dado de saúde transferido** |
| 8 | **Segurança (art. 46)** | RLS por tenant, HTTPS, **criptografia em repouso** `[pendente]`, **mínimo privilégio** `[pendente]`, audit log, controle de acesso |
| 9 | **Incidentes (art. 48)** | DIGIAI comunica a ótica **SEM DEMORA** ao tomar conhecimento; coopera nos prazos legais (**3 dias úteis**, Res. 15/2024) |
| 10 | **Direitos do titular (art. 18)** | DIGIAI auxilia a ótica a responder no prazo (15 dias, art. 19) |
| 11 | **Minimização p/ IA (R-028)** | Dado de saúde **não trafega por IA/WhatsApp externos sem anonimização/pseudonimização** |
| 12 | **Devolução/eliminação** | Ao término: exportação + eliminação/anonimização, ressalvada guarda legal (prontuário) |
| 13 | **Auditoria** | Direito da ótica de auditar a conformidade da DIGIAI |
| 14 | **Responsabilidade** | Repartição Controlador×Operador (art. 42); solidariedade nos casos legais |

## Pré-condições (bloqueios)
- [ ] **CNPJ regularizado na RFB** — não assinar contrato em nome de PJ não constituída
- [ ] **Criptografia em repouso + mínimo privilégio** implementados antes de operar dado de saúde real (recomendação do RIPD OP-03)
- [ ] **Redação completa + revisão por advogado** antes de qualquer assinatura

## Referências
- ADR-0020 (jurídico MVP Clearix) · `politica-de-privacidade-minuta.md` · `termos-de-uso-minuta.md`
- `docs/digiai/docs/09-governanca/lgpd-ripd-op03-saude.md` (RIPD saúde)
- LGPD arts. 39, 42, 33-36, 11, 14, 46, 48
