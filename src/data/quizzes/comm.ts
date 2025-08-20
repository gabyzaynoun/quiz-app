import type { Quiz } from "./types";

export const commQuiz: Quiz = {
  slug: "comm",
  title: "Communication Style Assessment",
  description: "Discover your communication patterns and get tools to enhance your style.",
  weightKeys: ["direct", "supportive", "expressive", "analytical"],

  questions: [
    {
      id: "q1",
      prompt: "Your email style is typically...",
      answers: [
        { id: "a", label: "Brief and to the point", weights: { direct: 2 } },
        { id: "b", label: "Warm with personal touches", weights: { supportive: 2 } },
        { id: "c", label: "Detailed with context", weights: { expressive: 2 } },
        { id: "d", label: "Data-driven with facts", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q2",
      prompt: "In meetings, you prefer to...",
      answers: [
        { id: "a", label: "Get straight to decisions", weights: { direct: 2 } },
        { id: "b", label: "Ensure everyone is heard", weights: { supportive: 2 } },
        { id: "c", label: "Share ideas enthusiastically", weights: { expressive: 2 } },
        { id: "d", label: "Present data and analysis", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q3",
      prompt: "When giving feedback, you...",
      answers: [
        { id: "a", label: "Are direct and honest", weights: { direct: 2 } },
        { id: "b", label: "Cushion with positives", weights: { supportive: 2 } },
        { id: "c", label: "Tell stories and examples", weights: { expressive: 2 } },
        { id: "d", label: "Use metrics and evidence", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q4",
      prompt: "Your presentation style?",
      answers: [
        { id: "a", label: "Quick, focused on outcomes", weights: { direct: 2 } },
        { id: "b", label: "Interactive and inclusive", weights: { supportive: 2 } },
        { id: "c", label: "Engaging with visuals", weights: { expressive: 2 } },
        { id: "d", label: "Structured with data", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q5",
      prompt: "Handling disagreements?",
      answers: [
        { id: "a", label: "Address it immediately", weights: { direct: 2 } },
        { id: "b", label: "Find common ground", weights: { supportive: 2 } },
        { id: "c", label: "Reframe perspectives", weights: { expressive: 2 } },
        { id: "d", label: "Focus on facts only", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q6",
      prompt: "Your listening style?",
      answers: [
        { id: "a", label: "Focus on action items", weights: { direct: 2 } },
        { id: "b", label: "Tune into emotions", weights: { supportive: 2 } },
        { id: "c", label: "Connect to big picture", weights: { expressive: 2 } },
        { id: "d", label: "Note specific details", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q7",
      prompt: "Team communication preference?",
      answers: [
        { id: "a", label: "Quick stand-ups", weights: { direct: 2 } },
        { id: "b", label: "Regular check-ins", weights: { supportive: 2 } },
        { id: "c", label: "Brainstorm sessions", weights: { expressive: 2 } },
        { id: "d", label: "Written updates", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q8",
      prompt: "Your negotiation approach?",
      answers: [
        { id: "a", label: "State position clearly", weights: { direct: 2 } },
        { id: "b", label: "Build relationships first", weights: { supportive: 2 } },
        { id: "c", label: "Paint the vision", weights: { expressive: 2 } },
        { id: "d", label: "Present data points", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q9",
      prompt: "Preferred feedback format?",
      answers: [
        { id: "a", label: "Direct conversation", weights: { direct: 2 } },
        { id: "b", label: "Private discussion", weights: { supportive: 2 } },
        { id: "c", label: "Collaborative review", weights: { expressive: 2 } },
        { id: "d", label: "Written with metrics", weights: { analytical: 2 } }
      ]
    },
    {
      id: "q10",
      prompt: "Your networking style?",
      answers: [
        { id: "a", label: "Purposeful connections", weights: { direct: 2 } },
        { id: "b", label: "Deep relationships", weights: { supportive: 2 } },
        { id: "c", label: "Wide social circle", weights: { expressive: 2 } },
        { id: "d", label: "Expert communities", weights: { analytical: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "direct",
      label: "🎯 Direct Communicator",
      description: "You value efficiency, clarity, and getting to the point quickly.",
      tips: [
        "Add context for relationship-builders",
        "Allow time for questions",
        "Acknowledge emotions when present",
        "Use bullet points for clarity"
      ],
      products: [
        {
          id: "timer",
          title: "Time Timer MOD",
          href: "https://www.amazon.com.au/s?k=time+timer+mod",
          subtitle: "Keep meetings focused"
        },
        {
          id: "notebook",
          title: "Action Notebook",
          href: "https://www.amazon.com.au/s?k=action+method+notebook",
          subtitle: "Track decisions"
        },
        {
          id: "presenter",
          title: "Logitech Presenter",
          href: "https://www.amazon.com.au/s?k=logitech+presenter",
          subtitle: "Professional presentations"
        }
      ]
    },
    {
      weightKey: "supportive",
      label: "🤝 Supportive Communicator",
      description: "You prioritize relationships, harmony, and ensuring everyone feels heard.",
      tips: [
        "Practice being more direct",
        "Set time boundaries",
        "Don't avoid difficult conversations",
        "Balance care with clarity"
      ],
      products: [
        {
          id: "cards",
          title: "Conversation Starter Cards",
          href: "https://www.amazon.com.au/s?k=conversation+cards",
          subtitle: "Build connections"
        },
        {
          id: "tea-set",
          title: "Tea Gift Set",
          href: "https://www.amazon.com.au/s?k=tea+gift+set",
          subtitle: "Create welcoming space"
        },
        {
          id: "cushions",
          title: "Comfortable Cushions",
          href: "https://www.amazon.com.au/s?k=office+cushions",
          subtitle: "Comfort in meetings"
        }
      ]
    },
    {
      weightKey: "expressive",
      label: "🎨 Expressive Communicator",
      description: "You inspire others with enthusiasm, stories, and creative ideas.",
      tips: [
        "Focus on key points",
        "Use visuals effectively",
        "Allow others to speak",
        "Document decisions clearly"
      ],
      products: [
        {
          id: "markers",
          title: "Colorful Markers Set",
          href: "https://www.amazon.com.au/s?k=whiteboard+markers+colors",
          subtitle: "Visual communication"
        },
        {
          id: "sticky-notes",
          title: "Post-it Super Sticky",
          href: "https://www.amazon.com.au/s?k=post+it+super+sticky",
          subtitle: "Brainstorming tools"
        },
        {
          id: "tablet",
          title: "Drawing Tablet",
          href: "https://www.amazon.com.au/s?k=wacom+tablet",
          subtitle: "Digital creativity"
        }
      ]
    },
    {
      weightKey: "analytical",
      label: "📊 Analytical Communicator",
      description: "You focus on data, logic, and systematic thinking in communication.",
      tips: [
        "Start with summary first",
        "Add human context",
        "Simplify complex data",
        "Consider emotional factors"
      ],
      products: [
        {
          id: "calculator",
          title: "Scientific Calculator",
          href: "https://www.amazon.com.au/s?k=casio+scientific+calculator",
          subtitle: "Quick calculations"
        },
        {
          id: "graph-paper",
          title: "Graph Paper Notebook",
          href: "https://www.amazon.com.au/s?k=graph+paper+notebook",
          subtitle: "Data visualization"
        },
        {
          id: "laser-pointer",
          title: "Professional Laser Pointer",
          href: "https://www.amazon.com.au/s?k=presentation+laser+pointer",
          subtitle: "Highlight data points"
        }
      ]
    }
  ]
};