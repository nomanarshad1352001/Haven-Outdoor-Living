"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { MaskLines, Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export default function CtaBand({
  kicker = "Now booking Spring 2026 builds",
  title = "Minnesota's summer is short. Yours shouldn't be.",
}: {
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* sunset gradient field */}
      <div
        className="animate-gradient-x absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, #a34d28 0%, #c76a3f 30%, #dfa54e 60%, #f2c078 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 80% 20%, rgba(255,217,160,0.5) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="mb-6 text-[0.7rem] font-extrabold tracking-[0.34em] text-forest/70 uppercase">
            {kicker}
          </p>
        </Reveal>
        <h2 className="font-display max-w-5xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] font-medium tracking-tight text-forest">
          <MaskLines lines={[title]} stagger={0} />
        </h2>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-9 py-4.5 text-[0.72rem] font-extrabold tracking-[0.2em] text-cream uppercase shadow-[0_20px_50px_-15px_rgba(10,23,16,0.6)] transition-transform duration-500 hover:scale-[1.05] active:scale-95"
            >
              Claim your free consult
              <ArrowRight size={15} className="text-ember transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border-2 border-forest/25 px-8 py-4 text-[0.72rem] font-extrabold tracking-[0.2em] text-forest uppercase transition-all duration-500 hover:border-forest hover:bg-forest hover:text-cream"
            >
              <Phone size={14} />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
