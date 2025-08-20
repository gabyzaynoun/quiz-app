// src/data/quizzes/animal.ts
import type { Quiz } from "./types";
import { QUIZ as ANIMAL } from "@/data/quiz";

export const animalQuiz: Quiz = {
  slug: "animal",
  title: ANIMAL.title || "Productivity Animal Test",
  description: ANIMAL.description || "13 quick questions. See your top two matches.",
  // weight keys from your original quiz
  weightKeys: ["owl", "fox", "wolf", "dolphin"],

  // map original shape -> slug shape
  questions: ANIMAL.questions.map(q => ({
    id: q.id,
    prompt: q.text,
    answers: q.answers.map(a => ({
      id: a.id,
      label: a.text,
      // keep undefined for non-scoring (pet) so it's ignored when tallying
      weights: a.weights
    }))
  })),

  results: ANIMAL.results.map(r => ({
    weightKey: r.weightKey,
    label: r.label,
    description: r.description,
    tips: r.tips,
    products: r.products?.map(p => ({
      id: p.id,
      title: p.title,
      href: p.href,
      subtitle: p.subtitle
    }))
  }))
};
