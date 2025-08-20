import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100dvh-240px)] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-indigo-500">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-slate-400">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link href="/q" className="btn btn-outline">
            Browse Quizzes
          </Link>
        </div>
      </div>
    </main>
  );
}