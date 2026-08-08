import { Pathway } from "../types";

export const qaTestAutomation: Pathway = {
  slug: "qa-test-automation",
  title: "QA / Test Automation",
  tagline: "One of the most accessible ways into a tech company: quality assurance and test automation.",
  icon: "🧪",
  matchProfile: {
    degrees: ["Computer Science", "Information Technology", "Any + certs", "Non-technical"],
    skills: ["programming", "python", "javascript", "attention to detail", "troubleshooting", "web development"],
    goodFitFor: [
      "Detail-oriented people who enjoy breaking things methodically",
      "A strong first tech job for career switchers without a CS degree",
      "Good stepping stone toward SDET or full software engineering roles",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: QA & Software Fundamentals",
      summary: "Learn how software actually gets tested before automating anything.",
      milestones: [
        {
          id: "qa-fundamentals",
          title: "Learn manual QA fundamentals",
          description: "Test case design, bug reporting, test plans, and the software development lifecycle.",
          estWeeks: [3, 5],
          resources: [
            { title: "Software Testing Foundations", type: "course", provider: "Coursera (in Google's IT Automation cert)", url: "https://www.coursera.org/professional-certificates/google-it-automation", free: false },
            { title: "ISTQB Foundation Level Syllabus", type: "reading", provider: "ISTQB (free)", url: "https://www.istqb.org/certifications/certified-tester-foundation-level", free: true },
          ],
        },
        {
          id: "basic-programming",
          title: "Learn basic programming (Python or JavaScript)",
          description: "You need real code to write automated tests; this is the biggest jump from manual to automation QA.",
          estWeeks: [5, 8],
          resources: [
            { title: "Python for Everybody", type: "course", provider: "Coursera (Michigan)", url: "https://www.coursera.org/specializations/python", free: false },
          ],
        },
      ],
    },
    {
      id: "automation-tools",
      title: "Phase 2: Test Automation Tools",
      summary: "Learn the frameworks that let you write and run automated tests.",
      milestones: [
        {
          id: "web-automation",
          title: "Learn a web automation framework",
          description: "Selenium or Playwright: automate browser interactions and assertions.",
          estWeeks: [5, 8],
          resources: [
            { title: "Selenium WebDriver with Python", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/selenium-webdriver-with-python3/", free: false },
            { title: "Playwright Docs & Getting Started", type: "reading", provider: "Playwright (free)", url: "https://playwright.dev/docs/intro", free: true },
          ],
        },
        {
          id: "api-testing",
          title: "Learn API testing",
          description: "Test backend endpoints directly, not just through the UI: faster and more reliable.",
          estWeeks: [3, 5],
          resources: [
            { title: "Postman API Testing", type: "course", provider: "Postman Academy (free)", url: "https://academy.postman.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "ci-and-portfolio",
      title: "Phase 3: CI/CD & Portfolio",
      summary: "Show you can integrate tests into a real development pipeline.",
      milestones: [
        {
          id: "ci-integration",
          title: "Run automated tests in a CI pipeline",
          description: "Wire up your test suite to run automatically on every code change using GitHub Actions.",
          estWeeks: [2, 4],
          resources: [
            { title: "GitHub Actions Documentation", type: "reading", provider: "GitHub (free)", url: "https://docs.github.com/en/actions", free: true },
          ],
        },
        {
          id: "test-portfolio",
          title: "Build a test automation portfolio project",
          description: "A public repo with a real test suite (UI + API) against an open demo app, with clear docs.",
          estWeeks: [3, 6],
          resources: [
            { title: "GitHub (host your code + README)", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target QA Analyst, QA Automation Engineer, or SDET roles.",
      milestones: [
        {
          id: "apply-jobs",
          title: "Apply to QA/SDET roles",
          description: "Entry titles: QA Analyst, QA Automation Engineer, Associate SDET.",
          estWeeks: [4, 10],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$95,000",
    entrySalaryUSD: "$58,000 - $75,000",
    growthOutlook: "+15% projected growth over the next decade (much faster than average)",
    demandLevel: "high",
    competitiveness: "medium",
    demandNotes:
      "Every software company needs QA, and it's genuinely one of the easier pathways to break into without a CS degree. Automation skills (not just manual testing) significantly raise both pay and demand, and this role is a common launchpad into full software engineering.",
    commonTitles: ["QA Analyst", "QA Automation Engineer", "SDET", "Test Engineer"],
    typicalTimeToJobReadyMonths: [5, 10],
    experienceLevel: "entry-level",
  },
  interviewPrep: {
    format: [
      "Recruiter screen",
      "Technical screen: testing concepts, sometimes a live bug-hunting exercise on a demo app",
      "Coding/automation exercise: write a test script for a given scenario",
      "Behavioral/culture fit",
    ],
    whatEmployersLookFor: [
      "Systematic, methodical thinking: can you find edge cases others miss",
      "Basic coding ability for automation, even if not a full engineer's depth",
      "Clear, precise bug reports (this is graded harder than people expect)",
      "Familiarity with the SDLC and where QA fits into it",
      "Increasingly: automation-first thinking, since AI-assisted development means more code ships faster and needs equally fast, reliable test coverage",
    ],
    sampleQuestions: [
      "How would you test a login form? List as many test cases as you can",
      "Write a test script that logs into a site and asserts the dashboard loads",
      "What's the difference between smoke testing and regression testing?",
      "Describe a bug you found that was tricky to reproduce",
    ],
    tips: [
      "Practice writing detailed, reproducible bug reports; it's a real differentiator",
      "Show automation code, not just a list of manual test cases, on your resume",
      "This is a strong on-ramp role; be ready to explain your longer-term growth plan",
    ],
  },
};
