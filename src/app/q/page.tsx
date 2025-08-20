import Link from "next/link";
import { listQuizzes } from "@/data/quizzes";

export const metadata = { 
  title: "All Quizzes - Choose Your Test",
  description: "Pick from personality, communication, desk setup, or sleep optimization quizzes."
};

export default function QuizHub() {
  const quizzes = listQuizzes();

  return (
    <main className="max-w-3xl mx-auto space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Choose Your Quiz</h1>
          <p className="text-slate-400 mt-2">
            Take personality tests to discover your work style, optimize your setup, and get personalized product recommendations.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {quizzes.map((quiz) => (
          <div key={quiz.slug} className="card hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="text-2xl mb-2">
                {quiz.slug === "animal" && "🐾"}
                {quiz.slug === "comm" && "💬"}
                {quiz.slug === "desk" && "🖥️"}
                {quiz.slug === "sleep" && "😴"}
              </div>
              <h2 className="text-xl font-semibold">{quiz.title}</h2>
              <p className="text-slate-400 mt-1 text-sm">{quiz.description}</p>
              <Link
                href={`/q/${quiz.slug}`}
                className="btn btn-primary mt-4 inline-block"
              >
                Start Quiz →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-indigo-900/20">
        <div className="card-body text-center">
          <h3 className="text-lg font-semibold">💡 How Our Quizzes Work</h3>
          <p className="text-sm text-slate-400 mt-2">
            Each quiz takes 2-3 minutes. Answer honestly for best results. 
            Get instant analysis with personalized Amazon product recommendations.
          </p>
        </div>
      </div>
    </main>
  );
}