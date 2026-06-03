> ⚠️ MINUTA — AGUARDANDO REVISÃO JURÍDICA HUMANA. Não publicar como definitiva.
> Gerada por agente LGPD em 2026-06-02. ⚠️ NÃO PUBLICAR ao vivo enquanto declarar controles ainda pendentes (criptografia em repouso, mínimo privilégio, plano de incidentes formal) — risco de declaração falsa. Ajustar redação OU implementar os controles antes.

# Política de Privacidade do Clearix

**Última atualização:** [A DEFINIR — revisão jurídica]
**Versão:** 0.1 (minuta)

Esta Política explica como tratamos dados pessoais no Clearix, em conformidade com a Lei nº 13.709/2018 — a Lei Geral de Proteção de Dados (LGPD). Escrevemos de forma clara de propósito, porque privacidade só funciona quando dá para entender.

O Clearix lida com **dados de saúde** (prontuários e prescrições). Esses são dados pessoais sensíveis e exigem cuidado reforçado — você verá isso destacado ao longo do texto.

---

## 1. Quem somos

O Clearix é operado por **DIGIAI ÓTICA E TECNOLOGIA LTDA**, microempresa em constituição, CNPJ **12.549.582/0001-49** (registro em transição na Receita Federal), sede em **Suzano/SP** ("DIGIAI", "nós").

**Encarregado pelo Tratamento de Dados Pessoais (DPO / Encarregado), art. 41 da LGPD:**
**Gilberto** — e-mail: **dpo@digiai.app.br**

Este é também o canal para você (ou o titular dos dados) exercer direitos e tirar dúvidas.

## 2. Os papéis: quem é Controlador e quem é Operador

2.1. **A ótica contratante é a Controladora** dos dados dos seus pacientes e clientes. Quando você é paciente ou cliente de uma ótica que usa o Clearix, é a **ótica** que responde como Controladora pelos seus dados.

2.2. **A DIGIAI é a Operadora** desses dados. Tratamos os dados de pacientes/clientes em nome da ótica, seguindo suas instruções, apenas para fazer o Clearix funcionar. Não usamos esses dados para finalidades próprias.

2.3. **A DIGIAI é Controladora** de um conjunto distinto: os **dados de conta e faturamento dos contratantes** (a ótica como cliente do Clearix).

> Resumindo: dos dados de pacientes/clientes da ótica, a ótica é Controladora e nós Operadores. Dos dados da própria ótica enquanto nossa cliente, nós somos Controladores.

## 3. Quais dados pessoais tratamos

### 3.1. Dados dos contratantes (DIGIAI como Controladora)
- Dados cadastrais da ótica e dos responsáveis (nome, CNPJ/CPF, e-mail, telefone, endereço);
- Dados de faturamento e pagamento;
- Credenciais e dados de acesso ao sistema;
- Registros de uso, logs de acesso e dados técnicos.

### 3.2. Dados de pacientes e clientes da ótica (DIGIAI como Operadora)
- Identificação e contato (nome, telefone, e-mail, documentos);
- Histórico de compras, fidelidade, atendimento;
- **Dados pessoais sensíveis de saúde (LGPD, art. 11):** prontuário clínico, prescrições, grau, anamnese e demais informações clínicas registradas pela ótica.

> **Cuidado reforçado:** dados de saúde recebem proteção especial da LGPD. São tratados apenas para a finalidade de tutela da saúde / prestação do serviço ótico-clínico, com controles de acesso restritos.

## 4. Para que usamos os dados e com que base legal

| Finalidade | Quem | Base legal (LGPD) |
|---|---|---|
| Prestar o serviço Clearix ao contratante | DIGIAI (Controladora dos dados de conta) | Execução de contrato — art. 7º, V |
| Cobrança, faturamento e gestão da assinatura | DIGIAI | Execução de contrato — art. 7º, V; obrigação legal (fiscal) — art. 7º, II |
| Operar tratamento de dados de pacientes/clientes em nome da ótica | DIGIAI (Operadora) | Conforme base definida pela ótica (Controladora) |
| Tratamento de dados de saúde (prontuário, prescrições) | Ótica (Controladora) / DIGIAI (Operadora) | Tutela da saúde — art. 11, II, "f" |
| Segurança, prevenção a fraude, logs | DIGIAI | Legítimo interesse — art. 7º, IX; obrigação legal |
| Cumprimento de obrigações legais | DIGIAI / Ótica | Obrigação legal — art. 7º, II |

> A base legal para os **dados dos pacientes/clientes** cabe à ótica Controladora. [A DEFINIR — revisão jurídica: confirmar enquadramento da base de saúde e do legítimo interesse (exige LIA documentada onde usado).]

## 5. Direitos do titular (LGPD, art. 18)

Você tem direito a: confirmar/acessar; corrigir; anonimizar/bloquear/eliminar dados desnecessários ou em desconformidade; portabilidade; eliminar dados tratados por consentimento; saber com quem compartilhamos; ser informado sobre não consentir; revogar consentimento.

**Como exercer:** escreva para **dpo@digiai.app.br**.

> **Importante:** se seus dados foram inseridos por uma ótica (você é paciente/cliente dela), em regra o pedido deve ir à **ótica** (Controladora). Podemos encaminhar e auxiliá-la como Operadora.

## 6. Por quanto tempo guardamos os dados

6.1. Pelo tempo necessário às finalidades e enquanto durar o contrato com a ótica.

6.2. Alguns dados são mantidos por prazo maior para cumprir obrigações legais (retenção fiscal; guarda de prontuário conforme normas da atividade clínica). [A DEFINIR — revisão jurídica: prazos exatos por tipo de dado, especialmente prontuário/prescrição.]

6.3. Encerrado o contrato e os prazos legais, os dados são eliminados ou anonimizados, ressalvada a janela de exportação dos Termos.

## 7. Com quem compartilhamos — sub-operadores e infraestrutura

| Provedor | Função | Observação |
|---|---|---|
| **Supabase** | Banco, autenticação, armazenamento (dados em repouso) | Servidores fora do Brasil |
| **Anthropic (Claude)** | Inteligência artificial | Servidores fora do Brasil |
| **Google (Gemini)** | Inteligência artificial | Servidores fora do Brasil |
| **Cloudflare** | Rede, CDN e proteção | Infraestrutura distribuída |
| **Meta (WhatsApp Business)** | Mensageria | Servidores fora do Brasil |

7.1. Esses provedores tratam dados apenas para entregar suas funções no Clearix.

7.2. [A DEFINIR — revisão jurídica: mapear quais dados — e se dados de saúde — trafegam por cada provedor; definir minimização/anonimização antes de enviar a serviços de IA e ao WhatsApp/Meta. **Ponto sensível.**]

## 8. Transferência internacional de dados (LGPD, arts. 33–36)

8.1. Parte da infraestrutura está **fora do Brasil**. Dados pessoais podem ser transferidos e armazenados em outros países.

8.2. Adotamos salvaguardas em conformidade com a LGPD. [A DEFINIR — revisão jurídica: instrumento adequado — cláusulas-padrão da ANPD, garantias dos provedores e/ou consentimento.]

## 9. Segurança da informação

- **Isolamento por tenant** via Row Level Security (RLS): cada ótica acessa só o seu ambiente;
- **Criptografia em trânsito** (HTTPS) em todas as comunicações;
- ⚠️ **Criptografia em repouso** conforme recursos do provedor [A DEFINIR — confirmar status; item ainda em implementação — NÃO afirmar como pronto];
- ⚠️ Controle de acesso e mínimo privilégio [A DEFINIR — em implementação];
- Registros de acesso (logs).

> Nenhum sistema é 100% imune. Trabalhamos para reduzir riscos e responder rápido a incidentes (seção 11).

## 10. Cookies e registros de acesso

10.1. O Clearix usa cookies/tecnologias necessárias ao funcionamento (autenticação, sessão, segurança).

10.2. [A DEFINIR — revisão jurídica: detalhar categorias e consentimento conforme Resolução CD/ANPD nº 4/2024, se houver cookies não essenciais.]

## 11. Incidentes de segurança

11.1. Em incidente que possa acarretar risco/dano relevante, adotamos plano de resposta e comunicação.

11.2. Como **Operadora**, comunicaremos a ótica **Controladora** sem demora (LGPD art. 48). Como **Controladora** dos dados de conta, comunicaremos ANPD/titulares quando cabível, em prazo razoável (prática: **até 72h**). [A DEFINIR — revisão jurídica: fluxo e prazos formais — plano de incidentes ainda pendente.]

## 12. Alterações nesta Política

Podemos atualizar esta Política. Mudanças relevantes serão comunicadas. A versão vigente é a publicada nesta página.

## 13. Contato e Encarregado

**Encarregado (DPO):** Gilberto · **E-mail:** dpo@digiai.app.br

---

## PONTOS PARA O ADVOGADO (Privacidade)
11. **Bases legais** (§4): validar tutela da saúde (art. 11, II "f") e legítimo interesse (LIA documentada).
12. **Retenção** (§6.2): prazos por tipo, atenção a prontuário/prescrição (CFM/normas clínicas se aplicável).
13. **Dados por sub-operadores** (§7.2): mapear o que trafega por cada provedor; minimização antes de IA/WhatsApp. **Sensível.**
14. **Transferência internacional** (§8.2): instrumento adequado.
15. **Criptografia em repouso / mínimo privilégio** (§9): hoje PENDENTES no gap de compliance — não declarar como prontos.
16. **Cookies** (§10.2): inventário + consentimento (Res. ANPD 4/2024).
17. **Plano de incidentes** (§11): formalizar fluxo e prazo 72h.

### ⚠️ Gap de compliance (não publicar declaração falsa)
Controles afirmados/sugeridos que constam **pendentes** no estado atual da DIGIAI: criptografia em repouso · mínimo privilégio · plano de incidentes 72h · registro de operações (art. 37) · DPA template. Antes de publicar, **implementar** ou **ajustar a redação** para não afirmar controle inexistente.
