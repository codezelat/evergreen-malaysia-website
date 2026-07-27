# Evergreen Lighting Malaysia

Production-ready Next.js website for Evergreen Lighting Malaysia, implemented
from the approved Figma design with responsive layouts, local imagery and font
assets, accessible interactions, and lightweight motion.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality gate

```bash
npm run check
```

This runs ESLint, TypeScript validation, and a production build.

## Asset organization

- `public/images/home` contains the optimized assets used by the homepage.
- `public/images/pages` contains the optimized assets used by the inner pages.
- `design-assets/figma-originals` retains the original design-file exports and
  is not shipped as public website content.

## Routes

- `/`
- `/about-us`
- `/our-industries`
- `/news-csr`
- `/news-csr/[slug]`
- `/contact-us`
