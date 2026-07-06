# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ADAUPS portal web — institutional site for the Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana (Quito). Client-rendered React SPA with no backend of its own; the members-only finance portal lives at a separate external domain (`finanzas.adaups.org`) and is out of scope for this repo.

## Commands

```bash
npm run dev      # vite dev server on :3000, bound to 0.0.0.0
npm run build    # tsc-free production build (vite build) -> dist/
npm run preview  # serve the dist/ build locally
npm run lint     # actually `tsc --noEmit` — this is the typecheck, not ESLint
npm run clean    # rm -rf dist
```

ESLint is not wired to an npm script; run it directly: `npx eslint <path>`. There is no test suite/runner in this repo — don't assume `npm test` exists.

There's a single-file build (no monorepo, no server package). `DISABLE_HMR=true` disables HMR in `vite.config.ts` if needed for scripted/headless dev runs.

## Architecture

### Routing — client-only SPA, no SSR/loaders

`src/App.tsx` uses React Router 7 in plain **declarative mode** (`<BrowserRouter>` + `<Routes>`), all page components lazy-loaded. There are no route loaders/actions and no server rendering — every route resolves entirely in the browser after `index.html`'s empty `<div id="root">` hydrates. Keep this in mind before reaching for data-router APIs (`loader`, `action`, `useLoaderData`) — they aren't part of this app's routing model.

Detail routes (`/servicios/:serviceId`, `/beneficios/:benefitId`, `/noticias/:newsId`) resolve by looking up the id in the corresponding data array with `.find()` and `<Navigate to="..." replace />` back to the list page on a miss (see `ServiceDetail.tsx`, `BenefitDetail.tsx`, `NewsDetail.tsx`).

`Layout.tsx` wraps every route (`Navbar` + `<Outlet>` + `Footer`), calls `useScrollToTop()`, and carries the site-wide `<Helmet>` title template + `Organization`/`WebSite` JSON-LD (see SEO section below).

### Content model — everything is static, typed data

There's no CMS: all page content is plain TypeScript data.

- `src/data/index.ts` exports `servicesData`, `benefitsData`, `transparencyData`, `eventsData`, `newsData`.
- `src/data/promotions.ts` exports `promotionsData` separately.
- Shapes are defined in `src/types/types.ts` (`Service`, `Benefit`, `Event`, `NewsItem`, `TransparencyDocument`, `Promotion`, `ProductItem`).

When adding a new service/benefit/news item, add an entry to the relevant array with a URL-safe `id` — that `id` becomes the route param, must be added to `public/sitemap.xml`, and should get a `<Seo>`/JSON-LD block on its detail page (see below). Nothing auto-discovers new ids.

Icon fields are stored as **strings** in the data (e.g. `icon: 'Wheat'`) and resolved to Lucide components via lookup maps in `src/lib/icons.ts` (`serviceIconMap`, `categoryIconMap`, with `defaultServiceIcon`/`defaultCategoryIcon` fallbacks) — don't import Lucide icon components directly into data files.

### SEO / structured data — per-page convention

Every page in `src/pages/` renders a `<Seo>` component (from `src/components/Seo.tsx`) as the first child of its return, setting `title`/`description`/`path` (and `image`/`type`/`noindex` when relevant). Detail pages additionally render `<JsonLd>` (`src/components/JsonLd.tsx`) with one or more schema.org objects built from helpers in `src/lib/seo.ts` (`serviceJsonLd`, `offerJsonLd`, `newsArticleJsonLd`, `eventJsonLd`, `itemListJsonLd`, `breadcrumbJsonLd`). Both components wrap `react-helmet-async`'s `<Helmet>`, which requires the `HelmetProvider` mounted in `main.tsx` — don't render `<Helmet>` directly in a page without going through these wrappers, and don't remove `HelmetProvider`.

Because this is a CSR-only SPA, `<Seo>`/`<JsonLd>` output is invisible to crawlers that don't execute JS (some social-preview bots). `index.html`'s static `<meta>` tags are the fallback for those and should stay reasonably in sync with the Home page's `<Seo>` values.

`public/sitemap.xml` and `public/llms.txt` are hand-maintained — there's no build step generating them. If you add/remove/rename a routed content id, update `sitemap.xml` accordingly (a past drift left stale news ids and a missing `/beneficios` section — don't let that regress).

### Images

`public/images/**` is served as-is by the static host — anything placed there ships to production at full size. Convention going forward:

- Always convert to **WebP**, resized to the actual max display dimensions of where the image is used (check the consuming component's CSS/container width before picking a target size) — not the camera/export resolution.
- `design-src/` holds full-resolution source files (e.g. original promotion PNGs) that are **not** deployed — it's the pre-optimization source of truth, kept out of `public/`.
- `magick`/`avifenc` are available in this environment for resizing/re-encoding; there's no `sharp`/`imagemin` in `node_modules`.
- Add `width`/`height` attributes (or an aspect-ratio wrapper) on new `<img>` tags to avoid layout shift, and `loading="lazy"` except for the single largest above-the-fold image per page (which should instead get `fetchPriority="high"` and, if it's the LCP element, a `<link rel="preload" as="image">` in `index.html`).

### Styling

Tailwind CSS v4, CSS-first config (no `tailwind.config.js`) — theme customization (brand colors, custom `@keyframes`) lives in the `@theme` block at the top of `src/index.css`. Brand tokens: `--color-navy`, `--color-navy-light`, `--color-gold`, `--color-gold-light`.

Scroll-triggered reveal animations follow a fixed convention (documented inline in `src/index.css`): `expo-out` easing (`cubic-bezier(0.16, 1, 0.3, 1)`), `translateY(10px)` (not more), 450ms max duration. Use the existing `AnimateOnScroll` component (`src/components/ui/AnimateOnScroll.tsx`, built on the `useInView` hook) rather than hand-rolling a new IntersectionObserver — it already wires the `animate-in`/`is-visible` class pattern these CSS rules expect.

### Path alias

`@/*` → `src/*`, configured in both `tsconfig.json` and `vite.config.ts` — use it for cross-directory imports instead of long `../../../` chains where it improves readability (existing code is inconsistent about this; both styles appear).

### Deployment

Static build only (`dist/`), no server runtime. `public/_headers` is a Netlify/Cloudflare-Pages-style headers file controlling cache lifetimes per path — `/assets/*` (hashed Vite output) is `immutable`, `/images/*` and `/documents/*` use `stale-while-revalidate` (deliberately *not* `immutable`, since filenames there are stable and content can be replaced in place).
