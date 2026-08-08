import { Pathway } from "../types";

export const mobileDevelopment: Pathway = {
  slug: "mobile-development",
  title: "Mobile App Development",
  tagline: "Build and ship real iOS/Android apps, then get hired as a mobile engineer.",
  icon: "📱",
  matchProfile: {
    degrees: ["Computer Science", "Software Engineering", "Computer Engineering", "Information Systems"],
    skills: ["programming", "javascript", "swift", "kotlin", "mobile", "ui development", "algorithms"],
    goodFitFor: [
      "People who like seeing their work run on a device in someone's hand",
      "Enjoy UI polish and performance details as much as backend logic",
      "Comfortable picking a platform (iOS or Android) and going deep",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Programming Fundamentals",
      summary: "Mobile development still starts with solid general programming skills.",
      milestones: [
        {
          id: "cs-fundamentals",
          title: "Learn programming fundamentals",
          description: "Variables, control flow, functions, OOP: the basics you need before touching a mobile SDK.",
          estWeeks: [5, 8],
          resources: [
            { title: "CS50: Introduction to Computer Science", type: "course", provider: "Harvard/edX", url: "https://cs50.harvard.edu/x/", free: true },
          ],
        },
        {
          id: "pick-platform",
          title: "Pick a platform: iOS (Swift) or Android (Kotlin)",
          description: "Learn the language and core SDK for one platform first; cross-platform frameworks come later if needed.",
          estWeeks: [6, 10],
          resources: [
            { title: "100 Days of SwiftUI", type: "course", provider: "Hacking with Swift (free)", url: "https://www.hackingwithswift.com/100/swiftui", free: true },
            { title: "Android Basics with Compose", type: "course", provider: "Google/Android Developers (free)", url: "https://developer.android.com/courses/android-basics-compose/course", free: true },
          ],
        },
      ],
    },
    {
      id: "core-mobile-skills",
      title: "Phase 2: Core Mobile Skills",
      summary: "Learn the pieces every real app needs: navigation, data, and networking.",
      milestones: [
        {
          id: "ui-navigation",
          title: "Learn UI layout and navigation",
          description: "Build multi-screen apps with proper navigation, state management, and responsive layouts.",
          estWeeks: [4, 6],
          resources: [
            { title: "iOS & Swift: The Complete Bootcamp", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/", free: false },
            { title: "The Complete Android 14 & Kotlin Development Masterclass", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/complete-android-kotlin-developer-course/", free: false },
          ],
        },
        {
          id: "networking-storage",
          title: "Networking, local storage, and APIs",
          description: "Fetch data from REST APIs, persist data locally, and handle async operations properly.",
          estWeeks: [4, 6],
          resources: [
            { title: "Android Developers: Connect to the network", type: "reading", provider: "Google (free)", url: "https://developer.android.com/training/basics/network-ops", free: true },
          ],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Phase 3: Build & Ship a Portfolio App",
      summary: "One polished, published app beats five half-finished tutorials.",
      milestones: [
        {
          id: "flagship-app",
          title: "Build a flagship portfolio app",
          description: "A real app solving a real problem, with a backend, proper error handling, and a clean UI.",
          estWeeks: [6, 10],
          resources: [
            { title: "GitHub (host your code + README)", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
        {
          id: "publish-app",
          title: "Publish to the App Store or Google Play",
          description: "Go through the actual submission process; this is a strong signal to employers that you can ship.",
          estWeeks: [1, 3],
          resources: [
            { title: "App Store Connect", type: "tool", provider: "Apple", url: "https://appstoreconnect.apple.com/", free: false },
            { title: "Google Play Console", type: "tool", provider: "Google", url: "https://play.google.com/console/about/", free: false },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target junior/associate mobile engineer roles.",
      milestones: [
        {
          id: "dsa-for-mobile",
          title: "Brush up on data structures & algorithms",
          description: "Mobile interviews still test general coding ability alongside platform-specific knowledge.",
          estWeeks: [4, 6],
          resources: [
            { title: "NeetCode 150", type: "practice", provider: "NeetCode", url: "https://neetcode.io/practice", free: true },
          ],
        },
        {
          id: "apply-jobs",
          title: "Apply to iOS/Android Developer roles",
          description: "Entry titles: Junior iOS Developer, Junior Android Developer, Mobile Engineer I.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$118,000",
    entrySalaryUSD: "$72,000 - $92,000",
    growthOutlook: "+17% projected growth over the next decade (much faster than average)",
    demandLevel: "medium",
    competitiveness: "high",
    demandNotes:
      "Fewer entry-level mobile-specific roles than general web/backend roles; most companies want mobile engineers with at least one shipped app. Specializing early (iOS vs Android) and having a published app in the store meaningfully improves odds.",
    commonTitles: ["iOS Developer", "Android Developer", "Mobile Engineer", "React Native Developer"],
    typicalTimeToJobReadyMonths: [9, 16],
    experienceLevel: "some-experience-helpful",
  },
  interviewPrep: {
    format: [
      "Recruiter screen",
      "Technical screen: platform-specific questions (lifecycle, memory management, concurrency) plus general coding",
      "Take-home or live coding project (build a small screen/feature)",
      "System design for mobile (e.g., offline-first sync, image loading/caching)",
    ],
    whatEmployersLookFor: [
      "A published, working app you can walk through in detail",
      "Understanding of platform lifecycle and memory/performance basics",
      "Comfort with async programming and networking",
      "Attention to UI/UX polish, not just functional code",
      "Increasingly: some cross-platform framework experience (React Native, Flutter), since many teams now build for both platforms from one codebase",
    ],
    sampleQuestions: [
      "Walk me through the lifecycle of an Activity/ViewController",
      "How would you handle a network call that might fail or time out?",
      "Design the data layer for an offline-first note-taking app",
      "What tradeoffs would you consider between native and cross-platform development?",
    ],
    tips: [
      "Publish at least one app, even a small one; 'in the store' carries real weight",
      "Be ready to discuss why you chose your app's architecture, not just how it works",
      "Know one platform deeply rather than being shallow across three frameworks",
    ],
  },
};
