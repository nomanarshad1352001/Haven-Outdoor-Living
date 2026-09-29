import type { Metadata } from "next";
import { CalendarCheck, Camera, Receipt, ShieldCheck, Sparkles, Timer } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta-band";
import { ParallaxImg, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/site/seo";
import { site, px, img } from "@/lib/site";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Process — Affordable, Efficient, Supported Builds",
  description:
    "From a free walk-through to a 3-year warranty: how Haven Outdoor Living delivers affordable, efficient outdoor projects with photo updates, guaranteed start dates, and support that lasts.",
  alternates: { canonical: "/process" },
};

const guarantees = [
  {
    icon: Receipt,
    title: "Line-item pricing",
    body: "Materials, labor, and options priced separately. Trim or upgrade any line — the math is always yours to see.",
  },
  {
    icon: CalendarCheck,
    title: "Guaranteed start date",
    body: "Your start date is written into the proposal. If we miss it, we credit you for every lost week.",
  },
  {
    icon: Camera,
    title: "End-of-day photo updates",
    body: "Progress photos land in your inbox after every workday. You'll never wonder what happened today.",
  },
  {
    icon: ShieldCheck,
    title: "3-year warranty",
    body: "Craftsmanship guaranteed for three years; hardscapes for five against heaving. Honored without debate.",
  },
];

const cadence = [
  { icon: Timer, label: "24-hour callback promise — always" },
  { icon: Camera, label: "Daily build photos to your inbox" },
  { icon: Sparkles, label: "Broom-clean site every evening" },
];

export default function ProcessPage() {
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a Haven Outdoor Living project works",
    description: "The four-phase process Haven uses for every outdoor living build in Minneapolis.",
    step: processSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  return (
    <>
      <JsonLd data={howToLd} />
      <PageHero
        eyebrow="The Haven method"
        lines={[
          "A process built for",
          <>
            <em className="text-ember">Minnesota realities.</em>
          </>,
        ]}
        description="Short seasons and long winters punish sloppy process. Ours was forged over fifteen years, two states, and 400+ projects — here's exactly how your build will go."
      />

      {/* Phases */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        {processSteps.map((s, i) => (
          <Reveal key={s.n}>
            <div className="grid gap-8 border-b border-cream/10 py-16 last:border-b-0 md:py-20 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
<span className="font-display text-gradient-ember text-[clamp(4rem,8vw,7rem)] leading-none font-semibold">
  {s.n}
</span>
                  <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.28em] text-sage uppercase">
                    {s.weeks}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-medium tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/60">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Guarantees — cream inversion */}
      <section className="bg-cream text-forest">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="mb-16 max-w-3xl">
            <p className="eyebrow-clay mb-6">In writing, not in vibes</p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.04] font-medium tracking-tight">
              The Haven guarantees.
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08} className="h-full">
                <div className="card-lift group flex h-full flex-col rounded-3xl border border-forest/10 bg-ivory p-8 shadow-[0_20px_60px_-30px_rgba(10,23,16,0.25)] hover:border-clay/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/30 text-clay transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-clay group-hover:to-honey group-hover:text-forest">
                    <g.icon size={19} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display mt-8 text-2xl font-medium">{g.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-forest/60">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communication pledge */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6">While we build</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-medium tracking-tight">
                You&apos;ll always know what&apos;s happening in your own backyard.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/60">
                Most contractor horror stories are communication failures, not
                construction failures. Our crews run a simple, relentless
                cadence:
              </p>
              <ul className="mt-10 space-y-4">
                {cadence.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center gap-4 rounded-xl border border-cream/10 bg-pine/60 px-6 py-4"
                  >
                    <c.icon size={17} className="shrink-0 text-brass" />
                    <span className="text-sm font-semibold text-cream/80">{c.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <ParallaxImg
                src={px(img.deckDining, 1600)}
                alt="Finished wooden deck with dining set surrounded by greenery — a clean, completed Haven build in Minneapolis"
                className="aspect-[4/3] w-full rounded-2xl"
                speed={7}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Step one is free"
        title="Book the walk-through. Get the number."
      />
    </>
  );
}
