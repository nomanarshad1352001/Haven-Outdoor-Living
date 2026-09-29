"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, Sparkles, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { Marquee } from "@/components/motion";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const ticker = [
  "Now booking Spring 2026 builds",
  "Line-item estimates — always",
  "3-year craftsmanship warranty",
  "Free on-site design consults",
  "24-hour callback promise",
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Sunset ticker */}
        <div
          className={`overflow-hidden bg-gradient-to-r from-clay via-honey to-ember bg-[length:200%_200%] transition-all duration-700 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <Marquee slow className="py-2 text-forest">
            {ticker.map((t) => (
              <span key={t} className="flex items-center">
                <span className="px-6 text-[0.62rem] font-extrabold tracking-[0.26em] uppercase">
                  {t}
                </span>
                <Sparkles size={11} className="shrink-0" />
              </span>
            ))}
          </Marquee>
        </div>

        {/* Bar */}
        <div
          className={`transition-all duration-700 ${
            scrolled
              ? "border-b border-cream/10 bg-forest/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
            <Link href="/" className="group flex items-baseline gap-3" aria-label="Haven Outdoor Living — home">
              <span className="font-display text-[1.7rem] leading-none font-medium tracking-tight text-cream transition-colors group-hover:text-ember">
                Haven
              </span>
              <span className="hidden text-[0.55rem] font-bold tracking-[0.32em] text-honey/80 uppercase sm:block">
                Outdoor Living · MPLS
              </span>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {links.map((l) => {
                const active = pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    data-active={active}
                    className={`u-line text-[0.72rem] font-bold tracking-[0.22em] uppercase transition-colors ${
                      active ? "text-ember" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={site.phoneHref}
                className="hidden items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] text-cream/75 transition-colors hover:text-ember md:flex"
              >
                <Phone size={13} strokeWidth={2.2} />
                {site.phone}
              </a>
              <span className="hidden lg:block">
                <Link href="/contact" className="btn-primary btn-primary-sm">
                  Get a quote
                  <ArrowUpRight size={14} />
                </Link>
              </span>
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-honey hover:text-ember lg:hidden"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between overflow-hidden bg-pine pt-28 pb-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-clay/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-leaf/15 blur-3xl"
          aria-hidden="true"
        />
        <nav className="relative flex flex-col gap-1 px-8" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...links].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ transitionDelay: open ? `${140 + i * 70}ms` : "0ms" }}
              className={`font-display border-b border-cream/8 py-4 text-4xl font-medium transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${pathname === l.href ? "text-gradient-ember italic" : "text-cream hover:text-ember"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div
          style={{ transitionDelay: open ? "600ms" : "0ms" }}
          className={`relative px-8 transition-all duration-700 ${open ? "opacity-100" : "opacity-0"}`}
        >
          <Link href="/contact" className="btn-primary mb-6 w-full sm:w-auto">
            Get a free design consult <ArrowUpRight size={15} />
          </Link>
          <p className="text-sm text-sage">
            {site.phone} · {site.email}
          </p>
          <p className="mt-1 text-xs tracking-[0.2em] text-cream/40 uppercase">
            Minneapolis–St. Paul · Since the first thaw
          </p>
        </div>
      </div>
    </>
  );
}
