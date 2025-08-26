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
export type ResultMeta = {
  weightKey: AnimalKey;
  label: string;
  description: string;
  // NEW:
  traits: string[];      // quick snapshot chips
  strengths: string[];   // what they’re great at
  pitfalls: string[];    // common traps
  bestAt: string[];      // best environments / tasks
  tips: string[];        // already present — keep using
  products: { id: string; title: string; href: string; subtitle?: string }[];
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
      weightKey: "owl",
      label: "The Owl (Deep Focus)",
      description: "You thrive on long, quiet stretches and meaningful problems.",
      traits: ["Analytical", "Independent", "Calm", "Detail-oriented"],
      strengths: [
        "Deep work and complex reasoning",
        "Minimal context switching",
        "Systems thinking & documentation",
      ],
      pitfalls: [
        "Over-researching instead of shipping",
        "Avoiding collaboration until late",
        "Energy dips if the day gets noisy",
      ],
      bestAt: ["Designing systems", "Reading/analysis", "Long coding sessions"],
      tips: [
        "Block two 90-minute focus windows daily.",
        "Batch notifications and Slack checks every 45–60 min.",
        "End each session with a 3-bullet handoff note to ‘future you’.",
      ],
      products: [
        { id: "sony-xm5", title: "Sony WH-1000XM5 ANC Headphones", href: "https://www.amazon.com.au/dp/B09XS7JWHH", subtitle: "Silence for deep work" },
        { id: "leuchtturm-a5-dotted", title: "Leuchtturm1917 A5 Dotted", href: "https://www.amazon.com.au/Leuchtturm1917-Medium-Size-Hardcover-Notebook/dp/B07L16V71N", subtitle: "Paper for thinking" },
        { id: "noise-machine", title: "White/Brown Noise Machine", href: "https://www.amazon.com.au/s?k=white+noise+machine", subtitle: "Stay in the zone" },
      ],
    },
    {
      weightKey: "fox",
      label: "The Fox (Playful Momentum)",
      description: "You move fast, experiment, and bring energy to teams.",
      traits: ["Curious", "Social", "Fast", "Inventive"],
      strengths: [
        "Rapid prototyping & demos",
        "Rallying people and ideas",
        "Creative problem-solving on the fly",
      ],
      pitfalls: [
        "Starting too many threads",
        "Under-documenting decisions",
        "Context bouncing fatigue",
      ],
      bestAt: ["Workshops", "Prototyping", "Customer calls"],
      tips: [
        "Time-box each task with a visible timer.",
        "Log decisions in a running ‘lab notes’ doc.",
        "Commit to one ‘boring but important’ task daily.",
      ],
      products: [
        { id: "govee-light-bars", title: "Govee Smart LED Light Bars", href: "https://www.amazon.com.au/dp/B0949DDM3K", subtitle: "Fun creative ambience" },
        { id: "pomodoro-cube", title: "Pomodoro Cube Timer", href: "https://www.amazon.com.au/s?k=cube+timer+pomodoro", subtitle: "Time-box sprints" },
      ],
    },
    {
      weightKey: "wolf",
      label: "The Wolf (Structured Execution)",
      description: "You love clear plans, predictable systems, and finishing well.",
      traits: ["Organised", "Practical", "Reliable", "Deliberate"],
      strengths: [
        "Process building & repeatability",
        "Long-term project stamina",
        "Reducing chaos into checklists",
      ],
      pitfalls: [
        "Perfectionism delays shipping",
        "Rigid routines block new ideas",
        "Taking on too much solo",
      ],
      bestAt: ["Roadmaps", "Ops & playbooks", "QA and hardening"],
      tips: [
        "Define ‘good enough’ before you start.",
        "Schedule 1 weekly experiment hour.",
        "Automate one manual step per week.",
      ],
      products: [
        { id: "time-timer-mod", title: "Time Timer MOD", href: "https://www.amazon.com.au/s?k=time+timer+visual+countdown", subtitle: "Visual deadlines" },
        { id: "glass-desk-whiteboard", title: "Glass Desktop Whiteboard", href: "https://www.amazon.com.au/Glass-Desktop-Computer-Accessories-Calendar/dp/B0BVYTKSLD", subtitle: "Plan at a glance" },
      ],
    },
    {
      weightKey: "dolphin",
      label: "The Dolphin (Collaborative Flow)",
      description: "You get energy from people, feedback loops, and iteration.",
      traits: ["Empathic", "Collaborative", "Adaptive", "Communicative"],
      strengths: [
        "Team facilitation & unblockers",
        "Great at feedback cycles",
        "User-centric instincts",
      ],
      pitfalls: [
        "Too many meetings → drained focus",
        "Saying ‘yes’ to everything",
        "Under-protecting solo time",
      ],
      bestAt: ["Pairing sessions", "Design reviews", "User interviews"],
      tips: [
        "Protect one deep-work block before noon.",
        "Batch meetings back-to-back then recover.",
        "Write a 5-line plan before each session.",
      ],
      products: [
        { id: "govee-light-bars", title: "Ambient Light Bars", href: "https://www.amazon.com.au/dp/B0949DDM3K", subtitle: "Mood for creative collab" },
        { id: "noise-machine", title: "Noise Machine", href: "https://www.amazon.com.au/s?k=white+noise+machine", subtitle: "Focus buffer after calls" },
      ],
    },
  ],
};
