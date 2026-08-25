# Strider profile — work experience in S.T.A.R.T. format

Paste-ready. Written against Strider's own guidance
(`help.onstrider.com/en/articles/6755106`), which asks for Situation / Task /
Action / Result / Take away, quantitative data wherever possible, technology tags
in the separate field rather than in the prose, and domain job titles rather than
language or analyst titles.

Every claim here matches the CVs in this directory and `linkedin-profile.md`.
Before changing anything, read the drift list in `README.md` — the numbers,
the word "co-built", and the FEROQ title are all load-bearing.

## Two things to settle before pasting

**1. Job titles.** Strider's Don'ts rule out "Analyst", "Programmer", and
language-based titles like "JavaScript Developer" — which catches two of yours.
Proposed changes, both defensible descriptions of the same work:

| On the CV | On Strider | Why |
| --- | --- | --- |
| AI Engineer (BasicX) | *unchanged* | already a domain title |
| Founder & Principal Consultant (FEROQ) | *unchanged* | see `README.md` — never CEO/CTO |
| Senior RPA Developer (Fiibo) | **Senior Automation Engineer** | "Developer" → "Engineer"; RPA stays in the tags |
| RPA Analyst Developer (Cadmus) | **Automation Engineer** | "Analyst" is explicitly on Strider's Don'ts list |
| Python Developer (BPA) | **Back-End Engineer** | language titles are explicitly on the Don'ts list |

This does create a mismatch with the CV you attach. It is a small one and Strider
asked for it, but it is your call — if you'd rather keep titles identical across
every surface, use the CV titles and accept the profile-scoring hit.

**2. Placeholders.** Strider wants company size and team size, which I don't have
and won't invent. Every `[...]` below is a blank for you to fill or delete.

---

## AI Engineer
**BasicX Solutions · October 2025 – Present**

**Situation**
- BasicX Solutions builds conversational AI products for client brands. I work on its multi-tenant AI agent platform, which runs in production for 22 client brands across healthcare, veterinary, retail marketplace, real estate, fitness, and beauty. [Team: engineers on the platform — fill in]

**Task**
- Ship one agent platform that all 22 brands could run on, each with its own knowledge, tone, and tools, reliable enough for live customer conversations on WhatsApp — without a separate codebase per client.

**Action**
- Co-built the core agent as a hand-written LangGraph state machine: intent classification, lead extraction and persistence, retrieval, profile loading, a tool-calling agent loop, an LLM supervisor, and human-handoff detection, with checkpointed conversation state that survives restarts and replica changes.
- Designed a routing-agent and named-specialist architecture, up to nine domain specialists per brand, each bound to its own knowledge base and tool set.
- Built a hybrid retrieval layer combining keyword and vector search through Reciprocal Rank Fusion with cross-encoder reranking, over per-brand isolated stores.
- Implemented a supervisor and guardrail layer enforcing brand voice, output format, age gating, and crisis-trigger detection, backed by a behavioral test suite.
- Instrumented every agent run with distributed tracing, and hardened the platform with concurrency tests covering multi-replica handoff locking and message debouncing.
- Made configuration a product in its own right: schema-validated per-brand config with a web builder providing versioning and diffing, plus a CI job that fails when deployed configuration drifts from the repository.
- Delivered the supporting automation around the agents — an ERP-to-warehouse order fulfillment integrator, a deterministic payroll-billing audit engine with a human approval gate, and migrations of no-code workflows into tested Python services.

**Result**
- 22 client brands live in production as isolated services, onboarded through validated configuration rather than per-client code branches.
- Up to nine specialists per brand running against isolated knowledge bases, with guardrails and behavioral tests gating what reaches a customer.
- [Optional, if you can stand behind a number: brands onboarded per month, or time-to-onboard before vs. after config-as-product]

**Take away**
- Multi-tenancy is a configuration problem before it is a model problem — the leverage came from making config versionable and testable, not from a better prompt.
- Tracing and guardrails are not polish. They are what makes an agent shippable under someone else's brand name.
- Reviewing AI-generated code is its own skill; I use coding agents daily and treat the review as part of the work, not a shortcut around it.

**Technology tags:** Python, TypeScript, LangGraph, LangChain, FastAPI, Pydantic, OpenAI, Anthropic, Azure OpenAI, FAISS, BM25, PostgreSQL, MongoDB, Redis, Kubernetes, Docker, GitLab CI, Langfuse, LangSmith, OpenTelemetry, Next.js, React, n8n, WhatsApp Business Platform, Claude Code

---

## Founder & Principal Consultant
**FEROQ · 2021 – Present**

**Situation**
- FEROQ is my independent consultancy. I deliver solo, directly to clients in healthcare, finance, and logistics — no team behind me, which means every engagement is scoped to what one engineer can own and support. [Clients or engagements delivered since 2021 — fill in]

**Task**
- Deliver AI agents, intelligent process automation, and full-stack applications end to end, from the first conversation with a stakeholder through to running the thing in production.

**Action**
- Run requirements discovery directly with client stakeholders, then redesign the workflow before automating it.
- Architect and ship multi-agent systems covering tool use, retrieval, memory, state management, and coordination between agents.
- Instrument production agents with tracing, evaluation, and guardrails, managing prompt and version changes to keep behavior reliable and cost predictable.
- Integrate solutions with the systems clients already run — CRM, ERP, ticketing, and data warehouse platforms — over REST APIs and webhooks.
- Own deployment, monitoring, and ongoing support after handover.

**Result**
- Engagements delivered across three sectors since 2021, each owned end to end by one engineer, from discovery through support. [Add a client count, project count, or one named outcome with a number — this is the weakest Result on the profile and a single figure would fix it]

**Take away**
- Owning discovery through support changes what you build: you design for whoever has to run it at 2am, and that is usually you.
- Working alone forces observability early, because there is nobody else to debug it.

**Technology tags:** Python, TypeScript, LangChain, LangGraph, FastAPI, n8n, REST APIs, Webhooks, PostgreSQL, Docker, Salesforce, Next.js, React

---

## Senior Automation Engineer
**Fiibo · April 2024 – September 2025**

**Situation**
- Fiibo delivers automation for healthcare provider operations. I worked on back-office processes spanning multiple business fronts, where the work was still manual, repetitive, and high volume. [Company size / team size — fill in]

**Task**
- Replace those workflows with production automations, owning each one from current-state analysis through deployment and ongoing support.

**Action**
- Analyzed and documented current-state processes with the people who ran them, then redesigned each for automation rather than automating it as-is.
- Automated web, desktop, and image-based interfaces where no API was available.
- Built AI agents and orchestrated automations running in production for internal teams and client accounts, integrating CRM, ERP, and ticketing platforms.
- Added monitoring dashboards, structured error handling, retries, and diagnostics so automations degraded visibly instead of silently when upstream systems changed.

**Result**
- 20+ automations delivered to production over 18 months.
- Over 500 hours of manual processing removed per month across multiple business fronts, reducing recurring operating cost.
- Tens of thousands of records processed monthly, with a class of manual data-entry error eliminated.
- Stakeholders gained dashboards showing throughput, failure rates, and realized impact, where previously there was no visibility at all.

**Take away**
- The hours saved come from redesigning the process, not from replaying the clicks — automating a bad workflow just makes it fail faster.
- An automation nobody can observe is one nobody trusts; the monitoring is what got them adopted.
- Process knowledge is the transferable part. It is why I approach AI agents as workflow problems rather than prompt problems.

**Technology tags:** Python, RPA, Selenium, Pandas, OpenCV, REST APIs, SQL, CRM Integration, ERP Integration, Process Automation

---

## Automation Engineer
**Cadmus IT Solutions · March 2022 – September 2022**

**Situation**
- Cadmus is an IT services consultancy. I delivered process automation for finance, HR, insurance, health, and logistics teams — five business domains, each with its own systems and its own definition of "done". [Company size — fill in]

**Task**
- Convert manual, high-volume data entry and reconciliation workflows into automations, covering documentation, development, and production rollout.

**Action**
- Partnered with business analysts and process owners to turn as-is process maps into automation specifications and acceptance criteria before writing code.
- Built automations for high-volume data entry and reconciliation across spreadsheet and system workflows.
- Documented each process and supported its rollout into production.

**Result**
- Recurring manual handling eliminated across five business domains inside a seven-month engagement.
- [If you have one: records or hours per month for any single automation here]

**Take away**
- Agreeing acceptance criteria with the process owner before coding removed most of the rework — the disagreement is always about the edge cases, and it is cheaper to have it on paper.

**Technology tags:** Python, Pandas, RPA, SQL, Process Automation, Requirements Gathering

---

## Back-End Engineer
**BPA Technologies · December 2020 – March 2022**

**Situation**
- My first engineering role. BPA Technologies ran a set of internal Python services and integrations that business operations depended on daily. [Company size / team size — fill in]

**Task**
- Build and maintain those services — the automations, integrations, and internal tools operations ran on — and keep them running in production.

**Action**
- Developed Python automation services and internal tools covering web scraping, file processing, and system integrations.
- Built and consumed REST APIs connecting internal systems with third-party services.
- Wrote SQL queries and data transformation routines supporting reporting and process validation.
- Supported deployment, troubleshooting, and maintenance of automations already running in production.

**Result**
- 15 months operating Python services in production, where the automation specialization that shaped the rest of my career started. [Any number you remember — services owned, integrations built, volume processed — would strengthen this]

**Take away**
- Being on the hook for production support taught me more about writing resilient code than building features ever did.
- Integrations fail at the seams, not in the middle: most of what I learned here was about what happens when the other system changes without telling you.

**Technology tags:** Python, REST APIs, SQL, Web Scraping, Pandas, ETL, Git

---

## Notes on choices made

- **Stacks are out of the prose, into the tags.** Strider says listing stacks in the description is unnecessary because there is a dedicated field. I kept tool names only where they *are* the claim — "hand-written LangGraph state machine" says something a tag cannot — and pushed everything else to the tags line.
- **No client names anywhere**, sectors only, matching every other surface.
- **"Co-built"** on the BasicX platform, never built alone. See `README.md`.
- **The payroll-billing audit engine is described as deterministic**, because it is: a rules engine with no LLM in it. Calling it AI would not survive an interview.
- **No message volume or conversation count** for the agent platform, because no such metric exists in the code. 22 brands is the scale claim that holds up.
- **No headcount reduction claimed** for the 500 hours/month — the automations spanned multiple business fronts rather than shrinking one team.
