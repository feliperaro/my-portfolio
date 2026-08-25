# Mavila Consulting — application form answers

Posting: AI Automation Engineer (AI Agents, Azure, Process Automation)
`unlockcareer.ai/jobs/mavila-consulting/apply/10ab6a8b-1862-40c2-be40-325aacddd025`
Submit with `felipe-roque-mavila-ai-automation-engineer.docx`.

Every claim below is already on that CV. If one changes here, change it there too —
and check the drift list in `README.md` first.

---

## Q1 — Most relevant experience building production-grade AI agents or multi-agent systems. Which tools/frameworks?

At BasicX Solutions I co-build and operate a multi-tenant conversational AI platform
on WhatsApp, running in production as isolated Kubernetes services for 22 client
brands across healthcare, veterinary, retail marketplace, real estate, fitness, and
beauty.

The core agent is a hand-written LangGraph StateGraph rather than an off-the-shelf
framework wrapper: intent classification, lead extraction and persistence, retrieval,
profile loading, a tool-calling agent loop, an LLM supervisor, and human-handoff
detection, with checkpointed conversation state so a conversation survives restarts
and replica changes. On top of that sits a routing agent and named domain
specialists — up to nine per tenant, each bound to its own knowledge base and tool
set. Retrieval is hybrid: BM25 and FAISS fused with Reciprocal Rank Fusion, then
cross-encoder reranking, over per-tenant isolated vector stores.

What makes it production-grade is the layer around the agent. A supervisor and
guardrail layer enforces brand voice, output format, age gating, and crisis-trigger
detection, backed by a behavioral test suite. Everything is traced with Langfuse and
LangSmith over OpenTelemetry. Concurrency tests cover multi-replica handoff locking
and message debouncing. Tenant configuration is a product in its own right —
Pydantic-validated YAML with a web builder providing versioning and diffing, plus a
CI job that asserts deployed configuration matches the repository.

Stack: Python, LangGraph, LangChain, FastAPI, Pydantic, OpenAI / Anthropic / Azure
OpenAI, FAISS and BM25 with cross-encoder rerankers, PostgreSQL, MongoDB, Redis,
Kubernetes, Docker, GitLab CI, Langfuse, LangSmith, OpenTelemetry, TypeScript and
Next.js for the tooling front end.

I also build with coding agents daily — Claude Code for feature development and code
review, including reviewing and refining AI-generated code before it reaches the
shared test suite and CI. Public example of my agent work:
github.com/feliperaro/support-agent.

Before agents I delivered 20+ production RPA automations, which removed over 500
hours of manual processing per month across multiple business fronts. That is the
half of this role that is process reengineering rather than modelling, and it is why
I tend to start from the current-state workflow rather than the prompt.

---

## Q2 — Hands-on experience with Azure deployment and production engineering: Azure Container Apps / Function Apps, CI/CD, APIs, monitoring, observability.

Straight answer on the Azure surface first, since it is the part where my depth is
uneven. My production Azure experience is Azure OpenAI Service, integrated as a
first-class LLM and embedding provider in the agent platform behind a provider
abstraction — deployment-name configuration, endpoint and key management, rate-limit
and cost handling, and failover between providers. I have not yet run workloads on
Azure Container Apps or Function Apps; my equivalent production engineering has been
on Kubernetes.

That production engineering is deep and it transfers directly. I run containerized
Python services on Kubernetes as isolated per-tenant deployments — Docker images,
replicas, rolling deploys, health checks, secret and config management, and
concurrency handling across multiple replicas, including distributed locking for
human-handoff and message debouncing. Container Apps is the managed form of exactly
this workload, and the Function Apps model maps onto the event- and webhook-triggered
services I already build.

CI/CD: GitLab CI pipelines covering build, automated tests, and deploy, plus a job
that fails the pipeline when deployed tenant configuration drifts from the
repository. Testing is part of delivery, not a follow-up — unit tests, behavioral
tests for agent output, and concurrency tests.

APIs: FastAPI services for the platform, webhook ingestion from the WhatsApp Business
Platform and Meta Graph API, and REST integrations into ERP, warehouse management,
CRM, and ticketing systems. I built an ERP-to-WMS order fulfillment integrator and a
deterministic payroll-billing audit engine with a human approval gate.

Monitoring and observability: Langfuse and LangSmith tracing over OpenTelemetry for
agent runs, structured error handling with retries and diagnostics, and operational
dashboards giving stakeholders visibility into throughput and failure rates — carried
over from the RPA work, where an automation nobody can observe is an automation
nobody trusts.

So: the CI/CD, API, testing, monitoring, and observability requirements I meet today
in production. On the Azure-specific hosting services I would be porting known
patterns onto a managed platform, and I would expect that to be a short ramp rather
than a new discipline.
