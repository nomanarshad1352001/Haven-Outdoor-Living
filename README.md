# Haven Outdoor Living

A cinematic, award-tier marketing website and lead-generation platform for a
Minneapolis-based outdoor living company. Light editorial design, streaming
video hero, GSAP motion, full SEO architecture — and **zero database setup
required** (demo lead capture runs on in-memory dummy data).

---

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

That's it. No `.env`, no database, no external services. Quote-form
submissions are validated and stored in a demo in-memory inbox — view them at
`GET /api/quote`.

## Scripts

| Command            | Purpose                          |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start the dev server             |
| `npm run build`    | Production build (19 routes SSG) |
| `npm run start`    | Serve the production build       |
| `npm run typecheck`| TypeScript check                 |
| `npx next typegen` | Regenerate route types           |

## Highlights

- **Video hero** — full-bleed outdoor-living footage, streamed progressively
  with poster, backup stream, and reduced-motion fallbacks
- **Motion system** — Lenis smooth scroll, GSAP reveals, parallax imagery,
  pinned horizontal portfolio reel, animated counters, marquee ribbons
- **9 routes** — Home, About, Services (+8 service detail pages), Projects,
  Process, Contact, custom 404, sitemap, robots
- **Lead capture** — validated `/api/quote` endpoint with honeypot spam
  protection and a demo inbox
- **SEO engine** — JSON-LD structured data (LocalBusiness, FAQ, Service,
  Breadcrumbs, HowTo, Collections), per-page metadata, canonicals, sitemap

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 ·
GSAP + ScrollTrigger · Lenis · Three.js / React Three Fiber (video hero ships
by default; the WebGL diorama system can be dropped back in) · Lucide icons ·
Pexels CDN media.

## Project Layout

```
src/
├── app/                 # routes (pages, api, sitemap, robots)
│   ├── page.tsx         # home
│   ├── about|services|projects|process|contact/
│   └── api/quote/       # demo lead inbox (no DB)
├── components/
│   ├── home/            # hero (video + fallback scene)
│   ├── site/            # navbar, footer, page-hero, cta-band, seo
│   ├── motion.tsx       # Reveal, MaskLines, ParallaxImg, Counter, Marquee, Horizontal
│   ├── projects-gallery.tsx
│   └── quote-form.tsx
└── lib/
    ├── site.ts          # brand config + image helpers
    └── data.ts          # services, projects, process, testimonials, FAQs (dummy data)
```

## Documentation

See **[PROJECT.md](./PROJECT.md)** for the full platform brief — features,
target buyers, SEO architecture, customization guide, and how to swap the demo
inbox for a real PostgreSQL backend when going live.

## License

Proprietary — built for Haven Outdoor Living LLC.
