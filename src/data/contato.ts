// Canais e identificação de quem vende. As lacunas ficam `null` até a decisão chegar; a página esconde o que é null
// em vez de publicar um palpite. Decisões registradas em _COPY_2026-09-14_LANDING.md.

// D2 — número de WhatsApp da landing. Decisão do dono (15/09, nesta sessão): +55 11 99154-7229, o número da DIGIAI na
// Z-API "DIGIAI Completo" (MKT), usado para atendimento e prospecção no início. Com null, nenhum botão aparece.
// O texto termina com o código de origem que o webhook do MKT reconhece — código novo precisa ser avisado ao MKT antes.
export const whatsapp: { numero: string; exibicao: string } | null = { numero: '5511991547229', exibicao: '+55 11 99154-7229' };

export const textoWhatsapp = {
  site: 'Quero conhecer o Clearix (site)',
  contato: 'Quero agendar uma demonstração do Clearix (site-contato)',
} as const;

export function linkWhatsapp(origem: keyof typeof textoWhatsapp): string | null {
  if (!whatsapp) return null;
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(textoWhatsapp[origem])}`;
}

// E-mail institucional canônico (Cockpit/mapa-dominios-hosting.md: Email Routing do digiai.app.br, ativo desde 05/06/2026).
export const email = 'contato@digiai.app.br';

export const empresa = {
  razaoSocial: 'DIGIAI ÓTICA E TECNOLOGIA LTDA',
  cnpj: '12.549.582/0001-49',
  cidade: 'Suzano-SP',
};

// D3b — endereço completo (fonte: company.identity do digiai, via eco, 14/09). O cadastro diz "CNPJ em transição na
// RFB": só vai ao ar depois que o dono conferir o cartão CNPJ atual. Ligado em 21/09/2026.
export const endereco = {
  confirmado: true,   // conferido em 21/09/2026 na consulta pública do CNPJ (BrasilAPI/RFB): DIGIAI OTICA E TECNOLOGIA LTDA, ATIVA, mesmo endereço
  logradouro: 'Rua General Francisco Glicério, 940, Térreo, Sala 02',
  bairro: 'Jardim Guaio',
  cidade: 'Suzano',
  uf: 'SP',
  cep: '08674-000',
};

export const HUB = 'https://app.clearix.app.br';
