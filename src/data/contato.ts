// Canais e identificação de quem vende. As lacunas ficam `null` até a decisão chegar; a página esconde o que é null
// em vez de publicar um palpite. Decisões registradas em _COPY_2026-09-14_LANDING.md.

// D2 — número de WhatsApp da landing. Decisão do dono, entregue pelo MKT (14/09: nenhum canal definido nem ligado).
// Enquanto null, nenhum botão ou link de WhatsApp aparece. O texto termina com o código de origem que o webhook do MKT
// reconhece — código novo precisa ser avisado ao MKT antes de publicar.
export const whatsapp: { numero: string; exibicao: string } | null = null;

export const textoWhatsapp = {
  site: 'Quero conhecer o Clearix (site)',
  contato: 'Quero agendar uma demonstração do Clearix (site-contato)',
} as const;

export function linkWhatsapp(origem: keyof typeof textoWhatsapp): string | null {
  if (!whatsapp) return null;
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(textoWhatsapp[origem])}`;
}

export const email = 'sisdigiai@gmail.com';

export const empresa = {
  razaoSocial: 'DIGIAI ÓTICA E TECNOLOGIA LTDA',
  cnpj: '12.549.582/0001-49',
  cidade: 'Suzano-SP',
};

// D3b — endereço completo (fonte: company.identity do digiai, via eco, 14/09). O cadastro diz "CNPJ em transição na
// RFB": só vai ao ar depois que o dono conferir o cartão CNPJ atual. Para ligar, trocar `confirmado` para true.
export const endereco = {
  confirmado: false,
  logradouro: 'Rua General Francisco Glicério, 940, Térreo, Sala 02',
  bairro: 'Jardim Guaio',
  cidade: 'Suzano',
  uf: 'SP',
  cep: '08674-000',
};

export const HUB = 'https://clearixhub.netlify.app';
