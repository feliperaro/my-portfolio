# CV — ATS-optimized

Five English variants, single-column and ATS-safe (no tables, columns, text boxes,
images, icons, or header/footer content — everything lives in the document body as
real selectable text).

| File | Use it for |
| --- | --- |
| `felipe-roque-applied-ai-engineer.*` | **Primary.** Applied AI / Forward-Deployed / AI Solutions Engineer roles |
| `felipe-roque-mavila-ai-automation-engineer.*` | Mavila Consulting — AI Automation Engineer (AI Agents, Azure, Process Automation) |
| `felipe-roque-fullstack-engineer.*` | General full-stack / software engineering roles |
| `felipe-roque-itx-agentic-ai-engineer.*` | ITX Corp — Senior Software Engineer, Agentic AI Development (Remote, LATAM) |
| `felipe-roque-senior-automation-ai-engineer.*` | Senior Automation & AI Engineer — US client via recruiter, internal process automation (NetSuite/Google Workspace/LLM APIs) |

Four application surfaces are written out here as well, and all must stay in step
with the CVs and with the drift list below:

| File | Use it for |
| --- | --- |
| `linkedin-profile.md` | LinkedIn headline, About, and experience bullets |
| `strider-profile.md` | Strider profile — the same roles in Strider's S.T.A.R.T. format |
| `mavila-application-answers.md` | Free-text answers on the Mavila application form |
| `automation-ai-recruiter-reply.md` | Reply to the Senior Automation & AI Engineer approach, sent with that variant attached |

`strider-profile.md` deliberately renames three job titles, because Strider's own
guidance rules out "Analyst", "Programmer", and language-based titles. That is the
one place a surface is allowed to disagree with the CVs, and the file explains why.
The Azure answer in `mavila-application-answers.md` states plainly that Container Apps
and Function Apps are not hands-on experience — do not "fix" that.

The applied-AI and full-stack variants carry a **Selected Projects** section
linking `github.com/feliperaro/support-agent`. That repository is the only public,
runnable evidence behind the agent claims, so it is load-bearing: if it changes,
check that the CV bullet still describes what it actually does. `support-agent`
is listed first in both, including on the full-stack variant where the portfolio
site follows it — a personal site is the weaker proof and should not lead.

Education is reverse-chronological on all of them, and the two-month Cantek course
is deliberately absent: it overlaps the Tamwood period, which already carries the
Canada claim, and dropping it bought two lines of headroom on the tightest CV.

The Mavila and ITX variants are each tailored to one posting. Mavila keeps that
posting's "Remote, Full-Time (40h/week)" contact line and has no Selected Projects
section. ITX puts **LATAM** in the location line, because that posting screens on
it ("limited to candidates based in LATAM"), and leads its skills with the
posting's own section names — Agentic AI, RAG & Retrieval, LLM Integration,
Evaluation/Observability/Guardrails, Identity & Access. Do not sync either with the
general variants by reflex.

The ITX posting asks for CrewAI, AutoGen, Semantic Kernel, GCP Vertex AI,
Databricks, Snowflake, BigQuery, and Pinecone. **None of these appear on the CV,
because none are true.** The posting says certifications are "a plus, not a
screening requirement" and accepts "demonstrable proficiency in agentic
development" instead — which is what `support-agent` and the platform work are
there to be. Adding an unearned framework name to match a keyword would trade a
real advantage for a question that cannot be answered in an interview.

The senior-automation variant answers a recruiter approach for a US client's
internal-automation role: NetSuite, Google Workspace, Python, SQL, LLM APIs, and
healthcare/HIPAA as a "nice to have". It reorders the skills block to lead with
Python and SQL and with Business Systems Integration, and it is the only variant
carrying a **Sensitive Data Practice** line. It keeps `support-agent` in Selected
Projects, because that posting names Claude explicitly and the repository is the
public evidence of Claude API work. `automation-ai-recruiter-reply.md` is the
covering message and states both gaps in Felipe's own voice - do not soften it
into a claim.

## Claims that must not drift

These were established by checking the source repositories, and every surface —
CVs, `linkedin-profile.md`, and the portfolio site — must agree with them.

- **"Co-built"**, never "built single-handedly": the agent platform is 203 of 422
  commits by Felipe, with a colleague at 162.
- **22 client brands** is the defensible scale claim (verified from Kubernetes
  manifests). There is no message-volume or conversation-count metric anywhere in
  the code — do not invent one.
- **Over 500 hours/month** and **tens of thousands of records/month** are the lower
  bounds of Felipe's own estimates, so they survive questioning.
- **No headcount or team-size reduction is claimed.** The automations spanned
  multiple business fronts rather than shrinking one team.
- **The payroll-billing audit engine is not AI** — a deterministic rules engine with
  zero LLM dependencies.
- **Azure means Azure OpenAI Service** (provider integration), not Azure
  infrastructure depth.
- **No client names** appear on any surface; sector references only.
- **Claude Code is used daily for development and code review**, including reviewing
  and refining AI-generated code. Confirmed by Felipe. Do not stretch this into
  building agent tooling for other developers, or into any other vendor's tool.
- **FEROQ is a trading name, not a company.** Felipe confirmed it has no legal
  entity separate from him, no employees, and no co-founders. The title is
  therefore **"Founder & Principal Consultant"** — never "CEO", never "CTO", and
  never anything implying headcount ("lead a team", "our engineers", "at the scale
  of a startup team"). "Consultancy" is fine; a solo consultancy is still a
  consultancy. The delivery scope claimed — discovery, architecture, development,
  deployment, support — is real and needs no inflation.
- **"Available as an international contractor"** appears on the applied-AI and
  full-stack contact blocks. It is **no longer in the site hero** — commit d340593
  removed that line at Felipe's request. Felipe confirmed the claim itself. It is a
  statement about invoicing arrangements, not about visa status or work
  authorization in any country — do not escalate it into either.
- **"Full overlap with US business hours"** is true (UTC−3 sits one to two hours
  ahead of US Eastern). Do not extend the same claim to European hours, where the
  overlap is a morning only.
- **Google Workspace API work is real and spans all four roles** - Felipe confirmed
  Sheets and Drive read/write, Apps Script, the Gmail and Calendar APIs, and
  setting up service-account authentication himself. The individual capabilities
  are therefore listed **unattributed, in Technical Skills only**; each experience
  bullet says "Google Workspace APIs" and stops there. Do not pin Apps Script or
  service accounts to a specific employer - the confirmation covered the roles and
  the capabilities as two separate lists, not as a cross-product.
- **NetSuite is not claimed anywhere, because it is not true.** The recruiter's
  posting names it; the adjacent truths that stand in for it are the ERP-to-WMS
  order fulfillment integrator, plus ERP, CRM, WMS, and ticketing integration.
- **HIPAA is not claimed, and PHI is deliberately not used as a keyword.** The
  healthcare work ran under Brazil's LGPD. What transfers is the handling
  discipline - least-privilege access, isolated credentials, masking in logs and
  dashboards, human approval gates - and that is how every surface must word it.
  Adding "HIPAA" to a skills line to clear an ATS filter would create a question
  that cannot be answered on the call.

## Checking the page count

Render and count — two pages is the target:

```bash
python -m http.server 8899 &   # from this directory
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --no-pdf-header-footer --print-to-pdf=/tmp/x.pdf \
  "http://127.0.0.1:8899/felipe-roque-fullstack-engineer.html"
python -c "from pypdf import PdfReader;print(len(PdfReader('/tmp/x.pdf').pages))"
```

**Do not trust the DOM height ratio.** It is not merely approximate, it is
non-monotonic: the applied-AI variant renders as two pages at ratio 1.891, while
the Mavila variant rendered as *three* at 1.796. `break-inside: avoid` on `.entry`
moves whole blocks, so total height does not determine page count.

When it does overflow, find out what spilled rather than trimming blind:

```bash
python -c "
from pypdf import PdfReader
for i, p in enumerate(PdfReader('/tmp/x.pdf').pages, 1):
    lines = [l for l in p.extract_text().splitlines() if l.strip()]
    print(f'page {i}: {len(lines)} lines | first: {lines[0][:60]}')
"
```

That is how the Mavila three-pager was diagnosed: page 3 held nothing but the last
three Education entries, so the fix was ~6 lines of bullet merging, not a redesign.

Chrome's `--print-to-pdf` needs an **absolute** output path. A relative one is
accepted silently and the file is never written where you expect — which will
leave you verifying a stale PDF.

It also needs `--user-data-dir` pointed somewhere disposable when a normal Chrome
window is already open. Without it the headless run exits **0, prints nothing,
and writes no file** — the same silent failure as the relative path, and the same
trap: you end up counting the pages of the previous render.

```bash
--user-data-dir=/c/Users/<you>/AppData/Local/Temp/chrome-print
```

That same `--user-data-dir` then becomes its own trap: Chrome caches the page in
it, so a re-render after editing the HTML silently reprints the **old** version.
The tell is a byte-identical PDF. Point `--user-data-dir` at a fresh directory
(or add `?v=2` to the URL) whenever you have just changed the file you are
printing.

## Making the PDF

1. Open the `.html` file in Chrome.
2. `Ctrl+P` → Destination **Save as PDF**.
3. Set **Margins: Default**, **Scale: 100%**, and **uncheck** "Headers and footers".
4. Save as `Felipe-Roque-CV.pdf` (avoid spaces/special characters in the filename).

The resulting PDF has real text, so ATS parsers read it. Never send a scanned or
image-based PDF.

### The site's Download CV button

The portfolio's hero links to `/cv.pdf`, served from `public/cv.pdf`. Since
2026-09-16 that is the **senior automation and AI engineer** variant, not the
applied-AI one.

**Why it changed:** the site hero headline became "Senior AI & Automation Engineer
| RPA & Cloud Solutions | Python & TypeScript Developer | Innovating Business
Processes", and the Download CV button sits three lines under it. Serving the
applied-AI variant meant a recruiter read one headline and downloaded a PDF whose
title said something else. The senior-automation variant now carries that exact
headline, so the button agrees with the line above it.

**The rule this creates:** whenever the site hero headline changes, the CV that
`public/cv.pdf` is rendered from has to change with it, or that contradiction
comes straight back. The other four variants keep their own headlines — they are
targeted at different roles and are not what the site serves.

Regenerate it whenever that variant changes — serve this directory and print it
headlessly:

```bash
python -m http.server 8899 &
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="../public/cv.pdf" \
  "http://127.0.0.1:8899/felipe-roque-senior-automation-ai-engineer.html"
```

Verify it lands on two pages afterwards. A `file://` URL also works but Chrome
sometimes drops the `@page` size, so the local server is the reliable path.

## Keeping it to two pages

All variants are tuned to just under two A4 pages. Adding bullets will push
them over, and a CV that spills a few lines onto page three reads worse than a
tight two-page one. To check without printing, serve this directory and measure
the rendered height against the A4 content box (269mm tall at the CSS margins):

```js
const MM = 96 / 25.4;
const b = document.body;
b.style.padding = "0"; b.style.margin = "0"; b.style.maxWidth = "none";
b.style.width = 180 * MM + "px";
b.scrollHeight / (269 * MM);   // keep this under 2.0
```

## Regenerating the DOCX

The `.html` files are the single source of truth. After editing one, run:

```bash
python build-docx.py
```

This rewrites every `.docx` from its matching `.html`. Requires `python-docx`
(`pip install python-docx`).

## Which format to submit

- **`.docx`** when the application form accepts it — most ATS parse Word most reliably.
- **PDF** when the form asks for PDF, or when you're emailing a human directly.
- Submit one file, not a bundle.

## Conventions kept for ATS

- Standard section headings: Professional Summary, Technical Skills, Professional
  Experience, Selected Projects, Education.
- Reverse-chronological roles with `Month YYYY - Month YYYY` dates.
- Job title on its own line, then `Company - Location | Dates`.
- Keywords written out in full with the common abbreviation in parentheses on first
  use, e.g. "RPA (Robotic Process Automation)".
- Plain hyphens instead of en/em dashes, and no ligatures or unusual glyphs.
- Ligatures are switched off in CSS, not just avoided in the source text. Calibri
  ships `fi`/`fl`/`ff` ligatures, and Chrome writes them into the PDF text layer as
  single codepoints - so "Artificial" extracts as "Artiﬁcial" and an ATS
  searching "Artificial Intelligence" scores zero. The `body` rule that prevents it:

  ```css
  font-variant-ligatures: none;
  -webkit-font-feature-settings: "liga" 0, "clig" 0;
  font-feature-settings: "liga" 0, "clig" 0;
  ```

  All five variants carry this rule, and `public/cv.pdf` was re-rendered
  afterwards - it previously shipped 24 ligatures and failed the
  "Artificial Intelligence" check. (It came from the applied-AI variant then;
  since 2026-09-16 it comes from the senior-automation one — see above.) Keep the
  rule in any new variant, and verify
  after any render:

  ```bash
  python -c "
  from pypdf import PdfReader
  t = ''.join(p.extract_text() for p in PdfReader('out.pdf').pages)
  print(len([c for c in t if c in 'ﬀﬁﬂﬃﬄ']), 'ligatures')
  "
  ```
