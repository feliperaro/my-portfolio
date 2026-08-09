# CV — ATS-optimized

Three English variants, single-column and ATS-safe (no tables, columns, text boxes,
images, icons, or header/footer content — everything lives in the document body as
real selectable text).

| File | Use it for |
| --- | --- |
| `felipe-roque-mavila-ai-automation-engineer.*` | Mavila Consulting — AI Automation Engineer (AI Agents, Azure, Process Automation) |
| `felipe-roque-ai-automation-engineer.*` | General AI / automation engineering roles |
| `felipe-roque-fullstack-engineer.*` | General full-stack / software engineering roles |

## Making the PDF

1. Open the `.html` file in Chrome.
2. `Ctrl+P` → Destination **Save as PDF**.
3. Set **Margins: Default**, **Scale: 100%**, and **uncheck** "Headers and footers".
4. Save as `Felipe-Roque-CV.pdf` (avoid spaces/special characters in the filename).

The resulting PDF has real text, so ATS parsers read it. Never send a scanned or
image-based PDF.

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
