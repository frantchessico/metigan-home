# Metigan — Estratégia de Preços e Posicionamento

**Documento estratégico | Posicionamento API-only | Tabela de preços oficial**

---

## 1. Posicionamento central

> **Metigan = Email transacional via API (não SMTP).**

- Produto: **Transactional Email API** — event-driven, developer-first.
- **Não** nos posicionamos como: SMTP, “senders”, “templates”, “campaigns” ou ferramenta de marketing broadcast.
- Vantagem: infra de email previsível, controlada e escalável (estilo Stripe para email).

---

## 2. Tabela de preços oficial

### Free — Testes e integração inicial

| Item | Valor |
|------|--------|
| **Preço** | $0 |
| Emails/mês | 3.000 (~100/dia) |
| Domínios | 1 |
| Data retention | 3 dias |
| Incluído | API access, shared infrastructure, email support |

---

### Pro — Startups e produtos em produção

| Item | Valor |
|------|--------|
| **Preço** | $19 / mês |
| Emails/mês | 50.000 |
| Domínios | 3 |
| Data retention | 7 dias |
| Incluído | API access, DKIM / SPF / DMARC, sem limite diário rígido, email support |

---

### Growth — Apps em crescimento controlado

| Item | Valor |
|------|--------|
| **Preço** | $59 / mês |
| Emails/mês | 100.000 |
| Domínios | 10 |
| Data retention | 30 dias |
| Incluído | API access, Webhooks, logs detalhados, priority support |

---

### Business — Volume alto e exigência técnica

| Item | Valor |
|------|--------|
| **Preço** | $149 / mês |
| Emails/mês | 200.000 (máx.) |
| Domínios | Ilimitados |
| Data retention | 90 dias |
| Incluído | API access, SLA, account manager, auditoria e monitoramento de reputação |

---

## 3. Linguagem e copy

### Evitar em site, docs e comunicação

- “SMTP”
- “Senders”
- “Templates” (no sentido de campanhas/marketing)
- “Campaigns”
- Qualquer copy que sugira “envio manual” ou “ferramenta de email marketing broadcast”

### Usar de forma consistente

- **Transactional Email API**
- **Event-driven emails**
- **Delivery & reputation first**
- **Logs & monitoring**
- **API-first** / **Developer-first**
- **Infraestrutura de email** (não “ferramenta de email marketing”)

---

## 4. Vantagem competitiva (API-only)

- **Menos abuso** — sem SMTP aberto, controle total sobre quem envia e como.
- **Tráfego previsível** — integração via API padronizada e auditável.
- **Escalabilidade** — modelo claro por volume e plano.
- **Posicionamento** — infra moderna, estilo Stripe (simplicidade, docs, DX).
- **Reputação** — foco em deliverability e boas práticas, não em “enviar o máximo”.

---

## 5. Próximos passos recomendados

| # | Ação | Dono sugerido |
|---|------|----------------|
| 1 | Publicar **pricing page final** no site (metigan-home) com esta tabela e copy alinhada | Produto / Marketing |
| 2 | Alinhar **documentação da API** (rate limits, limites por plano, retenção) com os planos | Engenharia / Docs |
| 3 | Redigir mensagem oficial **“Why API-only?”** (blog ou docs) | Marketing / Produto |
| 4 | Definir e documentar **rate limits por plano** (req/s, burst, etc.) | Engenharia |
| 5 | Revisar **metigan-home** e **metigan-mvp** para remover termos “SMTP”, “senders”, “campaigns” onde fizer sentido | Produto |

---

## 6. Referência rápida — limites por plano

| Plano | Emails/mês | Domínios | Retention |
|-------|------------|----------|-----------|
| Free | 3.000 | 1 | 3 dias |
| Pro | 50.000 | 3 | 7 dias |
| Growth | 100.000 | 10 | 30 dias |
| Business | 200.000 | Ilimitados | 90 dias |

---

*Documento criado para alinhar produto, marketing e documentação ao posicionamento API-only da Metigan. Atualizar este arquivo quando houver mudança oficial de preços ou posicionamento.*
