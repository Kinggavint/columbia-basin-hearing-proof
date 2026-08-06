# Quality + Accuracy Review

Second pass over the finished site. Two questions per page:

1. **Accurate?** Does the copy match `.source/pages/<slug>.md`? Are phone numbers,
   addresses, prices, names, and claims correct? Any invented content? Any dead links?
2. **Premium?** Does it look deliberate — spacing rhythm, image scale, alignment,
   text measure, no stretched or clunky media, no orphaned headings, consistent
   card heights, working hover/focus states? Check 1440px and 390px.

## How to review

- Dev server on port 4400 (`npx vite dev --port 4400`).
- Chrome on 9222 for screenshots. Look at the page, don't just read the code.
- Fix what's wrong in the same iteration; don't just log it.
- Record findings below so the next iteration doesn't redo the work.
- After each batch: `npx tsc --noEmit`, `npm run build`, commit, push.

## Pages

### Batch A — top of funnel
- [x] `/` homepage
- [x] `/about-us`
- [x] `/services`
- [x] `/contact-us`

### Batch B — hearing loss journey
- [x] `/do-you-have-a-loss`
- [x] `/online-hearing-screening`
- [x] `/effectively-communicating-with-a-hearing-loss`
- [x] `/otc-legislation`

### Batch C — programs
- [x] `/hearing-heroes`
- [x] `/sound-shield-program`
- [x] `/patient-ambassador-program`
- [x] `/tinnitus-relief-management-program`
- [x] `/hearing-up`
- [x] `/for-educators`

### Batch D — coverage + technology
- [x] `/third-party-payers`
- [x] `/li-extended-protection`
- [x] `/lenire-from-neuromod`
- [x] `/lace-ai-pro`
- [x] `/nuance-cbhc`

### Batch E — library + store
- [x] `/the-library`
- [x] `/video-library`
- [x] `/online-store`
- [x] `/online-store/$category` (all four)
- [x] `/online-store/p/$slug` (spot-check several)

### Batch G — remaining automated checks
- [x] Dark mode: the design system ships `.dark` tokens but nothing toggles them — decide
      whether to support it or strip the unused tokens
- [x] Lighthouse performance + SEO pass on a representative page
- [x] Contact form: validation states, required-field behaviour, keyboard-only submit
- [x] Keyboard navigation: tab order, visible focus, mobile drawer focus trap + Escape
- [x] Copy diff of every page against `.source/pages/` to catch any remaining drift
- [x] Confirm no Lovable-specific assets or references remain (repo must be portable)

### Batch F — cross-cutting
- [x] Every internal link resolves (no 404s from nav, footer, or in-body links)
- [x] Mobile pass at 390px on every page
- [x] Image scale/aspect consistency sitewide
- [x] Copy accuracy diff against `.source/` for every page

## Findings

### /about-us — FIXED (commit after phase 6)
- Alternating team layout swapped both grid template and order, double-swapping so
  the photo took the 1fr column; portraits rendered enormous. Replaced with a uniform
  two-column card grid.
- Photos stretched past their aspect ratio (flex `align-items: stretch`) — added `self-start`.
- Long bios stretched neighbouring cards into dead space — added `items-start`.
- Community gallery + Dust Devils photos normalised to 4:3; partnership logo plates scaled down.

### / homepage — FIXED
- Provider bios were clamped mid-sentence, reading as broken. Cards are now uniform
  (fixed 3:4 photo, `self-start`, `items-start`) with a "Read full bio" link to /about-us.
- Star rating disagreed with itself: hero showed 4.7, reviews section showed 4.9.
  Set both to 4.9. **NEEDS GAVIN:** the real figure is not verifiable from the live
  site (it renders in a GatherUp widget), so 4.9/191 is inherited from the redesign
  and must be confirmed before launch — it is a factual claim about a medical practice.
- **NEEDS GAVIN:** the Engage packages graphic is a low-res rainbow WordArt image.
  It is the client's genuine asset so it has been kept, but it undercuts the rest
  of the design and should be redrawn.

### /services — FIXED
- "Cochlear and **Baja**" → **Baha** (Bone Anchored Hearing Aid). The client's homepage
  has the typo; their own services page spells it correctly. Corrected in content.ts.
- Two service blurbs were written in second person addressed to the business, not the
  patient — leftover drafting notes live on the client's site verbatim:
  "**Your center likely offers** various therapies" → "We offer a range of therapies";
  "**Your pediatric services** ensure" → "Our pediatric services ensure".

### /contact-us — PASS
- Three clinic cards, embedded maps resolve to the correct addresses, directions links
  correct, footer addresses match. No issues found.

### Verified business data (from Gavin's Google Business Profile, 2026-07-31)
- Rating corrected to **4.8 / 146 Google reviews** (was an unverified 4.9 / 191 inherited
  from the redesign). Now a single `RATING` constant in content.ts driving the hero, the
  reviews section, and the JSON-LD.
- JSON-LD `aggregateRating` is claimed **only on the Kennewick node** — the rating comes
  from that location's Google listing, so asserting it for West Richland and Walla Walla
  would misrepresent them.
- Kennewick address corrected to **4015 W. Clearwater Ave., Ste C** (suite was missing).
- **NEEDS GAVIN:** opening hours are still absent sitewide. Google shows "Opens 8:30 AM Tue"
  but the full weekly schedule for all three clinics is unknown — a clinic site should
  publish hours, and `openingHoursSpecification` should go in the JSON-LD.
- **NEEDS GAVIN:** the client's own OTC comparison poster prints "4015 W. **Kennewick** Ave"
  while Google says **Clearwater** Ave. The poster is a flat image so it can't be corrected
  here; it needs redrawing.

### Batch B — FIXED
- `/otc-legislation`: the video stretched to match the tall poster, leaving a large dead
  panel. Added `items-start`.
- `/hearing-heroes`: same alternating-layout bug as /about-us — the order was swapped but
  the column template was not, so on odd rows the photo took the 1fr column and the copy
  was squeezed into 22rem. Template and order now swap together.
- Applied `items-start` to unequal-height card grids on /services, /about-us,
  /tinnitus-relief-management-program, /li-extended-protection, /lace-ai-pro.
- `/do-you-have-a-loss`, `/online-hearing-screening`,
  `/effectively-communicating-with-a-hearing-loss`: pass, no issues found.

### Batch C — FIXED
- **PageHero image frame was broken on every interior page.** The gradient plate was
  positioned against the grid column rather than the image, so on short or wide images
  it stuck out past both edges (very visible on /sound-shield-program). The gradient is
  now an offset plate sized to the image itself. One fix, every hero.
- `items-start` applied to the remaining stretch-prone grids: homepage reviews,
  /patient-ambassador-program steps, /do-you-have-a-loss steps and signs,
  /online-hearing-screening, /the-library financial resources, /about-us Dust Devils.
  Grids whose cards are *designed* to be equal height (product cards, store category
  cards, video cards, contact location cards) were deliberately left alone.

### Sitewide checks — PASS
- 53 routes fetched: all 200, all with a title, none thin.
- 51 distinct internal link targets, every one resolves to a real route. No 404s.

### Batches D/E/F — PASS
- Store index, all four category pages and product pages reviewed at desktop and mobile.
  Breadcrumb, gallery, price, spec bullets and related products all render correctly.
- **All 235 unique images across the site load** and return an image content-type.
  No broken media anywhere.
- **No horizontal overflow at 390px** on any of 20 representative pages.
- **No console errors or warnings.**

### Batch G — FIXED
**Lighthouse (mobile, homepage): Accessibility 92 → 100, SEO 92 → 100, Agentic 50 → 100.**
- **Colour contrast failed WCAG AA.** The teal accent was `oklch(0.63 0.108 214)`, giving
  roughly 3.5:1 for small bold text — bad on any site, worse on one whose patients are
  mostly older. Darkened to `oklch(0.47 0.1 214)`; measured **6.18:1**. Only tiny bullet
  dots use `bg-accent`, so this is a text change, and the brand gradient is unaffected
  (it uses literal values).
- **robots.txt was invalid** — `Sitemap:` must be an absolute URL. Replaced with a
  commented template; **the real URL must be filled in at launch.**
- `aria-label` on a bare `<span>` is prohibited ARIA — star rating now has `role="img"`.
- **The logo was being squashed**: rendered 2.92:1 against a natural 4.17:1, because the
  wrapping link shrank it. Added intrinsic `width`/`height` and `shrink-0`. That made the
  logo overflow the 390px header, so it now scales `h-8 sm:h-11`.
- Mobile hero stats collided (stars overlapping "3"); stars and labels now scale down.

**Copy diff against `.source/`** — 18 source sentences unmatched, reviewed one by one.
Most are headline rewrites or the deliberate second-person fixes. Three were real drops,
now restored:
- Tinnitus "Diagnosis" lead-in sentence, lost when the list became cards.
- The Sound Therapy & Tinnitus Habituation Sheet is now a **real link** to the PDF
  rather than "ask a member of our team" — we had the URL all along.
- The Library now names the two request-only documents explicitly instead of a vague line.

**Keyboard / focus** — the mobile drawer had no focus management. It now moves focus in
on open, traps Tab inside, restores scroll, and closes on Escape; marked `role="dialog"`
with `aria-modal`.

**Dark mode — decision: not supported, tokens kept.** Nothing applies the `dark` class and
no site component uses `dark:` utilities, so it is unreachable today. The `.dark` token
block stays because it is the shadcn convention and two `components/ui` files reference it.

**Lovable portability** — removed the orphaned `src/assets/cbhc-logo.webp.asset.json`
(pointed at a Lovable-only R2 URL, no longer imported). `lovable-error-reporting.ts` is
harmless (no-ops off-platform). The build still depends on `@lovable.dev/vite-tanstack-config`,
which is a public npm package, so it works anywhere — worth replacing eventually but not
a blocker for moving the repo.

### Contact form — FIXED
- Validation is sound: every field required and correctly typed, all labelled, autocomplete
  set, and an empty submit is blocked natively.
- **I had invented the recipient address.** The form posted to `info@columbiabasinhearing.com`,
  which I never verified. The clinic's live contact page publishes
  **contactus@columbiabasinhearing.com** — corrected.
- `action="mailto:"` with `method="post"` is unreliable across browsers. The form now builds
  the mailto URL itself on submit, so it actually opens a pre-filled message.
- **STILL NEEDS A REAL BACKEND.** A mailto handoff is a stopgap: it depends on the visitor
  having a mail client configured, and nothing is captured if they abandon it. Wire a real
  form endpoint before launch.

## Status

**Current batch:** none — all batches A–G complete
**Reviewed:** whole site
