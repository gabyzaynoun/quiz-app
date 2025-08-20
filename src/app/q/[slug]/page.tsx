import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuiz } from "@/data/quizzes";

export default async function QuizIntro(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const quiz = getQuiz(slug);
  if (!quiz) return notFound();

  return (
    <main className="max-w-xl mx-auto space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <p className="text-slate-400 mt-1">{quiz.description}</p>

          <div className="mt-4 text-sm text-slate-500">
            <p>📝 {quiz.questions.length} questions</p>
            <p>⏱️ 2-3 minutes to complete</p>
            <p>🎯 Get personalized recommendations</p>
          </div>

          <Link
            href={`/q/${quiz.slug}/0?a=`}
            className="btn btn-primary mt-4 inline-block"
          >
            Start Quiz
          </Link>
        </div>
      </div>

      <Link href="/q" className="text-sm text-slate-400 hover:underline">
        ← Back to all quizzes
      </Link>
    </main>
  );
}
