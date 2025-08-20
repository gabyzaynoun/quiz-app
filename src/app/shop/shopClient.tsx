"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

// Comprehensive product catalog
const SHOP_PRODUCTS = [
  // Productivity
  { 
    id: "anc-headphones", 
    title: "Sony WH-1000XM5", 
    category: "productivity",
    href: "https://www.amazon.com.au/dp/B09XS7JWHH",
    price: "$549",
    note: "Best noise cancelling"
  },
  { 
    id: "standing-desk", 
    title: "Flexispot E7 Standing Desk", 
    category: "productivity",
    href: "https://www.amazon.com.au/s?k=flexispot+e7+standing+desk",
    price: "$799",
    note: "Electric height adjust"
  },
  { 
    id: "time-timer", 
    title: "Time Timer MOD", 
    category: "productivity",
    href: "https://www.amazon.com.au/dp/B01COEZM1M",
    price: "$49",
    note: "Visual countdown"
  },
  
  // Ergonomics
  { 
    id: "herman-miller", 
    title: "Ergonomic Task Chair", 
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=ergonomic+task+chair",
    price: "$899",
    note: "All-day comfort"
  },
  { 
    id: "monitor-arm", 
    title: "Ergotron LX Monitor Arm", 
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=ergotron+lx+monitor+arm",
    price: "$289",
    note: "Full adjustability"
  },
  { 
    id: "footrest", 
    title: "Adjustable Footrest", 
    category: "ergonomic",
    href: "https://www.amazon.com.au/s?k=adjustable+footrest",
    price: "$79",
    note: "Improve posture"
  },
  
  // Tech Setup
  { 
    id: "webcam", 
    title: "Logitech Brio 4K", 
    category: "tech",
    href: "https://www.amazon.com.au/s?k=logitech+brio+4k",
    price: "$329",
    note: "Crystal clear video"
  },
  { 
    id: "usb-hub", 
    title: "CalDigit TS4 Dock", 
    category: "tech",
    href: "https://www.amazon.com.au/s?k=caldigit+ts4",
    price: "$599",
    note: "18 ports total"
  },
  { 
    id: "mechanical-keyboard", 
    title: "Keychron K2 Wireless", 
    category: "tech",
    href: "https://www.amazon.com.au/s?k=keychron+k2",
    price: "$169",
    note: "Hot-swappable"
  },
  
  // Sleep
  { 
    id: "white-noise", 
    title: "LectroFan White Noise", 
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=lectrofan+white+noise",
    price: "$89",
    note: "20 unique sounds"
  },
  { 
    id: "sunrise-alarm", 
    title: "Philips Wake-Up Light", 
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=philips+wake+up+light",
    price: "$199",
    note: "Natural wake-up"
  },
  { 
    id: "weighted-blanket", 
    title: "Gravity Weighted Blanket", 
    category: "sleep",
    href: "https://www.amazon.com.au/s?k=gravity+weighted+blanket",
    price: "$249",
    note: "Reduces anxiety"
  },
  
  // Organization
  { 
    id: "cable-management", 
    title: "Cable Management Kit", 
    category: "organization",
    href: "https://www.amazon.com.au/s?k=cable+management+kit",
    price: "$39",
    note: "Complete solution"
  },
  { 
    id: "desk-organizer", 
    title: "Bamboo Desk Organizer", 
    category: "organization",
    href: "https://www.amazon.com.au/s?k=bamboo+desk+organizer",
    price: "$59",
    note: "Eco-friendly"
  },
  { 
    id: "label-maker", 
    title: "Brother P-Touch Label", 
    category: "organization",
    href: "https://www.amazon.com.au/s?k=brother+p-touch",
    price: "$79",
    note: "Professional labels"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "productivity", label: "Productivity" },
  { id: "ergonomic", label: "Ergonomics" },
  { id: "tech", label: "Tech Setup" },
  { id: "sleep", label: "Sleep" },
  { id: "organization", label: "Organization" }
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = SHOP_PRODUCTS.filter(
    p => selectedCategory === "all" || p.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
    }
    if (sortBy === "price-high") {
      return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
    }
    return 0; // featured (default order)
  });

  return (
    <main className="container space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Productivity Shop</h1>
          <p className="text-slate-400 mt-2">
            Curated gear to optimize your work and life. All products available on Amazon AU.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs text-slate-500">Category</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded text-sm transition ${
                      selectedCategory === cat.id
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500">Sort</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block mt-1 px-3 py-1 bg-slate-700 rounded text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="card hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{product.title}</h3>
                <span className="text-lg font-bold text-indigo-400">{product.price}</span>
              </div>
              <p className="text-sm text-slate-400 mb-3">{product.note}</p>
              <div className="text-xs text-slate-500 mb-3">
                Category: {product.category}
              </div>
              <a
                href={withAffiliateTag(product.href)}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="btn btn-primary w-full text-center"
                onClick={() => trackAffiliateClick({
                  id: product.id,
                  vendor: "amazon",
                  title: product.title
                })}
              >
                View on Amazon →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="card bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="card-body text-center">
          <h3 className="text-xl font-semibold mb-2">Not sure what you need?</h3>
          <p className="text-slate-300 mb-4">
            Take our quizzes to get personalized recommendations
          </p>
          <Link href="/q" className="btn btn-primary inline-block">
            Take a Quiz →
          </Link>
        </div>
      </div>
    </main>
  );
}