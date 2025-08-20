// src/app/quiz/page.tsx
import Link from "next/link";
import { QUIZ } from "@/data/quiz";

export const metadata = { title: QUIZ.title };

export default function QuizLanding() {
  return (
    <main className="container space-y-6">
      <h1 className="text-3xl font-bold">{QUIZ.title}</h1>
      <p className="text-slate-400 max-w-prose">{QUIZ.description}</p>

      <Link
        href="/quiz/0?a="           // ← important: /quiz/0
        className="btn btn-primary inline-block"
      >
        Begin
      </Link>
    </main>
  );
}
