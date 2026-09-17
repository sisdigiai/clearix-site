// Pacotes comerciais Clearix. FONTE: o banco crm_erp (mhgbuplnxtfgipbemchb) — iam.clearix_packages (preço, limites),
// iam.clearix_package_apps (módulos liberados) e iam.clearix_addons. O site DERIVA do banco: se a casa quiser vender
// diferente, muda o banco primeiro (regra do Geral, 15/09). Cópia conferida por SELECT em 15/09/2026 (`conferidoEm`);
// medição em clearix-site/_PACOTES_BANCO_VS_SITE_2026-09-15.md.
//
// Sem contagem de apps (D3, 08/09: falar em módulos, sem contar aplicativo) e sem campo "destaque" (o selo "mais
// escolhido" saiu em 14/09: zero clientes pagantes). Os nomes em `inclui` usam o vocabulário da vitrine (apps.ts).
// Verificação de promessas pedida pelo dono (eco, 14/09): saíram Loyalty/AR Vision/Express do Crescimento e
// "SLA 99,9%", "Suporte dedicado" e "Integrações enterprise" do Completo — o termo de piloto (§2, §6, §10) nega todos.
// Preço, `lojas` e o que mais entra em cada plano esperam a D5 do dono: não mexer sem ela.

export const conferidoEm = '15/09/2026';

export interface Plano {
  slug: string;
  nome: string;
  preco: string;
  precoNota?: string;
  lojas: string;
  limites?: string;     // max_users / max_patients / max_orders_per_month do banco, como estão
  publico: string;
  inclui: string[];     // módulos liberados no banco, no vocabulário da vitrine
}

export const planos: Plano[] = [
  {
    // banco: hub, vendas, paciente, client, finance — sem lens (P1, Geral 15/09)
    slug: 'starter',
    nome: 'Essencial',
    preco: 'R$ 349',
    precoNota: '/mês',
    lojas: '1 loja',
    limites: 'até 3 usuários · 500 pacientes · 50 OS por mês',
    publico: 'Ótica solo independente',
    inclui: ['Login único', 'Vendas', 'Portal do paciente', 'WhatsApp da loja', 'Financeiro'],
  },
  {
    // banco: + clinics, dcl, estoque, rh
    slug: 'pro',
    nome: 'Controle',
    preco: 'R$ 899',
    precoNota: '/mês',
    lojas: 'até 4 lojas',
    limites: 'até 15 usuários · 10.000 pacientes',
    publico: 'Ótica em crescimento, 2 a 4 lojas',
    inclui: ['Tudo do Essencial', 'Pacientes e receitas', 'Laboratório', 'Estoque', 'Equipe'],
  },
  {
    // banco: + bi, marketing. D5 (16/09) tirou fone, loyalty, ar_vision e express do pacote (is_included=false)
    slug: 'crescimento',
    nome: 'Crescimento',
    preco: 'R$ 1.499',
    precoNota: '/mês',
    lojas: 'até 8 lojas',
    limites: 'até 40 usuários',
    publico: 'Rede média e franquias',
    inclui: ['Tudo do Controle', 'Quem chamar hoje', 'Painel do dono'],
  },
  {
    // banco: tudo, inclusive lens e import. A comparação de preço e prazo entre laboratórios usa lens + dcl: só aqui (P2)
    slug: 'enterprise',
    nome: 'Completo',
    preco: 'Sob consulta',
    lojas: 'lojas ilimitadas',
    publico: 'Rede, cadeia e franqueadora',
    inclui: ['Tudo do Crescimento', 'Lentes', 'Comparação de preço e prazo entre laboratórios'],
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
