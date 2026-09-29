import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-clay/15 blur-3xl"
        aria-hidden="true"
      />
      <p className="eyebrow relative mb-8">Lost in the landscape</p>
      <h1 className="font-display text-gradient-ember relative text-[clamp(6rem,18vw,13rem)] leading-none font-semibold">
        404
      </h1>
      <p className="font-display relative mt-6 text-2xl font-medium text-cream md:text-3xl">
        This trail doesn&apos;t lead anywhere — yet.
      </p>
      <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/50">
        The page you&apos;re after was moved, renamed, or never planted. Let&apos;s
        get you back to well-kept ground.
      </p>
      <Link href="/" className="btn-primary group relative mt-10">
        <ArrowLeft size={15} className="transition-transform duration-500 group-hover:-translate-x-1" />
        Back to Haven
      </Link>
    </section>
  );
}
