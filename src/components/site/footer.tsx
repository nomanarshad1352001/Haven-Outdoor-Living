import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/data";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-pine">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-clay/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/5 -bottom-32 h-80 w-80 rounded-full bg-honey/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-6 pt-24 pb-14 md:px-10 md:pt-32">
        <p className="eyebrow mb-6">Free design consult · No pressure, ever</p>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display max-w-4xl text-[clamp(2.8rem,7vw,6rem)] leading-[1.0] font-medium tracking-tight">
            Let&apos;s build your{" "}
            <em className="text-gradient-ember">haven</em>.
          </h2>
          <Link href="/contact" className="btn-primary group w-fit shrink-0">
            Start the conversation
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] border-t border-cream/10 px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display mb-4 text-2xl font-medium text-cream">Haven</p>
            <p className="max-w-xs text-sm leading-relaxed text-cream/55">
              An outdoor living studio in Minneapolis — designing, building, and
              caring for the outdoors you&apos;ll actually live in.
            </p>
            <p className="mt-5 text-[0.65rem] tracking-[0.28em] text-honey/70 uppercase">
              {site.founded}
            </p>
          </div>

          <div>
            <p className="eyebrow-sage mb-5">Explore</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="u-line text-sm text-cream/70 transition-colors hover:text-ember">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-sage mb-5">Services</p>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="u-line text-sm text-cream/70 transition-colors hover:text-ember">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="u-line text-sm font-bold text-honey">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-sage mb-5">Find us</p>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-honey" />
                <span>
                  {site.address}
                  <br />
                  <span className="text-cream/45">
                    Serving {site.areasServed.slice(0, 6).join(", ")} &amp; the greater metro
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-honey" />
                <a href={site.phoneHref} className="transition-colors hover:text-ember">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-honey" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ember">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="shrink-0 text-honey" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative border-t border-cream/10 px-2" aria-hidden="true">
        <p className="font-display text-stroke-brass mx-auto -mb-4 max-w-[1600px] text-center text-[clamp(5rem,17vw,17rem)] leading-[0.85] font-semibold tracking-tight select-none md:-mb-8">
          HAVEN
        </p>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-3 px-6 py-6 text-[0.68rem] tracking-[0.18em] text-cream/40 uppercase md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} {site.legalName} · Minneapolis, Minnesota</p>
          <p className="flex items-center gap-2">
            Crafted in the North <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-clay to-ember" /> Licensed &amp; insured
          </p>
        </div>
      </div>
    </footer>
  );
}
