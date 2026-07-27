# Evergreen Lighting Malaysia repository guide

This file is the operating contract for coding agents working in this
repository. Keep it concise, current, and aligned with the real application.

## Start every task

1. Run `pwd`, `git status --short --branch`, and inspect the root file list.
2. Read this file and `README.md` before changing code.
3. Inspect the nearest existing component or route before introducing a new
   pattern.
4. Preserve unrelated user changes and do not commit, push, deploy, or alter
   external services unless the user explicitly requests it.

## Product contract

- This is the public Evergreen Lighting Malaysia website.
- The canonical production origin is `https://evergreenmalaysia.com`.
- Preserve the established minimal, elegant Evergreen visual language:
  deep greens, restrained typography, generous spacing, local photography,
  subtle motion, and clear calls to action.
- Do not invent or silently change legal names, addresses, contact details,
  certifications, statistics, dates, project claims, or published copy.
- The current enquiry form intentionally opens the visitor's email application.
  There is no website database or form-processing API.
- The current build intentionally has no analytics, advertising pixels,
  marketing cookies, local storage, or session storage. Any change to that
  boundary requires updated privacy/cookie content and consent review.

## Stack and architecture

- Next.js 16 App Router, React 19, TypeScript 6 strict mode, and Tailwind CSS 4.
- Server Components are the default. Add `"use client"` only for interaction,
  browser APIs, or client state.
- Reuse shared components under `components/` instead of duplicating page
  shells, headers, footers, cards, links, or motion behavior.
- Keep static editorial data typed and centralized in `lib/`.
- Use direct imports rather than adding barrel files.
- Use `next/image` for meaningful raster images and `next/font` for local
  typography. Every meaningful image needs useful alternative text; decorative
  images use an empty alt value.
- Keep motion lightweight, compositor-friendly, and compatible with
  `prefers-reduced-motion`.

## Styling and responsive behavior

- Use Tailwind utilities and existing tokens from `app/globals.css`.
- Follow the existing `site-container`, heading, eyebrow, body-copy, and
  focus-ring patterns.
- Check at least one desktop width and a 390 px mobile width after rendered UI
  changes.
- Reject horizontal overflow, clipped controls, unreadable contrast, hidden
  focus, layout shift, or desktop-only interactions.
- Do not add a component library when the existing primitives are sufficient.

## SEO, accessibility, and security

- Every indexable route needs a unique title, useful description, and canonical
  URL.
- Update `app/sitemap.ts` whenever an indexable route is added or removed.
- Preserve the Organization, WebSite, Article, and Breadcrumb structured data.
- Unknown routes must remain no-indexed.
- Maintain semantic landmarks, one clear `h1`, logical heading order, keyboard
  operation, visible focus, labels, and reduced-motion support.
- Preserve the response headers in `next.config.ts` and the security contact at
  `/.well-known/security.txt`.
- Never add credentials, tokens, personal data, or provider secrets to source,
  fixtures, screenshots, documentation, or logs.

## Assets and repository hygiene

- Production images belong in `public/images/home` or `public/images/pages`.
- README screenshots belong in `docs/screenshots` and must reflect the current
  production-mode UI at 1728 x 1117 and 390 x 844.
- Do not retain raw exports, duplicate assets, temporary reports, traces,
  build output, or generated caches in the repository.
- Before deleting an asset, confirm it is unreferenced with a repository-wide
  search.
- Keep durable documentation limited to `README.md` and this guide unless a
  separate document is genuinely required by the product.

## Required verification

For code, content, metadata, dependency, or configuration changes, run:

```bash
npm run check
npm audit --omit=dev
git diff --check
```

For rendered changes, also use a real browser and verify:

- page identity and meaningful rendered content;
- desktop and mobile layout;
- primary navigation or the changed interaction;
- no broken images or internal links;
- no relevant console errors or framework overlay.

A successful local build is not proof of a live deployment. Report local,
provider, and public-production evidence separately.

## Handoff

- Summarize the exact changed surfaces and verification evidence.
- State whether a local server was left running and give its URL.
- Identify any unverified external boundary instead of calling it complete.
- Do not create planning ledgers, audit reports, or extra handoff markdown.
