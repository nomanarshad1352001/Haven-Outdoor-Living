import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Clock, PhoneCall, ShieldCheck } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta-band";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site } from "@/lib/site";
import { getService, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Minneapolis — ${service.fromPrice}`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Haven Outdoor Living Minneapolis`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 750, alt: service.alt }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const related = services.filter((_, i) => i !== idx).slice(idx % 3, (idx % 3) + 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    image: service.image,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@type": "LocalBusiness", "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: "Minneapolis" },
    offers: {
      "@type": "Offer",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: service.fromPrice },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceLd, breadcrumbLd]} />
      <PageHero
        eyebrow={`Service · ${service.fromPrice}`}
        lines={[service.title]}
        description={service.description}
        image={service.image}
        imageAlt={service.alt}
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Main copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">The service</p>
              <div className="space-y-7 text-lg leading-relaxed text-cream/65">
                {service.long.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display mt-16 mb-8 text-3xl font-medium tracking-tight md:text-4xl">
                What&apos;s included
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="card-lift flex items-start gap-3 rounded-xl border border-cream/10 bg-pine/60 p-5 hover:border-honey/40"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-clay to-honey text-forest">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-cream/70">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sticky facts */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.15}>
<div className="rounded-3xl border border-honey/40 bg-pine p-8 shadow-[0_30px_80px_-30px_rgba(223,165,78,0.3)] md:p-10">
  <p className="eyebrow-sage mb-2">At a glance</p>
  <p className="font-display text-gradient-ember text-5xl font-semibold">{service.fromPrice}</p>
                  <ul className="mt-8 space-y-5 border-t border-cream/10 pt-8">
                    <li className="flex items-center gap-4">
                      <ShieldCheck size={18} className="shrink-0 text-brass" />
                      <div>
                        <p className="text-sm font-semibold text-cream">3-year warranty</p>
                        <p className="text-xs text-cream/50">Craftsmanship, honored without debate</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <Clock size={18} className="shrink-0 text-brass" />
                      <div>
                        <p className="text-sm font-semibold text-cream">Guaranteed start date</p>
                        <p className="text-xs text-cream/50">In writing before you sign</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <PhoneCall size={18} className="shrink-0 text-brass" />
                      <div>
                        <p className="text-sm font-semibold text-cream">24-hour callbacks</p>
                        <p className="text-xs text-cream/50">During the build and long after</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="btn-primary group mt-10 w-full"
                  >
                    Get my line-item estimate
                    <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                  <p className="mt-5 text-center text-xs text-cream/45">
                    Free consult · No-pressure pricing · Replies within a day
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-cream/10 bg-pine/50">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-medium tracking-tight">
              Pairs well with
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-brass uppercase"
            >
              <span className="u-line">All services</span>
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-forest transition-colors duration-500 hover:border-brass/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-medium">{r.title}</h3>
                      <ArrowUpRight
                        size={17}
                        className="mt-1 shrink-0 text-brass transition-transform duration-500 group-hover:rotate-45"
                      />
                    </div>
                    <p className="mt-auto pt-4 text-[0.62rem] font-semibold tracking-[0.24em] text-brass uppercase">
                      {r.fromPrice}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker={`Let's talk ${service.title.toLowerCase()}`}
        title="One walk-through. One honest number."
      />
    </>
  );
}
