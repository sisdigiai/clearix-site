# Roteamento documental operacional

Antes de qualquer alteração neste app, leia também:

`D:\projetos\Cockpit\Apps\clearix-site\README.md`

O app/código/filesystem é a verdade factual. O Cockpit é a fonte documental operacional. Se divergirem, o app vence e o Cockpit deve ser atualizado no mesmo turno.

---
# AGENTS.md — clearix-site

> **Porta de entrada padronizada** para qualquer agente IA entrando neste app. Convenção em [ADR-0024](../Cockpit/ADR/ADR-0024-agents-md-por-app-aguardando-design-system.md).
>
> Criado em 2026-06-01. Mantenha as 10 seções na ordem.

---

## 1. O que é (1 frase)

Landing de vendas do Clearix (`https://clearix.app.br`) — site estático Astro que leva o dono de ótica à demonstração assistida de 20 minutos com prova tirada do banco, recebe os interessados da prospecção do MKT e roteia clientes ao Hub.

## 2. Posição na DIGIAI

- **Verdade Canônica que rege:** Clearix é o produto-âncora e prioridade máxima; DIGIAI é a empresa-mãe.
- **Fase atual do app:** v0.4 — **no ar** em `https://clearix.app.br` (landing de vendas S1–S10, recepção de interessados da prospecção, eventos `clearix_*`, WhatsApp da DIGIAI). Controle: Agent Orquestrador Ecossistema Clearix; preço/planos/folha: Orquestrador Geral; publicação: dono.
- **Prioridade na matriz:** ALTA — vitrine de venda do produto-âncora.
- **Categoria portfólio:** INSTITUCIONAL / MARKETING (vitrine do produto-âncora).

## 3. Onde está a verdade (leituras obrigatórias antes de editar)

- **Spec:** [`../Cockpit/Spec/clearix-site.md`](../Cockpit/Spec/clearix-site.md)
- **Folha única da venda (manda em número e promessa):** [`../Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md`](../Cockpit/comercial/verdade-landing-vs-app-2026-09-14.md) — dona: Orquestrador Geral. Número ou promessa novos só entram no site depois de entrarem nela.
- **Planos:** o banco `mhgbuplnxtfgipbemchb` (`iam.clearix_packages`, `clearix_package_apps`, `clearix_addons`) é a fonte; o site deriva, com data. Mudança de plano vai ao banco primeiro.
- **Copy/voz:** [`../Cockpit/clearix_design/assets/marketing-kit/COPY_BRIEFING.md`](../Cockpit/clearix_design/assets/marketing-kit/COPY_BRIEFING.md) — headlines aprovadas e o que NÃO usar
- **Histórico da obra de 14–15/09:** `_DESPACHO_*`, `_DESENHO_*`, `_COPY_*`, `_REVISAO_GERAL_*`, `_VERIFICACAO_PROMESSAS_*`, `_PACOTES_BANCO_VS_SITE_*` na raiz do repo
- **Regras Harness críticas:** R-003 (não commit sem pedido), R-005 (UI verificada no navegador), R-010 (Pergunta de Ouro), R-014 (design system)
- **Referência de stack:** app irmão `digiai-site` (mesma stack Astro/Tailwind)

## 4. Stack + dev

- **Stack:** Astro 5.1 + Tailwind CSS 3.4 + TypeScript 5.7 (strict)
- **Porta dev:** 4321
- **URL produção:** https://clearix.app.br (a configurar no DNS/deploy)
- **Como rodar:** `npm run dev`
- **Hospedagem:** **Cloudflare Workers Static Assets** (`wrangler.jsonc` → serve `./dist`). Não é Pages. `html_handling: auto-trailing-slash` — `/ecossistema` redireciona para `/ecossistema/`; ao conferir com `curl`, use `-L` ou você lê o corpo do redirect e acha que a página não subiu.
- **CI/CD:** **automático no push para `main`** via Workers Builds (conexão git fica no painel do Cloudflare, não em arquivo do repo). O workflow `.github/workflows/indexnow.yml` depende disso — espera 90s pelo deploy antes de avisar os buscadores. Verificado em 2026-08-05: push → arquivo novo no ar sem intervenção.

## 5. Banco + permissões

- **Projeto Supabase:** nenhum cliente Supabase no site. O único canal de dados são **dois POSTs keyless** para edges públicas do projeto **digiai** (`hswyopqvnolqpmprqvzh`) — nunca o banco Clearix, que é isolado:
  - `events-ingest` ← `public/clearix-attrib.js`: `clearix_site_visit`, `clearix_cta_click`, `clearix_whatsapp_click`, `clearix_demo_solicitada` (product `clearix-site`, ZERO PII). **Não usar `landing_visit`/`click_checkout`: são da OSI.** Código novo só depois de entrar no catálogo do app.
  - `lead-capture` ← form de `/contato` (`product: 'clearix'` → `marketing.landing_leads`), com `commercial_lead_id` quando o link é da prospecção
- **Preview local não envia nada à produção** (filtro de localhost no script e no form; `?attrib=on` só para prova combinada). Prova que grava: marcada "TESTE — não responder", `session_id` começando com `teste-`.
- **Dados** são copiados para `src/data/` com data (não há fetch em runtime): números e FAQ da folha única (`landing.ts`), módulos com uso medido (`apps.ts`, 11, sem contagem na copy), planos do banco (`planos.ts`), canais (`contato.ts`).
- **Auth provider:** n/a (links para o Hub fazem o login do cliente).

## 6. Comandos

### ✅ Verde (rodar sem confirmar)
- `npm run dev` — sobe dev server (4321)
- `npm run build` — build estático em `./dist`
- `npm run preview` — preview do build

### 🟡 Confirma antes
- alterar números de prova / preços em `src/data/` — confirmar contra a fonte canônica antes

### 🔴 Nunca sem permissão explícita (R-003, R-004, R-011)
- `git push` / `git commit` — só com pedido. **Push = deploy em produção: "pode" do dono para AQUELE push**, inclusive conserto urgente
- mudar `public/clearix-attrib.js` sem trocar o `?v=` no `BaseLayout.astro` (a borda do Cloudflare serve o antigo)
- deploy de produção / apontar domínio — confirmação obrigatória
- editar o `digiai-site` (app irmão) — fora do escopo deste app

## 7. Design System (R-014)

Tema da **família de marcas Clearix** (dark editorial, acento cyan `#06B6D4` + navy `#1A3A5C`), coerente com o tom `.lux-cyan` designado ao Clearix no design system. Tokens em `tailwind.config.mjs` + `src/styles/global.css`.

**Regras:**
1. Cor sempre via token Tailwind (`text-clearix-cyan`, `bg-ink-surface`…) — nunca hex hardcoded em página.
2. Fontes: Inter (display e UI) e JetBrains Mono (dados/números), como em `tailwind.config.mjs`. Sem terceira fonte.
3. `tabular-nums` em todo número (preço, métrica, telefone).
4. PT-BR 100%; tom humano (ver COPY_BRIEFING §7).
5. WCAG AA; `focus-visible` com ring cyan em todo clicável; respeitar `prefers-reduced-motion`.
6. Logo = mark canônico Clearix (`src/components/Logo.astro`) — não redesenhar.

## 8. NÃO fazer

- Hardcode de número/preço em página — sempre via `src/data/`.
- Número ou promessa fora da folha única (§3 dela lista o que NÃO se diz: "grátis", "10 lojas", "5+ anos", IA/recall, isolamento/LGPD como garantia, SLA, "avisa o paciente sozinho", contagem de apps…).
- Depoimento, logo de cliente, rosto gerado por IA, urgência ou selo "mais escolhido".
- Módulo sem uso medido na vitrine (Loyalty, AR Vision, Express, Fone, Import ficam fora) ou no card de um plano que o banco não libera.
- Headlines da lista proibida do COPY_BRIEFING ("revolucione", "all-in-one", "game changer"…).
- Tratar dados de seed/demo como tração real.

## 9. Secrets

- O site não exige secrets para build/deploy.
- `.env.example` lista variáveis opcionais (endpoint do form, URL do Hub) para 2ª fase.
- NUNCA commitar `.env` (está no `.gitignore`).

## 10. Pendências conhecidas

- [x] ~~Gerar `public/og-default.png`~~ — existe.
- [x] ~~Definir endpoint real do formulário de contato~~ — edge `lead-capture` do digiai.
- [x] ~~Confirmar domínio `clearix.app.br`~~ — no ar via Cloudflare.
- [ ] Apontar `/clearix` do `digiai-site` para este site.
- [x] ~~Definir CI/CD de deploy~~ — Workers Builds no push para `main` (§4).
- [ ] D5 (dono): composição dos planos no banco (Lens também no Controle/Crescimento? 4 módulos sem uso no Crescimento; limites impostos ou retirados; 50 OS/mês no Essencial).
- [ ] D3b: endereço completo no rodapé (`endereco.confirmado`) depois do cartão CNPJ · D7: termo de piloto citado · D8: R$ do carnê · e-mail oficial do domínio.
- [ ] Capturas reais (tenant sintético, sem CPF/telefone) para a seção S4.
- [ ] Linhas de teste em `marketing.landing_leads` (`0751b695`, `37beb0fc`): manter ou apagar é do dono.
- [ ] **`calc.clearix.app.br`** — DNS + SSL. ⚠️ O apex está no **Cloudflare**, não no Netlify: o CNAME precisa ficar **sem proxy (nuvem cinza)** até o certificado emitir, senão o desafio do Let's Encrypt não chega e o SSL falha em silêncio. Procedimento em [`../Cockpit/funil-calc-clearix-2026-08-05.md`](../Cockpit/funil-calc-clearix-2026-08-05.md) §4.

---

> Em dúvida entre Spec, Harness, design system e este arquivo, **pause e pergunte ao humano**. Não invente.
