# LinkedIn profile copy — paste-ready

Written to match the CVs in this directory, so the two never contradict each other.
Everything here reflects confirmed experience.

> **Do not add AWS.** The profile audit suggested "proficient in AWS cloud services"
> and an AWS certification. That is not your stack. The `public/images/aws.png`
> formerly in this repo (now deleted) is likely what the audit picked up on.
>
> Azure is different, and it improved: the agent platform genuinely supports Azure
> OpenAI as an LLM and embedding provider, so the CVs now say "Azure OpenAI Service"
> rather than the weaker "Microsoft Azure (working knowledge)". That is accurate, but
> it is provider integration, not Azure infrastructure depth — do not stretch it into
> AKS, Function Apps, or Container Apps.

---

## Headline

LinkedIn allows 220 characters. Option 1 is the recommendation — it leads with
seniority and the keywords recruiters actually search, without padding.

**Option 1 (recommended, 128 chars)**

```
Applied AI Engineer | AI Agents & Multi-Agent Systems | LangGraph, Python, TypeScript | Process Automation & RPA | Open to Remote
```

**Option 2 — heavier on proof (130 chars)**

```
Applied AI Engineer | Production AI Agents Serving 22 Brands on Kubernetes | LangGraph, RAG, Python | RPA to AI Migration | Remote
```

**Option 3 — leads with the current role (140 chars)**

```
AI Engineer @ BasicX Solutions | Multi-Tenant AI Agent Platform | LangGraph, RAG, Guardrails & Tracing | Python & TypeScript | Founder @ FEROQ
```

---

## About

Four short paragraphs, results first, no hobbies. ~1,150 characters — well inside
LinkedIn's 2,600 limit.

```
Applied AI engineer with 5+ years building production systems that automate complex business processes. I co-build and operate a multi-tenant AI agent platform serving 22 client brands in production on Kubernetes — a hand-written LangGraph state machine covering tool use, hybrid retrieval, per-customer memory, guardrails, and human handoff, instrumented end to end with Langfuse and LangSmith tracing.

Before moving into agent architecture I delivered 20+ production RPA automations, which is why I approach AI differently from most: I know what actually breaks in a business workflow, not just how to prompt around it. That work removed over 500 hours of manual processing per month across multiple business fronts and handles tens of thousands of records monthly. I've since migrated no-code n8n workflows into tested, maintainable Python services — the same shift, one process at a time.

My stack is Python and TypeScript: LangGraph and LangChain, FastAPI, hybrid BM25 and FAISS retrieval with reranking, PostgreSQL, MongoDB and Redis, Next.js and React on the front end, Kubernetes and GitLab CI for delivery. I integrate with ERP, warehouse management, CRM, ticketing, and the WhatsApp Business Platform. I work with Claude Code daily for development and code review, and treat reviewing and refining AI-generated code as part of the job rather than a shortcut around it. Postgraduate in Artificial Intelligence for Developers (FIAP).

I'm open to remote roles with global teams working on applied AI and automation, as an employee or an international contractor. I'm based in Brazil (UTC-3), which gives full overlap with US business hours. Portuguese native, English fluent — I studied and lived in Canada. Let's connect.
```

> Keep this last paragraph in step with the CV contact blocks and the site hero,
> which make the same two claims: US-hours overlap and contractor availability.
> See the drift list in `README.md` for the limits on both.

---

## Languages section — currently missing, add it

The audit scored this 1/5 because the section is empty. This is the single
cheapest fix on the profile. Add via *Add profile section → Additional → Languages*:

| Language | Proficiency to select |
| --- | --- |
| Portuguese | Native or bilingual proficiency |
| English | Full professional proficiency |

Your Canadian study period (Tamwood Careers College, Jul 2023 – Dec 2023) already
substantiates the English claim on the profile.

---

## Experience bullets

Keep these consistent with the CVs. LinkedIn renders bullets fine — start each
line with `•` and keep them to two lines each.

### FEROQ — Founder & Principal Consultant (2021 – Present)

```
• Run an independent technology consultancy delivering AI agents, intelligent process automation, and full-stack applications to clients across healthcare, finance, and logistics.
• Architect and ship multi-agent systems using LangChain and LangGraph, handling tool use, retrieval, memory, state management, and coordination between agents.
• Instrument production agents with tracing, evaluation frameworks, and guardrails, managing prompt and version changes to keep behavior reliable and cost-effective.
• Integrate AI solutions with enterprise platforms including CRM (Salesforce), ERP, ticketing, and data warehouse systems via REST APIs and webhooks.
• Own every project end to end: process discovery, workflow redesign, architecture, development, cloud deployment, monitoring, and ongoing support.
• Engineer production applications in Python and TypeScript with automated test suites and CI/CD pipelines.
```

### BasicX Solutions — AI Engineer (Oct 2025 – Present)

This is your current role and it now leads the experience section on all three CVs.

```
• Co-build and operate a multi-tenant conversational AI platform on WhatsApp, deployed as isolated Kubernetes services for 22 client brands across healthcare, veterinary, retail marketplace, real estate, fitness, and beauty verticals.
• Engineered the core agent as a hand-written LangGraph StateGraph — intent classification, lead extraction and persistence, retrieval, profile loading, a tool-calling agent loop, an LLM supervisor, and human-handoff detection — with checkpointed conversation state.
• Built a hybrid retrieval layer combining BM25 and FAISS through Reciprocal Rank Fusion with cross-encoder reranking, over per-tenant isolated vector stores.
• Designed a routing-agent and named-specialist architecture, with up to nine domain specialists per tenant, each bound to its own knowledge base and tool set.
• Implemented a supervisor and guardrail layer enforcing brand voice, output format, age gating, and crisis-trigger detection, backed by a behavioral test suite.
• Instrumented production agents with Langfuse and LangSmith tracing over OpenTelemetry, hardened with concurrency tests covering multi-replica handoff locking and message debouncing.
• Built configuration as a product: Pydantic-validated per-tenant YAML with a web builder providing versioning and diffing, plus a CI job asserting deployed configuration matches the repository.
• Delivered supporting automation — an ERP-to-WMS order fulfillment integrator, a deterministic payroll-billing audit engine with a human approval gate, and migrations of n8n no-code workflows into tested Python services.
• Use Claude Code daily for feature development and code review, reviewing and refining AI-generated code before it reaches the shared test suite and CI.
```

> **Accuracy notes, since these are checkable.** You are 203 of 422 commits on the
> agent platform and a colleague has 162 — so "co-build" is the honest verb, never
> "built single-handedly." The payroll audit engine has zero LLM dependencies; it is
> a deterministic rules engine and calling it AI would not survive an interview.
> The support platform is a Chatwoot fork with upstream authorship dominating —
> claim the customization, not the product. No client names appear here by your
> decision, and no message-volume figure is claimed because none exists in the code.

### Fiibo — Senior RPA Developer (Apr 2024 – Sep 2025)

```
• Delivered 20+ production automations for healthcare provider operations, owning each from current-state process analysis through development, production deployment, and support.
• Redesigned manual, repetitive back-office workflows across multiple business fronts, removing over 500 hours of manual processing per month and reducing recurring operating cost while improving throughput consistency.
• Automated processing of tens of thousands of records per month, improving throughput consistency and eliminating a class of manual data-entry error.
• Built AI agents and orchestrated automations running in production for internal teams and client accounts, integrating CRM, ERP, and ticketing platforms.
• Engineered Python automations using Selenium, Pandas, and OpenCV to drive web, desktop, and image-based interfaces where no API was available.
• Implemented monitoring and operational dashboards, giving stakeholders visibility into throughput, failure rates, and realized business impact.
```

### Cadmus IT Solutions — RPA Analyst Developer (Mar 2022 – Sep 2022)

```
• Delivered process automation for finance, HR, insurance, health, and logistics teams, covering documentation, development, and production rollout.
• Automated high-volume data entry and reconciliation with Python and Pandas, eliminating manual handling of recurring spreadsheet and system workflows.
• Partnered with business analysts and process owners to convert as-is process maps into automation specifications and acceptance criteria.
```

### BPA Technologies — Python Developer (Dec 2020 – Mar 2022)

```
• Developed Python automation services and internal tools supporting business operations, including web scraping, file processing, and system integrations.
• Built and consumed REST APIs to connect internal systems with third-party services.
• Wrote SQL queries and data transformation routines supporting reporting and process validation.
• Supported deployment, troubleshooting, and maintenance of automations running in production.
```

---

## Skills — reorder and trim

The audit's advice here is right: pin the ones recruiters filter on. LinkedIn shows
your top 3 pinned skills prominently, so order matters.

**Pin these three:** Python · Artificial Intelligence (AI) · AI Agents

**Then keep roughly these 15, in this order:**

1. Python
2. Artificial Intelligence (AI)
3. AI Agents
4. LangGraph
5. LangChain
6. Retrieval-Augmented Generation (RAG)
7. Robotic Process Automation (RPA)
8. TypeScript
9. Process Automation
10. Kubernetes
11. FastAPI
12. REST APIs
13. n8n
14. Node.js
15. React
16. AI-Assisted Development

Add "Claude Code" as a skill too if LinkedIn offers it in the picker. It is
increasingly a literal line item in job descriptions — the Strider full-stack
posting names it in the required stack — and recruiters are starting to filter on
it. If the picker has no entry, "AI-Assisted Development" carries the keyword.

RPA drops from third to seventh deliberately. It is still there for recruiter
filters, but leading with it now anchors you to the role you are moving out of.

Remove generic or duplicated entries (e.g. "Software Development" alongside
"Programming", or single-purpose tools nobody searches for). Fewer, sharper skills
beat a long tail.

---

## What I did not act on from the audit

- **AWS** — not your stack. See the warning at the top.
- **Certifications** — the suggestion to get AWS Certified Developer or UiPath
  certification is reasonable career advice, but it's future work, not a profile
  edit. If you do pursue one, Azure Fundamentals (AZ-900) is the better fit given
  the roles you're targeting.
- **Posting weekly in English** — sound advice, entirely up to you; nothing to
  paste here.
