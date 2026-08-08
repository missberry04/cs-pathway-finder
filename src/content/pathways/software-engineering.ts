import { Pathway } from "../types";

export const softwareEngineering: Pathway = {
  slug: "software-engineering",
  title: "Software Engineering",
  tagline: "Build production software and get hired as a SWE/full-stack developer.",
  icon: "💻",
  matchProfile: {
    degrees: ["Computer Science", "Software Engineering", "Computer Engineering", "Math", "Information Systems"],
    skills: ["programming", "javascript", "python", "java", "web development", "algorithms", "problem solving"],
    goodFitFor: [
      "People who like building tangible products end-to-end",
      "Strong at logical/algorithmic problem solving",
      "Comfortable with a fast-moving, iterative craft (frequent code review, shipping)",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Programming Fundamentals",
      summary: "Learn to code, understand core CS concepts, and get comfortable with a primary language.",
      milestones: [
        {
          id: "cs-fundamentals",
          title: "Learn programming fundamentals + CS basics",
          description: "Variables, control flow, functions, OOP, memory basics, and how computers work.",
          estWeeks: [6, 10],
          resources: [
            { title: "CS50: Introduction to Computer Science", type: "course", provider: "Harvard/edX", url: "https://cs50.harvard.edu/x/", free: true },
            { title: "The Odin Project (Full Stack Foundations)", type: "course", provider: "The Odin Project", url: "https://www.theodinproject.com/", free: true },
          ],
        },
        {
          id: "pick-language",
          title: "Go deep on one language (Python or JavaScript)",
          description: "Pick one language and get fluent: syntax, standard library, debugging, package managers.",
          estWeeks: [4, 6],
          resources: [
            { title: "Python for Everybody Specialization", type: "course", provider: "Coursera (Michigan)", url: "https://www.coursera.org/specializations/python", free: false },
            { title: "The Complete JavaScript Course", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/the-complete-javascript-course/", free: false },
          ],
        },
      ],
    },
    {
      id: "dsa",
      title: "Phase 2: Data Structures & Algorithms",
      summary: "Build the problem-solving toolkit interviewers actually test for.",
      milestones: [
        {
          id: "dsa-course",
          title: "Take a structured DSA course",
          description: "Arrays, hashmaps, trees, graphs, recursion, sorting, complexity analysis (Big-O).",
          estWeeks: [6, 8],
          resources: [
            { title: "Data Structures & Algorithms Specialization", type: "course", provider: "Coursera (UC San Diego)", url: "https://www.coursera.org/specializations/data-structures-algorithms", free: false },
            { title: "Master the Coding Interview: Data Structures + Algorithms", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/", free: false },
          ],
        },
        {
          id: "leetcode-grind",
          title: "Practice by pattern, not randomly",
          description: "Work through problems grouped by pattern (two pointers, sliding window, BFS/DFS, DP) instead of grinding random problems.",
          estWeeks: [8, 16],
          resources: [
            { title: "LeetCode (Top Interview 150 list)", type: "practice", provider: "LeetCode", url: "https://leetcode.com/studyplan/top-interview-150/", free: true },
            { title: "NeetCode 150 (curated + free video explanations)", type: "practice", provider: "NeetCode", url: "https://neetcode.io/practice", free: true },
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "Phase 3: Build a Portfolio",
      summary: "Ship 2-3 real projects that prove you can build and deploy software end to end.",
      milestones: [
        {
          id: "fullstack-project",
          title: "Build a full-stack web app",
          description: "A CRUD app with auth, a database, and a deployed live link: this is your #1 portfolio piece.",
          estWeeks: [4, 8],
          resources: [
            { title: "Full Stack Open", type: "course", provider: "University of Helsinki", url: "https://fullstackopen.com/en/", free: true },
            { title: "GitHub (host your code + README)", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
        {
          id: "deploy-and-document",
          title: "Deploy it and write it up",
          description: "Deploy to a real host, write a clear README, and be ready to explain every design decision.",
          estWeeks: [1, 2],
          resources: [
            { title: "Vercel (free hosting for frontend/full-stack apps)", type: "tool", provider: "Vercel", url: "https://vercel.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "systems-and-apply",
      title: "Phase 4: System Design + Job Search",
      summary: "Learn baseline system design, tighten your resume, and start applying.",
      milestones: [
        {
          id: "system-design-basics",
          title: "Learn system design basics",
          description: "APIs, databases, caching, load balancing: enough to pass entry/mid-level system design rounds.",
          estWeeks: [3, 5],
          resources: [
            { title: "System Design Primer", type: "reading", provider: "GitHub (donnemartin)", url: "https://github.com/donnemartin/system-design-primer", free: true },
            { title: "Grokking the System Design Interview", type: "course", provider: "DesignGurus / Educative", url: "https://www.designgurus.io/course/grokking-the-system-design-interview", free: false },
          ],
        },
        {
          id: "apply",
          title: "Resume, mock interviews, and applications",
          description: "Tailor your resume per role, do mock interviews, and apply consistently (aim for volume + quality).",
          estWeeks: [4, 12],
          resources: [
            { title: "Pramp (free peer mock interviews)", type: "practice", provider: "Pramp", url: "https://www.pramp.com/", free: true },
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$120,000",
    entrySalaryUSD: "$75,000 - $95,000",
    growthOutlook: "+17% projected growth over the next decade (much faster than average)",
    demandLevel: "high",
    competitiveness: "high",
    demandNotes:
      "Entry-level SWE hiring has gotten more competitive since 2023 due to layoffs and AI-tooling productivity gains, but demand for engineers who can ship real projects and reason about systems remains strong, especially outside big-name tech.",
    commonTitles: ["Software Engineer", "Full-Stack Developer", "Backend Engineer", "Frontend Engineer"],
    typicalTimeToJobReadyMonths: [9, 15],
    experienceLevel: "entry-level",
  },
  interviewPrep: {
    format: [
      "Online assessment (LeetCode-style, timed)",
      "1-2 technical phone/video screens (live coding)",
      "Onsite/virtual loop: 2-4 coding rounds + 1 system design (mid-level+) + 1 behavioral",
    ],
    whatEmployersLookFor: [
      "Clean, working code under time pressure, not just the 'optimal' answer",
      "Clear communication of your thought process while solving problems",
      "Real shipped projects, not just tutorials followed step by step",
      "Basic system design intuition for mid-level roles",
      "Genuine curiosity about their product/stack",
      "Increasingly: comfort using AI coding assistants well, not avoiding them, paired with the judgment to review and debug what they produce",
    ],
    sampleQuestions: [
      "Reverse a linked list / detect a cycle in a linked list",
      "Given an array, find two numbers that sum to a target (Two Sum)",
      "Design a URL shortener / rate limiter (system design)",
      "Tell me about a time you disagreed with a teammate's technical decision",
    ],
    tips: [
      "Practice explaining your approach out loud before you start typing",
      "Know your own portfolio projects cold: be ready for deep follow-up questions",
      "Apply broadly early rather than waiting until you feel '100% ready'",
    ],
  },
};
