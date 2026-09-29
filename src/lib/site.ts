/** Central site configuration — used across metadata, JSON-LD and UI. */

export const site = {
  name: "Haven Outdoor Living",
  shortName: "Haven",
  legalName: "Haven Outdoor Living LLC",
  url: "https://www.havenoutdoorliving.com",
  phone: "(612) 555-0134",
  phoneHref: "tel:+16125550134",
  email: "hello@havenoutdoorliving.com",
  city: "Minneapolis",
  state: "MN",
  region: "Minneapolis–St. Paul, Minnesota",
  address: "North Loop, Minneapolis, MN",
  founded: "Rooted in 15+ years of landscape craftsmanship",
  tagline: "The outdoors, beautifully livable.",
  description:
    "Haven Outdoor Living designs, builds, and cares for patios, gardens, outdoor kitchens, and four-season outdoor rooms across Minneapolis and the Twin Cities — with honest pricing, efficient builds, and support that outlasts the project.",
  hours: "Mon–Fri 7am–6pm · Sat by appointment",
  areasServed: [
    "Minneapolis",
    "Edina",
    "Wayzata",
    "Minnetonka",
    "St. Paul",
    "North Oaks",
    "Stillwater",
    "Chanhassen",
    "Plymouth",
    "Lake Minnetonka",
  ],
} as const;

/** Pexels CDN helper — requests a specific width, keeps originals uncropped. */
export const px = (id: number, w = 1920) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const img = {
  firepitSunset: 36777969,
  houseDusk: 36777968,
  patioTwilight: 19923727,
  bbqLights: 20321272,
  firepitMountain: 9579901,
  stoneChairs: 38193972,
  flamesClose: 8730744,
  terraceCity: 9584741,
  patioStone: 38140659,
  bonfire: 26938934,
  gardenPathJp: 31610474,
  topiaryPath: 34581778,
  stoneSteps: 39045225,
  purpleGarden: 36713687,
  stonePatioNy: 37785078,
  gardenBench: 38894715,
  luxePool: 8143684,
  gardenSwing: 26743245,
  poolLawn: 8134751,
  hedgePath: 36713682,
  deckDining: 7587879,
  pergolaDining: 7587884,
  autumnDeck: 10450058,
  openStructure: 30777526,
  pergolaRustic: 36651237,
  gazeboLake: 17751638,
  houseLawn: 7587878,
  pergolaSky: 28235893,
} as const;
