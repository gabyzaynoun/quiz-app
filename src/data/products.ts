// src/data/products.ts

export type Product = {
  id: string;
  title: string;
  href: string; // external link (tagged)
  vendor: "amazon" | "temu" | "ebay";
  audience: Array<"dogs" | "cats" | "multi" | "focus" | "structure" | "play">;
  note?: string;
};

// Keep your Amazon tag in one place (AU)
const AMAZON_TAG = "quizappau-22";
const amazonSearch = (q: string) =>
  `https://www.amazon.com.au/s?k=${encodeURIComponent(q)}&tag=${AMAZON_TAG}`;

export const PRODUCTS: Product[] = [
  // ---------- General productivity (maps to animal archetypes) ----------
  {
    id: "noise-machine",
    title: "White/Brown Noise Machine",
    href: amazonSearch("white noise machine"),
    vendor: "amazon",
    audience: ["focus"],
    note: "Pick LectroFan, SNOOZ, or similar.",
  },
  {
    id: "anc-headphones",
    title: "ANC Headphones",
    href: amazonSearch("noise cancelling headphones"),
    vendor: "amazon",
    audience: ["focus"],
    note: "Deep work staple.",
  },
  {
    id: "a5-dotted-notebook",
    title: "A5 Dotted Notebook",
    href: amazonSearch("Leuchtturm1917 A5 dotted"),
    vendor: "amazon",
    audience: ["structure"],
    note: "Great for bullet journaling.",
  },
  {
    id: "pomodoro-cube",
    title: "Pomodoro Cube Timer",
    href: amazonSearch("cube timer pomodoro"),
    vendor: "amazon",
    audience: ["structure"],
    note: "Flip to set 5/15/25/45-min sprints.",
  },
  {
    id: "time-timer-mod",
    title: "Time Timer MOD",
    href: amazonSearch("Time Timer MOD"),
    vendor: "amazon",
    audience: ["structure"],
    note: "Visual deadline bar.",
  },
  {
    id: "glass-desk-whiteboard",
    title: "Glass Desktop Whiteboard",
    href: amazonSearch("glass desktop whiteboard"),
    vendor: "amazon",
    audience: ["structure"],
    note: "Day plan at a glance.",
  },
  {
    id: "led-light-bars",
    title: "Smart LED Light Bars",
    href: amazonSearch("Govee light bars"),
    vendor: "amazon",
    audience: ["play"],
    note: "Ambient lighting for ideation.",
  },
  {
    id: "fidget-clicker",
    title: "Quiet Fidget Clicker",
    href: amazonSearch("quiet fidget clicker"),
    vendor: "amazon",
    audience: ["play"],
    note: "Keeps hands busy on calls.",
  },

  // --------------------- Dogs ---------------------
  {
    id: "dog-tug-rope",
    title: "Tug Rope Toy",
    href: amazonSearch("dog tug rope toy"),
    vendor: "amazon",
    audience: ["dogs"],
  },
  {
    id: "dog-no-pull-harness",
    title: "No-Pull Harness",
    href: amazonSearch("no pull dog harness"),
    vendor: "amazon",
    audience: ["dogs"],
  },
  {
    id: "dog-slow-feeder",
    title: "Slow Feeder Bowl",
    href: amazonSearch("slow feeder dog bowl"),
    vendor: "amazon",
    audience: ["dogs"],
  },

  // --------------------- Cats ---------------------
  {
    id: "cat-feather-wand",
    title: "Feather Wand Toy",
    href: amazonSearch("cat feather wand toy"),
    vendor: "amazon",
    audience: ["cats"],
  },
  {
    id: "cat-tunnel",
    title: "Collapsible Cat Tunnel",
    href: amazonSearch("cat tunnel"),
    vendor: "amazon",
    audience: ["cats"],
  },
  {
    id: "cat-fountain",
    title: "Cat Water Fountain",
    href: amazonSearch("cat water fountain"),
    vendor: "amazon",
    audience: ["cats"],
  },

  // --------------------- Multi-pet / Home ---------------------
  {
    id: "pet-grooming-glove",
    title: "Pet Grooming Glove",
    href: amazonSearch("pet grooming glove"),
    vendor: "amazon",
    audience: ["multi"],
  },
  {
    id: "indoor-pet-cam",
    title: "Indoor Pet Camera 1080p",
    href: amazonSearch("indoor pet camera 1080p"),
    vendor: "amazon",
    audience: ["multi"],
  },
  {
    id: "enzymatic-cleaner",
    title: "Enzymatic Stain Remover",
    href: amazonSearch("enzymatic pet stain remover"),
    vendor: "amazon",
    audience: ["multi"],
  },
];

export type AudienceKey = Product["audience"][number];

// Filter by audiences (e.g., ['dogs'] or ['focus'])
export function byAudience(keys: AudienceKey[]) {
  return PRODUCTS.filter((p) => p.audience.some((a) => keys.includes(a)));
}
