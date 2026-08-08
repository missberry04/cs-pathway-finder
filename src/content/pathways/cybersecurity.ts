import { Pathway } from "../types";

export const cybersecurity: Pathway = {
  slug: "cybersecurity",
  title: "Cybersecurity",
  tagline: "Go from zero to a security analyst, pentester, or blue-team role.",
  icon: "🛡️",
  matchProfile: {
    degrees: ["Cybersecurity", "Computer Science", "Information Technology", "Criminal Justice (with tech interest)", "Any + certs"],
    skills: ["networking", "linux", "security", "troubleshooting", "attention to detail", "curiosity", "ctf"],
    goodFitFor: [
      "People who like puzzles, investigation, and 'how would I break this' thinking",
      "Comfortable with certifications and structured, checklist-driven learning",
      "One of the more accessible entry points into tech without a CS degree",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Networking & Systems Fundamentals",
      summary: "You can't secure what you don't understand — learn how networks and systems actually work.",
      milestones: [
        {
          id: "networking-basics",
          title: "Learn networking fundamentals",
          description: "TCP/IP, DNS, HTTP, subnetting, firewalls — the language of the internet.",
          estWeeks: [4, 6],
          resources: [
            { title: "TryHackMe: Pre Security Path", type: "course", provider: "TryHackMe", url: "https://tryhackme.com/path/outline/presecurity", free: false },
            { title: "Professor Messer's Network+ Course", type: "course", provider: "ProfessorMesser (free)", url: "https://www.professormesser.com/network-plus/n10-009/n10-009-training-course/", free: true },
          ],
        },
        {
          id: "linux-basics",
          title: "Get comfortable with Linux & the command line",
          description: "Security tooling lives on Linux — file permissions, bash, package managers, scripting basics.",
          estWeeks: [3, 5],
          resources: [
            { title: "TryHackMe: Linux Fundamentals", type: "course", provider: "TryHackMe", url: "https://tryhackme.com/room/linuxfundamentalspart1", free: false },
            { title: "OverTheWire: Bandit (Linux wargame)", type: "practice", provider: "OverTheWire", url: "https://overthewire.org/wargames/bandit/", free: true },
          ],
        },
      ],
    },
    {
      id: "security-fundamentals",
      title: "Phase 2: Security Fundamentals & First Cert",
      summary: "Learn core security concepts and earn the industry-standard entry certification.",
      milestones: [
        {
          id: "security-plus",
          title: "Study for and pass CompTIA Security+",
          description: "The most widely-recognized entry-level cert; many analyst roles list it as a requirement.",
          estWeeks: [6, 10],
          resources: [
            { title: "CompTIA Security+ (SY0-701) Course", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/security-plus/", free: false },
            { title: "Security+ Exam Info", type: "cert", provider: "CompTIA", url: "https://www.comptia.org/certifications/security", free: false },
          ],
        },
        {
          id: "thm-junior-pentester",
          title: "Complete a guided offensive-security path",
          description: "Apply concepts hands-on with guided rooms covering enumeration, exploitation basics, and reporting.",
          estWeeks: [6, 10],
          resources: [
            { title: "TryHackMe: Jr Penetration Tester Path", type: "course", provider: "TryHackMe", url: "https://tryhackme.com/path/outline/jrpenetrationtester", free: false },
          ],
        },
      ],
    },
    {
      id: "specialize",
      title: "Phase 3: Pick a Specialization",
      summary: "Cybersecurity branches early — choose offense, defense, or cloud security and go deeper.",
      milestones: [
        {
          id: "htb-practice",
          title: "Practice on Hack The Box",
          description: "Work through retired boxes and the Starting Point track to build real hands-on exploitation experience.",
          estWeeks: [6, 12],
          resources: [
            { title: "Hack The Box", type: "practice", provider: "Hack The Box", url: "https://www.hackthebox.com/", free: false },
          ],
        },
        {
          id: "specialization-track",
          title: "Choose: Pentesting (OSCP track), Blue Team (SOC/SIEM), or Cloud Security",
          description: "Pentesting → PNPT/OSCP prep. Blue team → SOC analyst fundamentals, SIEM tools (Splunk). Cloud → AWS/Azure security fundamentals.",
          estWeeks: [10, 20],
          resources: [
            { title: "TryHackMe: SOC Level 1 Path", type: "course", provider: "TryHackMe", url: "https://tryhackme.com/path/outline/soclevel1", free: false },
            { title: "TCM Security: Practical Ethical Hacking", type: "course", provider: "TCM Academy", url: "https://academy.tcm-sec.com/p/practical-ethical-hacking-course", free: false },
            { title: "Splunk Fundamentals", type: "course", provider: "Splunk (free)", url: "https://www.splunk.com/en_us/training/free-courses/getting-started/splunk-fundamentals-1.html", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Home Lab, CTFs & Job Search",
      summary: "Build proof of hands-on skill and start applying to analyst/associate roles.",
      milestones: [
        {
          id: "home-lab-ctf",
          title: "Build a home lab & compete in CTFs",
          description: "Set up a vulnerable VM lab and participate in a few CTFs — great talking points in interviews.",
          estWeeks: [3, 6],
          resources: [
            { title: "CTFtime (find live CTFs)", type: "practice", provider: "CTFtime", url: "https://ctftime.org/", free: true },
          ],
        },
        {
          id: "apply-jobs",
          title: "Apply to SOC Analyst / IT Security / Associate Pentester roles",
          description: "Entry titles to target: SOC Analyst I, Security Analyst, IT Security Associate, GRC Analyst.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$112,000",
    entrySalaryUSD: "$65,000 - $80,000",
    growthOutlook: "+33% projected growth over the next decade (much faster than average)",
    demandLevel: "very high",
    competitiveness: "medium",
    demandNotes:
      "One of the most consistently understaffed fields in tech — global shortage of millions of security workers. Entry-level SOC/analyst roles are the most accessible on-ramp; certs matter more here than in most CS fields for getting past resume screens.",
    commonTitles: ["SOC Analyst", "Security Analyst", "Penetration Tester", "GRC Analyst", "Cloud Security Engineer"],
    typicalTimeToJobReadyMonths: [6, 12],
  },
  interviewPrep: {
    format: [
      "Recruiter screen",
      "Technical screen (networking/security fundamentals, sometimes a practical lab or CTF-style challenge)",
      "Panel/onsite: scenario-based questions + culture fit",
    ],
    whatEmployersLookFor: [
      "Solid fundamentals (networking, OS internals) over memorized tool commands",
      "Relevant certs (Security+ minimum for many analyst roles)",
      "Evidence of hands-on practice: CTFs, home lab, TryHackMe/HTB profile",
      "Ability to explain a vulnerability/incident clearly to a non-technical person",
    ],
    sampleQuestions: [
      "Walk me through what happens when you type a URL into a browser",
      "What's the difference between a vulnerability, a threat, and a risk?",
      "How would you triage an alert showing unusual outbound traffic from a workstation?",
      "Describe a CTF challenge or lab you found difficult and how you solved it",
    ],
    tips: [
      "Link your TryHackMe/HTB profile on your resume — it's concrete proof of skill",
      "Certs get you past ATS filters; labs/CTFs get you through the actual interview",
      "Security+ is the most commonly requested baseline cert in entry-level job postings",
    ],
  },
};
