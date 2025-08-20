import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuiz } from "@/data/quizzes";

export default function QuizIntro({
  params,
}: {
  params: { slug: string };
}) {
  const quiz = getQuiz(params.slug);
  if (!quiz) return notFound();

  return (
    <main className="max-w-xl mx-auto space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <p className="text-slate-400 mt-1">{quiz.description}</p>

          {/* First question index is 0, we pass an empty 'a' param to start */}
          <Link
            href={`/q/${quiz.slug}/0?a=`}
            className="btn btn-primary mt-4 inline-block"
          >
            Begin
          </Link>
        </div>
      </div>

      <Link href="/q" className="text-sm text-slate-400 hover:underline">
        ← All quizzes
      </Link>
    </main>
  );
}
