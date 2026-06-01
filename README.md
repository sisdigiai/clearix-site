# clearix-site

Landing pública do **ecossistema Clearix** — `https://clearix.app.br`.

> Site estático que apresenta o produto-âncora da DIGIAI (Clearix) a clientes, parceiros e imprensa. Tema da família de marcas Clearix (dark editorial, cyan/navy). Não confundir com `digiai-site` (institucional da holding, tema DIGIAI House).

## Stack

- **Astro 5** — SSG, zero JS por default
- **Tailwind CSS 3** — tokens Clearix em `tailwind.config.mjs`
- **TypeScript** — strict
- **Source Serif 4 + Inter + JetBrains Mono** — Google Fonts
- **Deploy alvo:** Cloudflare Pages (`wrangler.jsonc` + `public/_headers`)

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # ./dist
npm run preview  # serve ./dist
```

## Deploy no Cloudflare Pages (mesmo fluxo do digiai-site)

### 1. Repositório GitHub

Repo: `mellooticas/clearix_site` (push na `main` dispara o build).

### 2. Conectar no Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**
2. Selecione `mellooticas/clearix_site`
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`
4. **Save and Deploy**

### 3. Domínio `clearix.app.br`

1. No projeto Pages → **Custom domains → Set up a domain → `clearix.app.br`**
2. No **Registro.br** (painel do domínio), aponte os DNS:
   - Se o domínio usa Cloudflare DNS: o registro é criado automático (CNAME → `<projeto>.pages.dev`).
   - Senão: crie `CNAME` (`clearix.app.br`) → `<projeto>.pages.dev` (ou os targets que o Pages indicar).
3. SSL: certificado automático em ~minutos após o DNS propagar.

### 4. SEO / IndexNow

- `public/_headers` — segurança + cache (lido nativamente pelo Cloudflare Pages).
- `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap-index.xml` (gerado no build).
- IndexNow: chave em `public/8f4004a3daa3425862f94b3f02d59868.txt` + workflow `.github/workflows/indexnow.yml` (pinga Bing/Yandex após push na `main`).
- Verificação Bing/Google: adicionar meta tag no `BaseLayout.astro` quando os tokens existirem.

## Conteúdo — onde editar

| Onde | O quê |
|---|---|
| `src/data/apps.ts` | Os 16 apps de cliente (nome, tagline, cor, jornada) |
| `src/data/planos.ts` | Tiers, preços e add-ons |
| `src/data/prova.ts` | Números reais de operação e promessas |
| `src/components/CtaFinal.astro` | CTA reutilizável |
| `src/layouts/BaseLayout.astro` | Title/description default, OG, JSON-LD |

**Nunca hardcode número/preço em página — sempre via `src/data/`.** Fonte de verdade: banco Clearix + `clearix_pitch`.

## Documentação

Ver [`docs/README.md`](docs/README.md) e [`AGENTS.md`](AGENTS.md). Spec em `Cockpit/Spec/clearix-site.md`.

---

**Mantenedor:** Gilberto Mello — `sisdigiai@gmail.com`
