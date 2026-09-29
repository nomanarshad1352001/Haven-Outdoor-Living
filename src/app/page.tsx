import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  HandCoins,
  HeartHandshake,
  MapPin,
  MoveRight,
  Quote,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/home/hero";
import CtaBand from "@/components/site/cta-band";
import {
  Counter,
  Horizontal,
  Marquee,
  ParallaxImg,
  Reveal,
} from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site, px, img } from "@/lib/site";
import {
  pillars,
  processSteps,
  projects,
  services,
  testimonials,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Minneapolis Landscaping & Outdoor Living Studio",
  description:
    "Haven Outdoor Living designs and builds patios, pergolas, fire features, gardens, and outdoor kitchens across Minneapolis & the Twin Cities. Honest pricing, efficient builds, 3-year warranty.",
  alternates: { canonical: "/" },
};

const pillarStyles = [
  { icon: HandCoins, ring: "from-clay to-honey" },
  { icon: Gauge, ring: "from-honey to-ember" },
  { icon: HeartHandshake, ring: "from-leaf to-sage" },
];

const chipGradients = [
  "from-clay to-honey",
  "from-honey to-ember",
  "from-leaf to-sage",
];

const marqueeItems = [
  "Paver Patios",
  "Cedar Pergolas",
  "Fire Features",
  "Outdoor Kitchens",
  "Garden Design",
  "Landscape Lighting",
  "Seasonal Care",
  "Snow Service",
];

const breakStats = [
  { v: 15, suffix: "+", l: "Years of landscape craft" },
  { v: 400, suffix: "+", l: "Projects across two states" },
  { v: 98, suffix: "%", l: "Clients who refer us on" },
  { v: 24, suffix: "hr", l: "Maximum callback time" },
];

export default function HomePage() {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    image: px(img.houseDusk, 1200),
    address: {
      "@type": "PostalAddress",
      streetAddress: "North Loop",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 44.9778, longitude: -93.265 },
    areaServed: site.areasServed.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessLd} />
      <Hero />

      {/* Sunset ribbon */}
      <Marquee
        slow
        className="border-b border-forest/20 bg-gradient-to-r from-clay via-honey to-ember bg-[length:200%_200%] py-4 text-forest"
      >
        {marqueeItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="px-8 text-sm font-extrabold tracking-[0.22em] uppercase">
              {item}
            </span>
            <Sparkles size={13} className="shrink-0" />
          </span>
        ))}
      </Marquee>

      {/* Editorial intro on cream */}
      <section className="bg-cream text-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow-clay mb-6">The Haven way</p>
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] font-medium tracking-tight">
                  A backyard isn&apos;t square footage.{" "}
                  <em className="text-gradient-ember">It&apos;s your home&apos;s missing room.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest/65">
                  After fifteen years running landscape companies — from mowing
                  routes to a Colorado design-build studio — our founder built
                  Haven around three disciplines the industry keeps forgetting.
                  They cost us nothing and mean everything to a homeowner.
                </p>
                <ul className="mt-9 flex flex-wrap gap-3">
                  {[
                    "Line-itemed, affordable estimates",
                    "One efficient crew, start to finish",
                    "Lifetime relationship support",
                  ].map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-forest/15 bg-ivory px-5 py-2.5 text-xs font-bold tracking-wide text-forest/75"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="group mt-10 inline-flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.22em] text-clay uppercase"
                >
                  <span className="u-line">Our story</span>
                  <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <div className="relative h-[460px] lg:col-span-5 md:h-[560px]">
              <Reveal className="absolute top-0 left-0 w-[74%]">
                <img
                  src={px(img.pergolaDining, 1200)}
                  alt="Elegant pergola over an outdoor dining set — Haven Outdoor Living Minneapolis"
                  loading="lazy"
                  className="aspect-[3/4] w-full -rotate-3 rounded-[2rem] border-4 border-ivory object-cover shadow-[0_40px_80px_-30px_rgba(10,23,16,0.45)]"
                />
              </Reveal>
              <Reveal delay={0.18} className="absolute right-0 bottom-0 w-[56%]">
                <img
                  src={px(img.firepitSunset, 1000)}
                  alt="Fire pit glowing at sunset with Adirondack chairs — Haven Outdoor Living"
                  loading="lazy"
                  className="animate-float-slow aspect-square w-full rotate-3 rounded-[2rem] border-4 border-ivory object-cover shadow-[0_40px_80px_-30px_rgba(199,106,63,0.5)]"
                />
              </Reveal>
              <Reveal delay={0.3}>
                <div className="animate-float absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl border border-forest/10 bg-ivory/90 px-5 py-4 shadow-xl backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-clay to-honey text-forest">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="font-display text-xl leading-none font-bold">400+</p>
                    <p className="mt-1 text-[0.6rem] font-bold tracking-[0.2em] text-forest/55 uppercase">
                      Projects delivered
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-24 grid gap-6 md:grid-cols-3 md:mt-32">
            {pillars.map((p, i) => {
              const Icon = pillarStyles[i].icon;
              return (
                <Reveal key={p.key} delay={i * 0.1} className="h-full">
                  <div className="card-lift relative h-full overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-8 shadow-[0_20px_60px_-30px_rgba(10,23,16,0.25)] md:p-10">
                    <span className="font-display text-stroke-forest absolute -top-3 right-5 text-[6rem] leading-none font-semibold select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pillarStyles[i].ring} text-forest shadow-lg`}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </span>
                    <h3 className="font-display relative mt-8 text-2xl font-medium tracking-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-forest/60">
                      {p.body}
                    </p>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${pillarStyles[i].ring}`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — immersive image cards */}
      <section className="bg-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow mb-6">What we build</p>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.0] font-medium tracking-tight">
                Eight trades.
                <br />
                <em className="text-gradient-ember">One accountable crew.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.22em] text-honey uppercase"
              >
                <span className="u-line">All services &amp; pricing</span>
                <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full min-h-[420px] overflow-hidden rounded-3xl"
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-75" />
                  <span
                    className={`absolute top-6 left-6 rounded-full bg-gradient-to-r ${chipGradients[i % 3]} px-5 py-2 text-[0.65rem] font-extrabold tracking-[0.24em] text-forest uppercase`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute top-6 right-6 rounded-full border border-cream/25 bg-forest/40 px-5 py-2 text-[0.62rem] font-bold tracking-[0.2em] text-ember uppercase backdrop-blur-sm">
                    {s.fromPrice}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="font-display text-3xl font-medium tracking-tight text-cream transition-colors duration-500 group-hover:text-ember md:text-4xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60">
                          {s.short}
                        </p>
                      </div>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:bg-gradient-to-br group-hover:from-clay group-hover:to-honey group-hover:text-forest">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal project reel */}
      <section className="border-y border-cream/10 bg-pine" aria-label="Project reel">
        <Horizontal>
          <div className="flex h-[76vh] w-[88vw] shrink-0 flex-col justify-center px-6 md:w-[38vw] md:px-16">
            <p className="eyebrow mb-6">Recent work</p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.0] font-medium tracking-tight">
              Roll through
              <br />
              <em className="text-gradient-ember">the Twin Cities.</em>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              From Edina courtyards to Lake Minnetonka terraces — keep scrolling
              and the reel drives itself.
            </p>
            <p className="mt-10 flex items-center gap-3 text-[0.65rem] font-extrabold tracking-[0.3em] text-honey uppercase">
              Scroll <MoveRight size={16} className="animate-pulse" />
            </p>
          </div>

          {projects.slice(0, 6).map((p, i) => (
            <div key={p.name} className="h-[76vh] w-[84vw] shrink-0 px-3 py-10 md:w-[43vw]">
              <Link href="/projects" className="group relative block h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/15 to-transparent" />
                <span
                  className={`absolute top-6 left-6 rounded-full bg-gradient-to-r ${
                    chipGradients[i % 3]
                  } px-4 py-1.5 text-[0.6rem] font-extrabold tracking-[0.24em] text-forest uppercase`}
                >
                  {p.category}
                </span>
                <div className="absolute right-7 bottom-7 left-7">
                  <p className="text-[0.62rem] font-bold tracking-[0.26em] text-ember uppercase">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-medium tracking-tight text-cream md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-cream/55">{p.scope}</p>
                </div>
              </Link>
            </div>
          ))}

          <div className="flex h-[76vh] w-[70vw] shrink-0 items-center justify-center px-6 md:w-[34vw]">
            <Link
              href="/projects"
              className="group flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl border border-dashed border-honey/40 text-center transition-colors duration-500 hover:border-honey hover:bg-moss/30"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-clay to-honey text-forest transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={28} />
              </span>
              <span className="font-display text-2xl font-medium text-cream">
                See the full portfolio
              </span>
              <span className="text-[0.62rem] font-bold tracking-[0.28em] text-honey uppercase">
                {projects.length} projects &amp; counting
              </span>
            </Link>
          </div>
        </Horizontal>
      </section>

      {/* Cinematic quote */}
      <section className="relative" aria-label="The Haven philosophy">
        <ParallaxImg
          src={px(img.bbqLights, 2000)}
          alt="Friends gathered around an evening barbecue under string lights — outdoor living designed by Haven, Minneapolis"
          className="h-[80vh] min-h-[520px] w-full"
          speed={10}
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal className="max-w-4xl text-center">
            <p className="eyebrow mx-auto mb-8 w-fit">The Haven philosophy</p>
            <p className="font-display text-[clamp(1.9rem,4.4vw,3.8rem)] leading-[1.12] font-medium tracking-tight text-cream">
              “Minnesota gives us five easy months. We build spaces that{" "}
              <em className="text-gradient-ember">steal back the other seven.</em>”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats on cream */}
      <section className="bg-cream text-forest">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {breakStats.map((s, i) => (
            <div
              key={s.l}
              className={`px-6 py-14 text-center md:py-20 ${
                i < breakStats.length - 1 ? "border-forest/10 md:border-r" : ""
              } ${i % 2 === 0 ? "border-r border-forest/10" : ""} ${
                i < 2 ? "max-md:border-b max-md:border-forest/10" : ""
              }`}
            >
              <Counter
                to={s.v}
                suffix={s.suffix}
                className="font-display text-gradient-ember text-6xl font-semibold md:text-7xl"
              />
              <p className="mt-3 text-[0.65rem] font-bold tracking-[0.22em] text-forest/55 uppercase">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process preview */}
      <section className="bg-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow mb-6">The Haven method</p>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.0] font-medium tracking-tight">
                Consult to campfire,
                <br />
                in four moves.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                href="/process"
                className="group inline-flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.22em] text-honey uppercase"
              >
                <span className="u-line">How we work</span>
                <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08} className="h-full">
                <div className="card-lift group flex h-full flex-col rounded-3xl border border-cream/10 bg-pine p-8 hover:border-honey/40 md:p-9">
                  <span className="font-display text-gradient-ember text-6xl font-semibold md:text-7xl">
                    {step.n}
                  </span>
                  <span className="mt-8 w-fit rounded-full border border-honey/40 px-4 py-1.5 text-[0.6rem] font-extrabold tracking-[0.24em] text-honey uppercase">
                    {step.weeks}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/55">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials on cream */}
      <section className="bg-cream text-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-clay to-honey text-forest shadow-xl">
              <Quote size={26} strokeWidth={1.8} />
            </span>
            <p className="font-display text-[clamp(1.8rem,3.8vw,3.3rem)] leading-[1.15] font-medium tracking-tight">
              “Haven built our stone patio in nineteen days — on budget to the
              dollar. <em className="text-gradient-ember">Then they came back in the spring just to check on it.</em>”
            </p>
            <p className="mt-8 text-[0.7rem] font-extrabold tracking-[0.26em] text-clay uppercase">
              {testimonials[0].name} · {testimonials[0].place} · {testimonials[0].project}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {testimonials.slice(1).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-3xl border border-forest/10 bg-ivory p-8 shadow-[0_20px_60px_-30px_rgba(10,23,16,0.25)] md:p-10">
                  <span className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-clay to-honey" />
                  <p className="font-display flex-1 text-xl leading-relaxed font-medium text-forest/85 italic md:text-2xl">
                    “{t.quote}”
                  </p>
                  <p className="mt-8 text-[0.65rem] font-extrabold tracking-[0.24em] text-clay uppercase">
                    {t.name} · {t.place} · {t.project}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
