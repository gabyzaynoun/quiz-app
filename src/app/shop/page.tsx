// src/app/shop/page.tsx
import { Metadata } from "next";
import { ShopClient } from "./shopClient";

export const metadata: Metadata = {
  title: "Shop Productivity Tools | Curated Gear for Australian Remote Workers",
  description: "Hand-picked productivity tools, ergonomic furniture, and workspace essentials. Curated recommendations based on your personality type with Australian retailers.",
  alternates: {
    canonical: "https://findbytype.com.au/shop"
  },
  openGraph: {
    title: "Shop Productivity Tools | Find By Type",
    description: "Curated productivity gear for Australian remote workers",
    url: "https://findbytype.com.au/shop",
    type: 'website',
  }
};

export default function ShopPage() {
  return <ShopClient />;
}

