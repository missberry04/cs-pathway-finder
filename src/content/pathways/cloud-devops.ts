import { Pathway } from "../types";

export const cloudDevops: Pathway = {
  slug: "cloud-devops",
  title: "Cloud & DevOps",
  tagline: "Run the infrastructure everything else runs on — cloud, CI/CD, and automation.",
  icon: "☁️",
  matchProfile: {
    degrees: ["Computer Science", "Information Technology", "Computer Engineering", "Any + cloud certs"],
    skills: ["linux", "networking", "scripting", "automation", "cloud", "systems administration"],
    goodFitFor: [
      "People who like systems, automation, and 'keeping things running'",
      "Enjoy scripting/automating repetitive work rather than pure application code",
      "Cert-friendly pathway, like cybersecurity, with strong salary-to-effort ratio",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Linux, Networking & Scripting",
      summary: "Everything in cloud/DevOps sits on top of Linux servers and networks.",
      milestones: [
        {
          id: "linux-basics",
          title: "Learn Linux system administration",
          description: "File systems, permissions, processes, services, package management.",
          estWeeks: [4, 6],
          resources: [
            { title: "Linux Command Line Basics", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/linux-command-line-basics-for-beginners/", free: false },
            { title: "Linux Journey (free)", type: "reading", provider: "Linux Journey", url: "https://linuxjourney.com/", free: true },
          ],
        },
        {
          id: "scripting",
          title: "Learn Bash & Python scripting",
          description: "Automate tasks — the core DevOps skill.",
          estWeeks: [3, 5],
          resources: [
            { title: "Python for Everybody", type: "course", provider: "Coursera (Michigan)", url: "https://www.coursera.org/specializations/python", free: false },
          ],
        },
      ],
    },
    {
      id: "cloud-cert",
      title: "Phase 2: Cloud Fundamentals & First Cert",
      summary: "Pick a major cloud provider and get certified — this is the single highest-leverage step.",
      milestones: [
        {
          id: "cloud-practitioner",
          title: "Earn a cloud foundational certification",
          description: "AWS Cloud Practitioner or Azure Fundamentals (AZ-900) — broad overview, resume-friendly.",
          estWeeks: [4, 6],
          resources: [
            { title: "AWS Certified Cloud Practitioner", type: "cert", provider: "AWS", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/", free: false },
            { title: "AWS Cloud Practitioner Essentials", type: "course", provider: "AWS Skill Builder (free)", url: "https://skillbuilder.aws/", free: true },
          ],
        },
        {
          id: "associate-cert",
          title: "Earn an associate-level cert",
          description: "AWS Solutions Architect Associate or Azure Administrator — this is what most job postings actually ask for.",
          estWeeks: [8, 12],
          resources: [
            { title: "AWS Certified Solutions Architect - Associate", type: "course", provider: "Udemy (Stephane Maarek)", url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/", free: false },
          ],
        },
      ],
    },
    {
      id: "devops-tooling",
      title: "Phase 3: Containers, CI/CD & IaC",
      summary: "The tooling that defines modern DevOps work.",
      milestones: [
        {
          id: "docker-k8s",
          title: "Learn Docker & Kubernetes",
          description: "Containerization is table stakes; Kubernetes is the standard orchestration tool.",
          estWeeks: [6, 10],
          resources: [
            { title: "Docker & Kubernetes: The Complete Guide", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/", free: false },
          ],
        },
        {
          id: "cicd-iac",
          title: "Learn CI/CD & Infrastructure as Code",
          description: "GitHub Actions/Jenkins for pipelines, Terraform for infrastructure as code.",
          estWeeks: [5, 8],
          resources: [
            { title: "HashiCorp Certified: Terraform Associate", type: "course", provider: "HashiCorp Learn (free)", url: "https://developer.hashicorp.com/terraform/tutorials/certification-associate-tutorials", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Home Lab & Job Search",
      summary: "Build a demonstrable project and apply to cloud/DevOps roles.",
      milestones: [
        {
          id: "home-project",
          title: "Build and document a home-lab project",
          description: "e.g., a CI/CD pipeline deploying a containerized app to the cloud via Terraform — put it on GitHub with a clear README.",
          estWeeks: [3, 6],
          resources: [
            { title: "GitHub", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
        {
          id: "apply-jobs",
          title: "Apply to Cloud/DevOps/SRE associate roles",
          description: "Entry titles: Cloud Support Engineer, Associate DevOps Engineer, Systems Administrator.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$125,000",
    entrySalaryUSD: "$75,000 - $95,000",
    growthOutlook: "+21% projected growth over the next decade for cloud/infra roles (much faster than average)",
    demandLevel: "high",
    competitiveness: "medium",
    demandNotes:
      "Virtually every company is migrating to or already on the cloud, and there aren't enough certified engineers to fill roles. Certs carry unusually heavy weight here for getting past initial screens.",
    commonTitles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer", "Cloud Support Engineer"],
    typicalTimeToJobReadyMonths: [7, 13],
  },
  interviewPrep: {
    format: [
      "Recruiter/technical screen on fundamentals",
      "Hands-on/practical round (troubleshooting a broken pipeline or environment)",
      "System/architecture design discussion",
    ],
    whatEmployersLookFor: [
      "Relevant cloud certs (huge signal at this level)",
      "Real hands-on project experience, not just certification knowledge",
      "Troubleshooting mindset — can you debug a broken deploy under pressure",
      "Scripting ability to automate repetitive ops work",
    ],
    sampleQuestions: [
      "Walk me through what happens when you deploy a containerized app to production",
      "How would you troubleshoot a pod that's stuck in CrashLoopBackOff in Kubernetes?",
      "What's the difference between horizontal and vertical scaling?",
      "Describe a time you automated a manual process",
    ],
    tips: [
      "Certs matter a lot here — they're a strong resume-screen signal",
      "Have a home-lab project you can screen-share and explain in detail",
      "Know the tradeoffs of the tools you list, not just that you 'used' them",
    ],
  },
};
