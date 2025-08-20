import { Suspense } from "react";
import ResultClient from "./ResultClient";

export const dynamic = "force-dynamic";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading result…</div>}>
      <ResultClient />
    </Suspense>
  );
}
