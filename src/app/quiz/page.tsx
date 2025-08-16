import Link from "next/link";
import { QUIZ } from "../../data/quiz";


export default function QuizStart() {
  return (
    <main className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">{QUIZ.title}</h1>
      <p className="text-gray-600">{QUIZ.description}</p>
      <Link
        href={`/quiz/0?a=`} // a = answers (we'll append as we go)
        className="inline-block bg-black text-white px-6 py-3 rounded"
      >
        Begin
      </Link>
    </main>
  );
}
