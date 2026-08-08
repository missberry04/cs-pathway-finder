import { Pathway } from "../types";

export const uxUiDesign: Pathway = {
  slug: "ux-ui-design",
  title: "UX/UI Design",
  tagline: "Design the products people use, and get hired as a product/UI designer.",
  icon: "🎨",
  matchProfile: {
    degrees: ["Design", "HCI (Human-Computer Interaction)", "Psychology", "Non-technical", "Any + portfolio"],
    skills: ["ui development", "curiosity", "attention to detail", "problem solving", "research"],
    goodFitFor: [
      "People who think visually and care about how things feel to use, not just how they work",
      "Comfortable with critique and iterating on work repeatedly",
      "Note: design-adjacent rather than core CS, but hired through the same tech pipelines and often paired closely with engineering teams",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Design Fundamentals",
      summary: "Learn the principles behind good design before touching tools.",
      milestones: [
        {
          id: "design-principles",
          title: "Learn visual and UX design fundamentals",
          description: "Typography, color, layout, hierarchy, and core UX principles like usability heuristics.",
          estWeeks: [4, 6],
          resources: [
            { title: "Google UX Design Professional Certificate", type: "course", provider: "Coursera (Google)", url: "https://www.coursera.org/professional-certificates/google-ux-design", free: false },
          ],
        },
        {
          id: "design-tool",
          title: "Learn Figma",
          description: "The industry-standard design and prototyping tool; get genuinely fluent, not just familiar.",
          estWeeks: [3, 5],
          resources: [
            { title: "Figma for Beginners", type: "course", provider: "Figma Academy (free)", url: "https://www.figma.com/academy/", free: true },
          ],
        },
      ],
    },
    {
      id: "ux-process",
      title: "Phase 2: The UX Process",
      summary: "Learn to research, understand users, and validate design decisions, not just make things look nice.",
      milestones: [
        {
          id: "user-research",
          title: "Learn user research methods",
          description: "User interviews, surveys, personas, and usability testing: how to design based on evidence.",
          estWeeks: [3, 5],
          resources: [
            { title: "Nielsen Norman Group UX Research Articles", type: "reading", provider: "NN/g (free)", url: "https://www.nngroup.com/articles/", free: true },
          ],
        },
        {
          id: "wireframing-prototyping",
          title: "Wireframing and prototyping",
          description: "Go from low-fidelity sketches to interactive high-fidelity prototypes.",
          estWeeks: [3, 5],
          resources: [
            { title: "UX Design Fundamentals", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/ux-fundamentals/", free: false },
          ],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Phase 3: Build a Portfolio",
      summary: "In design, your portfolio is your resume: 3 strong case studies beat any list of skills.",
      milestones: [
        {
          id: "case-studies",
          title: "Build 3 in-depth case studies",
          description: "Show your full process for each: problem, research, iterations, and final outcome, not just polished screens.",
          estWeeks: [8, 14],
          resources: [
            { title: "Portfolio site (Framer, Webflow, or a simple site)", type: "tool", provider: "Framer", url: "https://www.framer.com/", free: true },
          ],
        },
        {
          id: "design-critique",
          title: "Get feedback from working designers",
          description: "Join a design community and get real critique before you start applying.",
          estWeeks: [2, 4],
          resources: [
            { title: "ADPList (free design mentorship)", type: "practice", provider: "ADPList", url: "https://adplist.org/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target junior/associate product or UX designer roles.",
      milestones: [
        {
          id: "apply-jobs",
          title: "Apply to Junior/Associate Product Designer roles",
          description: "Entry titles: Junior UX Designer, Associate Product Designer, UI Designer.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$100,000",
    entrySalaryUSD: "$62,000 - $80,000",
    growthOutlook: "+8% projected growth over the next decade (faster than average)",
    demandLevel: "medium",
    competitiveness: "high",
    demandNotes:
      "Design roles are more portfolio-gated than almost any other pathway here: a strong case-study portfolio matters more than a design degree. Entry-level roles are competitive since design teams are typically smaller than engineering teams at most companies.",
    commonTitles: ["UX Designer", "UI Designer", "Product Designer", "UX Researcher"],
    typicalTimeToJobReadyMonths: [7, 14],
    experienceLevel: "some-experience-helpful",
  },
  interviewPrep: {
    format: [
      "Portfolio review",
      "Case study presentation: walk through one project's full process",
      "Whiteboard/design challenge: solve a small design problem live",
      "Team fit and collaboration interview",
    ],
    whatEmployersLookFor: [
      "Clear articulation of design decisions and the reasoning behind them",
      "Evidence of a real process: research and iteration, not just final polished screens",
      "Ability to take critique well and iterate quickly",
      "Collaboration skills; designers work in constant back-and-forth with engineers and PMs",
      "Increasingly: fluency with AI design/prototyping tools, since they've compressed how fast prototypes are expected to move from idea to testable",
    ],
    sampleQuestions: [
      "Walk me through your favorite project in your portfolio",
      "How do you handle disagreement with an engineer or PM about a design decision?",
      "Redesign this everyday object or app screen; talk through your thinking",
      "How do you know when a design is 'done' or ready to ship?",
    ],
    tips: [
      "Depth on 3 strong case studies beats breadth across ten shallow ones",
      "Practice narrating your process out loud; portfolio reviews are as much about storytelling as visuals",
      "Get outside critique before applying; blind spots in your own work are common",
    ],
  },
};
