# Development Progress

## Current milestone
MVP implementation and owner-confirmed business details entered on 2026-11-18.

## Completed
- Inspected the Next.js App Router project and built homepage sections, `/services`, `/contacts`, mobile CTA/navigation, footer, sitemap, robots, and centralized config.
- Hero/gallery use a labeled local tow-truck illustration placeholder, not a fake photograph.
- Removed original invented sample phone, address, rates, ETA, testimonials, payment methods and equipment claims.
- Owner-confirmed business data in config: “Эвакуатор «Сапат»”; phone and WhatsApp `+996700162550`; 24/7; city service area Bishkek; intercity Kyrgyzstan, Almaty and southern cities of Kazakhstan (confirm specific route); cash and QR transfer.
- No extra roadside services added. Vehicle types, truck specifications, social/map links, reviews, photos and pricing await more information.
- Updated project/design/architecture docs and permanent development rules.

## Verification (latest run)
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed; all app routes, sitemap and robots statically generated.
- An earlier parallel build attempt failed with `Unexpected end of JSON input`; a clean sequential retry succeeded.
- Browser/mobile visual QA not performed.

## Remaining owner inputs / release blockers
1. Vehicle types and capabilities; equipment specifications and difficult-loading capability.
2. Prices/pricing rules.
3. Exact public address/map link or confirmation to omit; social links.
4. Real customer reviews and permission to publish; actual tow truck/job photos.
5. Production domain for `NEXT_PUBLIC_SITE_URL`.
6. Optional legal entity details.

## Design update (2026-11-18)
- Owner selected Industrial Editorial as the visual direction.
- Added a reusable Motion reveal primitive with reduced-motion support.
- Applied staged hero entrance, section-heading reveals, and service/how-it-works card reveals.
- Refined hero typography, editorial detail, image treatment, and card geometry without changing business claims or conversion targets.
- Added owner-provided photo gallery and hero image, then verified desktop/mobile behavior with Playwright at 1440×900 and 390×844. Mobile menu, CTA links, route status, and hydration console output passed after QA fixes.
- Owner confirmed starting price from 2,000 som, service coverage including passenger cars, SUVs, minibuses, special equipment and intercity routes, and stated load capacity up to 8 tonnes.
- Began the cinematic upgrade: installed GSAP, added a reduced-motion-safe pinned story section with four service stages, desktop horizontal gallery fallback, and updated service/pricing/FAQ copy with confirmed facts.
- Upgraded the hero to a real full-screen pinned cinematic sequence: layered image scale/pan, independent copy/meta movement, dark art-directed overlays, and mobile-safe non-pinned fallback.

## Design & motion pass (2026-11-19)
- Hero rebuilt: no pinning or text parallax. Copy and call/WhatsApp CTAs are static and visible immediately; three owner photos sit at different depths and drift at different speeds on scroll (Motion `useScroll` + spring). One CSS clip-path entrance on load. Mobile/tablet: single static photo.
- "Как заказать" is now a natural-scroll sticky photo that crossfades per step (IntersectionObserver) instead of a 340% GSAP pin. Removed duplicate sections: HowItWorks, Benefits, HorizontalGallery (pinned horizontal scroll).
- Gallery: three-column wall, middle column drifts on desktop; no captions; photos used in hero/steps are not repeated.
- Pricing: one price statement plus factor list instead of four identical "от 2 000" cards. Services: list rows with specific Lucide icons (CarFront, BusFront, Forklift, Route, TriangleAlert). ServiceAreas: no tabs. FAQ: native `<details>`.
- Real WhatsApp glyph and a custom tow-truck mark (`src/components/ui/icons.tsx`). Unbounded display font for headings. Eyebrow pills with pulsing dots removed.
- Cropped baked-in black side bars from six source photos; rewrote gallery alt text to match what is actually in each frame. Favicon moved to `src/app/icon.svg`.
- Reduced motion: entrance disabled, parallax amplitude zeroed (no hydration mismatch). Verified in Edge headless at 1440×900 and 390×844: no console errors, no horizontal overflow.
- GSAP is no longer used by any component; dependency left installed.
- Smooth parallax layer: Lenis inertial scroll on ≥1280px (`SmoothScroll`), and `ParallaxImage` — photo drifts inside its clipped frame — on gallery tiles and the hero back/front frames. Both gated by `useDesktopMotion` (≥1024px, no reduced motion). Scroll transforms use function-form `useTransform` because range form is frozen into a native ScrollTimeline at first render. Verified in Edge headless: moves on desktop, static on 390 and reduced motion, no errors.
- Full-screen "card grows to full width" scene deferred until the owner supplies original photos ≥2000px wide (current files are 542–960px).

## SEO: service pages (2026-11-19)
- `SITE_URL` falls back to Vercel's `VERCEL_PROJECT_PRODUCTION_URL` (switches to the custom domain once attached); `example.com` fallback removed. Homepage got a canonical.
- Seven static service pages at `/services/[slug]` (`generateStaticParams`, `dynamicParams = false`). Copy lives in `src/config/service-pages.ts`, written only from confirmed facts. Each page: unique title/description/H1, intro, order checklist, steps, price, 3 photos, FAQ, related services; JSON-LD Service + BreadcrumbList + FAQPage.
- Service rows on `/` and `/services`, footer links and sitemap point to the pages. Fixed duplicated brand in page titles from `getPageMetadata`.
- Verified in Edge headless: all 7 return 200 with unique metadata, unknown slug 404, no console errors, no overflow at 1440/390.
- Not done on purpose: per-district or per-city clone pages (doorway risk).

## SEO: brand assets and share images (2026-11-19)
- Logo mark (tow truck on amber tile): `src/app/icon.svg` favicon, `src/app/apple-icon.png`, `public/logo.svg|png`, maskable `public/icon-192|512.png`, `src/app/manifest.ts`.
- Generated Open Graph images (1200×630, built statically) for `/`, `/services`, each `/services/[slug]` and `/contacts` via `src/lib/og.tsx` (`next/og` + `@fontsource/unbounded` woff for Cyrillic, `sharp` to feed webp photos). `twitter:card` = `summary_large_image`.
- Photos renamed to descriptive transliterated filenames (e.g. `perevozka-mini-pogruzchika.webp`); unused `tow-truck-placeholder.svg` removed.
- JSON-LD TowingService now has `logo` and `image`; sitemap lists page images.
- Several source photos still carry a small "2GIS" watermark; replace with the owner's originals when available.

## Next steps
1. Confirm and replace business information as the owner sends it.
2. Add real photos and approved reviews; set production URL.
3. Re-run typecheck, lint and build after future changes.
4. Perform browser smoke tests, mobile/responsive, keyboard, screen-reader and reduced-motion QA.
