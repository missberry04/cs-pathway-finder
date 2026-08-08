import { Pathway } from "../types";

export const gameDevelopment: Pathway = {
  slug: "game-development",
  title: "Game Development",
  tagline: "Build playable games and break into the games industry as a gameplay/engine programmer.",
  icon: "🎮",
  matchProfile: {
    degrees: ["Computer Science", "Game Development", "Computer Engineering", "Math"],
    skills: ["programming", "algorithms", "linear algebra", "problem solving", "ui development"],
    goodFitFor: [
      "People motivated by shipping something playable, not just functional",
      "Comfortable with a notoriously competitive, portfolio-first hiring market",
      "Enjoy math-heavy problem solving (physics, rendering, AI)",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Programming Fundamentals",
      summary: "Get fluent in a general-purpose language before touching a game engine.",
      milestones: [
        {
          id: "cs-fundamentals",
          title: "Learn programming fundamentals",
          description: "Variables, control flow, OOP, and basic data structures.",
          estWeeks: [5, 8],
          resources: [
            { title: "CS50: Introduction to Computer Science", type: "course", provider: "Harvard/edX", url: "https://cs50.harvard.edu/x/", free: true },
          ],
        },
        {
          id: "cpp-or-csharp",
          title: "Learn C++ or C#",
          description: "C++ for Unreal Engine, C# for Unity: pick based on which engine you'll specialize in.",
          estWeeks: [5, 8],
          resources: [
            { title: "C++ Fundamentals", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/", free: false },
            { title: "C# Intermediate: Classes, Interfaces and OOP", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/", free: false },
          ],
        },
      ],
    },
    {
      id: "engine",
      title: "Phase 2: Learn a Game Engine",
      summary: "Pick Unity or Unreal and build small, complete projects rather than one huge unfinished one.",
      milestones: [
        {
          id: "engine-basics",
          title: "Learn engine fundamentals",
          description: "Scene graphs, game loops, physics, input handling, and basic scripting in the engine.",
          estWeeks: [6, 10],
          resources: [
            { title: "Complete C# Unity Game Developer 3D", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/unitycourse2/", free: false },
            { title: "Unreal Engine 5 C++ Developer", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/unrealcourse/", free: false },
          ],
        },
        {
          id: "small-games",
          title: "Build 3-5 small, finished games",
          description: "Clones of simple classics (Pong, Breakout, a platformer): finished and playable beats ambitious and incomplete.",
          estWeeks: [8, 14],
          resources: [
            { title: "itch.io (publish your games)", type: "tool", provider: "itch.io", url: "https://itch.io/", free: true },
          ],
        },
      ],
    },
    {
      id: "specialize-and-portfolio",
      title: "Phase 3: Specialize & Build a Demo Reel",
      summary: "Game studios hire for specific roles: pick gameplay, engine/tools, or graphics programming.",
      milestones: [
        {
          id: "specialization",
          title: "Choose a specialization",
          description: "Gameplay programming, engine/tools programming, or graphics/rendering: each has a different skill emphasis.",
          estWeeks: [6, 12],
          resources: [
            { title: "Game Programming Patterns (free online book)", type: "reading", provider: "gameprogrammingpatterns.com", url: "https://gameprogrammingpatterns.com/", free: true },
          ],
        },
        {
          id: "portfolio-project",
          title: "Build one polished portfolio game",
          description: "One complete, well-scoped game with a trailer/demo reel is worth more than ten prototypes.",
          estWeeks: [8, 14],
          resources: [
            { title: "GitHub (host your code + README)", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target junior gameplay/engine programmer roles at studios.",
      milestones: [
        {
          id: "dsa-for-games",
          title: "Brush up on data structures & algorithms",
          description: "Game studios still test general programming and problem-solving ability alongside engine knowledge.",
          estWeeks: [4, 6],
          resources: [
            { title: "NeetCode 150", type: "practice", provider: "NeetCode", url: "https://neetcode.io/practice", free: true },
          ],
        },
        {
          id: "apply-jobs",
          title: "Apply to Junior Gameplay/Engine Programmer roles",
          description: "Also consider QA and tools roles at studios as an entry point; internal transfers into gameplay roles are common.",
          estWeeks: [6, 16],
          resources: [
            { title: "Hitmarker (games industry job board)", type: "tool", provider: "Hitmarker", url: "https://hitmarker.net/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$105,000",
    entrySalaryUSD: "$65,000 - $85,000",
    growthOutlook: "+11% projected growth over the next decade (faster than average)",
    demandLevel: "medium",
    competitiveness: "very high",
    demandNotes:
      "One of the most competitive and portfolio-driven pathways here; far more applicants than junior openings at most studios, and the industry has seen significant layoffs in recent years. A strong, finished demo project matters more than credentials.",
    commonTitles: ["Gameplay Programmer", "Game Engineer", "Tools Programmer", "Graphics Programmer"],
    typicalTimeToJobReadyMonths: [12, 24],
    experienceLevel: "some-experience-helpful",
  },
  interviewPrep: {
    format: [
      "Portfolio/demo review",
      "Technical screen: algorithms, math (vectors, matrices), and engine-specific questions",
      "Take-home coding challenge or live coding in-engine",
      "Studio culture/team fit interview",
    ],
    whatEmployersLookFor: [
      "A finished, polished game you can demo and explain in depth",
      "Solid math fundamentals: vectors, trigonometry, basic linear algebra",
      "Understanding of performance constraints (frame budgets, memory)",
      "Genuine passion for games, evident in what you've built and played",
      "Increasingly: awareness of AI-assisted content/code tools in game pipelines, alongside solid fundamentals underneath them",
    ],
    sampleQuestions: [
      "Walk me through the architecture of your portfolio game",
      "How would you implement a simple state machine for an enemy AI?",
      "What would you optimize first if a game was dropping frames?",
      "Why this studio, and why this specific game/genre?",
    ],
    tips: [
      "Finish small projects rather than abandoning ambitious ones halfway",
      "Record a short gameplay trailer; it's often the first thing a recruiter watches",
      "Expect this market to be slower and more competitive than most other pathways here",
    ],
  },
};
