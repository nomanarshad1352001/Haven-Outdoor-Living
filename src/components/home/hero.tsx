"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { MaskLines } from "@/components/motion";

/** Cozy outdoor patio with garden view — Pexels, streamed progressively. */
const VIDEO_PRIMARY =
  "https://videos.pexels.com/video-files/39567097/16863050_3840_2160_30fps.mp4";
/** Backup: terrace of a modern house — used automatically if the first fails. */
const VIDEO_BACKUP =
  "https://videos.pexels.com/video-files/10614142/10614142-hd_3840_2160_30fps.mp4";
const POSTER =
  "https://images.pexels.com/videos/39567097/pexels-photo-39567097.jpeg?auto=compress&cs=tinysrgb&w=1920";

/** Layered daylight-ridge underlay — instant paint + last-resort fallback. */
function FallbackScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_72%_0%,#fbeed2_0%,#f5efdf_38%,#f7f3ea_64%)]" />
      <div className="animate-glow absolute top-[13%] right-[14%] h-36 w-36 rounded-full bg-[#f5c45c]/70 md:h-56 md:w-56" />
      <div className="absolute top-[7%] right-[8%] h-72 w-72 rounded-full bg-honey/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="animate-drift-left absolute bottom-[16%] -left-[4%] h-[38%] w-[108%]">
        <path fill="#c8cd9e" d="M0,190 C160,130 300,220 470,180 C640,140 780,215 950,175 C1120,135 1280,205 1440,165 L1440,320 L0,320 Z" />
      </svg>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="animate-drift-right absolute bottom-[8%] -left-[3%] h-[34%] w-[106%]">
        <path fill="#a0b275" d="M0,210 C200,150 340,240 520,200 C700,160 860,235 1030,195 C1200,155 1330,215 1440,185 L1440,320 L0,320 Z" />
      </svg>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-[26%] w-full">
        <path fill="#7d9759" d="M0,230 C240,180 420,255 640,220 C860,185 1040,250 1440,205 L1440,320 L0,320 Z" />
      </svg>
    </div>
  );
}

const stats = [
  { k: "15+", l: "Years of craft" },
  { k: "400+", l: "Projects, two states" },
  { k: "3-yr", l: "Craft warranty" },
  { k: "24 hr", l: "Callback promise" },
];

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Some browsers block autoplay until interaction — force play safely.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    document.addEventListener("pointerdown", tryPlay, { once: true });
    return () => document.removeEventListener("pointerdown", tryPlay);
  }, [reduced, failed]);

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="Haven Outdoor Living — Minneapolis outdoor living studio"
    >
      {/* Backdrop — live outdoor-living footage over a paper ridge underlay */}
      <div className="absolute inset-0 bg-forest">
        <FallbackScene />

        {reduced ? (
          <img
            src={POSTER}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          !failed && (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
                ready ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={POSTER}
              onCanPlay={() => setReady(true)}
              onError={() => setFailed(true)}
              disablePictureInPicture
              tabIndex={-1}
              aria-hidden="true"
            >
              <source src={VIDEO_PRIMARY} type="video/mp4" />
              <source src={VIDEO_BACKUP} type="video/mp4" />
            </video>
          )
        )}

        {/* Cinematic scrims — guarantee the text zone stays paper-legible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-forest/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest/75 via-forest/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pt-44 pb-14 md:px-10 md:pb-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-honey opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-clay to-ember" />
          </span>
          <p className="eyebrow">Outdoor living studio · Minneapolis, MN</p>
        </div>

        <h1 className="font-display max-w-6xl text-[clamp(3.4rem,9.5vw,9rem)] leading-[0.94] font-medium tracking-[-0.02em]">
          <MaskLines
            lines={[
              "Where backyards",
              <>
                become{" "}
                <em className="text-gradient-ember">destinations.</em>
              </>,
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            Haven designs, builds, and cares for patios, gardens, and four-season
            outdoor rooms across the Twin Cities — with honest pricing, efficient
            crews, and support that outlasts the build.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Start your project
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </div>

      {/* Glass stats strip */}
      <div className="relative z-10 border-t border-cream/10 bg-forest/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-y-5 px-6 py-6 md:flex-nowrap md:px-10">
          <div className="mr-8 flex items-center gap-4 border-r border-cream/15 pr-8">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-honey text-honey" />
              ))}
            </div>
            <p className="text-xs leading-tight text-cream/75">
              <span className="font-bold text-cream">4.9/5</span> from Twin Cities
              <br className="hidden md:block" /> homeowners
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-y-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="flex items-baseline gap-2.5">
                <span className="font-display text-gradient-ember text-2xl font-semibold md:text-3xl">{s.k}</span>
                <span className="text-[0.6rem] font-bold tracking-[0.2em] text-cream/55 uppercase">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute right-10 bottom-44 z-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] tracking-[0.3em] text-cream/55 uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
        <span className="h-14 w-px overflow-hidden bg-cream/20">
          <span className="animate-scroll-cue block h-full w-full bg-gradient-to-b from-clay to-ember" />
        </span>
      </div>
    </section>
  );
}
