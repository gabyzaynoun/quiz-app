// src/app/shop/shopClient.tsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

type Category = "all" | "productivity" | "comfort" | "tech" | "sleep" | "organization" | "ergonomic";
type SortOption = "featured" | "name" | "category";

interface Product {
  id: string;
  title: string;
  category: Category;
  href: string;
  note: string;
  featured?: boolean;
}

const SHOP_PRODUCTS: Product[] = [
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

export function ShopClient() {
  const [category, setCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredProducts = SHOP_PRODUCTS.filter(
    (product) => category === "all" || product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "featured") {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const categoryIcons: Record<Category, string> = {
    all: "🏪",
    productivity: "⚡",
    comfort: "🪑",
    tech: "💻",
    sleep: "😴",
    organization: "📦",
    ergonomic: "🦾",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-6 max-w-7xl py-16">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Curated Productivity Gear
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Hand-picked tools and essentials for Australian remote workers.
              Every item is selected to boost your productivity and comfort.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-6 items-center text-sm font-medium text-slate-600 dark:text-slate-400 mt-6">
              <span className="flex items-center gap-2">🇦🇺 Australian Store Links</span>
              <span className="hidden sm:block text-slate-300 dark:text-slate-600">•</span>
              <span className="flex items-center gap-2">✓ Tested & Recommended</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="container mx-auto px-6 max-w-7xl -mt-8 mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white">
          <Link href="/q/desk" className="block group">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Desk Setup Pack by Type
                </h2>
                <p className="text-white/90 text-base md:text-lg mb-2">
                  Blueprints for Owl/Fox/Wolf/Dolphin productivity types.
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  Exact monitor heights, keyboard distances, and a 5-minute ergonomic fit test. Instant download.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl group-hover:scale-105">
                  Get Your Setup Blueprint →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1 max-w-sm">
              <label htmlFor="category" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="all">🏪 All Products</option>
                <option value="productivity">⚡ Productivity</option>
                <option value="comfort">🪑 Comfort</option>
                <option value="tech">💻 Tech</option>
                <option value="sleep">😴 Sleep</option>
                <option value="organization">📦 Organization</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex-1 max-w-sm">
              <label htmlFor="sort" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="featured">⭐ Featured</option>
                <option value="name">🔤 Name</option>
                <option value="category">📁 Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-48 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all duration-200"
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <span className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      Featured
                    </span>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                      {product.note}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full capitalize">
                      {categoryIcons[product.category]} {product.category}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 text-lg font-medium group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-16 text-center">
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No products found in this category.
              </p>
              <button
                onClick={() => setCategory("all")}
                className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Why We Recommend These Products
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every item in our shop has been carefully selected based on extensive research,
              user reviews, and compatibility with different productivity styles. We only
              recommend products we&apos;d use ourselves.
            </p>
            <div className="pt-4">
              <Link
                href="/disclosure"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-lg transition-colors"
              >
                <span>Read our affiliate disclosure</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl py-12">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Find your type, optimize your space
          </p>
        </div>
      </section>
    </div>
  );
}