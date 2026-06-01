// Números REAIS do tenant Grupo Mello Óticas (6292c9f0…) — banco Clearix
// mhgbuplnxtfgipbemchb. Puxados ao vivo via SQL em 2026-05-30.
// "base" = histórico real acumulado (vendas desde out/2020, migrado pro Clearix).
// "vivo" = atividade nativa no Clearix nos últimos 30 dias (prova de uso real).
// NÃO usar dados de seed/demo aqui — apenas operação verificada.

export const base = [
  { valor: '20.488', label: 'Vendas' },
  { valor: '22.299', label: 'Ordens de serviço' },
  { valor: '19.737', label: 'Pacientes' },
  { valor: '97.996', label: 'Lançamentos financeiros' },
  { valor: '10', label: 'Lojas' },
];

export const vivo = [
  { valor: '+192', label: 'vendas' },
  { valor: '+192', label: 'ordens de serviço' },
  { valor: '+104', label: 'pacientes novos' },
];

// Resultados pro comprador (promessas defensáveis, copy do COPY_BRIEFING + pitch).
export const promessas = [
  { valor: '12 min → 90 s', label: 'Orçamento na hora', nota: 'do atendimento à proposta, sem digitar duas vezes' },
  { valor: '3% → 33%', label: 'Clientes que voltam', nota: 'recall com IA — até 10× mais retorno' },
  { valor: '16 em 1', label: 'Apps, um só login', nota: 'caixa, clínica, lab, financeiro e BI conversando' },
];
