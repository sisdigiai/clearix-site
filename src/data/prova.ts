// Números REAIS do tenant Grupo Mello Óticas (6292c9f0…) — banco Clearix
// mhgbuplnxtfgipbemchb. Reauditados via SQL em 2026-08-05.
// "base" = histórico real acumulado (vendas desde out/2020, migrado pro Clearix).
// "vivo" = atividade nativa no Clearix nos últimos 30 dias (prova de uso real).
// NÃO usar dados de seed/demo aqui — apenas operação verificada.
//
// ⚠️ AO REPUXAR: filtrar SEMPRE `deleted_at is null`.
// A extração de 2026-05-30 não filtrou, e por isso publicávamos registros
// que já tinham sido apagados. O buraco era grande porque a deduplicação de
// clientes rodou justamente em maio/2026 (3.964 pacientes removidos):
//   Pacientes   19.737 publicado → 15.788 real  (contava ~4 mil duplicatas)
//   Lançamentos 97.996 publicado → 64.215 real  (36.892 transações deletadas)
//   Ordens      22.299 publicado → 21.280 real
// Número inflado em landing de produto-âncora é risco de credibilidade, não
// detalhe de arredondamento (AGENTS.md §8 / R-010).

export const base = [
  { valor: '20.915', label: 'Vendas' },
  { valor: '21.280', label: 'Ordens de serviço' },
  { valor: '15.788', label: 'Pacientes' },
  { valor: '64.215', label: 'Lançamentos financeiros' },
  // 6, não 10. `iam.stores` tem 10 linhas, mas 4 não são loja de rua em
  // operação: 000 (cadastro legado), 007 Festas, 008 Ecommerce e 013
  // Escritório. As 6 restantes são exatamente os 6 CNPJs do grupo
  // (GI/GIGI/GIOVANNA/T.M/T.M.C/TMO). Contar linha de tabela como loja
  // inflava a prova — e é o mesmo número que a vitrine da calc já usava.
  { valor: '6', label: 'Lojas' },
];

export const vivo = [
  { valor: '+198', label: 'vendas' },
  { valor: '+197', label: 'ordens de serviço' },
  { valor: '+87', label: 'pacientes novos' },
];

// Resultados pro comprador (promessas defensáveis, copy do COPY_BRIEFING + pitch).
export const promessas = [
  { valor: '12 min → 90 s', label: 'Orçamento na hora', nota: 'do atendimento à proposta, sem digitar duas vezes' },
  { valor: '3% → 33%', label: 'Clientes que voltam', nota: 'recall com IA — até 10× mais retorno' },
  { valor: '16 em 1', label: 'Apps, um só login', nota: 'caixa, clínica, lab, financeiro e BI conversando' },
];
