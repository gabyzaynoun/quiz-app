const appUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const SITE = {
  name: "QuizApp",
  url: appUrl,
  twitter: "@GabyZx45", // optional
  description: "Fast, shareable personality quizzes with curated gear.",
};
export const dynamic = "force-dynamic"; // Ensure this route is always dynamic
