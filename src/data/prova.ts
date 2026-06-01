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

// Promessas defensáveis (com prova ou literatura). Ver clearix_pitch/02_posicionamento.md.
export const promessas = [
  { valor: '10×', label: 'mais retorno de cliente', nota: 'recall com IA: de 3% manual para ~33%' },
  { valor: '5+ anos', label: 'de operação real', nota: 'Grupo Mello, desde out/2020' },
  { valor: '+R$ 17 mi', label: 'rastreados no sistema', nota: 'receita auditável no banco' },
];
