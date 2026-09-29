"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import type { Project } from "@/lib/data";

const categories = ["All", "Fire", "Structure", "Garden", "Hardscape"] as const;

export default function ProjectsGallery({ items }: { items: Project[] }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((p) => p.category === filter)),
    [filter, items]
  );

  return (
    <div>
      {/* Filters */}
      <div className="mb-14 flex flex-wrap items-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-6 py-2.5 text-[0.68rem] font-extrabold tracking-[0.2em] uppercase transition-all duration-500 ${
              filter === c
                ? "border border-transparent bg-gradient-to-r from-clay via-honey to-ember text-forest shadow-[0_10px_30px_-10px_rgba(223,165,78,0.6)]"
                : "border border-cream/15 text-cream/60 hover:border-honey/60 hover:text-ember"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto hidden text-[0.65rem] tracking-[0.22em] text-cream/35 uppercase md:block">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-x-6 gap-y-16 md:grid-cols-2" key={filter}>
        {visible.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} y={40}>
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent opacity-70" />
<span className="absolute top-5 left-5 rounded-full bg-gradient-to-r from-clay to-honey px-4 py-1.5 text-[0.6rem] font-extrabold tracking-[0.24em] text-forest uppercase shadow-lg">
  {p.category}
</span>
                <span className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-ember md:text-3xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-cream/50">{p.scope}</p>
                </div>
                <p className="shrink-0 text-right text-[0.62rem] font-semibold tracking-[0.24em] text-sage uppercase">
                  {p.location}
                  <br />
                  {p.year}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
