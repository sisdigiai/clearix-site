// Números da landing de vendas (desenho aprovado pelo eco em 14/09/2026, S1–S10).
// FONTE QUE MANDA desde 14/09: Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md (dona: Orquestrador Geral).
// Número ou promessa novos só entram aqui depois de entrarem na folha (eco mede, Geral aprova).
// Tenant Grupo Mello (6292c9f0…), banco mhgbuplnxtfgipbemchb, `deleted_at is null`, datas em America/Sao_Paulo.
// INV = Cockpit/comercial/inventario-clearix-em-uso-na-mello-2026-09-14.md
// ECO = rodapé do orquestrador do eco em clearix-site/_DESENHO_2026-09-14_LANDING.md (correções medidas em 14/09)
//
// Regras que valem para cada linha:
// - OS de 2020→2025 vieram do sistema anterior: "histórico preservado", nunca "processado pelo Clearix" (INV §14.2).
// - Nada de R$ de faturamento da rede enquanto o dono não responder a D8 (ECO).
// - "5.273 parcelas · R$ 1,27 mi" do INV §1d/§15 está ERRADO: mistura carnê com contas a pagar (ECO). Não usar.

import { planos } from './planos';

// Duas datas porque a folha corrigiu dois números em 15/09 (caixas e entregas); os demais são da medição de 14/09.
export const medidoEm = '14 e 15/09/2026';

// CTA único da página (revisão do Geral, ajuste 2). Mesmo texto em todos os botões.
export const CTA = 'Agendar 20 minutos de demonstração';

export interface Numero {
  valor: string;
  label: string;
  fonte: string;
}

// S1 — linha de prova do hero
export const heroProva: Numero[] = [
  { valor: '1.694', label: 'OS em 2026', fonte: 'INV §0: orders com sale_date em 2026 (1.685 criadas no dia da venda)' },
  { valor: '1.528', label: 'parcelas de carnê recebidas em 2026', fonte: 'crm_erp sales_finance.installments, status paid, com order_id, paid_at em 2026, medido 21/09/2026 13:48 BRT' },
  { valor: '132', label: 'caixas abertos e fechados pela equipe em 2026', fonte: 'folha única §1 (eco, 15/09/2026): a contagem antiga (746) somava 372 sessões apagadas, backfill e lojas fechadas' },
];

// S3 — a vida de uma OS. Um número, um lugar (Geral, 16/09): 1.588 entregues e 132 caixas ficam só no rótulo.
export const jornadaOS = [
  { passo: 'Receita', numeros: [
    { valor: '5.569', label: 'lentes oftálmicas ativas', fonte: 'INV §10d' },
    { valor: '274', label: 'lentes de contato', fonte: 'INV §10d' },
  ] },
  { passo: 'Venda', numeros: [
    { valor: '1.694', label: 'OS em 2026', fonte: 'INV §0' },
    { valor: '399', label: 'promissórias emitidas', fonte: 'INV §1d' },
  ] },
  { passo: 'Laboratório', numeros: [
    { valor: '319', label: 'acordos de laboratório', fonte: 'INV §10d' },
    { valor: '341', label: 'OS enviadas ao laboratório por WhatsApp', fonte: 'INV §2d: lab_dispatch_queue status sent, mai→set' },
  ] },
  { passo: 'Acompanhamento', numeros: [
    { valor: '7 a 10 dias', label: 'mediana do pedido à entrega (abr→ago/2026)', fonte: 'INV §2d; jan–mar fora (datas do legado, INV §14.4)' },
  ] },
  { passo: 'Entrega', numeros: [
    { valor: '76', label: 'garantias abertas a partir da OS', fonte: 'INV §1d' },
  ] },
  { passo: 'Fechamento', numeros: [
    { valor: '1.528', label: 'parcelas de carnê recebidas em 2026, até 21/09', fonte: 'idem heroProva (21/09/2026)' },
    { valor: 'R$ 394.734', label: 'recebidos no carnê em 2026, até 21/09', fonte: 'D8 (dono, 21/09): sum(coalesce(paid_amount, amount_total)) das mesmas parcelas; SELECT em crm_erp 21/09/2026 13:48 BRT' },
    { valor: '5.366', label: 'linhas de comissão calculadas', fonte: 'INV §8d: hr_commission_lines abr→set, 9 vendedores' },
  ] },
] as const;

// S5 — "números do banco": só o que o rótulo não tem (Geral, 16/09: um número, um lugar). 3.401 mensagens e 2.410
// linhas conciliadas foram para o rótulo, no topo.
export const provaBanco: Numero[] = [
  { valor: '1.630', label: 'avisos por WhatsApp enviados pelo sistema desde abril', fonte: 'INV §4d: communication_dispatches whatsapp sent (portal, laboratório, entrega) — fato medido, não promessa (ECO item 5)' },
  { valor: '1.562', label: 'links do portal do paciente emitidos', fonte: 'INV §5d, abr→set' },
  { valor: '20.375', label: 'OS no histórico preservado', fonte: 'INV §0 (2020→hoje; 2020–2025 migrado — rodapé obrigatório)' },
];

// S10 — linha de prova sob o botão final (Geral, ajuste 7)
export const provaCtaFinal: Numero = {
  valor: '1.694', label: 'OS em 2026 numa ótica real', fonte: 'INV §0',
};

// S7 — "Pacientes e receitas" (Clinics fica, ECO item 1). Só as receitas entram na linha do módulo.
export const pacientesReceitas: Numero[] = [
  { valor: '652', label: 'receitas registradas no balcão desde abril', fonte: 'INV §14.3: receitas nativas abr→set/2026' },
];

// S9 — FAQ. A mesma lista alimenta a página e o JSON-LD FAQPage.
// Fora: separação de dados entre óticas (D6). "Com o escopo por escrito" e o teto de atendimento só entram quando o
// termo de piloto (D7) voltar assinado.
export const faq = [
  { q: 'E se a minha equipe não se adaptar?', a: 'A implantação começa por uma parte da operação, com a gente acompanhando a equipe no começo. Ninguém recebe um sistema inteiro de uma vez.' },
  { q: 'O processo da minha loja é diferente.', a: 'Por isso a demonstração vem antes da proposta: olhamos como a sua loja trabalha e mostramos onde o Clearix encaixa, e onde não encaixa.' },
  { q: 'Vocês trazem os dados do meu sistema antigo?', a: 'Sim, como serviço orçado à parte, depois de examinarmos uma amostra do seu banco. Os dados são conferidos antes de a loja operar, porque dado errado na origem vira erro no balcão.' },
  { q: 'Funciona para mais de uma loja?', a: 'Sim. Uma rede de óticas da Grande São Paulo opera no Clearix: uma loja vende nele todos os dias e o histórico de outras cinco lojas da mesma rede está preservado no mesmo banco. Cada pessoa vê o que pode, por loja e por papel.' },
  { q: 'Quem me atende quando eu precisar?', a: 'Uma pessoa da DIGIAI, em horário comercial.' },
  { q: 'O Clearix emite nota fiscal?', a: 'Não nesta fase. Preferimos dizer isso agora do que prometer e não entregar.' },
  { q: 'Quanto custa?', a: `Os planos começam em ${planos[0].preco} por mês, sem período grátis. O piloto é pago e combinado depois da demonstração.` },
];

// Total de fichas: FORA da linha do módulo (ECO, 14/09). Se algum dia entrar, só em S5 como "fichas no histórico
// preservado", nunca "pacientes cadastrados no Clearix" (data de importação, INV §14.3). 15.845 é do PODE de 02/09, velho.
export const fichasHistorico: Numero = {
  valor: '15.870', label: 'fichas no histórico preservado', fonte: 'INV §0, 14/09/2026',
};

// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// RÓTULO (ordem do dono, 16/09: "tudo na cara, igual aos rótulos das barras"). Padrão:
// Cockpit/comercial/rotulo-na-cara-2026-09-16.md. Ingredientes = o que o banco libera por pacote
// (iam.clearix_package_apps, conferido pelo eco em 16/09), com o nome do Hub entre parênteses onde difere.
// Quantidades = folha única §1, cada uma com a data. Preço e limites = planos.ts (banco). Em substantivos, sem adjetivo.
// Crescimento: a migration D5 do eco (orq_d5_clearix_packages_texto_e_composicao, 16/09) tirou do banco os 4 módulos
// sem uso (loyalty, ar_vision, express, fone com is_included=false). Rótulo = banco.

export const rotuloMedidoEm = '16/09/2026';

const plano = (slug: string) => planos.find((p) => p.slug === slug)!;

export const rotuloPacotes = [
  {
    plano: plano('starter'),
    base: null as string | null,
    ingredientes: [
      'vendas, carnê e caixa (Vendas)',
      'financeiro (Finance)',
      'WhatsApp da loja (Client)',
      'portal do paciente (Paciente)',
      'login único (Hub)',
    ],
    limites: '1 loja',
  },
  {
    plano: plano('pro'),
    base: 'tudo do Essencial',
    ingredientes: [
      'pacientes e receitas (Clinics)',
      'estoque',
      'laboratório (DCL)',
      'equipe: ponto, escalas, comissão (RH)',
    ],
    limites: 'até 4 lojas',
  },
  {
    plano: plano('crescimento'),
    base: 'tudo do Controle',
    ingredientes: [
      'quem chamar hoje (Marketing)',
      'painel do dono (BI)',
    ],
    limites: 'até 8 lojas',
  },
  {
    plano: plano('enterprise'),
    // banco: os 17 módulos. Sem contar nem enumerar os que a casa não vende como argumento (Geral, 16/09).
    base: null,
    ingredientes: [
      'todos os módulos do Clearix, inclusive lentes (Lens) e comparação de preço e prazo entre laboratórios',
    ],
    limites: 'lojas sob consulta',
  },
];

// Folha única §1. Só estes seis, cada um com a data da medição.
export const rotuloQuantidades = [
  { valor: '1.694', label: 'OS em 2026', data: '14/09' },
  { valor: '1.588', label: 'OS de 2026 entregues em 2026', data: '15/09' },
  { valor: '7 a 10 dias', label: 'do pedido à entrega (mediana, abr→ago/2026)', data: '14/09' },
  { valor: '132', label: 'caixas abertos e fechados pela equipe em 2026', data: '15/09' },
  { valor: '2.410', label: 'linhas de extrato bancário conciliadas em 2026', data: '14/09' },
  { valor: '3.401', label: 'mensagens de WhatsApp em 30 dias', data: '14/09' },
];

export const rotuloOrigem = 'Medido numa rede de óticas da casa, com 1 loja vendendo todo dia.';

// "No B.S.": o que não tem e o que não está incluído (folha §2–§3, termo de piloto §2).
export const rotuloNaoTem = [
  'emissão de nota fiscal (NF-e)',
  'conciliação sozinha: o sistema sugere, a loja confirma',
  'implantação e migração na mensalidade: orçadas à parte, depois de examinarmos uma amostra do seu banco',
  'período grátis',
  'mais de um piloto por vez',
  'cliente externo pagante ainda: a prova é a operação da casa',
];

export const rotuloPreco = 'Mensal. Cobrança combinada na proposta. Completo sob consulta.';

// Escrito como combinado, não como provado (eco, 16/09).
export const rotuloDepois = [
  'pedido gravado',
  'a gente responde em horário comercial',
  'demonstração de 20 minutos',
  'olhamos o seu processo',
  'piloto pago e assistido, um por vez',
];

// "O cliente que não volta" (Geral, 24/09): frases prontas da folha de mesa (Cockpit/comercial/folha-de-mesa-clearix-2026-09-14.md,
// §O cliente que não volta), medidas pelo eco em 24/09/2026 01h55 na base da casa. O site usa SÓ estas duas frases (o total histórico
// de 3.401 fica fora do público: inclui 2022–2025 do sistema anterior). Fonte pública: "uma rede de óticas da casa", nunca o nome da rede.
export const retornoReceita: { valor: string; label: string; data: string } | null = {
  valor: '926',
  label: 'clientes com a receita vencida no último ano; 912 deles sem nenhum contato da loja em 90 dias.',
  data: '24/09/2026',
};
export const retornoProximos: { valor: string; label: string; data: string } | null = {
  valor: '70',
  label: 'clientes vencem a receita nos próximos 30 dias; 66 ainda sem contato.',
  data: '24/09/2026',
};
// Método e ressalva da folha: "vencida" = data da receita + 12 meses (só 17 de 5.932 têm validade preenchida); "sem contato" = nenhuma
// ligação registrada nem WhatsApp enviado pela loja pelo sistema em 90 dias. Ligação sem registro e WhatsApp fora das linhas integradas não entram.
export const retornoNota =
  'Vencida = data da receita + 12 meses. Sem contato = nenhuma ligação registrada nem WhatsApp enviado pela loja pelo sistema em 90 dias; ligação sem registro não entra.';

// Captura real desfocada do módulo "Quem chamar hoje" (06-prints/aprovadas → public/capturas/, com AVIF/WebP via scripts/gerar-imagens.mjs).
// Null até passar na conferência (folha §7). Sem captura, a seção mostra o cartão de texto do módulo.
export const capturaQuemChamar: { arquivo: string; alt: string; w: number; h: number } | null = {
  // Aprovada em 24/09/2026 (Cockpit/comercial/06-prints/aprovadas/, v2 com as contagens desfocadas); cópia reduzida para 1600 px.
  arquivo: 'marketing-lista-de-hoje_desfocado',
  alt: 'Lista Quem chamar hoje: clientes com a faixa esfriando e o botão Registrar; nomes, contatos e contagens desfocados',
  w: 1600,
  h: 620,
};

// Legendas das capturas (folha única §7; tela real desfocada; arquivo só depois de passar em 06-prints/aprovadas).
// Comparador: frase pública autorizada na folha §2 (versão final de 17/09, copiada textual da folha), sempre que a ORDEM aparecer. A ordem
// medida pesa preço×7, prazo×2, certeza do catálogo×1 e preferência da loja×10 — não é qualidade de laboratório.
export const legendaComparacao =
  'Mostra preço e prazo da mesma lente em cada laboratório; a ordem pesa preço, prazo e a preferência que a própria loja dá a cada fornecedor. Não avalia qualidade nem histórico do laboratório.';
