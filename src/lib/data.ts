import { px, img } from "./site";

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  long: string[];
  features: string[];
  fromPrice: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "landscape-design-build",
    title: "Landscape Design & Build",
    short:
      "Full-site design and installation — grading, planting, stonework, and lighting unified under one accountable crew.",
    description:
      "One designer, one crew, one calendar. We take your property from first sketch to final walkthrough without handing you between contractors.",
    long: [
      "Every Haven project starts with a measured site walk and an honest conversation about budget. We design in phases when it helps — master plan first, build in stages that respect your cash flow — so a great yard never depends on writing one giant check.",
      "Because our crews both design and build, the plan on paper is the plan in the ground. No translation loss between a design studio and a subcontracted install team, no surprise change orders mid-build.",
    ],
    features: [
      "On-site measurement & concept sketches within one week",
      "Master plans with phased, line-item budgets",
      "Grading, drainage & soils engineered for Minnesota freeze/thaw",
      "Planting plans built around Zone 4 hardiness",
      "3D visualizations before we break ground",
      "Single point of contact from sketch to walkthrough",
    ],
    fromPrice: "from $6,500",
    image: px(img.hedgePath, 1600),
    alt: "Symmetrical stone pathway flanked by sculpted hedges leading to a modern home — landscape design by Haven Outdoor Living Minneapolis",
  },
  {
    slug: "patios-hardscapes",
    title: "Patios & Hardscapes",
    short:
      "Paver patios, natural stone terraces, retaining walls, and walkways engineered for decades of Minnesota winters.",
    description:
      "The room your house is missing. Base work is where patios live or die — ours are compacted, geotextile-wrapped, and guaranteed against heaving.",
    long: [
      "A patio in Minneapolis is not a patio in Phoenix. Frost heave ruins more hardscapes in Hennepin County than every other cause combined — which is why we excavate deeper, compact in lifts, and spec base material for our climate, not the brochure.",
      "Choose concrete pavers, clay brick, or natural flagstone. We bring real samples to your door so the decision happens in your light, not a showroom's.",
    ],
    features: [
      "12–18\" engineered bases built for freeze/thaw cycles",
      "Concrete pavers, clay brick & natural flagstone",
      "Retaining & seat walls with integrated drainage",
      "Walkways, landings, steps & driveway aprons",
      "Polymeric jointing — weeds out, structure in",
      "5-year anti-heave workmanship warranty",
    ],
    fromPrice: "from $4,800",
    image: px(img.stonePatioNy, 1600),
    alt: "Tranquil natural stone patio surrounded by lush plantings — hardscape installation by Haven Outdoor Living, Minneapolis MN",
  },
  {
    slug: "fire-features-outdoor-kitchens",
    title: "Fire Features & Outdoor Kitchens",
    short:
      "Fire pits, fireplaces, grills, and full outdoor kitchens that stretch Minnesota's season from April to November.",
    description:
      "Fire is the fastest way to double your outdoor season. Gas, wood, or hybrid — paired with kitchens built for real cooking, not just display.",
    long: [
      "A fire feature turns a patio into a destination. We design gathering circles around real sightlines and prevailing winds, then hard-plumb gas lines with licensed fitters so there's never a propane tank in the shot.",
      "Outdoor kitchens get the same discipline: stainless or masonry appliances rated for freeze/thaw, counter heights that respect real cooks, and winterization you can do in ten minutes.",
    ],
    features: [
      "Wood & gas fire pits, masonry fireplaces, fire tables",
      "Rough-in gas lines by licensed fitters, permitted & inspected",
      "Grill stations, pizza ovens & full linear kitchens",
      "Freeze-rated appliances and countertops",
      "Seat-wall integration and wood storage built in",
      "10-minute winterization design as standard",
    ],
    fromPrice: "from $3,900",
    image: px(img.firepitSunset, 1600),
    alt: "Backyard fire pit glowing at sunset with Adirondack chairs — fire feature design by Haven Outdoor Living Minneapolis",
  },
  {
    slug: "pergolas-shade-structures",
    title: "Pergolas & Shade Structures",
    short:
      "Cedar pergolas, pavilions, and covered decks that add a ceiling to the outdoors — wired, lit, and fan-ready.",
    description:
      "A pergola turns a patio into architecture. Ours are engineered for snow load, wired for fans and heaters, and stained to outlast the decade.",
    long: [
      "We build in Western red cedar, rough-sawn fir, or powder-coated aluminum — sized by engineers for Minnesota snow loads, anchored to proper footings, not deck screws and prayers.",
      "Every structure leaves our shop pre-wired: ceiling fans, infrared heaters, dimmable lighting, and ceiling-mounted speakers. The goal is an outdoor room you use at 8pm in October, not a decoration.",
    ],
    features: [
      "Cedar, fir & powder-coated aluminum construction",
      "Engineered footings sized for MN snow loads",
      "Pre-wired for fans, heaters, lighting & audio",
      "Integrated screens, louvers & privacy walls",
      "Custom stain matching your home's trim",
      "Permits, HOA packets & inspections handled for you",
    ],
    fromPrice: "from $7,200",
    image: px(img.pergolaDining, 1600),
    alt: "Elegant wooden pergola over an outdoor dining area — custom shade structure by Haven Outdoor Living, Twin Cities",
  },
  {
    slug: "planting-garden-design",
    title: "Planting & Garden Design",
    short:
      "Four-season planting plans with native structure, pollinator value, and color from April thaw to October frost.",
    description:
      "Gardens that look designed in every month — structure shrubs for winter, natives for summer, and a color calendar tuned to Zone 4b.",
    long: [
      "Most planting plans are written for the nursery parking lot in June. Ours are written for your kitchen window in January: strong evergreen structure, ornamental grasses that hold snow beautifully, and succession blooms from April through October.",
      "We source from Minnesota growers, guarantee every plant for one full year, and leave you with a simple seasonal care card — what's cut back, when, and how far down.",
    ],
    features: [
      "Zone 4b plant palettes from Minnesota growers",
      "Four-season structure — winter interest by design",
      "Pollinator & native specialty gardens",
      "Seasonal color rotations for entries and pots",
      "1-year plant guarantee, honored without debate",
      "Care cards + optional seasonal gardener visits",
    ],
    fromPrice: "from $2,400",
    image: px(img.purpleGarden, 1600),
    alt: "Garden pathway lined with blooming purple salvia — planting design by Haven Outdoor Living Minneapolis",
  },
  {
    slug: "outdoor-lighting",
    title: "Outdoor Lighting",
    short:
      "Low-voltage landscape lighting that makes your home safer, warmer, and twice as beautiful after dark.",
    description:
      "Lighting is where craftsmanship shows. We light trees, paths, and architecture — never the neighbor's bedroom.",
    long: [
      "A good lighting plan is invisible by day and cinematic by night. We use shielded, warm-temperature fixtures on dedicated zones: paths at ankle height, moonlighting through tree canopies, gentle wall washes on stone and cedar.",
      "Every system is tunable from your phone — scenes for dinner, for holidays, for 2am security — and every fixture carries a lifetime warranty from the manufacturer plus our own three-year labor guarantee.",
    ],
    features: [
      "Warm 2700K LED systems, fully dimmable",
      "Zoned control from your phone or keypad",
      "Path, canopy, wall-wash & water-feature lighting",
      "Shielded optics — zero glare, dark-sky friendly",
      "Lifetime fixture warranty + 3-year labor",
      "Retrofits of failing big-box systems",
    ],
    fromPrice: "from $2,900",
    image: px(img.patioTwilight, 1600),
    alt: "Patio furniture and fire pit glowing under evening landscape lighting — outdoor lighting by Haven Outdoor Living Minneapolis",
  },
  {
    slug: "lawn-seasonal-care",
    title: "Lawn & Seasonal Care",
    short:
      "Weekly mowing, spring wake-ups, fall cleanups, and bed care on a fixed schedule — with the same crew, every visit.",
    description:
      "Consistency is the whole product: same crew, same day each week, photo confirmation after every visit, and a real person who answers the phone.",
    long: [
      "Maintenance is where most landscape companies fall apart — rotating crews, missed weeks, shrugged shoulders. Haven runs the opposite model: small dedicated routes, a named crew lead for your property, and a photo in your inbox after every single visit.",
      "Spring wake-up, weekly mow-and-detail, monthly bed care, fall cleanup, and winterization bundle into one predictable monthly price. Pause, scale, or cancel with a text — no contracts holding you hostage.",
    ],
    features: [
      "Same dedicated crew & crew lead on every visit",
      "Photo confirmation after each service",
      "Spring wake-up & fall cleanup programs",
      "Bed care, mulch refreshes & shrub pruning",
      "One predictable monthly price, no contracts",
      "24-hour callback promise, always",
    ],
    fromPrice: "from $48/visit",
    image: px(img.gardenSwing, 1600),
    alt: "Immaculate garden with lawn and swing under blue sky — lawn and seasonal care by Haven Outdoor Living, Minneapolis",
  },
  {
    slug: "snow-winter-services",
    title: "Snow & Winter Services",
    short:
      "Residential snow clearing, ice management, and winterization that protect your landscape investment all season.",
    description:
      "We clear like we built it — because often we did. Plows with down-pressure control and polymer edges that don't scar your pavers.",
    long: [
      "Snow season destroys more landscapes than it decorates. Our crews know where your lighting fixtures sit, where the bluestone edges are, and which plantings can't take salt — because the same company that built your yard protects it.",
      "Seasonal contracts include driveway and walk clearing at 2-inch triggers, eco-friendly de-icer on your stone, and roof-line monitoring for ice dams near your plantings. Winterization visits protect outdoor kitchens, water lines, and lighting before the first hard freeze.",
    ],
    features: [
      "2\" trigger plowing, driveways + walkways",
      "Paver-safe blades & eco de-icers as standard",
      "Outdoor kitchen & water line winterization",
      "Lighting system checks before deep cold",
      "Seasonal contracts with priority routing",
      "Same company that built it protects it",
    ],
    fromPrice: "from $420/seasonal",
    image: px(30731294, 1600),
    alt: "Snow-covered suburban home in winter — snow and ice management by Haven Outdoor Living Minneapolis MN",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  name: string;
  location: string;
  category: "Fire" | "Structure" | "Garden" | "Hardscape";
  year: string;
  scope: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    name: "Lake Minnetonka Terrace",
    location: "Wayzata",
    category: "Hardscape",
    year: "2025",
    scope: "Bluestone terrace, seat walls, lighting",
    image: px(img.houseDusk, 1400),
    alt: "Modern Minneapolis home glowing at dusk over a new stone terrace — Lake Minnetonka Terrace project by Haven Outdoor Living",
  },
  {
    name: "Edina Fireside Court",
    location: "Edina",
    category: "Fire",
    year: "2025",
    scope: "Gas fire pit, boulder seating, native plantings",
    image: px(img.stoneChairs, 1400),
    alt: "Stone lounge chairs gathered around a modern backyard fire pit in Edina MN — project by Haven Outdoor Living",
  },
  {
    name: "Linden Hills Garden Rooms",
    location: "Minneapolis",
    category: "Garden",
    year: "2024",
    scope: "Formal hedging, gravel paths, four-season beds",
    image: px(img.topiaryPath, 1400),
    alt: "Lush garden path lined with sculpted topiary in Linden Hills Minneapolis — garden design by Haven Outdoor Living",
  },
  {
    name: "North Oaks Woodland Walk",
    location: "North Oaks",
    category: "Hardscape",
    year: "2024",
    scope: "Stepping-stone walk, moss joints, shade planting",
    image: px(img.stoneSteps, 1400),
    alt: "Natural stone steps through green lawn in North Oaks Minnesota — walkway by Haven Outdoor Living",
  },
  {
    name: "Stillwater Pergola House",
    location: "Stillwater",
    category: "Structure",
    year: "2024",
    scope: "Cedar pergola, outdoor dining, string lighting",
    image: px(img.pergolaRustic, 1400),
    alt: "Rustic cedar pergola over outdoor dining with garden views in Stillwater MN — structure by Haven Outdoor Living",
  },
  {
    name: "Chanhassen Poolside",
    location: "Chanhassen",
    category: "Garden",
    year: "2023",
    scope: "Pool surround planting, ornamental grasses, lighting",
    image: px(img.luxePool, 1400),
    alt: "Luxurious pool patio framed by lush planting in Chanhassen Minnesota — planting design by Haven Outdoor Living",
  },
  {
    name: "Summit Avenue Terrace",
    location: "St. Paul",
    category: "Structure",
    year: "2023",
    scope: "Rooftop fireplace, containers, privacy screens",
    image: px(img.terraceCity, 1400),
    alt: "Terrace lounge with fireplace overlooking the city in St. Paul — outdoor room by Haven Outdoor Living",
  },
  {
    name: "Plymouth Cookhouse",
    location: "Plymouth",
    category: "Fire",
    year: "2025",
    scope: "Outdoor kitchen, string lighting, paver patio",
    image: px(img.bbqLights, 1400),
    alt: "Evening barbecue under string lights on a paver patio in Plymouth MN — outdoor kitchen by Haven Outdoor Living",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    n: "01",
    title: "Walk & Listen",
    weeks: "Week 1",
    body: "We walk your property together, measure everything, and talk honestly about budget. You get concept sketches and a phased, line-item estimate — not a lump sum you're meant to trust blindly.",
  },
  {
    n: "02",
    title: "Design & Price",
    weeks: "Weeks 2–3",
    body: "Scaled plans, material samples brought to your door, and 3D views for larger builds. Every line priced individually so you can trim, phase, or upgrade with full visibility.",
  },
  {
    n: "03",
    title: "Build & Update",
    weeks: "Weeks 3–8",
    body: "One dedicated crew, a guaranteed start date, and photo updates at the end of every workday. When we leave each evening, the site is broom-clean — your neighbors will mention it.",
  },
  {
    n: "04",
    title: "Care & Return",
    weeks: "Ongoing",
    body: "A 3-year craftsmanship warranty, seasonal check-ins, and a 24-hour callback promise. Most Haven clients never call another landscape company again — that's the entire business model.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "Haven built our stone patio in nineteen days — on budget to the dollar. Then they came back in the spring just to check on it.",
    name: "Sarah & Tom M.",
    place: "Edina",
    project: "Patio & fire pit",
  },
  {
    quote:
      "Three companies quoted us. Haven was the only one that itemized everything — we could actually see where our money went.",
    name: "Derek W.",
    place: "Wayzata",
    project: "Full backyard design",
  },
  {
    quote:
      "Same crew every Thursday, photo after every mow, and they answer the phone. It sounds basic until you've dealt with the alternatives.",
    name: "Priya K.",
    place: "Minneapolis",
    project: "Seasonal care plan",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ (services page + SEO schema)                                    */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "How much does a patio or full backyard project cost in Minneapolis?",
    a: "Most Haven patios land between $4,800 and $18,000 depending on size and material; full design-build backyards typically range from $15,000 to $60,000. Every estimate is line-itemed — materials, labor, and options priced separately — and we routinely design in phases so you can build the whole vision over two or three seasons.",
  },
  {
    q: "How long does a typical project take?",
    a: "Patios and fire features run 1–3 weeks on-site; full design-build projects run 3–8 weeks. You get a guaranteed start date in writing before you sign, and end-of-day photo updates throughout the build.",
  },
  {
    q: "Can a project be phased to fit my budget?",
    a: "Yes — phasing is core to how we work. We create a master plan first, then sequence it into stages (often: hardscape year one, structures and planting year two, lighting as a final layer). The plan is priced so no stage ever wastes work from a previous one.",
  },
  {
    q: "What happens after the build is finished?",
    a: "Every project carries a 3-year craftsmanship warranty (5 years against hardscape heaving). We follow up at 30 days and again the following spring, and our care plans keep the same crew visiting on a set schedule with photo confirmation after every service.",
  },
  {
    q: "Do you work through Minnesota winters?",
    a: "We design year-round and build whenever ground conditions allow. Winter is also when we winterize outdoor kitchens and lighting, and when our snow & ice service protects finished landscapes from plow damage and salt burn.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Haven Outdoor Living LLC is fully insured, pulls all required permits, and works with licensed plumbers and electricians for gas and line-voltage work. Certificates are available with every proposal.",
  },
];

/* ------------------------------------------------------------------ */
/* Pillars                                                             */
/* ------------------------------------------------------------------ */

export const pillars = [
  {
    key: "affordable",
    title: "Affordable by design",
    icon: "HandCoins",
    body: "Value-engineered materials, phased master plans, and estimates line-itemed to the dollar. Affordability isn't cheapness — it's never being surprised by a number.",
  },
  {
    key: "efficient",
    title: "Efficient by process",
    icon: "Gauge",
    body: "One dedicated crew, a guaranteed start date, and end-of-day photo updates. Most patios finish in under three weeks because the plan never changes mid-build.",
  },
  {
    key: "supported",
    title: "Supported for good",
    icon: "HeartHandshake",
    body: "A 3-year warranty, 30-day and spring follow-ups, and a 24-hour callback promise. We treat the day after the final walkthrough as the start of the relationship.",
  },
];
