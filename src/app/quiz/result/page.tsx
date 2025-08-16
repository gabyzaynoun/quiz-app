import { Suspense } from "react";
import ResultClient from "../result/ResultClients";

export default function Page() {
  return (
    <Suspense fallback={<main className="container py-16">Loading result…</main>}>
      <ResultClient />
    </Suspense>
  );
}

// Optional, but can help avoid static prerender issues:
export const dynamic = "force-dynamic";
