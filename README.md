# my-portfolio

Personal site and CV, at [feliperamosroque.vercel.app](https://feliperamosroque.vercel.app).
Next.js App Router, TypeScript, Tailwind, bilingual in English and Portuguese.

## Structure

```
src/app/
  i18n/content.ts        every string on the site, both locales, one file
  components/            hero, about, skills, projects, experience, contact
  layout.tsx             metadata, Open Graph, and the language provider
cv/
  *.html                 the CVs; single source of truth for the .docx
  build-docx.py          regenerates every .docx from its .html
  linkedin-profile.md    paste-ready LinkedIn copy, kept in step with the CVs
public/
  cv.pdf                 what the site's "Download CV" button serves
```

`content.ts` holds both locales in one typed object, so a string added to
English without its Portuguese counterpart fails the build rather than falling
back silently at runtime.

## Running

```bash
npm install
npm run dev
```

## The CVs

Three ATS-safe variants: single column, no tables, no columns, no text boxes, no
images, nothing in a header or footer. Everything lives in the document body as
real selectable text, because that is what a parser can read.

The `.html` files are the source. After editing one:

```bash
python cv/build-docx.py
```

`cv/README.md` covers the rest — how to regenerate `public/cv.pdf`, how to keep
each variant inside two pages, and the factual claims that must not drift between
the CVs, the LinkedIn copy and this site.
