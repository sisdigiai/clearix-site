# clearix-site

Landing pública do **ecossistema Clearix** — `https://clearix.app.br`. Produto-âncora da DIGIAI, voltado a óticas e clínicas brasileiras.

Site estático (Astro + Tailwind) que apresenta o ecossistema (16 apps), planos, públicos e prova de operação real a três audiências: clientes (donos de óticas), parceiros/imprensa e quem já é cliente (rota para o Hub). Tema visual da **família de marcas Clearix** (dark editorial, acento cyan/navy), distinto do site institucional DIGIAI (`digiai-site`).

## Estrutura

```
clearix-site/
├── src/
│   ├── pages/         index · ecossistema · planos · para-quem · contato
│   ├── components/     Header · Footer · Logo · StructuredData · ProvaOperacao · CtaFinal
│   ├── layouts/        BaseLayout (head, SEO, JSON-LD, view transitions)
│   ├── data/           apps.ts · planos.ts · prova.ts (dados canônicos)
│   └── styles/         global.css (tokens + classes + animações lux/HUD)
├── public/             favicon.svg · robots.txt · llms.txt
└── docs/               esta pasta
```

## Fonte de verdade dos dados

- **Apps + cores:** `iam.clearix_apps` (banco `mhgbuplnxtfgipbemchb`) + `clearix_docs/plataforma/design_system_completo.md`
- **Planos + add-ons:** `iam.clearix_packages` / `iam.clearix_addons` (seed `20260419062526`)
- **Números de prova:** tenant Grupo Mello (`6292c9f0…`), puxados ao vivo 2026-05-30
- **Copy/voz:** `Cockpit/clearix_design/assets/marketing-kit/COPY_BRIEFING.md`

Ao atualizar números ou preços, edite os arquivos em `src/data/` — nunca hardcode em página.

## Rodar local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist
```

## Deploy

Site 100% estático em `./dist`. Alvo: Cloudflare/Netlify (config em `wrangler.jsonc`). Domínio: `clearix.app.br`.
