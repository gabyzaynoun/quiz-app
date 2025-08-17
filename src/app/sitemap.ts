import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const base = SITE.url;

  return [
    { url: `${base}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/quiz`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/shop`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/disclosure`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];
}
export const dynamic = "force-dynamic"; // Ensure this route is always dynamic