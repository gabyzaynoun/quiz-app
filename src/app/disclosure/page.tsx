// src/app/disclosure/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "How this site uses affiliate links (Amazon Associates, etc.).",
};

export default function DisclosurePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>

      <p className="text-slate-300">
        Some links on this site are affiliate links. If you click a link and
        make a purchase, we may earn a commission at no extra cost to you.
      </p>

      <div className="space-y-3 text-slate-300">
        <p>
          <strong>Amazon Associates:</strong> As an Amazon Associate, we earn
          from qualifying purchases. We link to relevant products to help you
          take action quickly; you’re free to buy anywhere you like.
        </p>
        <p>
          Tracking on Amazon generally works if you click our Amazon link first,
          and then browse around before purchasing in the same session.
        </p>
        <p>
          We only recommend items we believe provide value. If something isn’t
          useful, please don’t buy it.
        </p>
      </div>

      <p className="text-sm text-slate-400">
        Questions?{" "}
        <Link href="/quiz" className="underline underline-offset-4">
          Try a quiz
        </Link>{" "}
        or{" "}
        <Link href="/shop" className="underline underline-offset-4">
          browse the shop
        </Link>
        .
      </p>
    </main>
  );
}
