// src/app/shop/page.tsx
import { Metadata } from "next";
import { ShopClient } from "./shopClient";

export const metadata: Metadata = {
  title: "Shop Productivity Tools | Find By Type",
  description: "Curated productivity tools and workspace essentials for Australian remote workers. Hand-picked items based on your personality type.",
  openGraph: {
    title: "Shop Productivity Tools | Find By Type",
    description: "Curated productivity tools and workspace essentials for Australian remote workers",
  },
};

export default function ShopPage() {
  return <ShopClient />;
}

