// src/data/products.ts
export type Product = {
  id: string;
  title: string;
  href: string;         // swap to affiliate URL once approved
  vendor: "amazon" | "temu" | "ebay";
  audience: Array<"dogs" | "cats" | "multi" | "focus" | "structure" | "play">;
  note?: string;
};

export const PRODUCTS: Product[] = [
  // (…the items you pasted…)
];

export type AudienceKey = Product["audience"][number];

// Helper: filter by audiences (e.g., show ['dogs'] or ['focus'])
export function byAudience(keys: AudienceKey[]) {
  return PRODUCTS.filter(p => p.audience.some(a => keys.includes(a)));
}
