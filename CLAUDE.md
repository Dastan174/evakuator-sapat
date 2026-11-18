# CLAUDE.md — Development Rules

## Project
Marketing site for a real tow-truck service in Bishkek and Chuy Region. Main conversion goals: phone calls, WhatsApp inquiries, location discovery, and services/pricing information.

## Stack and scope
- Next.js App Router, strict TypeScript, Tailwind CSS, Motion for React, Lucide React, Next Image, Vercel.
- Frontend-first static marketing site. No database, backend server, auth, admin panel, state library, Axios, or unnecessary API routes.
- Keep server components as default; use client components only where interaction or animation requires them.

## Business data and honesty
- Centralize business facts under `src/config/`; never hardcode contacts or pricing in components.
- `tel:` links must use `tel:+996...`; WhatsApp links use `https://wa.me/996...` and a prefilled message.
- Do not fabricate company names/legal details, addresses, prices, reviews, response times, availability, vehicles, equipment, payment methods, or credentials.
- Use `[Требуется подтверждение]` or `[Уточняйте по телефону]` when information is unknown. All placeholder contacts must be replaced and verified before deployment; do not publish them as operational numbers.
- Use real company photography only when provided. Mark placeholders explicitly; do not misrepresent unrelated stock images as fleet photos.

## Mobile, accessibility, performance
- Mobile-first. Make phone/WhatsApp actions reachable in the hero and sticky mobile bar.
- Respect `prefers-reduced-motion`; keep parallax subtle, disable/reduce it on mobile, and never delay CTA access.
- Use Next Image for raster/vector content images, optimized fonts, semantic HTML, keyboard-accessible interactions, and avoid layout shifts.

## SEO
- Use unique metadata, canonical URLs, Open Graph as appropriate, sitemap and robots.
- Set `NEXT_PUBLIC_SITE_URL` to the verified production URL before deployment; never ship `example.com` as the canonical domain.
- JSON-LD must contain only confirmed business data. Do not create doorway pages or keyword-stuffed content.

## Workflow and quality
- Read project docs (`docs/PROJECT.md`, `docs/DESIGN.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`) before architectural changes.
- Update `docs/PROGRESS.md` after substantial milestones.
- Before handoff run `npm run typecheck`, `npm run lint`, and `npm run build`; report results faithfully. Review phone/WhatsApp targets and mobile/reduced-motion behavior.
