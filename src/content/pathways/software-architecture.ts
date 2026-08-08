import { Pathway } from "../types";

export const softwareArchitecture: Pathway = {
  slug: "software-architecture",
  title: "Software Architecture",
  tagline: "A senior-track progression, not a first job: grow from engineer into technical architect.",
  icon: "🏛️",
  matchProfile: {
    degrees: ["Computer Science", "Software Engineering", "Computer Engineering"],
    skills: ["systems design", "programming", "algorithms", "cloud", "research"],
    goodFitFor: [
      "Working software engineers (typically 4+ years in) who want to go broad and deep on systems, not management",
      "People who enjoy tradeoff discussions and long-term technical direction over day-to-day feature work",
      "Not a starting point: this pathway assumes you already have professional software engineering experience",
    ],
  },
  phases: [
    {
      id: "strengthen-foundations",
      title: "Phase 1: Strengthen Your Engineering Core",
      summary: "Architects need deep credibility as engineers first; this phase closes any remaining gaps.",
      milestones: [
        {
          id: "advanced-design",
          title: "Master advanced system design",
          description: "Go beyond interview-level system design into real tradeoffs: consistency models, failure modes, capacity planning.",
          estWeeks: [8, 12],
          resources: [
            { title: "Designing Data-Intensive Applications", type: "reading", provider: "O'Reilly (Martin Kleppmann)", url: "https://dataintensive.net/", free: false },
            { title: "Grokking the System Design Interview", type: "course", provider: "DesignGurus / Educative", url: "https://www.designgurus.io/course/grokking-the-system-design-interview", free: false },
          ],
        },
        {
          id: "multiple-stacks",
          title: "Get hands-on across multiple stacks",
          description: "Work directly with at least one system outside your comfort zone: a different language, database, or cloud provider.",
          estWeeks: [8, 16],
          resources: [
            { title: "AWS Certified Solutions Architect - Associate", type: "course", provider: "Udemy (Stephane Maarek)", url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/", free: false },
          ],
        },
      ],
    },
    {
      id: "architecture-skills",
      title: "Phase 2: Architecture-Specific Skills",
      summary: "Learn the patterns, tradeoffs, and documentation practices unique to the architect role.",
      milestones: [
        {
          id: "patterns-tradeoffs",
          title: "Learn architecture patterns and their tradeoffs",
          description: "Microservices vs monolith, event-driven design, CQRS, and when each is (and isn't) the right call.",
          estWeeks: [6, 10],
          resources: [
            { title: "Fundamentals of Software Architecture", type: "reading", provider: "O'Reilly (Mark Richards & Neal Ford)", url: "https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/", free: false },
          ],
        },
        {
          id: "adrs-documentation",
          title: "Practice architecture decision records (ADRs) and diagramming",
          description: "Learn to document and communicate decisions clearly to both engineers and non-technical stakeholders.",
          estWeeks: [2, 4],
          resources: [
            { title: "Architecture Decision Records (ADR) GitHub org", type: "reading", provider: "adr.github.io (free)", url: "https://adr.github.io/", free: true },
          ],
        },
      ],
    },
    {
      id: "leadership",
      title: "Phase 3: Technical Leadership & Influence",
      summary: "Architecture is as much about influence and communication as it is about technical depth.",
      milestones: [
        {
          id: "lead-a-project",
          title: "Lead the technical design of a real project",
          description: "Own the end-to-end architecture of a significant feature or system at your current job; this is your proof point.",
          estWeeks: [12, 24],
          resources: [
            { title: "Staff Engineer: Leadership Beyond the Management Track", type: "reading", provider: "Will Larson (free online)", url: "https://staffeng.com/", free: true },
          ],
        },
        {
          id: "cross-team-communication",
          title: "Practice cross-team technical communication",
          description: "Present designs to other teams and leadership; get comfortable defending decisions under scrutiny.",
          estWeeks: [4, 8],
          resources: [
            { title: "Staff Engineer (book excerpts and case studies)", type: "reading", provider: "staffeng.com (free)", url: "https://staffeng.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "transition",
      title: "Phase 4: Make the Transition",
      summary: "Move into the role, whether internally or by applying externally.",
      milestones: [
        {
          id: "internal-or-external",
          title: "Pursue an internal promotion or apply externally",
          description: "Internal transitions are more common than external hires for this role; build the case with your existing leadership first.",
          estWeeks: [8, 20],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$165,000",
    entrySalaryUSD: "$140,000 - $170,000",
    growthOutlook: "+17% projected growth over the next decade for senior/staff-level technical roles",
    demandLevel: "medium",
    competitiveness: "high",
    demandNotes:
      "Not an entry-level role by design: nearly all architect postings require 5-10+ years of engineering experience. Demand is steady since every growing engineering org eventually needs this function, but the candidate pool is inherently smaller and more senior.",
    commonTitles: ["Software Architect", "Solutions Architect", "Staff Engineer", "Principal Engineer"],
    typicalTimeToJobReadyMonths: [18, 36],
    experienceLevel: "requires-experience",
  },
  interviewPrep: {
    format: [
      "System design deep-dive (much longer and more open-ended than a standard SWE interview)",
      "Architecture case study: critique or redesign an existing system",
      "Technical leadership/behavioral interview about past decisions and influence",
      "Panel with senior engineering leadership",
    ],
    whatEmployersLookFor: [
      "A track record of technical decisions that held up (or clearly documented lessons when they didn't)",
      "Ability to communicate tradeoffs to both engineers and executives",
      "Breadth across systems, not just depth in one area",
      "Evidence of influence without direct authority: getting teams aligned on a technical direction",
      "Increasingly: a point of view on where AI tooling fits into the architecture, not just the product",
    ],
    sampleQuestions: [
      "Walk me through the most significant architectural decision you've owned, and what you'd do differently",
      "Design a system that needs to scale from 10,000 to 10 million users",
      "How do you handle disagreement with another senior engineer about architectural direction?",
      "How do you decide when to introduce a new technology into an existing stack?",
    ],
    tips: [
      "This is a 'grow into it' pathway, not a 'study your way into it' one; real project ownership matters most",
      "Document your past architectural decisions now, even informally; they become your best interview material later",
      "Internal mobility is usually the fastest path; make your architectural thinking visible to your current leadership",
    ],
  },
};
