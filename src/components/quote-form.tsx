"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/data";

const inputCls =
  "w-full rounded-xl border border-cream/15 bg-ivory px-5 py-4 text-sm text-forest placeholder:text-forest/40 outline-none transition-all duration-300 focus:border-clay focus:ring-2 focus:ring-clay/25";

const labelCls = "eyebrow-clay mb-2 block";

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000+", "Prefer to discuss"];
const timelines = ["As soon as possible", "This spring", "This summer", "This fall", "Next season", "Just dreaming"];

export default function QuoteForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong — please try again or call us.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network hiccup — please try again, or call us at (612) 555-0134.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-clay/30 bg-cream p-10 text-forest shadow-2xl md:p-14">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-clay to-honey text-forest shadow-lg">
          <CheckCircle2 size={28} />
        </span>
        <h2 className="font-display mt-8 text-4xl font-medium tracking-tight md:text-5xl">
          Request <em className="text-gradient-ember">received.</em>
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-forest/60">
          A real human — usually our founder — will call you within one business
          day to schedule your free walk-through. Talk soon.
        </p>
        <Link
          href="/projects"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border-2 border-forest/20 px-8 py-4 text-[0.72rem] font-extrabold tracking-[0.2em] text-forest uppercase transition-all duration-500 hover:border-clay hover:text-clay"
        >
          Browse the portfolio meanwhile
          <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-forest/10 bg-cream p-8 text-forest shadow-[0_40px_90px_-40px_rgba(10,23,16,0.5)] md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelCls}>Name *</label>
          <input id="name" name="name" required maxLength={140} placeholder="Jane Andersen" className={inputCls} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className={labelCls}>Email *</label>
          <input id="email" name="email" type="email" required maxLength={180} placeholder="jane@example.com" className={inputCls} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={40} placeholder="(612) 555-0100" className={inputCls} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="service" className={labelCls}>What are we building?</label>
          <select id="service" name="service" defaultValue={initialService} className={inputCls}>
            <option value="">Not sure yet / multiple</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="budget" className={labelCls}>Comfortable budget</label>
          <select id="budget" name="budget" className={inputCls}>
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="timeline" className={labelCls}>Timeline</label>
          <select id="timeline" name="timeline" className={inputCls}>
            <option value="">Select a season</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>Tell us about the space</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={4000}
            placeholder="Corner lot in Edina, south-facing backyard. Thinking patio + fire pit, maybe a pergola down the line…"
            className={`${inputCls} resize-none`}
          />
        </div>
      </div>

      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
<p className="mt-5 rounded-lg border border-red-400/40 bg-red-400/10 px-5 py-3 text-sm font-semibold text-[#ffb4ab]">
  {errorMsg}
</p>
      )}

      <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed font-semibold tracking-wide text-forest/45 uppercase">
          Free consult · Line-item estimate · Zero pressure
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary group disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              Sending <Loader2 size={15} className="animate-spin" />
            </>
          ) : (
            <>
              Request my consult
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
