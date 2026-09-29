# PROJECT BRIEF — Haven Outdoor Living

**Project title:** Haven Outdoor Living — Cinematic Brand Website,
Lead-Generation Platform & SEO Engine for a Minneapolis outdoor living
company.

**Version:** 1.0 · **Stack:** Next.js 16 + React 19 + TypeScript · **Data:**
dummy in-memory data (no database required)

---

## 1. What This Platform Does

Haven is the complete digital flagship for an outdoor living business. It is
not a brochure — it is a conversion machine wrapped in a brand experience:

1. **Establishes premium credibility instantly** — cinematic light-theme
   design, streaming video hero, and editorial typography that make a one-crew
   company look like the largest studio in the state.
2. **Captures leads** — a quote/consultation funnel collects name, contact
   info, project type, budget, timeline, and project description through a
   validated API. Currently powered by dummy in-memory storage so it runs with
   **zero setup** (swap in Postgres at launch — see §7).
3. **Sells services autonomously** — 8 detail pages (patios, pergolas, fire
   features, kitchens, gardens, lighting, seasonal care, snow) with real
   starting prices, feature grids, process notes, and estimate CTAs.
4. **Proves capability** — a filterable portfolio anchored in real Twin Cities
   neighborhoods (Edina, Wayzata, Stillwater, North Oaks…).
5. **Neutralizes objections** — a process page covering pricing transparency,
   guaranteed start dates, daily photo updates, warranty terms, and callback
   promises.
6. **Ranks on Google** — a full SEO architecture engineered for local search
   ("landscaping Minneapolis", "patio builders Twin Cities", "pergola MN").

---

## 2. Target Buyers (Who Purchases This Platform)

| Buyer profile                        | Value to them                                                   |
| ------------------------------------ | --------------------------------------------------------------- |
| Landscaping / hardscape owners       | Premium positioning above "truck-and-mower" competitors         |
| Outdoor living contractors           | Service pages that pre-sell $5K–$60K high-ticket projects       |
| New business founders                | Look 10 years established on day one; no office staff needed    |
| Lawn care & snow operators           | Dedicated pages for recurring-revenue contracts                 |
| Design-build studios                 | Presentation quality matching studio-grade work                 |
| Marketing agencies                   | White-label foundation for home-services clients                |
| Franchise / multi-city operators     | Architecture clones cleanly per market with localized SEO pages |

---

## 3. Qualities (What Makes It Premium)

- **Million-dollar visual identity** — warm paper daylight palette, burnished
  sunset accents (clay → honey → ember), Fraunces serif + Manrope sans,
  film-grain finish, light/dark editorial banding.
- **Cinematic motion** — Lenis smooth scrolling, GSAP ScrollTrigger reveals,
  masked headline animations, scroll-scrubbed parallax, a pinned
  horizontal-scroll project reel, animated stat counters.
- **A living hero** — outdoor-living video that streams progressively and
  fades in gracefully, riding above poster + illustrated-scene fallbacks.
- **Performance discipline** — statically prerendered routes, GPU-only
  animations, lazy media, reduced-motion respect, verified HTTP 206 streaming.
- **Enterprise-grade SEO** — 6 JSON-LD schema types, semantic HTML,
  descriptive alt copy, suburban keyword coverage, sitemap + robots + canonicals.
- **Responsive from 320px to ultrawide** — touch overlays, mobile-native
  swipe galleries, adaptive typography via `clamp()`.

---

## 4. Feature Inventory

**Routes (9 + system)**

- `/` — video hero, sunset ribbon marquee, editorial intro with photo collage,
  3 pillar cards, immersive service cards, pinned horizontal project reel,
  parallax quote interlude, stat counters, process preview, testimonials,
  gradient CTA band
- `/about` — founder narrative, 2009→2025 timeline, four operating values,
  parallax interlude
- `/services` — 8 editorial service rows, pricing-promise band, FAQ accordions
- `/services/[slug]` × 8 — long-form copy, "what's included" grid, sticky
  pricing card, related services (SSG + per-page metadata)
- `/projects` — filterable portfolio (Fire / Structure / Garden / Hardscape)
- `/process` — 4-phase method, guarantees, communication cadence
- `/contact` — quote form (URL-service prefill) + reach/service-area sidebar
- `/404` · `/sitemap.xml` · `/robots.txt` · `/api/quote` · `/api/health`

**Interactive systems**

- Smooth-scroll engine synced to scroll animations
- Pinned horizontal reel with gradient progress rail (swipe on mobile)
- Staggered overlay navigation with ambient glows
- Form states: idle → sending → success panel / inline error
- Demo lead inbox at `GET /api/quote` (pre-seeded with 3 sample leads)

---

## 5. Tech Stack

| Layer         | Technologies                                                            |
| ------------- | ----------------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router, Turbopack, SSG)                                  |
| UI            | React 19, TypeScript 5                                                    |
| Styling       | Tailwind CSS v4 (token-based theme), CSS custom properties                |
| Motion        | GSAP + ScrollTrigger, Lenis, CSS keyframe systems                          |
| 3D (optional) | Three.js + React Three Fiber (paper-diorama hero available on request)    |
| Media         | HTML5 progressive video background, Pexels CDN photography                |
| Fonts         | Fraunces (display serif), Manrope (sans) via `next/font`                  |
| Icons         | Lucide                                                                     |
| SEO           | Metadata API, JSON-LD (6 schema types), `sitemap.ts`, `robots.ts`         |
| Data (demo)   | In-memory dummy store in `src/app/api/quote/route.ts`                     |

---

## 6. Dummy Data

All content is driven by local data files — edit in one place, updates everywhere:

- `src/lib/data.ts` — services (8), projects (8), process steps, pillars,
  testimonials, FAQs
- `src/lib/site.ts` — brand info (name, phone, email, address, service area),
  image URL helpers
- `src/app/api/quote/route.ts` — demo lead inbox (in-memory array, seeded
  with sample entries)

> Note: the in-memory inbox resets whenever the server restarts. That is
> intentional for a no-database demo build.

---

## 7. Going Live: Swapping in a Real Database

The platform previously shipped with a PostgreSQL + Drizzle ORM backend.
Re-enabling it takes minutes:

```bash
npm install drizzle-orm pg
# create .env with:
# DATABASE_URL=postgresql://user:pass@host:5432/haven
```

Create `src/db/schema.ts`:

```ts
import { pgTable, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  email: varchar("email", { length: 180 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  service: varchar("service", { length: 140 }),
  budget: varchar("budget", { length: 80 }),
  timeline: varchar("timeline", { length: 80 }),
  message: text("message"),
  source: varchar("source", { length: 60 }).default("website").notNull(),
  responded: boolean("responded").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

Create `src/db/index.ts` (pg Pool + `drizzle()`), then replace the body of
`saveLead` in `src/app/api/quote/route.ts` with:

```ts
await db.insert(leads).values(lead);
```

Remove the `GET` demo inbox (or protect it behind auth), and run
`npx drizzle-kit push` to create the table.

---

## 8. Customization Guide

| What                       | Where                                                   |
| -------------------------- | ------------------------------------------------------- |
| Brand colors / fonts       | `src/app/globals.css` (`@theme` tokens)                  |
| Phone, email, service area | `src/lib/site.ts`                                        |
| Services & prices          | `src/lib/data.ts` → `services`                           |
| Portfolio items            | `src/lib/data.ts` → `projects`                           |
| Hero video / poster URLs   | `src/components/home/hero.tsx` (top constants)           |
| Testimonials, FAQs         | `src/lib/data.ts`                                        |
| Domain / canonicals        | `site.url` in `src/lib/site.ts`                          |
| OG share image             | `src/app/layout.tsx` (`openGraph.images`)                |

## 9. Deployment

Any Next.js-compatible host (Vercel, Node server, container):

```bash
npm run build
npm run start
```

No environment variables are required for the demo build. Set a real domain in
`src/lib/site.ts` before launch so sitemap, canonicals, and JSON-LD point to
the right URLs.

---

*Built for Haven Outdoor Living LLC — Minneapolis, Minnesota.*
