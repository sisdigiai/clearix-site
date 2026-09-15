// Módulos do Clearix mostrados na vitrine. Só entra módulo com uso medido na operação real.
// Fonte que manda desde 14/09: Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md (dona: Orquestrador Geral).
// Texto novo aqui só depois de estar na folha. Base de medição: inventário de 14/09 (INV).
//
// Fora da home e do /ecossistema, sem selo "em piloto" (eco, 14/09): Loyalty, AR Vision, Express, Fone e Import.
// Construídos, sem uso medido (INV §13, §14.6). Voltam quando o INV medir uso. Import nunca aparece: é ferramenta
// interna e a migração é serviço assistido. Apps internos (atlas, designer, docs) nunca entram.
// Sem contagem de módulos na copy (D3).

export interface ClearixApp {
  slug: string;
  nome: string;
  tagline: string;
  cor: string;        // accent canônico (hex), clearix_docs/plataforma/design_system_completo.md
  jornada: 'vender' | 'laboratorio' | 'gerir' | 'relacionar';
}

export const apps: ClearixApp[] = [
  { slug: 'vendas',    nome: 'Vendas',               tagline: 'Orçamento, venda, carnê, caixa, entrega e garantia.', cor: '#3B82F6', jornada: 'vender' },
  { slug: 'clinics',   nome: 'Pacientes e receitas', tagline: 'Ficha do paciente e receita que não se perde.', cor: '#F43F5E', jornada: 'vender' },

  { slug: 'dcl',       nome: 'Laboratório',          tagline: 'Kanban da OS, montagem, retrabalho e alerta de atraso.', cor: '#06B6D4', jornada: 'laboratorio' },
  { slug: 'lens',      nome: 'Lentes',               tagline: 'Catálogo por fornecedor, a mesma lente em vários laboratórios, preço por acordo.', cor: '#8B5CF6', jornada: 'laboratorio' },

  { slug: 'finance',   nome: 'Financeiro',           tagline: 'Contas a pagar e receber, extrato conciliado, plano de contas, DRE.', cor: '#F59E0B', jornada: 'gerir' },
  { slug: 'estoque',   nome: 'Estoque',              tagline: 'Armações e acessórios, movimentação, transferência e etiqueta com código de barras.', cor: '#F97316', jornada: 'gerir' },
  { slug: 'rh',        nome: 'Equipe',               tagline: 'Ponto com localização, escalas e comissão calculada da venda entregue.', cor: '#4F46E5', jornada: 'gerir' },
  { slug: 'bi',        nome: 'Painel do dono',       tagline: 'Vendas, entregas, recebimentos e metas por vendedor.', cor: '#A855F7', jornada: 'gerir' },

  { slug: 'client',    nome: 'WhatsApp da loja',     tagline: 'Várias pessoas atendendo o mesmo número; o que passa pelo sistema fica na ficha do cliente.', cor: '#10B981', jornada: 'relacionar' },
  { slug: 'paciente',  nome: 'Portal do paciente',   tagline: 'Link sem senha para o cliente ver pedido, receita e parcelas.', cor: '#38BDF8', jornada: 'relacionar' },
  { slug: 'marketing', nome: 'Quem chamar hoje',     tagline: 'Lista diária de clientes para retomar contato, sem repetir quem já foi chamado.', cor: '#EC4899', jornada: 'relacionar' },
];

export const jornadas = [
  { key: 'vender',      titulo: 'Vender',      desc: 'Do orçamento à entrega, com a receita ligada à venda.' },
  { key: 'laboratorio', titulo: 'Laboratório', desc: 'A OS acompanhada do pedido ao óculos pronto.' },
  { key: 'gerir',       titulo: 'Gerir',       desc: 'Caixa, estoque e equipe no mesmo lugar da venda.' },
  { key: 'relacionar',  titulo: 'Relacionar',  desc: 'O cliente atendido, informado e chamado de volta.' },
] as const;
