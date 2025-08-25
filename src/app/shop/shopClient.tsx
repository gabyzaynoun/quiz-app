// src/app/shop/shopClient.tsx
"use client";

import { useState } from "react";

import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

// Define the product type
interface ShopProduct {
  id: string;
  title: string;
  category: string;
  href: string;
  note: string;
}

// Comprehensive product catalog - with fixes for broken links
const SHOP_PRODUCTS: ShopProduct[] = [
  // Productivity
  {
    id: "anc-headphones",
    title: "Sony WH-1000XM5",
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=Sony+WH-1000XM5+noise+cancelling+headphones",
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
    href: "https://www.amazon.com.au/s?k=time+timer+visual+countdown",
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

  // Fixed: Added proper type instead of any
  const handleProductClick = (product: ShopProduct) => {
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
            href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=shop_page&utm_medium=cta&utm_content=deskpack_hero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Get Your Setup Blueprint →
          </a>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
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
            className="block p-4 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <h3 className="font-semibold mb-1">{product.title}</h3>
            <p className="text-sm text-slate-400 mb-2">{product.note}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 capitalize">
                {product.category}
              </span>
              <span className="text-indigo-400">View →</span>
            </div>
          </a>
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">
            No products found in this category.
          </p>
        </div>
      )}

      {/* FAQ Section */}
      <div className="mt-12 p-6 bg-slate-800/50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">About Our Recommendations</h2>
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            All products are carefully selected based on quality, value, and user reviews.
            We earn a small commission from qualifying purchases at no extra cost to you.
          </p>
          <p>
            Prices shown are approximate and may vary. Click through to see current pricing
            and availability on Amazon AU.
          </p>
        </div>
      </div>
    </div>
  );
}