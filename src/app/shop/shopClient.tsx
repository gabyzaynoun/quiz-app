// src/app/shop/shopClient.tsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

type Category = "all" | "productivity" | "comfort" | "tech" | "sleep" | "organization";
type SortOption = "featured" | "name" | "category";

interface Product {
  id: string;
  title: string;
  category: Category;
  href: string;
  note: string;
  featured?: boolean;
}

const products: Product[] = [
  // Featured Products
  {
    id: "standing-desk",
    title: "FlexiSpot E7 Standing Desk",
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=flexispot+e7+standing+desk",
    note: "Transform your workspace",
    featured: true,
  },
  {
    id: "ergonomic-chair",
    title: "Herman Miller Aeron Chair",
    category: "comfort",
    href: "https://www.amazon.com.au/s?k=herman+miller+aeron",
    note: "Ultimate comfort",
    featured: true,
  },
  {
    id: "noise-cancelling",
    title: "Sony WH-1000XM5",
    category: "tech",
    href: "https://www.amazon.com.au/s?k=sony+wh-1000xm5",
    note: "Best noise cancelling",
    featured: true,
  },
  // Add more products as in your original file...
];

export function ShopClient() {
  const [category, setCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredProducts = products.filter(
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
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Curated Productivity Gear
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6">
              Hand-picked tools and essentials for Australian remote workers.
              Every item is selected to boost your productivity and comfort.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-4 items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <span className="text-sm font-medium">🇦🇺 Australian Store Links</span>
              <span className="hidden sm:block">•</span>
              <span className="text-sm">✓ Tested & Recommended</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - Mobile Responsive */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <Link 
            href="/q/desk"
            className="block group"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-1">
                  Desk Setup Pack by Type (AU)
                </h2>
                <p className="text-sm sm:text-base text-white/90">
                  Blueprints for Owl/Fox/Wolf/Dolphin. Exact heights, distances, and a 5-minute fit test.
                  Instant download.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-bold group-hover:scale-105 transition-transform">
                  Get Your Setup Blueprint →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters Section - Mobile Responsive */}
      <section className="sticky top-16 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
            <div className="flex-1 sm:max-w-xs">
              <label htmlFor="sort" className="block text-sm font-medium mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="featured">⭐ Featured</option>
                <option value="name">🔤 Name</option>
                <option value="category">📁 Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Mobile Responsive */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-40 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sortedProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-200"
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {product.note}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full capitalize">
                      {categoryIcons[product.category]} {product.category}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 sm:py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why We Recommend These Products
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Every item in our shop has been carefully selected based on extensive research,
            user reviews, and compatibility with different productivity styles. We only
            recommend products we&apos;d use ourselves.
          </p>
          <Link
            href="/disclosure"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
          >
            <span>Read our affiliate disclosure</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}