import type { Metadata } from "next";
import { Calculator, Hammer, PhoneCall, Users } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta-band";
import { ParallaxImg, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site, px, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — 15 Years of Landscape Craft, Now in Minneapolis",
  description:
    "Haven Outdoor Living was founded by a landscaper with 15+ years and multiple companies behind him — including a thriving Colorado design-build studio. Now building affordable, efficient outdoor spaces in Minneapolis.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2009",
    title: "First routes, first lessons",
    body: "Started mowing routes in the summers — learned that showing up on the day you promised is 80% of the business.",
  },
  {
    year: "2013",
    title: "First company",
    body: "Built a full-service maintenance company from one truck to four crews on the strength of one rule: do what you said you'd do.",
  },
  {
    year: "2017",
    title: "Colorado design-build studio",
    body: "Moved into high-end design-build in Colorado — patios, terraces, and outdoor rooms for mountain homes that taught us what craftsmanship really costs.",
  },
  {
    year: "2022",
    title: "400th project",
    body: "Crossed 400 completed outdoor projects and learned the pattern behind every happy client: plain numbers, one crew, and a company that calls back.",
  },
  {
    year: "2025",
    title: "Haven comes home",
    body: "Brought all of it back to Minneapolis. Haven is everything that worked, distilled: affordable by design, efficient by process, supported for good.",
  },
];

const values = [
  {
    icon: Calculator,
    title: "Plain numbers",
    body: "Every estimate is line-itemed to the dollar. If a number changes, you'll know why before we know ourselves.",
  },
  {
    icon: Users,
    title: "One crew",
    body: "The people who walk your property are the people who build it. No handoffs, no telephone game, no excuses.",
  },
  {
    icon: Hammer,
    title: "Craft first",
    body: "Deeper bases, better drainage, honest materials. We build for the fiftieth freeze/thaw cycle, not the first photo.",
  },
  {
    icon: PhoneCall,
    title: "Answer the phone",
    body: "A 24-hour callback promise, honored since the mowing-route days. Support doesn't end at the final invoice.",
  },
];

export default function AboutPage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Haven Outdoor Living",
    url: `${site.url}/about`,
    description:
      "The story of Haven Outdoor Living — 15+ years of landscape experience, from mowing routes to a Colorado design-build studio, now in Minneapolis.",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={aboutLd} />
      <PageHero
        eyebrow="About Haven"
        lines={["Built by a landscaper", "who's seen it all."]}
        description="Fifteen years, multiple companies, and one thriving Colorado studio later — Haven is the distilled version of everything that actually works."
        image={px(img.openStructure, 2000)}
        imageAlt="Open-air wooden structure surrounded by lush landscape — the craft behind Haven Outdoor Living Minneapolis"
      />

      {/* Story */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow mb-6">Our story</p>
                <p className="font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.15] font-medium tracking-tight">
                  “I didn&apos;t want to build the biggest landscape company in
                  Minnesota. I wanted to build the one I&apos;d hire{" "}
                  <em className="text-ember">twice.</em>”
                </p>
                <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.26em] text-sage uppercase">
                  Founder, Haven Outdoor Living
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-7 text-lg leading-relaxed text-cream/65">
                <p>
                  Haven Outdoor Living exists because of a pattern our founder
                  watched repeat for fifteen years: homeowners don&apos;t regret
                  spending money on their outdoors — they regret the surprise
                  invoice, the vanished crew, and the phone that stops ringing
                  after the check clears.
                </p>
                <p>
                  After running maintenance routes, a full-service company, and
                  a design-build studio in Colorado — with more than 400
                  projects across two states — the formula turned out to be
                  almost boring in its simplicity. Price things plainly so
                  anyone can afford to understand them. Run one dedicated crew
                  so builds stay efficient. And treat support as a product, not
                  a favor.
                </p>
                <p>
                  Minneapolis got the distilled version. Haven designs, builds,
                  and cares for outdoor spaces across the Twin Cities with
                  line-item estimates, guaranteed start dates, photo updates
                  after every workday, and a warranty we honor like a handshake.
                </p>
                <p>
                  We&apos;re intentionally not the biggest outfit in the metro.
                  We&apos;re the one that knows your crew lead&apos;s name, your
                  dog&apos;s name, and which corner of your patio catches the
                  evening sun.
                </p>
              </div>
            </Reveal>

            {/* Timeline */}
            <div className="mt-20 border-t border-cream/10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className="grid gap-3 border-b border-cream/10 py-8 md:grid-cols-[120px_220px_1fr] md:gap-8">
<span className="font-display text-gradient-ember text-3xl font-semibold italic">
  {t.year}
</span>
                    <h3 className="font-display text-xl font-medium text-cream">
                      {t.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cream/55">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-cream/10 bg-pine/50">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="mb-16 max-w-3xl">
            <p className="eyebrow mb-6">What we run on</p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.04] font-medium tracking-tight">
              Four rules, kept since 2009.
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="h-full">
<div className="card-lift group flex h-full flex-col rounded-3xl border border-cream/10 bg-forest p-8 hover:border-honey/50">
  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-honey/40 text-honey transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-clay group-hover:to-honey group-hover:text-forest">
    <v.icon size={19} strokeWidth={1.8} />
  </span>
                  <h3 className="font-display mt-8 text-2xl font-medium">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/55">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image interlude */}
      <section className="relative">
        <ParallaxImg
          src={px(img.stoneChairs, 2000)}
          alt="Stone lounge chairs gathered around a fire pit with mountain views — craftsmanship by Haven Outdoor Living"
          className="h-[70vh] min-h-[480px] w-full"
          speed={9}
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal className="max-w-3xl text-center">
            <p className="font-display text-[clamp(1.7rem,3.8vw,3.2rem)] leading-[1.15] font-medium tracking-tight text-cream">
              “We build for the fiftieth winter,
              <em className="text-ember"> not the first photo.</em>”
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        kicker="Meet us at your property"
        title="Walk your yard with someone who's built 400 of them."
      />
    </>
  );
}
