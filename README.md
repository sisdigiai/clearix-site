# clearix-site

Landing pública do **ecossistema Clearix** — `https://clearix.app.br`.

> Site estático que apresenta o produto-âncora da DIGIAI (Clearix) a clientes, parceiros e imprensa. Tema da família de marcas Clearix (dark editorial, cyan/navy). Não confundir com `digiai-site` (institucional da holding, tema DIGIAI House).

## Stack

- **Astro 5** — SSG, zero JS por default
- **Tailwind CSS 3** — tokens Clearix em `tailwind.config.mjs`
- **TypeScript** — strict
- **Source Serif 4 + Inter + JetBrains Mono** — Google Fonts
- **Deploy:** estático (`./dist`), alvo Cloudflare/Netlify (`wrangler.jsonc`)

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # ./dist
```

## Documentação

Ver [`docs/README.md`](docs/README.md) e [`AGENTS.md`](AGENTS.md). Spec do produto em `Cockpit/Spec/clearix-site.md`.
