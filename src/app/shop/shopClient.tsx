// src/app/shop/shopClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

// Comprehensive product catalog - with fixes for broken links
const SHOP_PRODUCTS = [
  // Productivity
  {
    id: "anc-headphones",
    title: "Sony WH-1000XM5",
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=Sony+WH-1000XM5+noise+cancelling+headphones", // Fixed: using search instead of direct link
    note: "Best noise cancelling",
  },
  {
    id: "standing-desk",
    title: "Flexispot E7 Standing Desk",
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=flexispot+e7+standing+desk",
    note: "Electric height adjust",
  },
  {
    id: "time-timer",
    title: "Time Timer MOD",
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=time+timer+visual+countdown", // Fixed: using search for visual timers
    note: "Visual countdown",
  },

  // Ergonomics
  {
    id: "herman-miller",
    title: "Ergonomic Task Chair",
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=ergonomic+task+chair",
    note: "All-day comfort",
  },
  {
    id: "monitor-arm",
    title: "Ergotron LX Monitor Arm",
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=ergotron+lx+monitor+arm",
    note: "Full adjustability",
  },
  {
    id: "footrest",
    title: "Adjustable Footrest",
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=adjustable+footrest",
    note: "Improve posture",
  },

  // Tech Setup
  {
    id: "webcam",
    title: "Logitech Brio 4K",
    category: "tech",
    href: "https://www.amazon.com.au/s?k=logitech+brio+4k",
    note: "Crystal clear video",
  },
  {
    id: "usb-hub",
    title: "CalDigit TS4 Dock",
    category: "tech",
    href: "https://www.amazon.com.au/s?k=caldigit+ts4",
    note: "18 ports total",
  },
  {
    id: "mechanical-keyboard",
    title: "Keychron K2 Wireless",
    category: "tech",
    href: "https://www.amazon.com.au/s?k=keychron+k2",
    note: "Hot-swappable",
  },

  // Sleep
  {
    id: "white-noise",
    title: "LectroFan White Noise",
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=lectrofan+white+noise",
    note: "20 unique sounds",
  },
  {
    id: "sunrise-alarm",
    title: "Philips Wake-Up Light",
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=philips+wake+up+light",
    note: "Natural wake-up",
  },
  {
    id: "weighted-blanket",
    title: "Gravity Weighted Blanket",
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=gravity+weighted+blanket",
    note: "Reduces anxiety",
  },

  // Organization
  {
    id: "cable-management",
    title: "Cable Management Kit",
    category: "organization",
    href: "https://www.amazon.com.au/s?k=cable+management+kit",
    note: "Complete solution",
  },
  {
    id: "desk-organizer",
    title: "Bamboo Desk Organizer",
    category: "organization",
    href: "https://www.amazon.com.au/s?k=bamboo+desk+organizer",
    note: "Natural materials",
  },
  {
    id: "label-maker",
    title: "Brother P-Touch Label Maker",
    category: "organization",
    href: "https://www.amazon.com.au/s?k=brother+p-touch+label+maker",
    note: "Professional labels",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "productivity", label: "Productivity" },
  { id: "ergonomic", label: "Ergonomics" },
  { id: "tech", label: "Tech Setup" },
  { id: "sleep", label: "Sleep & Recovery" },
  { id: "organization", label: "Organization" },
];

// Sort options - removed price sort since we're not showing prices
const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "name", label: "Name (A-Z)" },
  { id: "category", label: "Category" },
];

export default function ShopClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = SHOP_PRODUCTS.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleProductClick = (product: any) => {
    trackAffiliateClick({
      vendor: "amazon",
      id: product.id,
      title: product.title,
      category: product.category,
    });
  };

  return (
    <div className="space-y-8">
      {/* Desk Setup Pack CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Desk Setup Pack by Type (AU)</h2>
          <p className="text-white/90">
            Blueprints for Owl/Fox/Wolf/Dolphin. Exact heights, distances, and a 5-minute fit test. Instant download.
          </p>
          <a
            href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=shop_page&utm_medium=cta&utm_content=deskpack_primary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get the Pack — A$14.90
          </a>
        </div>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <a
            key={product.id}
            href={withAffiliateTag(product.href)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleProductClick(product)}
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
            <p className="text-sm text-slate-400 mb-2">{product.note}</p>
            <span className="text-xs text-indigo-400 uppercase tracking-wide">
              {product.category}
            </span>
          </a>
        ))}
      </div>

      {/* Info */}
      <div className="text-sm text-slate-400 text-center border-t border-slate-700 pt-6">
        <p>
          As an Amazon Associate we earn from qualifying purchases.{" "}
          <Link href="/disclosure" className="underline">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
}