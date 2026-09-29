import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta-band";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site } from "@/lib/site";
import { faqs, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Landscaping & Outdoor Living Services in Minneapolis",
  description:
    "Patios, pergolas, fire features, outdoor kitchens, garden design, landscape lighting, seasonal care & snow service — all line-item priced, all built by one accountable crew in the Twin Cities.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Haven Outdoor Living services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${site.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[faqLd, servicesLd]} />
      <PageHero
        eyebrow="Services & pricing"
        lines={[
          "Everything outside,",
          <>
            <em className="text-ember">handled.</em>
          </>,
        ]}
        description="Eight trades under one roof, one crew, and one line-itemed estimate. Every price below is a real starting number — the final one arrives in writing before we break ground."
      />

      {/* Editorial service rows */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid gap-10 border-b border-cream/10 py-16 last:border-b-0 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16"
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Reveal>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
                  <span className="font-display absolute top-6 left-6 text-lg text-cream/85 italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-6 left-6 rounded-full bg-forest/60 px-5 py-2 text-[0.62rem] font-bold tracking-[0.24em] text-ember uppercase backdrop-blur-sm">
                    {s.fromPrice}
                  </span>
                </Link>
              </Reveal>
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <Reveal delay={0.1}>
                <p className="eyebrow-sage mb-5">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.05] font-medium tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-cream/60">{s.description}</p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {s.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-honey/30 bg-moss/30 px-4 py-2 text-[0.7rem] font-semibold text-ember/80"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="group mt-9 inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-brass uppercase"
                >
                  <span className="u-line">Explore {s.title.toLowerCase()}</span>
                  <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      {/* Pricing promise */}
      <section className="bg-cream text-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { n: "100%", t: "Line-itemed estimates", d: "Materials, labor, and options priced separately — never one blind lump sum." },
              { n: "$0", t: "Hidden fees, ever", d: "The number you sign is the number you pay. Changes are quoted before work, never after." },
              { n: "24hr", t: "Pricing turnaround", d: "Walk-through today, honest numbers within a week — and callbacks within a day." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="flex flex-col gap-3 border-l-2 border-clay/40 pl-6">
                  <span className="font-display text-gradient-ember text-5xl font-semibold">{s.n}</span>
                  <p className="font-display text-xl font-medium">{s.t}</p>
                  <p className="max-w-sm text-sm leading-relaxed text-forest/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-forest/10 bg-pine">
        <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="mb-14">
            <p className="eyebrow mb-6">Straight answers</p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.04] font-medium tracking-tight">
              Questions every
              <br />
              homeowner asks.
            </h2>
          </Reveal>
          <div className="border-t border-cream/10">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group border-b border-cream/10 py-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-ember md:text-2xl">
                      {f.q}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-500 group-open:rotate-45 group-open:border-brass group-open:text-ember">
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="mt-5 max-w-3xl leading-relaxed text-cream/55">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
