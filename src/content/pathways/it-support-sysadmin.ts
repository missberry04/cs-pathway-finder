import { Pathway } from "../types";

export const itSupportSysadmin: Pathway = {
  slug: "it-support-sysadmin",
  title: "IT Support / Systems Administration",
  tagline: "The classic first tech job: help desk to sysadmin, no degree required.",
  icon: "🖥️",
  matchProfile: {
    degrees: ["Any", "Non-technical", "Self-taught + certs"],
    skills: ["troubleshooting", "networking", "linux", "attention to detail", "systems administration"],
    goodFitFor: [
      "People who want the fastest, most accessible entry point into a tech career",
      "Enjoy hands-on troubleshooting and helping people directly",
      "A strong launchpad into cybersecurity, cloud, or DevOps later",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: IT Fundamentals & First Cert",
      summary: "Learn the basics of hardware, operating systems, and networking, then get certified.",
      milestones: [
        {
          id: "aplus-cert",
          title: "Study for and pass CompTIA A+",
          description: "The standard entry certification for IT support roles: hardware, OS, troubleshooting, and basic networking.",
          estWeeks: [6, 10],
          resources: [
            { title: "CompTIA A+ Certification Course", type: "course", provider: "Professor Messer (free)", url: "https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-training-course/", free: true },
            { title: "CompTIA A+ Exam Info", type: "cert", provider: "CompTIA", url: "https://www.comptia.org/certifications/a", free: false },
          ],
        },
        {
          id: "os-basics",
          title: "Get comfortable administering Windows and Linux",
          description: "User management, file permissions, installing software, and basic command-line usage on both platforms.",
          estWeeks: [4, 6],
          resources: [
            { title: "Linux Journey (free)", type: "reading", provider: "Linux Journey", url: "https://linuxjourney.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "networking-and-second-cert",
      title: "Phase 2: Networking & Second Cert",
      summary: "Networking knowledge is what separates help desk from systems administration.",
      milestones: [
        {
          id: "network-plus",
          title: "Study for and pass CompTIA Network+",
          description: "TCP/IP, DNS, DHCP, VPNs, and troubleshooting network connectivity issues.",
          estWeeks: [6, 8],
          resources: [
            { title: "Network+ Certification Course", type: "course", provider: "Professor Messer (free)", url: "https://www.professormesser.com/network-plus/n10-009/n10-009-training-course/", free: true },
          ],
        },
        {
          id: "active-directory",
          title: "Learn Active Directory & user management",
          description: "Core to most corporate IT environments: accounts, group policy, permissions.",
          estWeeks: [3, 5],
          resources: [
            { title: "Microsoft Learn: Active Directory Fundamentals", type: "course", provider: "Microsoft (free)", url: "https://learn.microsoft.com/en-us/training/", free: true },
          ],
        },
      ],
    },
    {
      id: "scripting-and-cloud",
      title: "Phase 3: Scripting & Cloud Basics",
      summary: "Add automation and cloud fundamentals to stand out and set up your next move.",
      milestones: [
        {
          id: "powershell-bash",
          title: "Learn basic scripting (PowerShell or Bash)",
          description: "Automate repetitive admin tasks; this alone differentiates you from most help desk candidates.",
          estWeeks: [4, 6],
          resources: [
            { title: "Google IT Automation with Python", type: "course", provider: "Coursera (Google)", url: "https://www.coursera.org/professional-certificates/google-it-automation", free: false },
          ],
        },
        {
          id: "cloud-fundamentals",
          title: "Learn cloud fundamentals",
          description: "AWS or Azure basics: sets up a natural path toward cloud/DevOps or cybersecurity later.",
          estWeeks: [3, 5],
          resources: [
            { title: "AWS Cloud Practitioner Essentials", type: "course", provider: "AWS Skill Builder (free)", url: "https://skillbuilder.aws/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target help desk and IT support roles as your entry point.",
      milestones: [
        {
          id: "apply-jobs",
          title: "Apply to Help Desk / IT Support roles",
          description: "Entry titles: Help Desk Technician, IT Support Specialist, Desktop Support. This is the lowest-friction way into a tech company.",
          estWeeks: [3, 8],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$62,000",
    entrySalaryUSD: "$40,000 - $52,000",
    growthOutlook: "+6% projected growth over the next decade (about average), but very high volume of openings",
    demandLevel: "high",
    competitiveness: "low",
    demandNotes:
      "The most accessible pathway on this site: minimal prerequisites, certs carry real weight, and volume of open roles is consistently high since every company needs IT support. Pay is lower than other pathways here, but it's the fastest and most reliable on-ramp into tech, with clear next steps into cybersecurity, cloud, or sysadmin/DevOps roles after 1-2 years.",
    commonTitles: ["Help Desk Technician", "IT Support Specialist", "Systems Administrator", "Desktop Support Engineer"],
    typicalTimeToJobReadyMonths: [3, 7],
    experienceLevel: "entry-level",
  },
  interviewPrep: {
    format: [
      "Recruiter/HR screen",
      "Technical screen: troubleshooting scenarios, basic networking and OS questions",
      "Sometimes a practical exercise (diagnose a mock issue)",
      "Behavioral: customer service and communication focus",
    ],
    whatEmployersLookFor: [
      "Patience and clear communication with non-technical people",
      "Structured troubleshooting method, not just guessing",
      "Relevant certs (A+ is close to a baseline expectation for many roles)",
      "Reliability and ownership: following through on tickets to resolution",
      "Increasingly: basic scripting ability, since it's a fast way to stand out from other entry-level candidates",
    ],
    sampleQuestions: [
      "A user says their computer won't connect to the internet; walk me through how you'd troubleshoot it",
      "How would you explain a technical issue to someone who isn't tech-savvy?",
      "Tell me about a time you had to deal with a frustrated user or customer",
      "What's the difference between a public and private IP address?",
    ],
    tips: [
      "This role is judged heavily on soft skills and communication, not just technical knowledge",
      "Certs (A+, Network+) matter more here than almost anywhere else on this site for getting past resume screens",
      "Treat this as a launchpad: have a clear idea of which specialization (security, cloud, sysadmin) you want next",
    ],
  },
};
