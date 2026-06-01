// Pacotes comerciais Clearix. Fonte de verdade: iam.clearix_packages
// (migration 20260419062438 + seed 20260419062526, banco mhgbuplnxtfgipbemchb).
// Contagem de apps por tier vem do seed (verdade do banco), não dos docs.

export interface Plano {
  slug: string;
  nome: string;
  preco: string;
  precoNota?: string;
  apps: number;
  lojas: string;
  publico: string;
  inclui: string[];     // apps-destaque listados (não exaustivo)
  destaque?: boolean;
}

export const planos: Plano[] = [
  {
    slug: 'starter',
    nome: 'Essencial',
    preco: 'R$ 349',
    precoNota: '/mês',
    apps: 7,
    lojas: '1 loja',
    publico: 'Ótica solo independente',
    inclui: ['Hub', 'Vendas', 'Paciente', 'Client', 'Finance', 'Lens'],
  },
  {
    slug: 'pro',
    nome: 'Controle',
    preco: 'R$ 899',
    precoNota: '/mês',
    apps: 11,
    lojas: 'até 5 lojas',
    publico: 'Ótica em crescimento, 2 a 4 lojas',
    inclui: ['Tudo do Essencial', 'Clinics', 'DCL', 'Estoque', 'RH'],
    destaque: true,
  },
  {
    slug: 'crescimento',
    nome: 'Crescimento',
    preco: 'R$ 1.499',
    precoNota: '/mês',
    apps: 16,
    lojas: 'até 8 lojas',
    publico: 'Rede média e franquias',
    inclui: ['Tudo do Controle', 'Marketing', 'Loyalty', 'BI', 'AR Vision', 'Express'],
  },
  {
    slug: 'enterprise',
    nome: 'Completo',
    preco: 'Sob consulta',
    apps: 16,
    lojas: 'lojas ilimitadas',
    publico: 'Rede, cadeia e franqueadora',
    inclui: ['Todo o ecossistema', 'SLA 99,9%', 'Suporte dedicado', 'Integrações enterprise'],
  },
];

export const demo = {
  nome: 'Demonstração',
  preco: 'Grátis por 30 dias',
  desc: 'Teste o Clearix com dados parecidos com os da sua ótica, sem compromisso.',
};

// Add-ons (iam.clearix_addons, migration 20260421004618). Preço sempre sob consulta.
export const addons = [
  { nome: 'Migração de base legada', desc: 'Importação assistida do seu sistema antigo (Acert, CODEC e outros).' },
  { nome: 'Inclusão de laboratório parceiro', desc: 'Integração nativa com um laboratório novo, com pedidos eletrônicos.' },
  { nome: 'Site institucional', desc: 'Site da sua ótica hospedado em domínio próprio.' },
  { nome: 'E-commerce', desc: 'Loja online integrada ao Clearix: pedido → clínica → laboratório, automático.' },
];
