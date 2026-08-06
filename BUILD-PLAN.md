# Columbia Basin Hearing Center — Full Site Rebuild

Rebuild of https://www.columbiabasinhearing.com/ (Squarespace) as a premium
TanStack Start + Tailwind v4 site, matching the redesigned homepage's design system.

## Rules

- **Content is 1:1 with the old site.** Do not invent copy. Source of truth for every page
  is `.source/pages/<slug>.md` (scraped 2026-07-31). Only the homepage hero header/subhead
  were intentionally rewritten (already done).
- **Design is upgraded.** Use the tokens in `src/styles.css` (navy `--primary`, teal
  `--accent`, `brand-gradient`, `shadow-soft`/`shadow-lift`, `eyebrow`). Sections follow the
  homepage rhythm: `py-24`, `mx-auto max-w-7xl px-6`, `border-b border-border`, alternating
  `bg-background` / `bg-surface`.
- **Images come from the live Squarespace CDN** (already public). Full inventory in
  `.source/images.json`. Register the ones you use in `src/components/site/content.ts`.
- **Every page** uses `<SiteLayout>` from `src/components/site/layout.tsx` and sets `head()`
  meta (title + description) from the scraped `<!-- title -->` / `<!-- description -->`.
- **Never fake commerce.** Store product pages render full content plus a "Buy now" CTA that
  links to the live Squarespace product URL. No cart, no checkout.
- After each page: `npm run build` must pass. Then commit and push.

## Route map

Old URL → new route. `/home` redirects to `/`.

### Phase 1 — foundation
- [x] `src/components/site/layout.tsx` — Header (real nav + dropdowns + mobile drawer), Footer, SiteLayout
- [x] `src/components/site/content.ts` — shared data (locations, services, providers, reviews, stories, nav)
- [x] `src/components/site/blocks.tsx` — reusable PageHero, Section, Prose, CTA, Card primitives
- [x] `/` homepage — refit onto SiteLayout, keep redesigned hero

### Phase 2 — core pages
- [x] `/about-us` — team, history, mission
- [x] `/services` — full service list
- [x] `/contact-us` — form + 3 locations + map + direct contacts
- [x] `/do-you-have-a-loss` — symptoms / self-check

### Phase 3 — programs & resources
- [x] `/hearing-heroes`
- [x] `/sound-shield-program`
- [x] `/patient-ambassador-program` (old: `/patient-ambassadorprogram`)
- [x] `/tinnitus-relief-management-program`
- [x] `/hearing-up`
- [x] `/for-educators`
- [x] `/third-party-payers`
- [x] `/li-extended-protection`
- [x] `/otc-legislation`
- [x] `/effectively-communicating-with-a-hearing-loss`
- [x] `/online-hearing-screening`
- [x] `/the-library`
- [x] `/video-library`

### Phase 4 — technology pages
- [x] `/lenire-from-neuromod`
- [x] `/lace-ai-pro`
- [x] `/nuance-cbhc`

### Phase 5 — online store (content + outbound buy links)
- [x] `/online-store` — catalog index
- [x] `/online-store/deafmetal`
- [x] `/online-store/ear-care`
- [x] `/online-store/hearing-aid`
- [x] `/online-store/hearing-device-care`
- [x] `/online-store/p/$slug` — one dynamic route rendering all 23 products from a data file

### Phase 6 — polish
- [x] Mobile nav + responsive pass on every page
- [x] `sitemap.xml` route updated with all URLs
- [x] LocalBusiness JSON-LD structured data
- [x] 404 page
- [x] Accessibility pass (contrast, focus rings, alt text, landmarks)
- [x] Final `npm run build` + visual check

## Status

**Current phase:** COMPLETE
**Last completed:** Phase 6 polish. All 54 routes render (200 + title + real content), 404 returns a real 404, sitemap has 51 URLs, LocalBusiness JSON-LD for all three clinics, a11y sweep clean across 28 pages.
