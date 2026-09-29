"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/* Reveal — fade / rise on scroll                                      */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 56,
  x = 0,
  duration = 1.2,
  start = "top 86%",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, x, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, y, x, duration, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MaskLines — line-by-line masked headline reveal                     */
/* ------------------------------------------------------------------ */

export function MaskLines({
  lines,
  className,
  lineClassName = "",
  delay = 0,
  stagger = 0.1,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mask-inner",
        { yPercent: 118, rotate: 2.5 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.35,
          delay,
          stagger,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
<span className={`mask-inner block will-change-transform ${lineClassName}`}>
  {line}
</span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ParallaxImg — scroll-scrubbed vertical parallax for imagery         */
/* ------------------------------------------------------------------ */

export function ParallaxImg({
  src,
  alt,
  className = "",
  speed = 9,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  eager?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const im = image.current;
    if (!w || !im) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        im,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: w,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <img
        ref={image}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 h-[124%] w-full -top-[12%] object-cover will-change-transform"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — animated numeric count-up                                 */
/* ------------------------------------------------------------------ */

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: to,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${obj.v.toFixed(decimals)}${suffix}`;
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [to, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite headline ribbon (pure CSS animation)             */
/* ------------------------------------------------------------------ */

export function Marquee({
  children,
  className = "",
  slow = false,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`animate-marquee ${slow ? "marquee-slow" : ""} ${reverse ? "marquee-reverse" : ""} flex w-max items-center`}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Horizontal — pinned horizontal-scroll reel (desktop)                */
/* ------------------------------------------------------------------ */

export function Horizontal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const section = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const sec = section.current;
      const r = rail.current;
      if (!sec || !r) return;
      const distance = () => Math.max(0, r.scrollWidth - window.innerWidth);
      const tween = gsap.to(r, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={section} className={`relative overflow-hidden max-md:overflow-x-auto ${className}`}>
      <div ref={rail} className="flex w-max items-stretch will-change-transform">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-x-10 bottom-8 hidden h-px bg-cream/15 md:block">
        <div
          ref={bar}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-clay via-honey to-ember"
        />
      </div>
    </div>
  );
}
