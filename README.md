# Portfolio site (preview)

Next.js 16 build of the "Annotated Edition" portfolio from `../blueprint/`. Not published yet.

## Run it

From `Ife's Portfolio/site`:

```
npm run dev
```

Then open http://localhost:3000 (or the port shown).

```
npm run build
```

## Where things live

| What | File |
|---|---|
| Case-study content (six projects) | `src/content/projects.ts` |
| About, resume, experiments, music, contact details | `src/content/site.ts` |
| Design tokens and all styles | `src/app/globals.css` |
| Case-study building blocks | `src/components/case/` |
| Screenshots | `public/work/<project>/`, `public/experiments/` |
| CV download | `public/cv/ifeoluwa-adegbulugbe-cv.pdf` |

## Before publishing (must do)

1. **Replace the sample research.** Every block with `sample: true` in `projects.ts` (PriceDrop, LookLab, Margin, Mira Moda) is placeholder data written for the preview. It shows a "Sample data" stamp on the page. Run the interviews in `blueprint/13-research-kit.md` and swap in real findings, or delete those blocks.
2. **Rewrite the PriceDrop origin story** (first text block in `projects.ts`). It's a draft written for you.
3. **Check the starter picks** in `site.ts` (little world, inspirations, "currently obsessed", fun facts) and the case-study reflections. They're written in your voice but should be yours.
4. **Fill the two empty experiment cards** (Lumae, portfolio template) by exporting a frame from Figma into `public/experiments/` and adding `src`, `w`, `h` in `site.ts`.
5. **Contact form**: currently opens the visitor's mail app. Connect a form service (e.g. Formspree) if you want real submissions.
6. **CV**: the PDF includes your phone number. Remove it from the public copy if you'd rather not publish it.
7. In `src/app/layout.tsx`, remove `robots: { index: false }` and set `site.url` in `site.ts` to your real domain.

## Deploy (Vercel)

Push `site/` to its own GitHub repo, import it in Vercel (framework: Next.js, root: the repo root), and deploy. No environment variables are needed.
