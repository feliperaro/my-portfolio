# LinkedIn profile copy — paste-ready

Written to match the CVs in this directory, so the two never contradict each other.
Nothing here is invented — but not all of it is *confirmed*, which is a different
thing. `experience-source.md` tracks which roles have been verified against a written
question list and which only ever came from an audit. Check it before pasting a role.

## Order to work in — done on 2026-09-09 except one item

Everything below was applied to the live profile on 2026-09-09, in this order. The
sequence is kept because it is the order to redo this in if it ever has to be redone,
and because item 7 is still open.

1. ~~**The three stale titles.**~~ **Done.** BasicX `Information Technology Consultant`
   → **AI Engineer**; Fiibo `RPA Developer` → **Senior RPA Developer**; Tamwood end
   date `Jan 2024` → **Dec 2023**. These were the only *contradictions already public*
   rather than gaps. The CVs were right in all three, so nothing in this repo changed.
2. ~~**Profile URL.**~~ **Done** — `linkedin.com/in/feliperamosroque` resolves. The
   seven-file repo pass followed it, in the same session.
3. ~~**The three empty sections**: About, Languages, Projects.~~ **Done.** One
   correction to what this file used to claim: **About was not empty.** The
   2026-09-09 audit missed it because the profile lazy-renders. What was there is
   worse than empty — see the note below.
4. ~~**Two corrections that are not gaps.**~~ **Done.** FIAP now reads
   `Postgraduate Degree, Artificial Intelligence for Developers`. The top card now
   shows **Basicx Solutions** instead of FEROQ. That second one **did not hold on the
   first save** — LinkedIn reverted it to the FEROQ role once, silently, and it took a
   second pass. Re-check it after any future intro edit.
5. ~~**Headline**, then **Skills**.~~ **Done.** Headline is Option 1. The five pinned
   top skills are now Python · Artificial Intelligence (AI) · AI Agents · LangGraph ·
   Robotic Process Automation (RPA), in that order.
6. ~~**The roles.**~~ **Done** for all four unheld entries: BPA and Cadmus had their
   first-person prose replaced, BasicX and Fiibo went from no description to the full
   bullet sets. Every line was verified character-for-character against this file after
   saving.
7. **Featured — still open, and the only item that is.** Its portfolio card promises a
   paragraph per role, which is true only once the site is deployed. Pin it after the
   deploy, not before.

> **The profile that was replaced was written by the audit.** Reading the audit
> itself — COD3RS, `app.coders.com.br/analises/3785`, dated 24 Jul 2026 — settles
> where the old copy came from: its suggested About is *verbatim* what was live, and
> its suggested headline is the live headline with one word changed. Someone pasted
> the audit's output onto the profile.
>
> That matters because of what came with it. The About it wrote claimed "Proficient
> in Python, JavaScript, React.js, **AWS cloud services**" — the one claim the box
> below forbids — plus automations that "reduced operational costs", a cost-reduction
> claim with nothing behind it, and it led with "Full-stack Software Engineer" rather
> than AI. All three were live until 2026-09-09, and all three are gone now.
>
> So the AWS box below was right about the origin and wrong about the reach: the
> suggestion did come from an audit, and it had *already been acted on*.

**FEROQ is held.** See the banner on its section. Its live title reads "Software
Engineer · Self-employed", which *understates* the entry — leave it understated while
the entry is held, rather than raising a title on the least-evidenced role.

> **Do not add AWS.** The profile audit suggested "proficient in AWS cloud services"
> and an AWS Certified Developer certification. That is not your stack. The
> `public/images/aws.png` formerly in this repo (now deleted) is likely what the audit
> picked up on — and the suggestion was already pasted into the live About once, so
> this box is a correction, not a precaution.
>
> Azure is different, and it improved: the agent platform genuinely supports Azure
> OpenAI as an LLM and embedding provider, so the CVs now say "Azure OpenAI Service"
> rather than the weaker "Microsoft Azure (working knowledge)". That is accurate, but
> it is provider integration, not Azure infrastructure depth — do not stretch it into
> AKS, Function Apps, or Container Apps.

---

## Profile URL — changed 2026-09-09

It used to be the default LinkedIn assigns, with a random hash on the end
(`felipe-ramos-roque-b901a417b`), which reads on a CV contact line as a profile
nobody finished setting up. It is now:

```
linkedin.com/in/feliperamosroque
```

**This was a seven-file change, not a LinkedIn-only one**, and all seven are done.
The old URL was written into five CVs, the site, and the recruiter reply draft:

- `cv/felipe-roque-*.html` — all five contact blocks
- `cv/automation-ai-recruiter-reply.md`
- `src/app/i18n/content.ts` — the `LINKEDIN` constant

LinkedIn does not redirect the old URL, so **every CV sent before 2026-09-09 now
points at a dead link.** Nothing can be done about those; it is the reason this was
done early rather than after another round of applications. Still outstanding from
this change: regenerate the `.docx` files and `public/cv.pdf` from the updated HTML.

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

## Featured — empty, and the most visible thing you can fix

Featured sits directly under About and above Experience. It is the only place on
the profile where you choose what a recruiter looks at first; empty, it drops them
straight from prose into job titles.

Pin three, in this order:

1. **support-agent** — `github.com/feliperaro/support-agent`. The one artifact that
   shows production practice rather than a demo. Title the card so the value reads
   without a click: "Open-source AI support agent — LangGraph, guardrails, and a
   structural evaluation harness".
2. **The portfolio** — `feliperamosroque.vercel.app`. The per-role paragraphs that
   make this card worth pinning — they answer the "what did he actually do" question
   the LinkedIn bullets have to compress — are written but **not yet deployed**. Pin
   this only after the site ships them, or the card promises something the page does
   not have.
3. **The CV** — link or upload the applied-AI variant, which is what
   `public/cv.pdf` serves.

Stop at three. Featured scrolls horizontally past that, and a fourth card is
effectively unpinned.

---

## Languages section — added 2026-09-09

The audit scored this 1/5 because the section did not exist. It does now, added via
*Add profile section → Additional → Languages*, with exactly these values:

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

> **HELD — do not paste this yet.** Two questions decide whether these bullets are
> FEROQ's work at all: are the "multi-agent systems using LangChain and LangGraph" and
> the "tracing, evaluation frameworks, and guardrails" client deliveries, or are they
> the BasicX platform described a second time? With BasicX already live on the profile,
> publishing this puts the same system under two employers on one screen — worse than
> a missing entry. See questions 7 and 8 in `experience-source.md`.
>
> When the answers come: work that belongs to BasicX **moves** to BasicX. FEROQ is not
> deleted or emptied to resolve the overlap.

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

> **Architecture verified, attribution not.** Every system named below is confirmed to
> exist by reading the repositories. What is unconfirmed is how much of each is yours
> versus the team's — question 4 in `experience-source.md`. Three claims here were
> already corrected from the code rather than by asking, and those corrections are
> already in the copy: "co-build" (203 of 422 commits), the payroll audit engine that
> is a deterministic rules engine and not AI, and the Chatwoot fork whose authorship is
> upstream. Paste as written; do not restore a stronger verb.

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

> **Unverified, but publishing.** The 500-hour figure is Felipe's own estimate and
> `README.md` already frames it as a lower bound, so it stays. The fragile line is the
> fourth bullet — "Built AI agents... running in production" is the RPA-to-AI bridge the
> whole pivot rests on, and it is one generic sentence. It is the first thing an
> interview will push on. Question 11 in `experience-source.md` is what sharpens it.

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
Python RPA developer on Cadmus's Automation and Innovation team, automating the company's own internal operations across HR, IT asset management, and finance.

• Automated employee onboarding and offboarding end to end, provisioning and revoking system access across internal platforms — replacing a manual, error-prone process split between HR and IT.
• Delivered roughly six automations in seven months: three built new, and three inherited unfinished or failing in production and rebuilt, including correcting business logic that did not match what process owners actually needed.
• Gathered requirements directly with process owners, then developed, tested, deployed, and supported each automation in production.
• Led the squad's Python RPA work — one to two other developers plus up to three interns — and introduced the standards the team worked to: development conventions, project structure, code review, and documentation, where none had existed before.
• Built every automation in Python and its ecosystem rather than on a commercial RPA platform.
```

> **Two corrections from `experience-source.md`, both checkable.** The sector list
> here used to read "finance, HR, insurance, health, and logistics" — insurance,
> health, and logistics belong to **BPA** and had been copied onto Cadmus in error.
> And the work was **internal**, not client delivery, which is the opposite of BPA.
>
> **Never write "Tech Lead" or "Team Lead" as the title.** It stayed "RPA Analyst
> Developer" for all seven months; there was no promotion and no people management.
> "Led the squad's Python RPA work" is accurate, and keeping the headcount visible
> — one to two developers, up to three interns — is more credible than the bare
> verb. Same discipline as the FEROQ rule: claim the work, never the org chart.

### BPA Technologies — Python Developer (Dec 2020 – Mar 2022)

```
Python developer at an RPA-as-a-service provider, delivering process automation into client operations across insurance, healthcare, financial services, logistics, and consumer products — including one of Brazil's largest insurers, a major health-plan operator, and a national consumer-goods brand.

• Owned four to five automations end to end — process discovery and documentation, development, testing, deployment, and production rollout — and supported a wider portfolio running in production.
• Built every automation on the company's in-house Python RPA framework, working in a squad of four to five developers under a tech lead, with pair programming and shared code standards.
• Automated web, desktop, and file-based workflows using Selenium, Pandas, Openpyxl, OpenCV, AutoHotkey, and web scripting where no interface existed — and through REST APIs, spreadsheets, and Google Workspace where one did.
• Wrote SQL and data transformation routines behind operational reporting, and built dashboards giving business stakeholders and technical support visibility into process insights, error rates, and run status.
• Handled production support alongside development: triaging tickets, resolving automation defects, and supporting key users directly.
• Grew into full ownership of delivery — by my final months I was taking automations end to end without tech-lead guidance.
```

> **This entry used to describe the wrong job.** It said "internal tools supporting
> business operations", which reads as automating BPA's own back office. BPA sells
> RPA as a service; the work was client delivery into other companies.
>
> **No client names**, per the rule in `README.md` — and for a US audience the
> operative reason is different anyway: Porto Seguro, GNDI, and Caloi carry no
> recognition abroad. Scale reads where names do not.
>
> **Healthcare starts here, in 2020** — GNDI is a health-plan operator — not in
> 2024 at Fiibo, as every surface used to imply. But attach **no data-handling
> claim** to it: whether that work touched member data is unconfirmed, so the
> sensitive-data practice line still starts at Fiibo.

---

## Education — all four were already there; both fields fixed 2026-09-09

Missing from *this file* until now, but not from the profile: the 2026-09-09 audit
found all four entries live. Two things are wrong on them, and both matter more than
they look — the FIAP postgraduate degree is what supports "Applied AI Engineer" as a
title, and Tamwood is what substantiates the English claim in the Languages section.

- **FIAP reads `Postech, IA para Devs`** — Portuguese, on an English profile, in the
  entry that carries the AI credential. Retype it as the table below has it.
- **Tamwood ends `Jan 2024` on the profile**; it should read **Dec 2023**.

| School | Degree | Field of study | Dates |
| --- | --- | --- | --- |
| FIAP (Postech) | Postgraduate Degree | Artificial Intelligence for Developers | Aug 2024 – Jun 2025 |
| Tamwood Careers College | Associate Degree | Information Technology | Jul 2023 – Dec 2023 |
| FIAP | Bachelor's Degree | Systems Analysis and Development | Feb 2020 – Dec 2021 |
| Senac | Technical Degree | Information Technology | Feb 2019 – Jul 2020 |

LinkedIn's degree and field are free text. Enter them exactly as written — an ATS
reading the profile matches on the string, not on a picker value.

> **The Tamwood date is settled: Jul 2023 – Dec 2023.** `experience-source.md` had
> recorded Jan 2024 against Dec 2023 on every other surface; Felipe confirmed Dec 2023
> on 2026-09-09 and the outlier was corrected. Type the table as written.

---

## Projects — support-agent added 2026-09-09

LinkedIn keeps Projects separate from Featured, and it earns its place even with
the same repo pinned above: Projects is indexed by search, Featured is not.

**Project name**

```
support-agent — open-source AI support agent
```

**Description**

```
A support agent built to show production practice rather than a demo: a LangGraph classify-retrieve-act loop with hybrid retrieval, tool-level access control that refuses privileged actions before identity is verified, and output guardrails that block invented pricing.

Paired with an evaluation harness that scores behavior structurally - tool calls, refusals, trajectory order, retrieval grounding - rather than response wording, running on a fresh clone with no API key and gated in CI against a score floor.
```

The entry is live with the name and description above, unassociated with any
employer — it is Felipe's own work, not a deliverable of one.

> **The repo link could not be attached.** LinkedIn's *Add media → Add a link* step
> returned "We couldn't generate a preview for this link" for
> `github.com/feliperaro/support-agent`. The repo is public and the URL is correct —
> verified with `gh repo view` — so this is LinkedIn's fetcher failing on GitHub, not
> a bad link. The Projects entry stands without it; the repo still reaches recruiters
> through Featured, which takes the same URL through a different path. Worth retrying
> the media attachment later.

---

## Skills — top five re-pinned 2026-09-09; the long tail is still untrimmed

The audit's advice here is right: pin the ones recruiters filter on. LinkedIn shows
your top 3 pinned skills prominently, so order matters.

**You have 59 today, and the two surfacing at the top are Pandas and PostgreSQL, both
attributed to Fiibo.** Neither is wrong; both are the wrong thing to lead with for the
roles being targeted. This is the gap between having the skills listed and having them
ordered — 59 entries means the list is doing no filtering work at all.

**Done 2026-09-09** — the five pinned top skills are now, in order: Python
(Programming Language) · Artificial Intelligence (AI) · AI Agents · LangGraph ·
Robotic Process Automation (RPA). They replaced Software Development · RPA · Python ·
JavaScript · React.js.

**Three of those five did not exist among the 59.** "Artificial Intelligence (AI)",
"AI Agents" and "LangGraph" all returned *No results found* under "Currently in your
Skills section" and had to be added from LinkedIn's catalogue. That is the sharper
version of the 59-skills problem: it was not just badly ordered, it was missing the
three terms the target roles are actually filtered on.

**Still open:** the long tail below the pinned five. Fifty-nine entries, led by Pandas
and PostgreSQL, both attributed to Fiibo. The list below is the target.

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

## Licenses & certifications — 18 is too many, and one is off-message

Not covered before this file's 2026-09-09 pass, because nobody had looked at the live
profile. Eighteen entries is a scroll, and a scroll is where a recruiter stops reading.

The FIAP postgraduate degree belongs in Education, where it already is, and carries the
AI credential on its own. Below it, keep the certificates that match what you are
applying for and let the rest go: an "Automate the Boring Stuff with Python" Udemy
certificate (Sep 2022) sits oddly next to five years of production Python, and
**Blockchain Advanced** points at a career you are not pursuing.

This is optional and reversible — LinkedIn keeps nothing you delete, so decide once.
If trimming feels wrong, the cheaper version is to leave them and accept that the
section is noise rather than signal.

---

## The audit itself, and what I rejected from it

**Source:** COD3RS, `app.coders.com.br/analises/3785`, run 24 Jul 2026 against the
old profile URL. Overall 6.4/10 — 63.5/100. By section:

| Section | Score |
| --- | --- |
| Foto de perfil | 5/5 |
| Número de conexões | 4/5 |
| Headline | 7.5/10 |
| Ajustes finais | 7/10 |
| Skills e endossos | 7/10 |
| About | 10/15 |
| Experiências | 13/20 |
| Atividade e networking | 5/10 |
| Projetos & certificações | 4/10 |
| **Idiomas** | **1/5** |

The audit was right about the shape of the problem — Languages absent, BasicX and
Fiibo empty, no Projects, skills unordered — and all of that is now fixed. Read it
for the diagnosis, not the prescription: its own suggested copy is what created two
of the problems this file exists to prevent.

**Rejected, and why:**

- **AWS.** "Proficient in AWS cloud services" and an AWS Certified Developer
  certification. Not the stack. Already pasted into the live About once — see the top
  of this file.
- **UiPath or Automation Anywhere certification.** Reasonable-sounding, and exactly
  backwards for the target. RPA was moved from third to seventh in the skills list on
  purpose; paying for a certification that anchors the profile to the role being
  moved *out of* works against the whole pivot. If a certification is worth the time,
  it should point where the career is going.
- **"Reduced operational costs."** The audit wrote this into its About draft with no
  figure behind it. The real numbers — 500+ hours/month, 22 brands, 20+ automations —
  are already in the copy as lower bounds of Felipe's own estimates. Inventing a
  softer, unmeasured version of a claim that already exists in a measured form is
  strictly worse.
- **TOEFL or IELTS.** The Canadian study period (Tamwood, Jul–Dec 2023) already
  substantiates the English claim on the profile, at no cost.
- **"Add quantitative metrics to every role."** Generic advice that has to be applied
  carefully here: `experience-source.md` holds three of five roles as unverified, and
  the temptation to reach for a number is the exact failure mode it was written to
  catch. Metrics go in when a question comes back answered, not before.

**Accepted but still open:**

- **Activity.** 5/10, and the weakest thing left. The profile has never posted —
  "You haven't posted yet" — against 2,155 followers. Nothing in this file can fix
  that; it is not copy to paste.
- **International connections.** 4/5 already, slow to move, worth doing gradually.
- **A GitHub link in the top card.** Contact info carries the portfolio; GitHub
  reaches recruiters only through the Projects entry today.
