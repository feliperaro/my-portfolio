# CV — ATS-optimized

Three English variants, single-column and ATS-safe (no tables, columns, text boxes,
images, icons, or header/footer content — everything lives in the document body as
real selectable text).

| File | Use it for |
| --- | --- |
| `felipe-roque-applied-ai-engineer.*` | **Primary.** Applied AI / Forward-Deployed / AI Solutions Engineer roles |
| `felipe-roque-mavila-ai-automation-engineer.*` | Mavila Consulting — AI Automation Engineer (AI Agents, Azure, Process Automation) |
| `felipe-roque-fullstack-engineer.*` | General full-stack / software engineering roles |

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
