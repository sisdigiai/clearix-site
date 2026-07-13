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

Landing pública do ecossistema Clearix (`https://clearix.app.br`) — site estático Astro que apresenta o produto-âncora da DIGIAI a donos de óticas, parceiros e imprensa, e roteia clientes existentes para o Hub.

## 2. Posição na DIGIAI

- **Verdade Canônica que rege:** Clearix é o produto-âncora e prioridade máxima; DIGIAI é a empresa-mãe.
- **Fase atual do app:** v0.1 — site recém-criado, ainda não publicado em produção.
- **Prioridade na matriz:** ALTA — vitrine de venda do produto-âncora.
- **Categoria portfólio:** INSTITUCIONAL / MARKETING (vitrine do produto-âncora).

## 3. Onde está a verdade (leituras obrigatórias antes de editar)

- **Spec:** [`../Cockpit/Spec/clearix-site.md`](../Cockpit/Spec/clearix-site.md)
- **Copy/voz:** [`../Cockpit/clearix_design/assets/marketing-kit/COPY_BRIEFING.md`](../Cockpit/clearix_design/assets/marketing-kit/COPY_BRIEFING.md) — headlines aprovadas e o que NÃO usar
- **Dados canônicos:** banco `mhgbuplnxtfgipbemchb` (`iam.clearix_apps`, `iam.clearix_packages`, `iam.clearix_addons`) + `clearix_docs/clearix_pitch/`
- **Regras Harness críticas:** R-003 (não commit sem pedido), R-005 (UI verificada no navegador), R-010 (Pergunta de Ouro), R-014 (design system)
- **Referência de stack:** app irmão `digiai-site` (mesma stack Astro/Tailwind)

## 4. Stack + dev

- **Stack:** Astro 5.1 + Tailwind CSS 3.4 + TypeScript 5.7 (strict)
- **Porta dev:** 4321
- **URL produção:** https://clearix.app.br (a configurar no DNS/deploy)
- **Como rodar:** `npm run dev`
- **Hospedagem:** estático (`./dist`) — Cloudflare/Netlify
- **CI/CD:** a definir (manual por ora)

## 5. Banco + permissões

- **Projeto Supabase:** n/a — o site é estático e não acessa banco em runtime.
- **MCP Supabase tem acesso direto?** n/a
- **Dados** são copiados manualmente para `src/data/` a partir das fontes canônicas (não há fetch em runtime).
- **Auth provider:** n/a (links para o Hub fazem o login do cliente).

## 6. Comandos

### ✅ Verde (rodar sem confirmar)
- `npm run dev` — sobe dev server (4321)
- `npm run build` — build estático em `./dist`
- `npm run preview` — preview do build

### 🟡 Confirma antes
- alterar números de prova / preços em `src/data/` — confirmar contra a fonte canônica antes

### 🔴 Nunca sem permissão explícita (R-003, R-004, R-011)
- `git push` / `git commit` — só com pedido
- deploy de produção / apontar domínio — confirmação obrigatória
- editar o `digiai-site` (app irmão) — fora do escopo deste app

## 7. Design System (R-014)

Tema da **família de marcas Clearix** (dark editorial, acento cyan `#06B6D4` + navy `#1A3A5C`), coerente com o tom `.lux-cyan` designado ao Clearix no design system. Tokens em `tailwind.config.mjs` + `src/styles/global.css`.

**Regras:**
1. Cor sempre via token Tailwind (`text-clearix-cyan`, `bg-ink-surface`…) — nunca hex hardcoded em página.
2. Fontes: Source Serif 4 (display), Inter (UI), JetBrains Mono (dados/números). Sem quarta fonte.
3. `tabular-nums` em todo número (preço, métrica, telefone).
4. PT-BR 100%; tom humano (ver COPY_BRIEFING §7).
5. WCAG AA; `focus-visible` com ring cyan em todo clicável; respeitar `prefers-reduced-motion`.
6. Logo = mark canônico Clearix (`src/components/Logo.astro`) — não redesenhar.

## 8. NÃO fazer

- Hardcode de número/preço em página — sempre via `src/data/`.
- Inventar métrica, preço ou promessa — usar só dado canônico/auditado (R-010).
- Headlines da lista proibida do COPY_BRIEFING ("revolucione", "all-in-one", "game changer"…).
- Mostrar apps internos (Atlas, Designer, Docs) na vitrine — só os 16 de cliente.
- Tratar dados de seed/demo como tração real.

## 9. Secrets

- O site não exige secrets para build/deploy.
- `.env.example` lista variáveis opcionais (endpoint do form, URL do Hub) para 2ª fase.
- NUNCA commitar `.env` (está no `.gitignore`).

## 10. Pendências conhecidas

- [ ] Gerar `public/og-default.png` (1200×630) para Open Graph.
- [ ] Definir endpoint real do formulário de contato.
- [ ] Confirmar domínio `clearix.app.br` (DNS + provedor).
- [ ] Apontar `/clearix` do `digiai-site` para este site.
- [ ] Definir CI/CD de deploy.

---

> Em dúvida entre Spec, Harness, design system e este arquivo, **pause e pergunte ao humano**. Não invente.
