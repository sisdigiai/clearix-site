// Catálogo dos apps do ecossistema Clearix voltados ao CLIENTE.
// Fonte de verdade: iam.clearix_apps (banco mhgbuplnxtfgipbemchb) +
// clearix_docs/plataforma/design_system_completo.md (cores, rev. 2026-05-17).
// Apps INTERNOS (atlas, designer, docs) NÃO entram na vitrine de venda.

export interface ClearixApp {
  slug: string;
  nome: string;
  tagline: string;
  cor: string;        // accent canônico (hex)
  jornada: 'vender' | 'atender' | 'gerir' | 'crescer';
  destaque?: boolean; // aparece com maior peso no bento
}

export const apps: ClearixApp[] = [
  // ── VENDER ──────────────────────────────────────────────
  { slug: 'vendas',    nome: 'Vendas',    tagline: 'PDV, orçamento, caixa, carnês e entregas — atendimento que não esquece o cliente.', cor: '#3B82F6', jornada: 'vender', destaque: true },
  { slug: 'express',   nome: 'Express',   tagline: 'Checkout rápido para leads de campanha fecharem na hora.', cor: '#EF4444', jornada: 'vender' },
  { slug: 'loyalty',   nome: 'Loyalty',   tagline: 'Fidelidade, carteiras e cupons que trazem o cliente de volta.', cor: '#F59E0B', jornada: 'vender' },

  // ── ATENDER ─────────────────────────────────────────────
  { slug: 'clinics',   nome: 'Clinics',   tagline: 'Anamnese, prescrições e prontuário clínico num só lugar.', cor: '#F43F5E', jornada: 'atender', destaque: true },
  { slug: 'paciente',  nome: 'Paciente',  tagline: 'Portal do paciente por WhatsApp: pedidos, receitas e fidelidade.', cor: '#38BDF8', jornada: 'atender' },
  { slug: 'client',    nome: 'Client',    tagline: 'Portal B2B do cliente para acompanhar pedidos em tempo real.', cor: '#10B981', jornada: 'atender' },
  { slug: 'dcl',       nome: 'DCL',       tagline: 'Laboratório em kanban — a produção fala com a loja em tempo real.', cor: '#06B6D4', jornada: 'atender' },

  // ── GERIR ───────────────────────────────────────────────
  { slug: 'finance',   nome: 'Finance',   tagline: 'DRE, fluxo de caixa, contas a pagar/receber e NF-e.', cor: '#F59E0B', jornada: 'gerir', destaque: true },
  { slug: 'estoque',   nome: 'Estoque',   tagline: 'Inventários, movimentações e código de barras.', cor: '#F97316', jornada: 'gerir' },
  { slug: 'lens',      nome: 'Lens',      tagline: 'Catálogo de lentes, pricing e motor óptico.', cor: '#8B5CF6', jornada: 'gerir' },
  { slug: 'rh',        nome: 'RH',        tagline: 'Ponto, escalas, férias e comissões da equipe.', cor: '#4F46E5', jornada: 'gerir' },

  // ── CRESCER ─────────────────────────────────────────────
  { slug: 'marketing', nome: 'Marketing', tagline: 'Campanhas no WhatsApp e automações com IA.', cor: '#EC4899', jornada: 'crescer', destaque: true },
  { slug: 'bi',        nome: 'BI',        tagline: 'Dashboards cross-app: a operação inteira numa visão só.', cor: '#A855F7', jornada: 'crescer' },
  { slug: 'ar_vision', nome: 'AR Vision', tagline: 'Prova virtual de armações — o cliente experimenta pelo celular.', cor: '#D946EF', jornada: 'crescer' },
  { slug: 'import',    nome: 'Import',    tagline: 'Importação do sistema antigo com as datas originais preservadas.', cor: '#84CC16', jornada: 'crescer' },
];

export const jornadas = [
  { key: 'vender',  titulo: 'Vender',  desc: 'Do balcão ao checkout, sem perder ninguém no caminho.' },
  { key: 'atender', titulo: 'Atender', desc: 'Clínica, paciente e laboratório conectados na mesma jornada.' },
  { key: 'gerir',   titulo: 'Gerir',   desc: 'Financeiro, estoque e equipe sob controle e sem retrabalho.' },
  { key: 'crescer', titulo: 'Crescer', desc: 'Marketing, dados e prova virtual para escalar com método.' },
] as const;
