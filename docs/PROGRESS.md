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

## Next steps
1. Confirm and replace business information as the owner sends it.
2. Add real photos and approved reviews; set production URL.
3. Re-run typecheck, lint and build after future changes.
4. Perform browser smoke tests, mobile/responsive, keyboard, screen-reader and reduced-motion QA.
