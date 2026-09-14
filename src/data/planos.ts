// Pacotes comerciais Clearix. Fonte de verdade: iam.clearix_packages
// (migration 20260419062438 + seed 20260419062526, banco mhgbuplnxtfgipbemchb).
//
// Sem contagem de apps (D3, 08/09: falar em módulos, sem contar aplicativo) e sem campo "destaque" (o selo "mais
// escolhido" saiu em 14/09: zero clientes pagantes). Os nomes em `inclui` usam o vocabulário da vitrine (apps.ts).
// Verificação de promessas pedida pelo dono (eco, 14/09): saíram Loyalty/AR Vision/Express do Crescimento e
// "SLA 99,9%", "Suporte dedicado" e "Integrações enterprise" do Completo — o termo de piloto (§2, §6, §10) nega todos.
// Preço, `lojas` e o que mais entra em cada plano esperam a D5 do dono: não mexer sem ela.

export interface Plano {
  slug: string;
  nome: string;
  preco: string;
  precoNota?: string;
  lojas: string;
  publico: string;
  inclui: string[];     // módulos-destaque listados (não exaustivo)
}

export const planos: Plano[] = [
  {
    slug: 'starter',
    nome: 'Essencial',
    preco: 'R$ 349',
    precoNota: '/mês',
    lojas: '1 loja',
    publico: 'Ótica solo independente',
    inclui: ['Login único', 'Vendas', 'Portal do paciente', 'WhatsApp da loja', 'Financeiro', 'Lentes'],
  },
  {
    slug: 'pro',
    nome: 'Controle',
    preco: 'R$ 899',
    precoNota: '/mês',
    lojas: 'até 5 lojas',
    publico: 'Ótica em crescimento, 2 a 4 lojas',
    inclui: ['Tudo do Essencial', 'Pacientes e receitas', 'Laboratório', 'Estoque', 'Equipe'],
  },
  {
    slug: 'crescimento',
    nome: 'Crescimento',
    preco: 'R$ 1.499',
    precoNota: '/mês',
    lojas: 'até 8 lojas',
    publico: 'Rede média e franquias',
    inclui: ['Tudo do Controle', 'Quem chamar hoje', 'Painel do dono'],
  },
  {
    slug: 'enterprise',
    nome: 'Completo',
    preco: 'Sob consulta',
    lojas: 'lojas ilimitadas',
    publico: 'Rede, cadeia e franqueadora',
    inclui: ['Todos os módulos'],
  },
];

export const demo = {
  nome: 'Demonstração',
  preco: 'Sob agendamento',
  desc: 'Mostramos o Clearix rodando com dados de demonstração, sem compromisso.',
};

// Add-ons mostrados na página (origem: iam.clearix_addons, migration 20260421004618 — a tabela não se toca).
// Preço sempre sob consulta. Fora da página (eco, 14/09): "Inclusão de laboratório parceiro" e "E-commerce" (sem lastro
// no inventário) e "Site institucional" (termo de piloto §2(h); sem caso entregue a ótica cliente).
export const addons = [
  { nome: 'Migração de base legada', desc: 'Importação orçada à parte, depois de examinarmos uma amostra do seu banco. Os dados são conferidos antes de a loja operar.' },
];
