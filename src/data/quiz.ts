// src/data/quiz.ts — Animal Archetype + pet question

export type AnimalKey = "owl" | "fox" | "wolf" | "dolphin";

export type Answer = {
  id: string;
  text: string;
  // weights toward each animal (omit for non-scoring questions)
  weights?: Partial<Record<AnimalKey, number>>;
};

export type Question = {
  id: string; // use "pet" to locate the pet question later
  text: string;
  answers: Answer[];
};

export type ProductRec = {
  id: string;
  title: string;
  subtitle?: string;
  href: string; // TODO: drop your dropship/affiliate URL here
};

export type Result = {
  id: string;
  label: string;
  description: string;
  weightKey: AnimalKey;
  tips: string[];
  products: ProductRec[];
};

export const QUIZ = {
  id: "animal-archetype",
  title: "Which Animal Archetype Are You?",
  description:
    "13 quick questions. See your top two animal matches with tips and recommended gear.",
  questions: [
    // --- NON-SCORING: pet ownership (used for extra gear only) ---
    {
      id: "pet",
      text: "Do you own a pet?",
      answers: [
        { id: "a", text: "Dog" },
        { id: "b", text: "Cat" },
        { id: "c", text: "Multiple / other pets" },
        { id: "d", text: "No pet" }
      ]
    },

    // --- 12 scoring questions (same pattern, weights drive the result) ---
    {
      id: "q1",
      text: "Your ideal work setting?",
      answers: [
        { id: "a", text: "Quiet, organized, minimal interruptions", weights: { owl: 2 } },
        { id: "b", text: "Fast-paced, lots of variety", weights: { fox: 2 } },
        { id: "c", text: "With a coordinated team", weights: { wolf: 2 } },
        { id: "d", text: "Social, lively, collaborative vibe", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q2",
      text: "How do you make decisions?",
      answers: [
        { id: "a", text: "Research first, then decide", weights: { owl: 2 } },
        { id: "b", text: "Trust instincts, move quickly", weights: { fox: 2 } },
        { id: "c", text: "Consult the group and align", weights: { wolf: 2 } },
        { id: "d", text: "Discuss openly, feel the mood", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q3",
      text: "Your social energy sweet spot?",
      answers: [
        { id: "a", text: "1:1 or small, thoughtful groups", weights: { owl: 2 } },
        { id: "b", text: "I adapt—depends on the day", weights: { fox: 2 } },
        { id: "c", text: "Teams and clubs energize me", weights: { wolf: 2 } },
        { id: "d", text: "Big gatherings and events", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q4",
      text: "Routine vs. variety?",
      answers: [
        { id: "a", text: "Routine helps me excel", weights: { owl: 2 } },
        { id: "b", text: "I need novelty and change", weights: { fox: 2 } },
        { id: "c", text: "Structured rituals with my group", weights: { wolf: 2 } },
        { id: "d", text: "Flexible and spontaneous", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q5",
      text: "Handling conflicts?",
      answers: [
        { id: "a", text: "Stay calm, use logic and facts", weights: { owl: 2 } },
        { id: "b", text: "Defuse quickly with wit", weights: { fox: 2 } },
        { id: "c", text: "Protect the pack, solve together", weights: { wolf: 2 } },
        { id: "d", text: "Keep harmony, smooth the edges", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q6",
      text: "Free time looks like…",
      answers: [
        { id: "a", text: "Reading / deep hobby time", weights: { owl: 2 } },
        { id: "b", text: "Tinkering with a side project", weights: { fox: 2 } },
        { id: "c", text: "Sports or group activities", weights: { wolf: 2 } },
        { id: "d", text: "Beach, events, or meetups", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q7",
      text: "Mornings vs nights?",
      answers: [
        { id: "a", text: "Night owl, quieter = better", weights: { owl: 2 } },
        { id: "b", text: "Anytime—whenever ideas spark", weights: { fox: 2 } },
        { id: "c", text: "Early starts with the team", weights: { wolf: 2 } },
        { id: "d", text: "Late morning—ease into flow", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q8",
      text: "Communication style?",
      answers: [
        { id: "a", text: "Detailed and clear in writing", weights: { owl: 2 } },
        { id: "b", text: "Concise and clever", weights: { fox: 2 } },
        { id: "c", text: "Direct and rallying", weights: { wolf: 2 } },
        { id: "d", text: "Warm and expressive", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q9",
      text: "Risk-taking?",
      answers: [
        { id: "a", text: "Calculated and measured", weights: { owl: 2 } },
        { id: "b", text: "Opportunistic and agile", weights: { fox: 2 } },
        { id: "c", text: "Measured—protect the group", weights: { wolf: 2 } },
        { id: "d", text: "Experiential—learn by doing", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q10",
      text: "What do others praise you for?",
      answers: [
        { id: "a", text: "Wisdom and reliability", weights: { owl: 2 } },
        { id: "b", text: "Creativity and ingenuity", weights: { fox: 2 } },
        { id: "c", text: "Loyalty and leadership", weights: { wolf: 2 } },
        { id: "d", text: "Positivity and connection", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q11",
      text: "Biggest weakness to watch?",
      answers: [
        { id: "a", text: "Overthinking / perfectionism", weights: { owl: 2 } },
        { id: "b", text: "Too many things at once", weights: { fox: 2 } },
        { id: "c", text: "Stubborn or overprotective", weights: { wolf: 2 } },
        { id: "d", text: "FOMO / too social", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q12",
      text: "Dream vacation?",
      answers: [
        { id: "a", text: "Cabin, books, mountains", weights: { owl: 2 } },
        { id: "b", text: "City adventure, hidden gems", weights: { fox: 2 } },
        { id: "c", text: "Hiking trip with friends", weights: { wolf: 2 } },
        { id: "d", text: "Tropical coast, water activities", weights: { dolphin: 2 } }
      ]
    }
  ] as Question[],

  results: [
    {
      id: "r1",
      label: "Owl (Analytical & Calm)",
      description: "You’re reflective, precise, and thrive in quiet mastery.",
      weightKey: "owl",
      tips: [
        "Block quiet focus windows; batch messages later.",
        "Use a ‘good enough’ rule to curb perfectionism.",
        "Keep a single trusted system for notes/tasks."
      ],
      products: [
        { id: "p1", title: "Adjustable Reading Lamp", subtitle: "Cozy, eye-friendly light", href: "#" },
        { id: "p2", title: "Noise-Cancelling Headphones", subtitle: "Deep focus on demand", href: "#" },
        { id: "p3", title: "Premium Dot-Grid Notebook", subtitle: "Tidy thinking on paper", href: "#" }
      ]
    },
    {
      id: "r2",
      label: "Fox (Agile & Creative)",
      description: "You’re inventive, quick, and love variety and hacks.",
      weightKey: "fox",
      tips: [
        "Timebox experiments; capture quick wins daily.",
        "Keep a ‘parking lot’ list for new ideas.",
        "Automate repetitive steps to keep momentum."
      ],
      products: [
        { id: "p1", title: "Clicky Fidget Tool", subtitle: "Channel restlessness", href: "#" },
        { id: "p2", title: "Compact Wireless Keyboard", subtitle: "Move fast, anywhere", href: "#" },
        { id: "p3", title: "Idea Cards / Prompt Deck", subtitle: "Kickstart creativity", href: "#" }
      ]
    },
    {
      id: "r3",
      label: "Wolf (Leader & Loyal)",
      description: "You rally people, protect the pack, and execute together.",
      weightKey: "wolf",
      tips: [
        "Start each week with a quick alignment huddle.",
        "Delegate clearly; define ‘done’ states.",
        "Schedule your own deep-work time (guard it)."
      ],
      products: [
        { id: "p1", title: "Desk Whiteboard", subtitle: "Plan and align fast", href: "#" },
        { id: "p2", title: "Resistance Bands", subtitle: "Quick energy resets", href: "#" },
        { id: "p3", title: "Leadership Planner", subtitle: "Own the roadmap", href: "#" }
      ]
    },
    {
      id: "r4",
      label: "Dolphin (Social & Energizing)",
      description: "You bring warmth, humor, and momentum through people.",
      weightKey: "dolphin",
      tips: [
        "Use co-working blocks to kick-start focus.",
        "Set clear ‘on/off’ windows for social apps.",
        "Keep your environment playful but minimal."
      ],
      products: [
        { id: "p1", title: "Insulated Water Bottle", subtitle: "Hydration = energy", href: "#" },
        { id: "p2", title: "RGB Light Bar", subtitle: "Set the vibe for flow", href: "#" },
        { id: "p3", title: "Wireless Earbuds", subtitle: "Calls + music seamlessly", href: "#" }
      ]
    }
  ] as Result[]
};
