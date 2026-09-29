import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

/* ------------------------------------------------------------------ */
/* DEMO MODE — zero database required.                                 */
/*                                                                     */
/* Quote requests are validated and stored in an in-memory array so    */
/* the site runs with plain `npm install && npm run dev`.              */
/*                                                                     */
/* GOING LIVE: swap `saveLead` for a real database insert. A ready-to- */
/* use Drizzle/PostgreSQL example lives in PROJECT.md.                 */
/* ------------------------------------------------------------------ */

export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  budget: string | null;
  timeline: string | null;
  message: string | null;
  source: string;
  responded: boolean;
  createdAt: string;
};

/** Pre-seeded demo inbox so the experience feels real out of the box. */
const leads: Lead[] = [
  {
    id: 3,
    name: "Sarah M.",
    email: "sarah.m@example.com",
    phone: "(612) 555-0182",
    service: "patios-hardscapes",
    budget: "$15,000 – $40,000",
    timeline: "This spring",
    message: "South-facing backyard in Edina — bluestone patio with a gas fire pit.",
    source: "website",
    responded: true,
    createdAt: "2026-01-28T14:32:00.000Z",
  },
  {
    id: 2,
    name: "Derek W.",
    email: "derek.w@example.com",
    phone: null,
    service: "pergolas-shade-structures",
    budget: "$40,000+",
    timeline: "This summer",
    message: "Cedar pergola over existing deck, wired for fan and heaters.",
    source: "website",
    responded: false,
    createdAt: "2026-02-02T09:15:00.000Z",
  },
  {
    id: 1,
    name: "Priya K.",
    email: "priya.k@example.com",
    phone: "(612) 555-0107",
    service: "lawn-seasonal-care",
    budget: "Under $5,000",
    timeline: "As soon as possible",
    message: "Weekly mowing + spring wake-up for a Linden Hills corner lot.",
    source: "website",
    responded: false,
    createdAt: "2026-02-05T17:48:00.000Z",
  },
];

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

function saveLead(lead: Omit<Lead, "id" | "responded" | "createdAt">) {
  const record: Lead = {
    ...lead,
    id: leads.length ? Math.max(...leads.map((l) => l.id)) + 1 : 1,
    responded: false,
    createdAt: new Date().toISOString(),
  };
  leads.unshift(record);
  // Visible in the server console during development
  console.log(`[demo-leads] new quote request #${record.id} from ${record.name} <${record.email}>`);
  return record;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // honeypot — bots get a fake success
    if (str(body.company, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = str(body.name, 140);
    const email = str(body.email, 180);

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "Please add your name." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "That email doesn't look right — mind checking it?" },
        { status: 400 }
      );
    }

    const record = saveLead({
      name,
      email,
      phone: str(body.phone, 40) || null,
      service: str(body.service, 140) || null,
      budget: str(body.budget, 80) || null,
      timeline: str(body.timeline, 80) || null,
      message: str(body.message, 4000) || null,
      source: "website",
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("[/api/quote] failed:", err);
    return NextResponse.json(
      { ok: false, error: "Our form hiccuped — please call (612) 555-0134 and we'll help you right away." },
      { status: 500 }
    );
  }
}

/** Demo inbox — handy while developing: GET /api/quote */
export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: "demo (in-memory)",
    count: leads.length,
    leads,
  });
}
