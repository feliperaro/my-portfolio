# Experience — source of truth

One entry per role. Each holds the **confirmed facts**, then the copy derived from
them for each surface. Everything downstream — `felipe-roque-*.html`,
`linkedin-profile.md`, the live LinkedIn profile, and `src/app/i18n/content.ts` —
must trace back to a fact recorded here.

Written because the surfaces had drifted apart: three job titles disagreed between
LinkedIn and the CVs, one employer's sectors were wrong on five documents, and the
two strongest roles had no LinkedIn description at all. See the audit notes in each
entry.

The rules in `README.md` under **Claims that must not drift** still govern. This
file does not override them; it records what was confirmed and by whom.

## Status of the five roles

| Role | Status | What that means |
| --- | --- | --- |
| BPA Technologies | **locked** 2026-08-21 | Confirmed by Felipe against a written question list. Two errors found and fixed on five documents. |
| Cadmus IT Solutions | **locked** 2026-08-21 | Same. Three errors found, including sectors copied from BPA. |
| Fiibo | **open** 2026-09-08 | Questions written, unanswered. Copy on every surface came from an audit, not from Felipe. |
| BasicX Solutions | **open** 2026-09-08 | Same. Three claims already corrected from the repositories rather than by asking. |
| FEROQ | **open** 2026-09-08 | Same, and the least externally evidenced entry anywhere. |

**The three open roles are the three strongest ones.** That is not a coincidence —
they are the most detailed entries, and detail was mistaken for verification. The
two locked roles are locked precisely because someone asked, and asking is what
turned up a job described as internal when it was client delivery, and a sector list
attributed to the wrong employer on five documents.

Until a role is locked, treat its derived copy as **plausible and unverified**.

## Live LinkedIn profile — audited 2026-09-09

Read directly from `linkedin.com/in/felipe-ramos-roque-b901a417b`. Recorded because the
live profile is a surface like any other, and until now nobody had compared it against
this file. Three titles disagreed with the CVs; Felipe settled all three the same day,
and **the repo was right in every case** — no CV changed.

| Field | Live profile said | Settled as | Fix goes to |
| --- | --- | --- | --- |
| BasicX title | Information Technology Consultant | **AI Engineer** | LinkedIn |
| Fiibo title | RPA Developer | **Senior RPA Developer** | LinkedIn |
| Tamwood end | Jan 2024 | **Dec 2023** | LinkedIn + this file (done) |
| FEROQ title | Software Engineer · Self-employed | *held* — see below | — |

**Applied to the live profile the same day.** All three fixes above are live, along
with the rest of the profile work: About replaced, Languages added, Projects added,
Headline replaced, the top card switched from FEROQ to Basicx Solutions, the five
pinned skills replaced, and full descriptions written onto BasicX, Fiibo, Cadmus and
BPA. Every pasted line was verified character-for-character against
`linkedin-profile.md` after saving. FEROQ was left exactly as it was.

Three things the audit had wrong, found only by editing the profile rather than
reading it:

- **About was not empty**, and reading the audit itself the next day explained why
  the earlier pass got it wrong twice over. The audit — COD3RS,
  `app.coders.com.br/analises/3785`, 24 Jul 2026 — did not miss About; it *rewrote*
  it, and its draft is verbatim what was live. Its headline suggestion is the live
  headline with one word changed. The old profile was the audit's output, pasted in.
  That draft claimed "proficient in ... **AWS cloud services**", the one claim
  `linkedin-profile.md` forbids — so that warning was written about a suggestion that
  had already been acted on months earlier.
- **"Artificial Intelligence (AI)", "AI Agents" and "LangGraph" were not among the 59
  skills.** The problem was never only ordering.
- **The current-company setting does not always hold.** Switching the top card to
  Basicx Solutions saved successfully, then reverted to the FEROQ role on its own. It
  took a second pass. Re-check it after any future intro edit.

Other facts the live profile supplied, not previously recorded anywhere:

- **Employment types.** BasicX **Full-time**, Fiibo **Contract**, Cadmus Full-time,
  BPA Full-time, FEROQ Self-employed. This partly answers BasicX question 1: it is a
  full-time position, so "as an employee or an international contractor" in the About
  section describes a preference, not the present arrangement.
- **FEROQ starts Feb 2021**, not a bare "2021". Narrower and more defensible than the
  five-year framing the copy uses; question 1 in that entry gets easier to answer.
- **BasicX and Fiibo have no description at all** — the two strongest roles, empty.
  FEROQ carries three generic bullets. Cadmus and BPA carry long first-person text.
- **FEROQ is what the top card shows as the current company**, because LinkedIn orders
  concurrent current roles by start date. First impression is self-employment, not the
  production AI platform. Changeable in the intro edit.
- **59 skills, 18 certifications, no About, no Languages, no Featured, no Projects.**
- FIAP appears as `Postech, IA para Devs` — Portuguese, on an English profile.

**The FEROQ title is deliberately not touched.** The live profile understates it
("Software Engineer") relative to the ceiling this file records ("Founder & Principal
Consultant"). Raising a title on the least-evidenced entry, while that entry is held
for double-counting, is the wrong order of operations. Settle questions 7 and 8 first,
then decide the title with the scope it actually claims.

---

## BPA Technologies — Python Developer

**Dec 2020 – Mar 2022 · 1 yr 4 mos · Brazil · Hybrid · Full-time**

Status: **locked** (2026-08-21), with three open items flagged at the end.

### Confirmed facts

Confirmed by Felipe directly, in answer to a written question list.

- **First professional role.** Hired as "Python Developer" — no junior suffix on the
  title, but it was his entry into the industry. This role is what makes the
  "5+ years" claim true, so it is the one that most needs to be precise.
- **BPA sells RPA as a service** to other companies. The work was *client delivery*,
  not internal tooling.
- **Squad model**: three to four other developers plus a team leader.
- **Owned four to five automations end to end**, plus production support across a
  wider portfolio.
- **Clients named by Felipe**: Porto Seguro (insurance), GNDI / Grupo NotreDame
  Intermédica (health-plan operator), Caloi (consumer goods). See the naming
  decision below — the names are recorded here but do not appear on any surface.
- **Sectors**: insurance, healthcare, financial services, logistics, consumer
  products.
- **Built on BPA's in-house Python RPA framework** — proprietary, not a
  commercial platform. No UiPath, Blue Prism, or Automation Anywhere.
- **Dual role: developer and production support** — triaging tickets raised by the
  support team, fixing automation defects, supporting key users directly.
- **Full lifecycle** per automation: process documentation, development, testing,
  deployment, production rollout.
- **Dashboards** for business stakeholders and technical support, showing process
  insights, errors, and run status.
- **Stack**: Python, Selenium, Pandas, Openpyxl, OpenCV, web scraping, JavaScript
  and web scripts, AutoHotkey, REST APIs, spreadsheets and files. SQL and data
  transformation routines for reporting.
- **Practices**: pair programming, code quality, requirement meetings.
- **Growth arc**: by his final months he was delivering automations end to end
  without tech-lead guidance. His own words: "I owned that."

### Two corrections this entry forced

1. **The CVs described this job wrong.** All five said "internal tools supporting
   business operations", which reads as automating BPA's own back office. It was
   client delivery into other companies. Fixed.
2. **BPA's sector list had been copied onto Cadmus.** The CVs credited Cadmus with
   "finance, HR, insurance, health, and logistics"; insurance/health/logistics
   belong to BPA. See the Cadmus entry.

### Client naming decision

`README.md` says no client names on any surface, sector references only. That rule
holds — but the operative reason for a US audience is different: Porto Seguro, GNDI,
and Caloi carry no recognition outside Brazil. **Scale reads where names do not**, so
the surfaces say "one of Brazil's largest insurers, a major health-plan operator, and
a national consumer-goods brand." All three descriptors are defensible.

### Healthcare timeline — corrected

GNDI is a health-plan operator, so **healthcare exposure begins in 2020, not in
April 2024 at Fiibo.** Every surface previously implied the latter. This matters for
roles asking for healthcare background.

**No data-handling claim is attached to it.** Whether the GNDI work touched member or
patient data is unconfirmed, so the sensitive-data practice line still starts at
Fiibo. Do not extend it backwards without confirmation.

### Derived copy — LinkedIn

```
Python developer at an RPA-as-a-service provider, delivering process automation into client operations across insurance, healthcare, financial services, logistics, and consumer products — including one of Brazil's largest insurers, a major health-plan operator, and a national consumer-goods brand.

• Owned four to five automations end to end — process discovery and documentation, development, testing, deployment, and production rollout — and supported a wider portfolio running in production.
• Built every automation on the company's in-house Python RPA framework, working in a squad of four to five developers under a tech lead, with pair programming and shared code standards.
• Automated web, desktop, and file-based workflows using Selenium, Pandas, Openpyxl, OpenCV, AutoHotkey, and web scripting where no interface existed — and through REST APIs, spreadsheets, and Google Workspace where one did.
• Wrote SQL and data transformation routines behind operational reporting, and built dashboards giving business stakeholders and technical support visibility into process insights, error rates, and run status.
• Handled production support alongside development: triaging tickets, resolving automation defects, and supporting key users directly.
• Grew into full ownership of delivery — by my final months I was taking automations end to end without tech-lead guidance.
```

### Derived copy — CV bullets

Replaces the two-bullet version in all five `felipe-roque-*.html` variants.
**Re-verify page count after applying** — two bullets to four, times five documents,
and `README.md` warns page count is non-monotonic.

```
• Delivered end-to-end process automation into client operations across insurance,
  healthcare, financial services, logistics, and consumer products, at a firm
  providing RPA as a service.
• Owned four to five automations from process discovery and documentation through
  development, testing, deployment, and production rollout, built on an in-house
  Python RPA framework within a developer squad.
• Automated web, desktop, and file-based workflows with Selenium, Pandas, Openpyxl,
  and OpenCV, integrated systems through REST APIs and Google Workspace APIs, and
  wrote SQL and data transformation routines for operational reporting.
• Built dashboards giving business stakeholders and technical support visibility into
  process status and failures, and handled production support tickets and defect
  resolution directly with key users.
```

Per the Google Workspace rule in `README.md`, the bullet says "Google Workspace APIs"
and stops — no capability is pinned to this employer.

### Derived copy — site

**Applied 2026-08-25.** The timeline renders one short paragraph per role;
`TimelineItem` gained a sibling type `WorkItem` that requires `description`, so
an English paragraph without its Portuguese counterpart now fails the build.

```
Delivered process automation into client operations across insurance, healthcare,
financial services, logistics, and consumer products, at a firm providing RPA as a
service. Owned four to five automations from process discovery through production
rollout.
```

### Open items

- **No project story yet.** Three client names, but not one concrete narrative:
  which manual process, what was built, what changed. Needed for interview prep and
  to make the entry defensible rather than merely detailed.
- **Attribution unclear** across the three clients — whether all three were Felipe's
  own deliveries or the squad's portfolio with him on some. Decides "delivered into"
  versus "contributed to".
- **GNDI and health data** — unconfirmed, see above.

---

---

## What actually shipped to the CVs — read before trusting the bullets above

**Applied 2026-08-25 to all five `felipe-roque-*.html`.** The four-bullet versions
recorded under each entry did not fit. Baseline was five variants at exactly two
pages; the full correction pushed three of them to three pages, and the spill was
always the tail of Education.

`break-inside: avoid` on `.entry` makes each education block atomic, so trimming
words does nothing until enough space frees for a whole block — word-level trims
were measured and did not move the page count. What shipped:

- **Four variants** carry Cadmus at three bullets and BPA at three, condensed from
  the four-bullet copy above. Every confirmed fact survives; what went was
  redundancy, not substance. The dropped Cadmus bullet ("high-volume data entry and
  reconciliation with Python, SQL, and Pandas") is a generic restatement, and its
  keywords survive in the BPA entry and the skills block.
- **`felipe-roque-senior-automation-ai-engineer.html` diverges**: Cadmus and BPA at
  two bullets each. It carries a fourth education entry (Tamwood) the others lack,
  so it had the least room. All facts are still present, packed denser.

**Verified after applying**: all five render at two pages, zero ligatures, and
"Artificial Intelligence" extracts as searchable text. `public/cv.pdf` and every
`.docx` were regenerated.

**The wording below is the reference, not the shipped text.** Re-deriving a CV from
it will overflow again unless the page count is re-measured.

## Cadmus IT Solutions — RPA Analyst Developer

**Mar 2022 – Sep 2022 · 7 mos · Brazil · Remote · Full-time**

Status: **locked** (2026-08-21).

### Confirmed facts

- **Internal work, not client delivery.** Cadmus's own "Automation and Innovation"
  team, automating Cadmus's own departments. This is the opposite of BPA, and the
  CVs previously described both jobs identically.
- **Departments served: HR, IT asset management, and finance.** Confirmed by Felipe.
  "IT asset" means equipment and licences, not financial asset management.
- **Requirements came directly from process owners** — not through business
  analysts. Confirmed.
- **Led the squad's Python RPA work.** Composition changed over the seven months:
  first Felipe plus one developer and three interns, later Felipe plus two
  developers and no interns.
- **Introduced the team's first engineering standards** — development conventions,
  project structure, code review, and documentation. In his words, the team "had no
  pattern or code quality before."
- **Roughly six automations in seven months**: about three built new, about three
  inherited unfinished or failing in production and rebuilt, including correcting
  business logic that did not match what the departments needed.
- **Flagship automation: employee onboarding and offboarding** — creating and
  removing system access across internal platforms via RPA.
- **Pure Python** and its ecosystem. No commercial RPA platform.
- **Left because of a layoff.** Interview-prep material, not CV material.

### Three corrections to the CVs

1. **Sectors were wrong on all five variants.** They read "finance, HR, insurance,
   health, and logistics." Insurance, health, and logistics belong to **BPA** and
   were copied here in error. Correct list: **HR, IT asset management, finance.**
2. **"Partnering with business analysts" is wrong.** Felipe worked directly with
   process owners. The correction makes the claim stronger, not weaker.
3. **Three substantial facts were missing entirely** — the leadership, the
   standards work, and the legacy rescue. All three were sitting in plain sight on
   the public LinkedIn profile.

### How to word the leadership — read this before editing anything

The title stayed **"RPA Analyst Developer"** for the full seven months. There was no
promotion and no tech-lead title. So:

- **Never write "Tech Lead" or "Team Lead" as a title**, and never imply people
  management, headcount responsibility, or hiring.
- **"Led the squad's Python RPA work"** or "guided" is accurate: technical
  leadership in practice, at 18 months into his career, without the title.
- The numbers are small and should stay visible — one to two developers and up to
  three interns. Stating them is more credible than the bare verb "led."

This is the same discipline the FEROQ rule in `README.md` applies, for the same
reason: claim the work, never the org chart.

### Why the onboarding/offboarding automation is the one to lead with

It is the strongest single project on any early-career entry, because:

- **Access provisioning and revocation is a security control**, not just a
  time-saver. Failed offboarding — access that outlives the employee — is a standard
  audit finding.
- It ties **HR and IT asset management together**, so it evidences both departments
  in one story.
- It needs no domain explanation to a foreign interviewer. Every company has this
  process and everyone knows it is painful.

**Careful with the connection to the sensitive-data line.** Automating access
provisioning is *implementing* access control; it is not the same as the
least-privilege handling discipline claimed for Fiibo. The two are related and the
link is worth making in conversation, but do not merge them on a CV, and do not move
the sensitive-data practice line earlier than Fiibo on the strength of it.

### Derived copy — LinkedIn

```
Python RPA developer on Cadmus's Automation and Innovation team, automating the company's own internal operations across HR, IT asset management, and finance.

• Automated employee onboarding and offboarding end to end, provisioning and revoking system access across internal platforms — replacing a manual, error-prone process split between HR and IT.
• Delivered roughly six automations in seven months: three built new, and three inherited unfinished or failing in production and rebuilt, including correcting business logic that did not match what process owners actually needed.
• Gathered requirements directly with process owners, then developed, tested, deployed, and supported each automation in production.
• Led the squad's Python RPA work — one to two other developers plus up to three interns — and introduced the standards the team worked to: development conventions, project structure, code review, and documentation, where none had existed before.
• Built every automation in Python and its ecosystem rather than on a commercial RPA platform.
```

### Derived copy — CV bullets

Replaces the two-bullet version in all five `felipe-roque-*.html` variants.

```
• Automated employee onboarding and offboarding for internal operations, provisioning
  and revoking system access across HR, IT asset management, and finance platforms.
• Delivered roughly six automations in seven months - three built new, three inherited
  unfinished or failing and rebuilt - gathering requirements directly with process
  owners and owning development, testing, deployment, and production support.
• Led the Python RPA squad's technical work, guiding one to two developers and up to
  three interns, and introduced the team's first development standards: project
  structure, code review, and documentation conventions.
• Automated high-volume data entry and reconciliation with Python, SQL, and Pandas.
```

### Derived copy — site

**Applied 2026-08-25**, same shape as BPA.

```
Automated employee onboarding and offboarding end to end across HR, IT asset
management, and finance, provisioning and revoking system access across internal
platforms. Led the squad's Python RPA work and introduced its first engineering
standards.
```

### Interview prep

- **"Why only seven months?" — layoff.** Clean and blameless, and it needs saying
  plainly rather than being talked around. It also opens the Sep 2022 to Apr 2024
  period, which is the next thing an interviewer will ask about: see the FEROQ entry
  and the Tamwood study period in Canada (Jul 2023 – Dec 2023).
- **"You led at 18 months in?"** — yes, in practice and not by title. Worth saying
  so before being asked; volunteering the limit is what makes the claim land.


---

## Fiibo — Senior RPA Developer

**Apr 2024 – Sep 2025 · 1 yr 6 mos · Fortaleza, CE, Brazil**

Status: **open** (questions written 2026-09-08, unanswered).

### Why this entry needs the same pass

It carries the largest number on any surface — **over 500 hours of manual processing
removed per month** — and it is the bridge claim for the whole career pivot: the
place where RPA work first becomes AI work. If either the number or the bridge does
not survive an interview, the CV opening and the LinkedIn About both lose their
spine. Nothing here was confirmed by Felipe; it came from an audit.

### Questions

**Title and scope**

1. ~~Is the title real?~~ **Answered 2026-09-09.** The live LinkedIn profile said
   plain "RPA Developer" against "Senior RPA Developer" on five CVs; Felipe confirmed
   the CVs are right and the profile is stale. What is still open is the narrower
   version: **Senior from day one, or a promotion during the 18 months?** If it
   changed, from what and when — LinkedIn takes two positions at one company, and the
   promotion tells a better story than either title alone.
2. Was Fiibo's work **for Fiibo's own operations, for client accounts, or both?**
   The current bullets say both, in the same sentence, which is the exact
   construction that made BPA and Cadmus read identically when they were opposites.
3. Was it **healthcare only**, or were there other sectors?

**The 500 hours — highest risk on the page**

4. **How was it measured?** Hours per process before automation times volume? A
   time study? Your own estimate? Someone else's?
5. **Who else has seen that number** — a manager, a client, a dashboard? If it
   appeared in a report Fiibo produced, that is much stronger than a personal
   estimate.
6. Is it **across all 20+ automations combined**, or a subset? Over what period —
   at peak, or sustained?
7. Same three questions for **"tens of thousands of records per month."**

**Attribution**

8. The **20+ automations** — all yours end to end, or the team's portfolio with you
   on some? *(BPA turned on exactly this distinction: "delivered into" versus
   "contributed to".)*
9. **How large was the team**, and did you lead any of it — formally or in practice?
10. Who did you take requirements from: process owners, analysts, clients?

**The AI bridge — load-bearing for the pivot**

11. "Built AI agents and orchestrated automations running in production" — **what,
    specifically?** Which models or frameworks, what did the agent decide, and what
    happened when it was wrong?
12. Was that **your initiative or assigned work?** An engineer who introduced AI at
    an RPA shop is a different candidate from one who was handed it.
13. Did any of it **reach production with real users**, or was it internal or pilot?

**Sensitive data — where this claim starts**

14. `README.md` says the least-privilege handling discipline **begins at Fiibo**.
    What did you actually do: isolated credentials, masked logs, restricted
    dashboards, approval gates before a write? Name the concrete ones.
15. Healthcare data under **LGPD** — were you handling patient or member records
    directly, or operating on systems that held them?

**The exit**

16. **Why did you leave in Sep 2025**, one month before BasicX? Resignation, layoff,
    end of contract? An interviewer will ask, and the answer to the Cadmus version
    of this question ("layoff") was clean precisely because it was said plainly.

### Traps to avoid when the answers come back

- **No headcount reduction may be claimed**, per `README.md`. Hours removed across
  multiple business fronts is the claim; "reduced the team by N" is not, and never
  becomes one.
- **HIPAA stays out.** The work ran under LGPD. What transfers is the handling
  discipline, worded as discipline.
- If the 500 hours turns out to be a personal estimate with nothing behind it, it
  stays — `README.md` already frames these as **lower bounds of Felipe's own
  estimates, so they survive questioning**. What must change is how it is spoken
  about in an interview, not whether it appears.


---

## BasicX Solutions — AI Engineer

**Oct 2025 – Present · Sao Paulo, SP, Brazil**

Status: **open** (questions written 2026-09-08, unanswered).

### Why this entry needs the same pass

It is the **current role**, it opens every CV, and it is the most technically
detailed entry anywhere — nine LinkedIn bullets of architecture. Detail is not the
same as verification. Three claims here were already caught and corrected by reading
the repositories rather than by asking: the commit split behind "co-build", the
payroll engine that is not AI, and the Chatwoot fork whose authorship is upstream.
That is three corrections from code alone, on an entry nobody has questioned yet.

### Questions

**Employment shape**

1. **Partly answered 2026-09-09** — the live profile lists BasicX as **Full-time**, so
   "as an employee or an international contractor" in the About section is describing
   a preference, not the present arrangement. Still open: is that CLT or PJ? It changes
   nothing on the profile, but it changes what you say when a US company asks how they
   would engage you.
2. **FEROQ runs 2021 – Present and overlaps this role entirely.** How do the two
   coexist in practice — is BasicX a FEROQ client, a separate employer, or is FEROQ
   dormant while you are there? *(A recruiter reading two concurrent current roles
   will ask, and right now no surface answers it. See the FEROQ entry.)*

**Attribution — already partly settled, needs completing**

3. You are **203 of 422 commits, a colleague has 162.** Who is the third
   contributor, and is anyone a lead above you?
4. **Which subsystems are yours** rather than the team's? The bullets claim the
   LangGraph state machine, the hybrid retrieval layer, the supervisor/guardrails,
   the config-as-a-product work, and three supporting systems. Realistically, which
   did you author, and which did you contribute to?
5. Did you **join an existing platform or help start it?** Oct 2025 is recent; if
   the platform predates you, "co-build" needs to sit next to what already existed.

**Scale and proof**

6. **22 client brands** is verified from Kubernetes manifests. Are all 22 **live and
   in production**, or does that count staging and inactive tenants?
7. Did you **onboard any of them yourself**, and what does onboarding a tenant
   involve?
8. Is there **any outcome metric that exists in the code or a dashboard** —
   deflection rate, handoff rate, resolution rate, cost per conversation? `README.md`
   says no message-volume figure exists and forbids inventing one. The question is
   whether something else does.

**Operating it, not just building it**

9. "Co-build and **operate**" — are you **on call?** Have you handled a production
   incident on this platform, and what broke?
10. The concurrency work — multi-replica handoff locking, message debouncing — was
    that **written in response to a real failure**, or built defensively up front? A
    real failure makes a far better interview story.
11. Are you **client-facing** at all, or purely engineering?

**The pieces that are easy to overstate**

12. The **nine domain specialists per tenant** — is nine the configured maximum, or
    what a real tenant actually runs?
13. The **web builder with versioning and diffing** for tenant YAML — yours, a
    colleague's, or shared?
14. **Claude Code daily** is confirmed. Does that extend to anything you built *for*
    the team around it, or is it strictly your own development and review loop?
    *(`README.md` forbids stretching this into building agent tooling for other
    developers.)*

### Traps to avoid when the answers come back

- **"Co-built", never "built single-handedly"** — settled from commit counts, not
  negotiable.
- **The payroll-billing audit engine is not AI.** Deterministic rules engine, zero
  LLM dependencies. It stays described as such.
- **The support platform is a Chatwoot fork.** Claim the customization, never the
  product.
- **No client names, no invented volume metric**, per `README.md`.
- **Azure means Azure OpenAI Service** — provider integration, not infrastructure
  depth. Do not let a detailed answer here drift into AKS or Container Apps.


---

## FEROQ — Founder & Principal Consultant

**2021 – Present · Worldwide**

Status: **open** (questions written 2026-09-08, unanswered).

Placed last despite starting in 2021, because it overlaps every other entry and has
to be read against all of them.

### Why this entry needs the pass most of all

It is **the least evidenced entry on any surface and the most exposed**. The others
have an employer who can confirm them; this one has only Felipe. It claims six
LinkedIn bullets of delivery — multi-agent systems, tracing and evaluation,
Salesforce and ERP integration, end-to-end ownership, production applications with
CI — across **five years that overlap a full-time job in every one of them**.

The title is already constrained and that constraint holds: `README.md` records that
FEROQ is a **trading name with no legal entity, no employees, and no co-founders**,
so "Founder & Principal Consultant" is the ceiling — never CEO, never CTO, never
anything implying headcount. None of the questions below reopen that. They are about
whether the *delivery* claims are as solid as the *title* claim now is.

### Questions

**Is it continuous?**

1. **2021 – Present is five years. Which of them were actually active?** Were there
   real engagements in 2021, 2022, 2023 (the Tamwood year in Canada), 2024, and
   2025? A year with no client is not dishonest, but "2021 – Present" implies five
   and an interviewer will sample one at random.
2. Would **"2021 – Present" survive** being asked "what did you deliver through
   FEROQ in 2023?" If not, is a narrower range or a different framing more
   defensible?

**The sector claim — this is the BPA/Cadmus failure mode, waiting to repeat**

3. "Clients across **healthcare, finance, and logistics**" — are those **FEROQ's own
   clients**, or did that list migrate over from the employed roles? *(Insurance,
   health and logistics were copied from BPA onto Cadmus and shipped on five
   documents before anyone noticed. This is the same shape, on the entry with the
   least external evidence.)*
4. **How many clients, in total?** A number you would say out loud. One serious
   engagement is a fine answer; "clients" plural when it was one is not.
5. Were they **paid engagements**, or does the list include unpaid, personal, or
   family-business work?

**The named claims**

6. **Salesforce** is named specifically in the FEROQ bullets and nowhere else on any
   surface. Is that real FEROQ work, and at what depth — REST integration, an app,
   configuration?
7. "**Multi-agent systems** using LangChain and LangGraph... coordination between
   agents" — delivered to a client, or is this describing the BasicX platform? If
   the latter, it is double-counting the same work under two employers, which reads
   badly the moment both entries are visible on one screen.
8. Same question for "**tracing, evaluation frameworks, and guardrails**" and for
   "**CRM, ERP, ticketing, and data warehouse**" — FEROQ engagements, or BasicX and
   Fiibo work restated?

**Overlap and consent**

9. FEROQ runs concurrently with BPA, Cadmus, Fiibo, and now BasicX. Was the
   consulting **compatible with those employment contracts** — moonlighting clauses,
   IP assignment, conflict of interest? Not a CV question; a "do not get blindsided"
   question.
10. Is there **anything showable** — a repo, a deployed site, a testimonial, a
    client who would take a reference call? One is enough to move this entry from
    asserted to evidenced.

**What it is for**

11. Is FEROQ **positioned as a business you intend to grow**, or as an honest label
    for freelance work between and alongside jobs? Those want different copy, and
    right now the copy reads like the former while the facts describe the latter.

### Traps to avoid when the answers come back

- **The title ceiling stands**: Founder & Principal Consultant, never CEO or CTO,
  no "lead a team", no "our engineers". A solo consultancy is still a consultancy —
  the delivery scope claimed (discovery, architecture, development, deployment,
  support) is real and needs no inflation.
- **Do not resolve double-counting by deleting the FEROQ entry.** If work belongs to
  BasicX, it moves to BasicX and FEROQ keeps what is genuinely its own. An
  interviewer seeing the same system described under two employers is a worse
  outcome than a shorter FEROQ entry.
- **No client names**, same rule as everywhere else.
