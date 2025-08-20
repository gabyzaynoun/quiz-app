import type { Quiz } from "./types";

export const animalQuiz: Quiz = {
  slug: "animal",
  title: "Productivity Animal Test",
  description: "Discover your work style through animal archetypes and get personalized gear recommendations.",
  weightKeys: ["owl", "fox", "wolf", "dolphin"],

  questions: [
    {
      id: "q1",
      prompt: "Your ideal work setting?",
      answers: [
        { id: "a", label: "Quiet, organized, minimal interruptions", weights: { owl: 2 } },
        { id: "b", label: "Fast-paced with lots of variety", weights: { fox: 2 } },
        { id: "c", label: "Structured team environment", weights: { wolf: 2 } },
        { id: "d", label: "Social, lively, collaborative", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q2",
      prompt: "How do you make decisions?",
      answers: [
        { id: "a", label: "Research thoroughly first", weights: { owl: 2 } },
        { id: "b", label: "Trust instincts, move quickly", weights: { fox: 2 } },
        { id: "c", label: "Follow established processes", weights: { wolf: 2 } },
        { id: "d", label: "Discuss with others first", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q3",
      prompt: "Your energy peaks when?",
      answers: [
        { id: "a", label: "Late night when it's quiet", weights: { owl: 2 } },
        { id: "b", label: "Whenever inspiration strikes", weights: { fox: 2 } },
        { id: "c", label: "Early morning routine", weights: { wolf: 2 } },
        { id: "d", label: "Mid-day with people around", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q4",
      prompt: "Your biggest strength?",
      answers: [
        { id: "a", label: "Deep analysis and accuracy", weights: { owl: 2 } },
        { id: "b", label: "Creative problem-solving", weights: { fox: 2 } },
        { id: "c", label: "Reliability and consistency", weights: { wolf: 2 } },
        { id: "d", label: "Building connections", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q5",
      prompt: "How do you handle stress?",
      answers: [
        { id: "a", label: "Withdraw and think it through", weights: { owl: 2 } },
        { id: "b", label: "Try multiple solutions quickly", weights: { fox: 2 } },
        { id: "c", label: "Stick to proven methods", weights: { wolf: 2 } },
        { id: "d", label: "Talk it out with others", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q6",
      prompt: "Your ideal project type?",
      answers: [
        { id: "a", label: "Complex research requiring focus", weights: { owl: 2 } },
        { id: "b", label: "Innovative with room to experiment", weights: { fox: 2 } },
        { id: "c", label: "Clear goals and milestones", weights: { wolf: 2 } },
        { id: "d", label: "Collaborative team initiative", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q7",
      prompt: "Communication preference?",
      answers: [
        { id: "a", label: "Detailed written documentation", weights: { owl: 2 } },
        { id: "b", label: "Quick messages and ideas", weights: { fox: 2 } },
        { id: "c", label: "Structured meetings with agendas", weights: { wolf: 2 } },
        { id: "d", label: "Face-to-face conversations", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q8",
      prompt: "Your workspace style?",
      answers: [
        { id: "a", label: "Minimal and distraction-free", weights: { owl: 2 } },
        { id: "b", label: "Flexible and adaptable", weights: { fox: 2 } },
        { id: "c", label: "Organized with systems", weights: { wolf: 2 } },
        { id: "d", label: "Open and inviting", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q9",
      prompt: "Learning new skills?",
      answers: [
        { id: "a", label: "Self-study with books/courses", weights: { owl: 2 } },
        { id: "b", label: "Jump in and figure it out", weights: { fox: 2 } },
        { id: "c", label: "Follow structured curriculum", weights: { wolf: 2 } },
        { id: "d", label: "Learn with a group or mentor", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q10",
      prompt: "Weekend plans?",
      answers: [
        { id: "a", label: "Quiet hobbies and reading", weights: { owl: 2 } },
        { id: "b", label: "Spontaneous adventures", weights: { fox: 2 } },
        { id: "c", label: "Planned activities and errands", weights: { wolf: 2 } },
        { id: "d", label: "Social gatherings and events", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q11",
      prompt: "Your biggest challenge?",
      answers: [
        { id: "a", label: "Overthinking and perfectionism", weights: { owl: 2 } },
        { id: "b", label: "Staying focused on one thing", weights: { fox: 2 } },
        { id: "c", label: "Being too rigid with plans", weights: { wolf: 2 } },
        { id: "d", label: "Setting boundaries with others", weights: { dolphin: 2 } }
      ]
    },
    {
      id: "q12",
      prompt: "Ideal vacation?",
      answers: [
        { id: "a", label: "Secluded cabin with books", weights: { owl: 2 } },
        { id: "b", label: "City hopping adventure", weights: { fox: 2 } },
        { id: "c", label: "Well-planned resort stay", weights: { wolf: 2 } },
        { id: "d", label: "Beach resort with friends", weights: { dolphin: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "owl",
      label: "🦉 The Owl - Deep Thinker",
      description: "You excel at deep work, analysis, and creating quality output in quiet environments.",
      tips: [
        "Block 2-3 hour focus sessions daily",
        "Use noise-cancelling headphones",
        "Create a distraction-free workspace",
        "Schedule regular breaks to recharge"
      ],
      products: [
        {
          id: "sony-xm5",
          title: "Sony WH-1000XM5 Headphones",
          href: "https://www.amazon.com.au/dp/B09XS7JWHH",
          subtitle: "Premium noise cancellation"
        },
        {
          id: "standing-desk",
          title: "Flexispot Standing Desk",
          href: "https://www.amazon.com.au/s?k=flexispot+standing+desk",
          subtitle: "Ergonomic workspace"
        },
        {
          id: "blue-light-glasses",
          title: "Blue Light Blocking Glasses",
          href: "https://www.amazon.com.au/s?k=blue+light+blocking+glasses",
          subtitle: "Reduce eye strain"
        },
        {
          id: "moleskine-notebook",
          title: "Moleskine Classic Notebook",
          href: "https://www.amazon.com.au/s?k=moleskine+classic+notebook",
          subtitle: "For deep thinking"
        }
      ]
    },
    {
      weightKey: "fox",
      label: "🦊 The Fox - Creative Innovator",
      description: "You thrive on variety, quick thinking, and creative problem-solving.",
      tips: [
        "Use pomodoro technique for focus",
        "Keep multiple projects running",
        "Schedule creative brainstorm time",
        "Build in flexibility to your day"
      ],
      products: [
        {
          id: "ipad-pro",
          title: "iPad with Apple Pencil",
          href: "https://www.amazon.com.au/s?k=ipad+apple+pencil",
          subtitle: "Digital creativity tool"
        },
        {
          id: "whiteboard",
          title: "Magnetic Glass Whiteboard",
          href: "https://www.amazon.com.au/s?k=magnetic+glass+whiteboard",
          subtitle: "Brainstorming space"
        },
        {
          id: "fidget-cube",
          title: "Premium Fidget Cube",
          href: "https://www.amazon.com.au/s?k=fidget+cube",
          subtitle: "Keep hands busy"
        },
        {
          id: "smart-lights",
          title: "Philips Hue Smart Lights",
          href: "https://www.amazon.com.au/s?k=philips+hue",
          subtitle: "Mood lighting"
        }
      ]
    },
    {
      weightKey: "wolf",
      label: "🐺 The Wolf - Strategic Leader",
      description: "You excel at planning, team coordination, and systematic execution.",
      tips: [
        "Use project management tools",
        "Create detailed action plans",
        "Set clear team expectations",
        "Regular check-ins and reviews"
      ],
      products: [
        {
          id: "planner",
          title: "Clever Fox Planner Pro",
          href: "https://www.amazon.com.au/s?k=clever+fox+planner",
          subtitle: "Strategic planning"
        },
        {
          id: "monitor",
          title: "Dell Ultrawide Monitor",
          href: "https://www.amazon.com.au/s?k=dell+ultrawide+monitor",
          subtitle: "See everything at once"
        },
        {
          id: "label-maker",
          title: "Brother P-Touch Label Maker",
          href: "https://www.amazon.com.au/s?k=brother+label+maker",
          subtitle: "Organization tool"
        },
        {
          id: "filing-system",
          title: "Desktop Filing System",
          href: "https://www.amazon.com.au/s?k=desktop+filing+system",
          subtitle: "Stay organized"
        }
      ]
    },
    {
      weightKey: "dolphin",
      label: "🐬 The Dolphin - Social Connector",
      description: "You energize teams, build relationships, and create positive environments.",
      tips: [
        "Schedule regular team check-ins",
        "Create collaborative spaces",
        "Balance social and focus time",
        "Use video calls effectively"
      ],
      products: [
        {
          id: "webcam",
          title: "Logitech Brio 4K Webcam",
          href: "https://www.amazon.com.au/s?k=logitech+brio+4k",
          subtitle: "Crystal clear video calls"
        },
        {
          id: "ring-light",
          title: "Professional Ring Light",
          href: "https://www.amazon.com.au/s?k=ring+light+desk",
          subtitle: "Look great on calls"
        },
        {
          id: "coffee-maker",
          title: "Nespresso Coffee Machine",
          href: "https://www.amazon.com.au/s?k=nespresso+machine",
          subtitle: "Fuel social energy"
        },
        {
          id: "plants",
          title: "Desktop Plants Set",
          href: "https://www.amazon.com.au/s?k=desktop+plants",
          subtitle: "Liven up your space"
        }
      ]
    }
  ]
};