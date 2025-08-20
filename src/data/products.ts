import { amazonSearch, amazonDp } from "./affiliates";

export type Product = {
  id: string;
  title: string;
  href: string;
  vendor: "amazon" | "ebay" | "other";
  category: string[];
  price?: string;
  note?: string;
};

// Master product catalog with real ASINs where possible
export const PRODUCTS: Product[] = [
  // Headphones & Audio
  {
    id: "sony-xm5",
    title: "Sony WH-1000XM5",
    href: amazonDp("B09XS7JWHH"),
    vendor: "amazon",
    category: ["audio", "productivity"],
    price: "$549",
    note: "Industry-leading noise cancellation"
  },
  {
    id: "airpods-pro",
    title: "Apple AirPods Pro",
    href: amazonDp("B0D1XB1XX3"),
    vendor: "amazon",
    category: ["audio", "portable"],
    price: "$399",
    note: "Seamless Apple integration"
  },
  
  // Desks & Furniture
  {
    id: "standing-desk",
    title: "Flexispot E7 Standing Desk",
    href: amazonSearch("Flexispot E7 standing desk"),
    vendor: "amazon",
    category: ["furniture", "ergonomic"],
    price: "$799",
    note: "Dual motor, programmable heights"
  },
  {
    id: "herman-miller-aeron",
    title: "Herman Miller Aeron",
    href: amazonSearch("Herman Miller Aeron chair"),
    vendor: "amazon",
    category: ["furniture", "ergonomic"],
    price: "$1995",
    note: "The gold standard office chair"
  },
  
  // Monitors & Display
  {
    id: "dell-ultrawide",
    title: "Dell S3422DWG Ultrawide",
    href: amazonDp("B095X7RV77"),
    vendor: "amazon",
    category: ["display", "productivity"],
    price: "$699",
    note: "34-inch curved productivity"
  },
  {
    id: "lg-4k-monitor",
    title: "LG 27\" 4K Monitor",
    href: amazonDp("B07TFQ74JJ"),
    vendor: "amazon",
    category: ["display", "creative"],
    price: "$499",
    note: "Color accurate for design"
  },
  
  // Keyboards & Input
  {
    id: "keychron-k2",
    title: "Keychron K2 Wireless",
    href: amazonSearch("Keychron K2 wireless mechanical"),
    vendor: "amazon",
    category: ["input", "tech"],
    price: "$169",
    note: "Hot-swappable mechanical"
  },
  {
    id: "mx-master-3s",
    title: "Logitech MX Master 3S",
    href: amazonDp("B0C6Z7KSMW"),
    vendor: "amazon",
    category: ["input", "productivity"],
    price: "$149",
    note: "Best productivity mouse"
  },
  
  // Sleep & Wellness
  {
    id: "white-noise-machine",
    title: "LectroFan White Noise",
    href: amazonSearch("LectroFan white noise machine"),
    vendor: "amazon",
    category: ["sleep", "wellness"],
    price: "$89",
    note: "20 unique fan & white noise sounds"
  },
  {
    id: "philips-sunrise",
    title: "Philips Wake-Up Light",
    href: amazonDp("B08V5C7QGM"),
    vendor: "amazon",
    category: ["sleep", "wellness"],
    price: "$199",
    note: "Simulated sunrise alarm"
  },
  {
    id: "weighted-blanket",
    title: "Gravity Weighted Blanket",
    href: amazonSearch("Gravity weighted blanket 7kg"),
    vendor: "amazon",
    category: ["sleep", "wellness"],
    price: "$249",
    note: "Reduces anxiety, improves sleep"
  },
  
  // Organization
  {
    id: "cable-management",
    title: "J Channel Cable Raceway",
    href: amazonDp("B07D8XLNZ2"),
    vendor: "amazon",
    category: ["organization", "setup"],
    price: "$39",
    note: "Hide all desk cables"
  },
  {
    id: "desk-organizer",
    title: "Bamboo Desktop Organizer",
    href: amazonSearch("bamboo desktop organizer"),
    vendor: "amazon",
    category: ["organization", "minimal"],
    price: "$59",
    note: "Sustainable organization"
  },
  
  // Lighting
  {
    id: "benq-screenbar",
    title: "BenQ ScreenBar Halo",
    href: amazonDp("B0C4TNMMQT"),
    vendor: "amazon",
    category: ["lighting", "ergonomic"],
    price: "$249",
    note: "No screen glare monitor light"
  },
  {
    id: "philips-hue",
    title: "Philips Hue Go",
    href: amazonDp("B0CN7NQMPX"),
    vendor: "amazon",
    category: ["lighting", "creative"],
    price: "$199",
    note: "Portable smart mood lighting"
  },
  
  // Tech Accessories
  {
    id: "caldigit-ts4",
    title: "CalDigit TS4 Dock",
    href: amazonSearch("CalDigit TS4 Thunderbolt dock"),
    vendor: "amazon",
    category: ["tech", "connectivity"],
    price: "$599",
    note: "18 ports, 98W charging"
  },
  {
    id: "stream-deck",
    title: "Elgato Stream Deck MK.2",
    href: amazonDp("B09QT8YP5L"),
    vendor: "amazon",
    category: ["tech", "productivity"],
    price: "$249",
    note: "15 customizable LCD keys"
  }
];

// Helper functions to get products by category
export function getProductsByCategory(categories: string[]): Product[] {
  return PRODUCTS.filter(p => 
    p.category.some(cat => categories.includes(cat))
  );
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

// Get recommended products based on quiz results
export function getRecommendedProducts(
  productIds: string[], 
  limit: number = 4
): Product[] {
  const products = productIds
    .map(id => getProductById(id))
    .filter(Boolean) as Product[];
  return products.slice(0, limit);
}