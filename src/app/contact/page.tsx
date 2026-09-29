import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import QuoteForm from "@/components/quote-form";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Free Design Consult & Line-Item Estimate",
  description:
    "Book a free walk-through with Haven Outdoor Living. Serving Minneapolis and the Twin Cities with patios, pergolas, fire features, gardens, lighting, seasonal care and snow service.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  { n: "1", title: "We call you back", body: "Within one business day — a real human, usually our founder." },
  { n: "2", title: "Free walk-through", body: "We visit, measure, and listen. Thirty to forty-five minutes." },
  { n: "3", title: "Your line-item estimate", body: "In your inbox within a week, priced to the dollar." },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Haven Outdoor Living",
    url: `${site.url}/contact`,
    about: { "@type": "LocalBusiness", "@id": `${site.url}/#business` },
  };

  return (
    <>
      <JsonLd data={contactLd} />
      <PageHero
        eyebrow="Contact"
        lines={[
          "Tell us about",
          <>
            your <em className="text-ember">outdoors.</em>
          </>,
        ]}
        description="Two minutes of typing now, one honest number within a week. Prefer talking? Call us — the phone is answered."
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <QuoteForm initialService={service ?? ""} />
          </Reveal>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-cream/10 bg-pine p-8">
                  <p className="eyebrow-sage mb-6">Reach us directly</p>
                  <ul className="space-y-5 text-sm">
                    <li>
                      <a href={site.phoneHref} className="group flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-forest">
                          <Phone size={15} />
                        </span>
                        <span>
                          <span className="block font-semibold text-cream group-hover:text-ember">{site.phone}</span>
                          <span className="text-xs text-cream/45">Answered {site.hours.toLowerCase()}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-forest">
                          <Mail size={15} />
                        </span>
                        <span>
                          <span className="block font-semibold text-cream group-hover:text-ember">{site.email}</span>
                          <span className="text-xs text-cream/45">Replies within one business day</span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 text-brass">
                        <MapPin size={15} />
                      </span>
                      <span>
                        <span className="block font-semibold text-cream">{site.address}</span>
                        <span className="text-xs text-cream/45">Serving the greater Twin Cities metro</span>
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 text-brass">
                        <Clock size={15} />
                      </span>
                      <span>
                        <span className="block font-semibold text-cream">{site.hours}</span>
                        <span className="text-xs text-cream/45">Evening consults by request</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-cream/10 bg-pine p-8">
                  <p className="eyebrow-sage mb-6">What happens next</p>
                  <ul className="space-y-6">
                    {nextSteps.map((s) => (
                      <li key={s.n} className="flex gap-5">
                        <span className="font-display text-2xl font-medium text-brass/80 italic">{s.n}</span>
                        <div>
                          <p className="font-semibold text-cream">{s.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-cream/50">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-cream/10 bg-pine p-8">
                  <p className="eyebrow-sage mb-5">Service area</p>
                  <ul className="flex flex-wrap gap-2">
                    {site.areasServed.map((a) => (
                      <li key={a} className="rounded-full border border-cream/12 px-4 py-2 text-xs text-cream/60">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
