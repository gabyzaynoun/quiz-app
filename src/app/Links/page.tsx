// src/app/links/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Links",
  description: "Quick links to our resources and recommendations",
};

export default function LinksPage() {
  return (
    <main className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Links & Resources</h1>
        <p className="text-slate-300">All our tools and recommendations in one place</p>
      </div>

      {/* Desk Setup Pack CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">🎯 Desk Setup Pack by Type</h2>
          <p className="text-white/90">
            Get your personalized workspace blueprint with exact measurements for your productivity type (Owl/Fox/Wolf/Dolphin).
          </p>
          <ul className="text-sm text-white/80 space-y-1 ml-4">
            <li>• Monitor height & distance calculations</li>
            <li>• Keyboard & mouse positioning guide</li>
            <li>• 5-minute ergonomic fit test</li>
            <li>• Type-specific workspace tips</li>
          </ul>
          <a
            href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=links_page&utm_medium=cta&utm_content=deskpack_button"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Desk Setup Pack — A$14.90
          </a>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">📊 Take a Quiz</h2>
        <div className="grid gap-3">
          <Link
            href="/q/animal"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Productivity Animal Test</h3>
            <p className="text-sm text-slate-400">
              Discover if you're an Owl, Fox, Wolf, or Dolphin
            </p>
          </Link>
          <Link
            href="/q/comm"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Communication Style Quiz</h3>
            <p className="text-sm text-slate-400">
              Find your communication strengths and blind spots
            </p>
          </Link>
          <Link
            href="/q"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Browse All Quizzes</h3>
            <p className="text-sm text-slate-400">
              See all available personality and productivity tests
            </p>
          </Link>
        </div>
      </div>

      {/* Shop Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">🛍️ Curated Gear</h2>
        <div className="grid gap-3">
          <Link
            href="/shop"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Browse Shop</h3>
            <p className="text-sm text-slate-400">
              Hand-picked productivity tools and workspace essentials
            </p>
          </Link>
          <a
            href="https://www.amazon.com.au/s?k=standing+desk&tag=quizappau-22"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Standing Desks</h3>
            <p className="text-sm text-slate-400">
              Top-rated adjustable desks on Amazon AU
            </p>
          </a>
          <a
            href="https://www.amazon.com.au/s?k=ergonomic+chair&tag=quizappau-22"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Ergonomic Chairs</h3>
            <p className="text-sm text-slate-400">
              Comfortable seating for long work sessions
            </p>
          </a>
        </div>
      </div>

      {/* Resources Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">📚 Resources</h2>
        <div className="grid gap-3">
          <Link
            href="/disclosure"
            className="block p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="font-semibold mb-1">Affiliate Disclosure</h3>
            <p className="text-sm text-slate-400">
              How we use affiliate links and make recommendations
            </p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-slate-400 border-t border-slate-700 pt-6">
        <p>Find your type, optimize your space ✨</p>
      </div>
    </main>
  );
}