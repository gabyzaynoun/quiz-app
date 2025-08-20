export type WeightKey = string;

export type QuizAnswer = {
  id: string;
  label: string;
  weights?: Partial<Record<WeightKey, number>>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  answers: QuizAnswer[];
};

export type QuizResult = {
  weightKey: WeightKey;
  label: string;
  description: string;
  tips?: string[];
  products?: { id: string; title: string; href: string; subtitle?: string }[];
};

export type Quiz = {
  slug: string;               // e.g. "comm"
  title: string;              // card + header
  description: string;        // card subtext
  weightKeys: WeightKey[];    // keys used in weights/results
  questions: QuizQuestion[];  // 4–8 questions
  results: QuizResult[];      // one per weightKey
};
