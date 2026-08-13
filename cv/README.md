# CV — ATS-optimized

Three English variants, single-column and ATS-safe (no tables, columns, text boxes,
images, icons, or header/footer content — everything lives in the document body as
real selectable text).

| File | Use it for |
| --- | --- |
| `felipe-roque-applied-ai-engineer.*` | **Primary.** Applied AI / Forward-Deployed / AI Solutions Engineer roles |
| `felipe-roque-mavila-ai-automation-engineer.*` | Mavila Consulting — AI Automation Engineer (AI Agents, Azure, Process Automation) |
| `felipe-roque-fullstack-engineer.*` | General full-stack / software engineering roles |

The applied-AI and full-stack variants carry a **Selected Projects** section
linking `github.com/feliperaro/support-agent`. That repository is the only public,
runnable evidence behind the agent claims, so it is load-bearing: if it changes,
check that the CV bullet still describes what it actually does.

The Mavila variant is tailored to one posting — it keeps that posting's
"Remote, Full-Time (40h/week)" contact line and has no Selected Projects section.
Do not sync it with the other two by reflex.

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
  full-stack contact blocks and in the site hero. Felipe confirmed this. It is a
  statement about invoicing arrangements, not about visa status or work
  authorization in any country — do not escalate it into either.
- **"Full overlap with US business hours"** is true (UTC−3 sits one to two hours
  ahead of US Eastern). Do not extend the same claim to European hours, where the
  overlap is a morning only.

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

## Making the PDF

1. Open the `.html` file in Chrome.
2. `Ctrl+P` → Destination **Save as PDF**.
3. Set **Margins: Default**, **Scale: 100%**, and **uncheck** "Headers and footers".
4. Save as `Felipe-Roque-CV.pdf` (avoid spaces/special characters in the filename).

The resulting PDF has real text, so ATS parsers read it. Never send a scanned or
image-based PDF.

### The site's Download CV button

The portfolio's hero links to `/cv.pdf`, served from `public/cv.pdf`. That is the
**applied AI engineer** variant. Regenerate it whenever that variant changes —
serve this directory and print it headlessly:

```bash
python -m http.server 8899 &
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="../public/cv.pdf" \
  "http://127.0.0.1:8899/felipe-roque-applied-ai-engineer.html"
```

Verify it lands on two pages afterwards. A `file://` URL also works but Chrome
sometimes drops the `@page` size, so the local server is the reliable path.

## Keeping it to two pages

All three variants are tuned to just under two A4 pages. Adding bullets will push
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
