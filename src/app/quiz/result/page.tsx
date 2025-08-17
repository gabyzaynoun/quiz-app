// src/app/quiz/result/page.tsx
import { Suspense } from "react";
import ResultClient from "./ResultClient";

export const metadata = { title: "Your Result" };

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-slate-400">Loading…</div>}>
      <ResultClient />
    </Suspense>
  );
}
