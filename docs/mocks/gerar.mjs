// Gera os mocks da home (A, B, C, D) em tema escuro e claro, a versão autônoma de cada um e os índices.
// Uso (da raiz do repo): node docs/mocks/gerar.mjs   ->   docs/mocks/*.html
// Números: só os de src/data/landing.ts (folha única). O que não está medido entra como <span class="tag tag-medir">.
// Tema claro = html[data-tema='claro'] em mock.css (mesmos tokens do design system do site). Autônomo = CSS, fontes e imagens embutidos (abre no celular).
import { writeFileSync, readFileSync } from 'node:fs';

const CAP = '../../public/capturas/';
const pic = (nome, alt, w = 1600, h = 553, lazy = true) =>
  `<picture><source srcset="${CAP}${nome}-800.avif 800w, ${CAP}${nome}.avif ${w}w" sizes="(min-width:1024px) 1024px, 100vw" type="image/avif"><img src="${CAP}${nome}.png" width="${w}" height="${h}" ${lazy ? 'loading="lazy"' : ''} alt="${alt}"></picture>`;
const KANBAN = (lazy) => pic('dcl-kanban-atraso_desfocado', 'Kanban de laboratório com um pedido vencido há 16 dias', 1600, 553, lazy);
const ENTREGA = pic('vendas-entrega-bloqueada_desfocado', 'Entregas pendentes: pedidos com saldo em aberto e sem carnê mostram Pagamento Pendente', 1600, 746);
const RECIBO = pic('vendas-baixa-carne-recibo_desfocado-v2', 'Parcelas do carnê e segunda via do recibo', 1600, 692);
const LABS = (lazy = true) => pic('dcl-comparacao-labs_desfocado', 'Top 5 opções da mesma lente em três laboratórios, ordenadas por preço e prazo, com custos desfocados', 1440, 850, lazy);
const LISTA = pic('marketing-lista-de-hoje_desfocado', 'Lista Quem chamar hoje: clientes com a faixa esfriando e o botão Registrar; nomes, contatos e contagens desfocados', 1600, 620);

const CTA = 'Agendar 20 minutos de demonstração';
const LEGENDA_COMPARADOR = 'Mostra preço e prazo da mesma lente em cada laboratório; a ordem pesa preço, prazo e a preferência que a própria loja dá a cada fornecedor. Não avalia qualidade nem histórico do laboratório.';
const DESFOQUE = 'Tela real de uma rede de óticas da Grande São Paulo, com dados de cliente, OS, valores e usuário desfocados.';
const FRASE_DEMO = 'Sem período grátis e sem demo automática. A demonstração é ao vivo, em 20 minutos, com os números de uma ótica de verdade (dados desfocados). Piloto pago e assistido, a partir de R$ 349/mês, um piloto por vez.';
const NOTA_RETORNO = 'Vencida = data da receita + 12 meses. Sem contato = nenhuma ligação registrada nem WhatsApp enviado pela loja pelo sistema em 90 dias; ligação sem registro não entra.';

const barra = (nome, hipotese, medir, tema) => `<div class="mockbar">MOCK ${nome} · TEMA ${tema === 'claro' ? 'CLARO' : 'ESCURO (LENS)'} · NÃO PUBLICADO · hipótese: ${hipotese} · como medir: ${medir} · <a href="index.html">voltar ao índice</a></div>`;
const topo = `<header class="top"><div class="wrap"><a class="logo" href="#">Clearix</a><nav class="nav"><a href="#">Ecossistema</a><a href="#">Planos</a><a href="#">Para quem</a><a href="#">Contato</a></nav><a class="btn btn-outline" href="#" data-cta="header_entrar">Entrar →</a></div></header>`;

const dores = [
  ['O cliente liga para perguntar se o óculos chegou, e ninguém sabe responder sem ligar para o laboratório.', 'Cada OS aparece por etapa, com alerta quando atrasa.'],
  ['O óculos saiu com saldo em aberto e ninguém percebeu.', 'A entrega não passa enquanto houver saldo sem carnê.'],
  ['O carnê mora num caderno e a parcela paga não foi baixada.', 'Carnê próprio da loja, com baixa e recibo na hora.'],
  ['O caixa fecha em planilha, não bate com o banco, e o dono só descobre no fim do mês.', 'Caixa conferido, extrato conciliado e o painel do dono mostrando o dia.'],
];
const blocoDores = (titulo = 'O problema não é a equipe. É o dado espalhado.') => `
<section><div class="wrap"><p class="label mb-4">Se isso acontece na sua loja</p><h2 class="mb-10" style="max-width:640px">${titulo}</h2>
<div class="grid cols-2">${dores.map(([d, r]) => `<div><p class="dim mb-4">✕ ${d}</p><p>→ ${r}</p></div>`).join('')}</div></div></section>`;

const passos = [
  ['Receita', 'A venda começa pelo grau. O sistema filtra as lentes que servem para aquela receita e barra combinação impossível antes de fechar.'],
  ['Venda', 'À vista ou no carnê, no mesmo fluxo, com contrato e promissória gerados na hora.'],
  ['Laboratório', 'Antes de comprar a lente, veja preço e prazo lado a lado entre os laboratórios. A escolha é sua. A OS segue para o laboratório pelo WhatsApp.'],
  ['Acompanhamento', 'Kanban por etapa, linha do tempo de cada pedido e alerta de atraso. O atraso aparece na tela antes de virar ligação do cliente.'],
  ['Entrega', 'Só sai quitada ou com carnê. Garantia e segundo par ficam ligados à OS original.'],
  ['Fechamento', 'Parcela baixada, caixa conferido e comissão calculada da venda entregue, não de planilha.'],
];
const blocoJornada = () => `
<section class="deep"><div class="wrap"><p class="label mb-4">Como funciona</p><h2 class="mb-10" style="max-width:640px">Uma OS, do grau à comissão, sem redigitar nada.</h2>
<div class="grid cols-3">${passos.map(([p, t], i) => `<div><span class="label-sm" style="color:var(--cyan-bright)">${String(i + 1).padStart(2, '0')}</span><h3 class="mb-2" style="margin-top:8px">${p}</h3><p class="muted">${t}</p></div>`).join('')}</div></div></section>`;

const blocoComparador = () => `
<section><div class="wrap"><div class="card mb-10" style="max-width:860px"><p class="label mb-4">O que a gente mostra primeiro na demonstração</p><h2 class="mb-4">A mesma lente, em laboratórios diferentes. Veja preço e prazo lado a lado antes de comprar.</h2><p class="lead">Compara preço e prazo. Quem decide é você. Não avaliamos qualidade de laboratório; esse julgamento continua sendo seu.</p></div>
<figure class="shot" style="max-width:1024px">${LABS()}<figcaption>${LEGENDA_COMPARADOR} ${DESFOQUE.replace('dados de cliente, OS, valores e usuário', 'custos do acordo')}</figcaption></figure></div></section>`;

const blocoProva = () => `
<section class="deep"><div class="wrap"><p class="label mb-4">Operação real · medido em 14 e 15/09/2026</p><h2 class="mb-6">Números do banco, não de pesquisa.</h2><p class="lead mb-10">Em vez de logotipos, mostramos o que o sistema registrou numa ótica real, com data.</p>
<div class="grid cols-3"><div><span class="num">1.630<small>avisos por WhatsApp enviados pelo sistema desde abril</small></span></div><div><span class="num">1.562<small>links do portal do paciente emitidos</small></span></div><div><span class="num">20.375<small>OS no histórico preservado</small></span></div></div>
<p class="label-sm mt-6" style="text-transform:none;letter-spacing:.02em">OS de 2020 a 2025 vieram do sistema anterior: é histórico preservado, não processado pelo Clearix. Números do banco de produção, sem dado pessoal.</p></div></section>`;

const pacotes = [
  ['Essencial', '1 loja', ['vendas, carnê e caixa (Vendas)', 'financeiro (Finance)', 'WhatsApp da loja (Client)', 'portal do paciente (Paciente)', 'login único (Hub)'], 'R$ 349/mês'],
  ['Controle', 'até 4 lojas', ['tudo do Essencial +', 'pacientes e receitas (Clinics)', 'estoque', 'laboratório (DCL)', 'equipe: ponto, escalas, comissão (RH)'], 'R$ 899/mês'],
  ['Crescimento', 'até 8 lojas', ['tudo do Controle +', 'quem chamar hoje (Marketing)', 'painel do dono (BI)'], 'R$ 1.499/mês'],
  ['Completo', 'lojas sob consulta', ['todos os módulos do Clearix, inclusive lentes (Lens) e comparação de preço e prazo entre laboratórios'], 'Sob consulta'],
];
const blocoRotulo = () => `
<section id="rotulo"><div class="wrap"><div class="rotulo"><header><h2>Rótulo do Clearix</h2><span class="label-sm">Rótulo medido em 16/09/2026</span></header>
<div class="bloco"><p class="label-sm mb-4" style="color:var(--off)">Ingredientes por pacote</p><div class="pacotes">${pacotes.map(([n, l, ing]) => `<div><b>${n}</b><span class="lojas">${l}</span><ul>${ing.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div></div>
<div class="tres"><div class="bloco"><p class="label-sm mb-4" style="color:var(--off)">Quantidades</p><ul>${[['1.694', 'OS em 2026', '14/09'], ['1.588', 'OS de 2026 entregues em 2026', '15/09'], ['7 a 10 dias', 'do pedido à entrega (mediana, abr→ago/2026)', '14/09'], ['132', 'caixas abertos e fechados pela equipe em 2026', '15/09'], ['2.410', 'linhas de extrato bancário conciliadas em 2026', '14/09'], ['3.401', 'mensagens de WhatsApp em 30 dias', '14/09']].map(([v, l, d]) => `<li><b class="num" style="font-size:16px">${v}</b> ${l} <span class="date">${d}</span></li>`).join('')}</ul><p class="muted mt-4" style="font-size:13px">Medido numa rede de óticas da casa, com 1 loja vendendo todo dia.</p></div>
<div class="bloco"><p class="label-sm mb-4" style="color:var(--off)">O que não tem</p><ul>${['emissão de nota fiscal (NF-e)', 'conciliação sozinha: o sistema sugere, a loja confirma', 'implantação e migração na mensalidade: orçadas à parte, depois de examinarmos uma amostra do seu banco', 'período grátis', 'mais de um piloto por vez', 'cliente externo pagante ainda: a prova é a operação da casa'].map((i) => `<li><span class="x">✕</span>${i}</li>`).join('')}</ul></div>
<div class="bloco"><p class="label-sm mb-4" style="color:var(--off)">Depois de pedir</p><ul>${['pedido gravado', 'a gente responde em horário comercial', 'demonstração de 20 minutos', 'olhamos o seu processo', 'piloto pago e assistido, um por vez'].map((i, n) => `<li><b class="label-sm" style="color:var(--cyan-bright)">${String(n + 1).padStart(2, '0')}</b>&nbsp; ${i}</li>`).join('')}</ul></div></div></div></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">Como começar</p><h2 class="mb-10">Primeiro você vê. Depois decide.</h2>
<div class="grid cols-3 mb-8">${[['Demonstração assistida', 'Vinte minutos, com a gente na tela: da receita à entrega, no fluxo que a sua loja já tem.'], ['Olhar o seu processo', 'Antes de propor qualquer coisa, entendemos como a sua loja trabalha hoje.'], ['Piloto pago e assistido', 'Implantamos com a gente acompanhando. O que você usar define o que fica.']].map(([t, d], i) => `<div><span class="label-sm" style="color:var(--cyan-bright)">Fase 0${i + 1}</span><h3 class="mb-2" style="margin-top:8px">${t}</h3><p class="muted">${d}</p></div>`).join('')}</div>
<div class="grid cols-4 precos">${pacotes.map(([n, , , p]) => `<div><b>${n}</b><span class="v">${p}</span></div>`).join('')}</div>
<p class="muted mt-4" style="font-size:14px">Preço público, sem letra miúda. ${FRASE_DEMO}</p>
<div class="mt-6"><a class="btn btn-primary" href="#" data-cta="oferta">${CTA}</a></div></div></section>`;

const faq = [
  ['E se a minha equipe não se adaptar?', 'A implantação começa por uma parte da operação, com a gente acompanhando a equipe no começo. Ninguém recebe um sistema inteiro de uma vez.'],
  ['O processo da minha loja é diferente.', 'Por isso a demonstração vem antes da proposta: olhamos como a sua loja trabalha e mostramos onde o Clearix encaixa, e onde não encaixa.'],
  ['Vocês trazem os dados do meu sistema antigo?', 'Sim, como serviço orçado à parte, depois de examinarmos uma amostra do seu banco. Os dados são conferidos antes de a loja operar, porque dado errado na origem vira erro no balcão.'],
  ['Funciona para mais de uma loja?', 'Sim. Uma rede de óticas da Grande São Paulo opera no Clearix: uma loja vende nele todos os dias e o histórico de outras cinco lojas da mesma rede está preservado no mesmo banco. Cada pessoa vê o que pode, por loja e por papel.'],
  ['Quem me atende quando eu precisar?', 'Uma pessoa da DIGIAI, em horário comercial.'],
  ['O Clearix emite nota fiscal?', 'Não nesta fase. Preferimos dizer isso agora do que prometer e não entregar.'],
  ['Quanto custa?', 'Os planos começam em R$ 349 por mês, sem período grátis. O piloto é pago e combinado depois da demonstração.'],
];
const blocoFaqCta = () => `
<section><div class="wrap split" style="align-items:start"><div><p class="label mb-4">Dúvidas</p><h2>Perguntas de quem está pensando em trocar de sistema</h2></div><div>${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>
<section class="deep" style="text-align:center"><div class="wrap"><h2 class="mb-4" style="max-width:640px;margin-inline:auto">Vinte minutos para ver a sua ótica da receita à entrega.</h2><p class="lead mb-8" style="margin-inline:auto">Agende uma demonstração assistida. Se não fizer sentido para a sua loja, a gente fala isso na hora.</p><a class="btn btn-primary" href="#" data-cta="final">${CTA}</a><p class="label-sm mt-6" style="text-transform:none">1.694 OS em 2026 numa ótica real · números do banco, 14 e 15/09/2026</p></div></section>
<footer><div class="wrap"><b style="color:var(--off)">Clearix</b> · Um produto DIGIAI<small>© 2026 DIGIAI ÓTICA E TECNOLOGIA LTDA · CNPJ 12.549.582/0001-49 · Rua General Francisco Glicério, 940, Térreo, Sala 02 · Jardim Guaio · Suzano/SP · CEP 08674-000</small></div></footer>`;

const head = (titulo, tema) => `<!doctype html><html lang="pt-BR"${tema === 'claro' ? ' data-tema="claro"' : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${titulo}</title><link rel="stylesheet" href="mock.css"></head><body>`;
const fim = '</body></html>';

// ───────── MOCK A — painel de prova primeiro (Dataweb + CRMBonus) ─────────
const mockA = (tema) => head('Mock A — Painel de prova primeiro', tema) + barra('A · PAINEL DE PROVA PRIMEIRO', 'quem vê números medidos e a própria situação (porte) nos primeiros segundos pede a demonstração mais vezes', 'cta_id: hero, perfil_1loja, perfil_2a4, perfil_rede, tour_passo_1..3 (metadata dos eventos clearix_cta_click já existentes)', tema) + topo + `
<section class="hero" style="border-bottom:1px solid var(--line)"><div class="wrap split">
<div><p class="label mb-6">Sistema para óticas · feito dentro de uma ótica</p><h1 class="mb-6">De orçamento a entrega, <span class="em">sem perder ninguém no caminho</span>.</h1><p class="lead mb-8">Venda, carnê, laboratório, WhatsApp e financeiro da ótica no mesmo sistema. O mesmo que roda hoje no balcão de uma ótica de verdade.</p>
<p class="label-sm mb-4">Qual é o tamanho da sua ótica?</p>
<div class="perfis mb-8"><a class="perfil" href="#" data-cta="perfil_1loja"><b>1 loja</b><span>Ótica solo. A partir de R$ 349/mês</span></a><a class="perfil" href="#" data-cta="perfil_2a4"><b>2 a 4 lojas</b><span>Ótica em crescimento. R$ 899/mês</span></a><a class="perfil" href="#" data-cta="perfil_rede"><b>Rede</b><span>Até 8 lojas ou mais. Ver planos</span></a></div>
<a class="btn btn-primary" href="#" data-cta="hero">${CTA}</a> &nbsp; <a class="link" href="#" data-cta="hero_whatsapp">ou fale com a gente no WhatsApp →</a></div>
<div class="card"><p class="label-sm mb-4">Numa ótica real · medido em 2026</p>
<div class="grid cols-2" style="border-radius:var(--r-lg)"><div><span class="num">1.694<small>OS em 2026 <span class="date">14/09</span></small></span></div><div><span class="num">1.588<small>OS de 2026 entregues em 2026 <span class="date">15/09</span></small></span></div><div><span class="num">R$ 394.734<small>recebidos no carnê em 2026, em 1.528 parcelas, até 21/09</small></span></div><div><span class="num">132<small>caixas abertos e fechados pela equipe <span class="date">15/09</span></small></span></div></div>
<p class="muted mt-4" style="font-size:13px">Medido numa rede de óticas da casa, com 1 loja vendendo todo dia. Sem dado pessoal.</p></div></div>
<div class="wrap mt-10"><figure class="shot" style="max-width:1024px">${KANBAN(false)}<figcaption>${DESFOQUE} O pedido atrasado aparece na etapa, com os dias de atraso no cartão.</figcaption></figure></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">Tour guiado · sem cadastro</p><h2 class="mb-4" style="max-width:720px">Veja o sistema em 3 telas reais antes de agendar.</h2><p class="lead mb-10">Capturas de uma ótica que usa o Clearix todos os dias, com dados pessoais desfocados.</p>
<div class="grid cols-3" style="background:none;border:0;gap:24px">${[['1 · Acompanhar', KANBAN(true), 'O atraso aparece na etapa, antes de virar ligação do cliente.', 'tour_passo_1'], ['2 · Entregar', ENTREGA, 'Com saldo em aberto e sem carnê, o pedido não sai.', 'tour_passo_2'], ['3 · Fechar', RECIBO, 'Parcela baixada e recibo na hora (2ª via exibida na tela).', 'tour_passo_3']].map(([t, i, d, c]) => `<figure class="shot" style="padding:0;background:var(--ink-surface)"><div>${i}</div><figcaption><b style="color:var(--off)">${t}</b><br>${d} <a class="link" href="#" data-cta="${c}">Ampliar →</a></figcaption></figure>`).join('')}</div>
<p class="mt-6 muted" style="font-size:15px;max-width:720px">${FRASE_DEMO}</p></div></section>
${blocoDores()}${blocoJornada()}${blocoComparador()}${blocoProva()}${blocoRotulo()}${blocoFaqCta()}` + fim;

// ───────── MOCK B — o cliente que não volta (Dataweb + caderno). Igual ao que está no ar desde 24/09 ─────────
const mockB = (tema) => head('Mock B — O cliente que não volta', tema) + barra('B · O CLIENTE QUE NÃO VOLTA', 'começar pela dor de retenção (cliente que some quando a receita vence) prende o dono da ótica mais que começar pela lista de módulos (esta é a versão que foi ao ar em 24/09)', 'cta_id: hero, quem_chamar; comparar pedidos de demonstração contra a home anterior', tema) + topo + `
<section class="hero"><div class="wrap split">
<div><p class="label mb-6">Sistema para óticas · feito dentro de uma ótica</p><h1 class="mb-6">Quantos clientes compraram de você e <span class="em">nunca mais voltaram</span>?</h1><p class="lead mb-8">Receita vencida, cliente que sumiu, orçamento que ninguém retomou. O Clearix mostra, todo dia, quem chamar de volta, sem repetir quem já foi chamado. E é o mesmo sistema que cuida da venda, do carnê, do laboratório e do WhatsApp da loja.</p>
<a class="btn btn-primary" href="#" data-cta="hero">${CTA}</a> &nbsp; <a class="link" href="#" data-cta="hero_whatsapp">ou fale com a gente no WhatsApp →</a></div>
<div class="card"><p class="label-sm mb-4">Na base de uma ótica real</p><span class="num" style="font-size:44px">926</span><p class="dim mt-4">clientes com a receita vencida no último ano; 912 deles sem nenhum contato da loja em 90 dias.</p><p class="muted mt-4" style="font-size:13px">Medido em 24/09/2026, numa rede de óticas da casa. Sem dado pessoal. ${NOTA_RETORNO}</p></div></div>
<div class="wrap mt-10"><figure class="shot" style="max-width:1024px">${KANBAN(false)}<figcaption>${DESFOQUE} O pedido atrasado aparece na etapa, com os dias de atraso no cartão.</figcaption></figure></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">Quem chamar hoje</p><h2 class="mb-4" style="max-width:720px">Uma lista por dia, sem repetir quem já foi chamado.</h2><p class="lead mb-4">Lista diária de clientes para retomar contato, sem repetir quem já foi chamado. É uma lista para a sua equipe agir: sem disparo em massa e sem recall por IA.</p>
<p class="dim mb-4" style="border-left:2px solid var(--cyan-bright);padding-left:16px;font-size:18px"><b class="num" style="font-size:18px">70</b> clientes vencem a receita nos próximos 30 dias; 66 ainda sem contato.<span class="date" style="display:block">Medido em 24/09/2026, numa rede de óticas da casa.</span></p>
<p class="muted mb-8">Módulo do plano Crescimento (R$ 1.499/mês), junto do painel do dono.</p>
<figure class="shot" style="max-width:1024px">${LISTA}<figcaption>Tela real de uma rede de óticas da Grande São Paulo, com nome, contato e contagens desfocados.</figcaption></figure></div></section>
${blocoDores()}${blocoJornada()}${blocoComparador()}${blocoProva()}${blocoRotulo()}${blocoFaqCta()}` + fim;

// ───────── MOCK C — antes e depois do balcão (ssOtica) ─────────
const mockC = (tema) => head('Mock C — Antes e depois do balcão', tema) + barra('C · ANTES E DEPOIS DO BALCÃO', 'contrastar papel/planilha com a tela real, com a voz de um dono de ótica e uma isca de conteúdo, atrai também quem ainda não quer agendar', 'cta_id: antes_depois_cta, isca_carne, depoimento_cta; leads da isca precisam de código novo no catálogo do digiai', tema) + topo + `
<section class="hero"><div class="wrap"><p class="label mb-6">Sistema para óticas · feito dentro de uma ótica</p><h1 class="mb-6" style="max-width:820px">Do caderno e da planilha <span class="em">à tela que mostra tudo</span>.</h1><p class="lead mb-8">Venda, carnê, laboratório, WhatsApp e financeiro da ótica no mesmo sistema, o mesmo que roda hoje no balcão de uma ótica de verdade.</p><a class="btn btn-primary" href="#" data-cta="antes_depois_cta">${CTA}</a> &nbsp; <a class="link" href="#" data-cta="hero_whatsapp">ou fale com a gente no WhatsApp →</a>
<div class="split mt-10" style="align-items:stretch"><div class="antes card"><p class="label-sm mb-4" style="color:var(--amber)">Antes</p><ul style="list-style:none">${dores.map(([d]) => `<li class="dim" style="padding:8px 0">✕ ${d}</li>`).join('')}</ul></div>
<div class="depois"><p class="label mb-4">Depois</p><figure class="shot">${KANBAN(false)}<figcaption>${DESFOQUE}</figcaption></figure><ul class="mt-4" style="list-style:none">${dores.map(([, r]) => `<li style="padding:6px 0">→ ${r}</li>`).join('')}</ul></div></div></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">Quem usa</p><h2 class="mb-8" style="max-width:640px">A voz de quem toca a loja.</h2>
<div class="placeholder" style="max-width:760px"><p style="font-size:20px;color:var(--off)">“[frase do dono da ótica da casa, sobre antes e depois do balcão]”</p><p class="mt-4 muted">[nome e função, com autorização por escrito]</p><p class="mt-4"><span class="tag tag-placeholder">depoimento a coletar</span> <span class="muted" style="font-size:13px">aprovado pelo dono; hoje não há cliente externo, então a voz é a da própria operação da casa e deve ser dita assim ("uma rede de óticas da Grande São Paulo").</span></p></div></div></section>
<section><div class="wrap"><p class="label mb-4">Para começar sem agendar</p><h2 class="mb-4" style="max-width:640px">Três guias curtos, feitos com a rotina da nossa ótica.</h2><p class="lead mb-10">Conteúdo para quem ainda não quer falar com ninguém, ligado às dores da loja.</p>
<div class="iscas">${[['Guia do carnê próprio', 'Como montar e cobrar o carnê da loja sem caderno.'], ['Da venda ao caixa sem furos', 'O que conferir todo dia para o caixa bater com o banco.'], ['Quem chamar e quando', 'Como não deixar o cliente sumir quando a receita vence.']].map(([t, d]) => `<div class="card" style="padding:24px"><h3 class="mb-2">${t}</h3><p class="muted mb-4">${d}</p><span class="tag tag-placeholder">conteúdo a produzir</span> <a class="link" href="#" data-cta="isca_carne" style="font-size:14px">Baixar →</a></div>`).join('')}</div><p class="muted mt-6" style="font-size:14px">Os números dos guias vêm da folha única; nada de estatística de terceiros sem fonte.</p></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">Na tela</p><h2 class="mb-10">O que a equipe vê no dia a dia.</h2><div class="grid cols-2" style="background:none;border:0;gap:24px">${[[ENTREGA, 'Entrega: com saldo em aberto e sem carnê, o pedido não sai.'], [RECIBO, 'Fechamento: parcela baixada e recibo na hora (2ª via exibida na tela).']].map(([i, c]) => `<figure class="shot" style="padding:0"><div>${i}</div><figcaption>${c}</figcaption></figure>`).join('')}</div></div></section>
${blocoJornada()}${blocoComparador()}${blocoProva()}${blocoRotulo()}${blocoFaqCta()}` + fim;

// ───────── MOCK D — dinheiro: "a mesma lente custa diferente em cada laboratório" (pedido do Geral, 24/09) ─────────
const mockD = (tema) => head('Mock D — Dinheiro: a mesma lente, custos diferentes', tema) + barra('D · DINHEIRO', 'quem paga a conta da lente todo dia responde a "quanto eu pago em cada laboratório" mais do que a "sem perder ninguém no caminho"', 'cta_id: dinheiro_cta, dinheiro_labs, hero_whatsapp; comparar pedidos de demonstração contra a home no ar', tema) + topo + `
<section class="hero"><div class="wrap split">
<div><p class="label mb-6">Para quem compra lente todo dia</p><h1 class="mb-6">A mesma lente custa <span class="em">diferente em cada laboratório</span>.</h1><p class="lead mb-8">Para a lente vendida, o Clearix lista as equivalentes nos laboratórios com que você tem acordo, com o custo e o prazo de cada um. Compara preço e prazo. Quem decide é você.</p>
<a class="btn btn-primary" href="#" data-cta="dinheiro_cta">${CTA}</a> &nbsp; <a class="link" href="#" data-cta="hero_whatsapp">ou fale com a gente no WhatsApp →</a>
<p class="muted mt-6" style="font-size:14px;max-width:560px">A comparação de preço e prazo entre laboratórios usa o catálogo de lentes (Lens) e hoje faz parte do plano Completo. Não avaliamos qualidade de laboratório.</p></div>
<div class="card"><p class="label-sm mb-4">Numa ótica real · medido em 14 e 15/09/2026</p>
<div class="grid cols-2" style="border-radius:var(--r-lg)"><div><span class="num">319<small>acordos de laboratório</small></span></div><div><span class="num">5.569<small>lentes oftálmicas ativas</small></span></div><div><span class="num">341<small>OS enviadas ao laboratório por WhatsApp</small></span></div><div><span class="tag tag-medir">número a medir</span><small class="muted" style="display:block;margin-top:8px;font-size:13px">diferença de custo entre a 1ª e a 5ª opção para a mesma lente (o eco mede na base da casa; só entra pela folha única)</small></div></div></div></div>
<div class="wrap mt-10"><figure class="shot" style="max-width:1024px" data-cta="dinheiro_labs">${LABS(false)}<figcaption>${LEGENDA_COMPARADOR} ${DESFOQUE.replace('dados de cliente, OS, valores e usuário', 'custos do acordo')}</figcaption></figure></div></section>
<section class="deep"><div class="wrap"><p class="label mb-4">O que muda no balcão</p><h2 class="mb-10" style="max-width:720px">Do grau à escolha do laboratório, na mesma tela.</h2>
<div class="grid cols-3">${[['1 · Vende a lente', 'A venda começa pelo grau. O sistema filtra as lentes que servem para aquela receita e barra combinação impossível antes de fechar.'], ['2 · Vê as opções', 'As cinco melhores opções da mesma lente, ordenadas por preço e prazo, com a preferência que a própria loja dá a cada fornecedor.'], ['3 · Escolhe e envia', 'A escolha é sua. A OS segue para o laboratório pelo WhatsApp, e o kanban mostra o atraso na etapa.']].map(([t, d]) => `<div><h3 class="mb-2">${t}</h3><p class="muted">${d}</p></div>`).join('')}</div></div></section>
<section><div class="wrap"><p class="label mb-4">Onde o dinheiro entra e sai</p><h2 class="mb-10" style="max-width:720px">A conta do laboratório e o carnê do cliente, no mesmo sistema.</h2>
<div class="grid cols-3"><div><span class="num">R$ 394.734<small>recebidos no carnê em 2026, em 1.528 parcelas, até 21/09</small></span></div><div><h3 class="mb-2">Conta do laboratório</h3><p class="muted">A conta do laboratório nasce da OS no financeiro, sem redigitar.</p></div><div><h3 class="mb-2">Caixa conferido</h3><p class="muted">Caixa conferido, extrato conciliado e o painel do dono mostrando o dia. 132 caixas abertos e fechados pela equipe em 2026 <span class="date">15/09</span>.</p></div></div></div></section>
${blocoProva()}${blocoRotulo()}${blocoFaqCta()}` + fim;

// ───────── saída ─────────
const MOCKS = [
  ['a', 'mock-a-painel-de-prova', 'Painel de prova primeiro', mockA],
  ['b', 'mock-b-cliente-que-nao-volta', 'O cliente que não volta (no ar desde 24/09)', mockB],
  ['c', 'mock-c-antes-e-depois', 'Antes e depois do balcão', mockC],
  ['d', 'mock-d-dinheiro', 'Dinheiro: a mesma lente, custos diferentes', mockD],
];
const nome = (base, tema, aut) => `${base}${tema === 'claro' ? '.claro' : ''}${aut ? '.autonomo' : ''}.html`;

// autônomo: CSS + fontes + imagens embutidos
const b64 = (p) => readFileSync(p).toString('base64');
const fonte = (rel) => `data:font/woff2;base64,${b64(`node_modules/${rel}`)}`;
const cssBase = readFileSync('docs/mocks/mock.css', 'utf8');
const cssAutonomo = cssBase
  .replace("url('../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')", `url('${fonte('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')}')`)
  .replace("url('../../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2')", `url('${fonte('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2')}')`)
  .replace("url('../../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2')", `url('${fonte('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2')}')`);
const autonomo = (html) => {
  let out = html.replace('<link rel="stylesheet" href="mock.css">', `<style>${cssAutonomo}</style>`);
  out = out.replace(/<picture>.*?<img src="\.\.\/\.\.\/public\/capturas\/([^"]+)\.png" width="(\d+)" height="(\d+)"[^>]*alt="([^"]*)"><\/picture>/g,
    (_, n, w, h, alt) => `<img src="data:image/webp;base64,${b64(`public/capturas/${n}.webp`)}" width="${w}" height="${h}" alt="${alt}">`);
  return out.replace(/href="index\.html"/g, 'href="index.autonomo.html"');
};

for (const [, base, , fn] of MOCKS) {
  for (const tema of ['escuro', 'claro']) {
    const html = fn(tema);
    writeFileSync(`docs/mocks/${nome(base, tema, false)}`, html);
    writeFileSync(`docs/mocks/${nome(base, tema, true)}`, autonomo(html));
  }
}

const indiceHtml = (aut) => head('Mocks da home — índice', 'escuro') + `<div class="mockbar">MOCKS DA HOME · 24/09/2026 · NÃO PUBLICADOS · só números da folha única; o que falta está marcado</div><section><div class="wrap"><p class="label mb-4">Direções para a home</p><h1 class="mb-6" style="max-width:820px">Quatro mocks, em tema escuro e claro.</h1><p class="lead mb-10">Cada um muda o começo da página e mantém o resto (dor, como funciona, comparador, números do banco, Rótulo, preço, perguntas e chamada final). Análise: <code>Cockpit/comercial/inteligencia-crmbonus-2026-09-24.md</code>. ${aut ? 'Versão autônoma: cada arquivo abre sozinho, inclusive no celular.' : ''}</p>
<div class="grid cols-2">${[
  ['A', MOCKS[0], 'Inspirado em Dataweb e CRMBonus. Topo com 4 números medidos e a data, três entradas por porte (1 loja, 2 a 4, rede), a tela do kanban e um tour de 3 telas reais (sem demo automática: regra da casa).', 'Depende de: nada novo (números já na folha).'],
  ['B', MOCKS[1], 'A versão que foi ao ar em 24/09: pergunta sobre o cliente que não volta, 926/912 e 70/66 da folha e a captura real da Lista de Hoje.', 'Já publicada em tema escuro (Lens).'],
  ['C', MOCKS[2], 'Inspirado no ssOtica. Contraste papel/planilha x tela real, voz de um dono de ótica e três guias de isca para quem não quer agendar.', 'Depende de: depoimento autorizado; guias a produzir; código de evento novo para a isca.'],
  ['D', MOCKS[3], 'Pedido do Geral: "a mesma lente custa diferente em cada laboratório", com a captura de laboratórios como manchete e números só da folha.', 'Depende de: número a medir (diferença de custo entre a 1ª e a 5ª opção); a comparação é do plano Completo.'],
].map(([k, m, d, r]) => `<div><span class="num" style="color:var(--cyan-bright)">${k}</span><h3 class="mb-2" style="margin-top:8px">${m[2]}</h3><p class="muted mb-4">${d}</p><p class="dim mb-4" style="font-size:14px">${r}</p><a class="btn btn-outline" href="${nome(m[1], 'escuro', aut)}">Escuro</a> &nbsp; <a class="btn btn-outline" href="${nome(m[1], 'claro', aut)}">Claro</a></div>`).join('')}</div>
<h2 class="mt-10 mb-4" style="font-size:28px">Como escolher</h2><p class="lead">Cada mock viraria uma versão com os mesmos eventos <code>clearix_*</code> (só muda o <code>cta_id</code>). O volume é baixo, então o teste é de direção, não de significância: comparamos cliques em CTA e pedidos de demonstração por versão, ao longo de semanas. O tema claro usa os tokens do tema claro do design system (o Lens continua sendo o padrão do site).</p></div></section>` + fim;
writeFileSync('docs/mocks/index.html', indiceHtml(false));
writeFileSync('docs/mocks/index.autonomo.html', autonomo(indiceHtml(true)).replace(/href="index\.autonomo\.html"/g, 'href="index.autonomo.html"'));
console.log('ok: 4 mocks x (escuro, claro) x (normal, autônomo) + 2 índices');
