// Números da landing de vendas (desenho aprovado pelo eco em 14/09/2026, S1–S10).
// FONTE QUE MANDA desde 14/09: Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md (dona: Orquestrador Geral).
// Número ou promessa novos só entram aqui depois de entrarem na folha (eco mede, Geral aprova).
// Tenant Grupo Mello (6292c9f0…), banco mhgbuplnxtfgipbemchb, `deleted_at is null`, datas em America/Sao_Paulo.
// INV = Cockpit/comercial/inventario-clearix-em-uso-na-mello-2026-09-14.md
// ECO = rodapé do orquestrador do eco em clearix-site/_DESENHO_2026-09-14_LANDING.md (correções medidas em 14/09)
//
// Ainda NÃO é importado por nenhuma página: o build está travado até o portão 135.
// Regras que valem para cada linha:
// - OS de 2020→2025 vieram do sistema anterior: "histórico preservado", nunca "processado pelo Clearix" (INV §14.2).
// - Nada de R$ de faturamento da rede enquanto o dono não responder a D8 (ECO).
// - "5.273 parcelas · R$ 1,27 mi" do INV §1d/§15 está ERRADO: mistura carnê com contas a pagar (ECO). Não usar.

import { planos } from './planos';

export const medidoEm = '14/09/2026';

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
  { valor: '1.477', label: 'parcelas de carnê recebidas em 2026', fonte: 'ECO: installments pagas em 2026 com order_id de OS viva' },
  { valor: '746', label: 'caixas fechados em 2026', fonte: 'ECO / INV §1d: cash_sessions com closed_at, opened_at >= 2026-01-01' },
];

// S3 — a vida de uma OS (um número por passo)
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
    { valor: '1.955', label: 'entregas registradas em 2026', fonte: 'ECO: inclui OS de anos anteriores entregues em 2026' },
    { valor: '76', label: 'garantias abertas a partir da OS', fonte: 'INV §1d' },
  ] },
  { passo: 'Fechamento', numeros: [
    { valor: '1.477', label: 'parcelas de carnê recebidas', fonte: 'ECO' },
    { valor: '746', label: 'caixas fechados', fonte: 'ECO' },
    { valor: '5.366', label: 'linhas de comissão calculadas', fonte: 'INV §8d: hr_commission_lines abr→set, 9 vendedores' },
  ] },
] as const;

// S5 — "números do banco": 5 cartões, nenhum repete o hero (revisão do Geral, ajuste 1).
export const provaBanco: Numero[] = [
  { valor: '3.401', label: 'mensagens de WhatsApp trocadas em 30 dias', fonte: 'INV §0/§4d: 2.562 recebidas + 839 enviadas' },
  { valor: '1.630', label: 'avisos por WhatsApp enviados pelo sistema desde abril', fonte: 'INV §4d: communication_dispatches whatsapp sent (portal, laboratório, entrega) — fato medido, não promessa (ECO item 5)' },
  { valor: '1.562', label: 'links do portal do paciente emitidos', fonte: 'INV §5d, abr→set' },
  { valor: '2.410', label: 'linhas de extrato bancário conciliadas em 2026', fonte: 'ECO / INV §3d (6.471 importadas; não usar como "conferidas")' },
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
