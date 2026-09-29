"use client";

import type { ReactNode } from "react";
import { MaskLines, ParallaxImg, Reveal } from "@/components/motion";

export default function PageHero({
  eyebrow,
  lines,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  lines: ReactNode[];
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  const head = (
    <>
      <div className="mb-7 flex items-center gap-4">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-clay to-ember" />
        <span className="h-px w-12 bg-honey/60" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h1 className="font-display max-w-5xl text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] font-medium tracking-[-0.02em]">
        <MaskLines lines={lines} />
      </h1>
      {description && (
        <Reveal delay={0.35}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </>
  );

  if (image) {
    return (
      <section className="relative flex min-h-[600px] items-end overflow-hidden md:h-[82vh]">
        <ParallaxImg src={image} alt={imageAlt ?? ""} eager className="absolute inset-0" speed={7} />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/20" />
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-clay/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-48 pb-16 md:px-10 md:pb-24">
          {head}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-cream/10">
      <div
        className="pointer-events-none absolute -top-24 right-[10%] h-80 w-80 rounded-full bg-leaf/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-clay/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1600px] px-6 pt-44 pb-16 md:px-10 md:pb-24">
        {head}
      </div>
    </section>
  );
}
