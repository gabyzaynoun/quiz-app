import Link from "next/link";
import { listQuizzes } from "@/data/quizzes";

export const metadata = { title: "Pick a quiz" };

export default function QuizHub() {
  const items = listQuizzes(); // [{slug,title,description}, ...]

  return (
    <main className="max-w-3xl mx-auto space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Pick a quiz</h1>
          <p className="text-slate-400">Start any quiz below.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((q) => (
          <div key={q.slug} className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">{q.title}</div>
              <p className="text-slate-400 mt-1">{q.description}</p>
              <Link
                href={`/q/${q.slug}`}
                className="btn btn-primary mt-4 inline-block"
              >
                Start
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
