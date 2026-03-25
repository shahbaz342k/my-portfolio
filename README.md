# Mohd Shahbaz — Portfolio

A single-file React + TypeScript portfolio built from your resume.

## Quick Start

### Option A — Vite (Recommended)
```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
```
Replace `src/App.tsx` with `Portfolio.tsx`.

Then in `index.html` inside `<head>`, add the Google Fonts link:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Then run:
```bash
npm run dev
```

### Option B — Create React App
```bash
npx create-react-app my-portfolio --template typescript
cd my-portfolio
npm start
```
Replace `src/App.tsx` with `Portfolio.tsx`.
Add the same Google Fonts link to `public/index.html`.

---

## What's Included

- **Hero** — Animated typing effect, gradient blobs, social links
- **About** — Bio, stats grid, location card
- **Skills** — Animated skill bars + technology tags
- **Experience** — Alternating timeline with all 6 companies
- **Projects** — Featured cards (MadeEasy, NextIAS) + small cards grid
- **Contact** — Three contact cards + CTA button
- **Footer** — Clean minimal footer

## Customization

All data lives at the top of `Portfolio.tsx`:
- `EXPERIENCE[]` — work history
- `PROJECTS[]` — project cards
- `SKILLS[]` — skill bars with levels
- `TOOLS[]` — technology tags
- `C` object — color tokens (change `accent` to update brand color)

Zero external dependencies beyond React itself.
