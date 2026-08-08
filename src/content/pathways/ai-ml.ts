import { Pathway } from "../types";

export const aiMl: Pathway = {
  slug: "ai-ml",
  title: "AI / Machine Learning Engineering",
  tagline: "Build and deploy ML/LLM systems: the research-to-production side of AI.",
  icon: "🤖",
  matchProfile: {
    degrees: ["Computer Science", "Math", "Statistics", "Physics", "Electrical Engineering"],
    skills: ["python", "math", "linear algebra", "machine learning", "deep learning", "research", "programming"],
    goodFitFor: [
      "Strong math/programming background or willingness to build one",
      "Enjoy reading papers and turning research into working systems",
      "Most demanding pathway here in prerequisites, but the highest ceiling",
    ],
  },
  phases: [
    {
      id: "math-foundations",
      title: "Phase 1: Math & Programming Foundations",
      summary: "The math is not optional here: linear algebra, calculus, and probability underpin everything.",
      milestones: [
        {
          id: "python-solid",
          title: "Get solid at Python",
          description: "You'll live in Python (numpy, pandas, PyTorch), so get genuinely fluent, not just tutorial-level.",
          estWeeks: [4, 6],
          resources: [
            { title: "Python for Data Science, AI & Development", type: "course", provider: "Coursera (IBM)", url: "https://www.coursera.org/learn/python-for-applied-data-science-ai", free: false },
          ],
        },
        {
          id: "math-for-ml",
          title: "Linear algebra, calculus & probability for ML",
          description: "Vectors/matrices, gradients, chain rule, probability distributions: needed to actually understand models, not just call .fit().",
          estWeeks: [8, 12],
          resources: [
            { title: "Mathematics for Machine Learning Specialization", type: "course", provider: "Coursera (Imperial College London)", url: "https://www.coursera.org/specializations/mathematics-machine-learning", free: false },
            { title: "3Blue1Brown: Essence of Linear Algebra", type: "reading", provider: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", free: true },
          ],
        },
      ],
    },
    {
      id: "ml-dl",
      title: "Phase 2: Machine Learning & Deep Learning",
      summary: "From classical ML to neural networks, computer vision, and NLP fundamentals.",
      milestones: [
        {
          id: "ml-specialization",
          title: "Machine Learning Specialization",
          description: "Supervised/unsupervised learning, neural network basics, best practices.",
          estWeeks: [8, 10],
          resources: [
            { title: "Machine Learning Specialization", type: "course", provider: "Coursera (Andrew Ng / DeepLearning.AI)", url: "https://www.coursera.org/specializations/machine-learning-introduction", free: false },
          ],
        },
        {
          id: "deep-learning-spec",
          title: "Deep Learning Specialization",
          description: "CNNs, RNNs, transformers: the architectures behind modern AI.",
          estWeeks: [10, 14],
          resources: [
            { title: "Deep Learning Specialization", type: "course", provider: "Coursera (DeepLearning.AI)", url: "https://www.coursera.org/specializations/deep-learning", free: false },
            { title: "PyTorch: Deep Learning with PyTorch", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/pytorch-for-deep-learning/", free: false },
          ],
        },
      ],
    },
    {
      id: "llms-and-projects",
      title: "Phase 3: LLMs, Tooling & Portfolio",
      summary: "The current frontier: build with (and understand) modern LLM/agent tooling.",
      milestones: [
        {
          id: "llm-tooling",
          title: "Learn LLM fundamentals & agent tooling",
          description: "Transformers, prompting, fine-tuning basics, embeddings/RAG, and building with agent frameworks.",
          estWeeks: [6, 10],
          resources: [
            { title: "Generative AI with LLMs", type: "course", provider: "Coursera (DeepLearning.AI + AWS)", url: "https://www.coursera.org/learn/generative-ai-with-llms", free: false },
            { title: "Anthropic: Claude API & Agent Docs", type: "reading", provider: "Anthropic", url: "https://docs.claude.com/", free: true },
          ],
        },
        {
          id: "ml-portfolio",
          title: "Build 2-3 ML/AI portfolio projects + read papers",
          description: "A trained model with real evaluation, plus a deployed demo. Also start reading papers on arXiv/Papers with Code for the areas you like.",
          estWeeks: [6, 10],
          resources: [
            { title: "Papers with Code", type: "reading", provider: "Papers with Code", url: "https://paperswithcode.com/", free: true },
            { title: "Kaggle", type: "practice", provider: "Kaggle", url: "https://www.kaggle.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target ML Engineer / Applied Scientist roles and prepare for research + coding rounds.",
      milestones: [
        {
          id: "apply-jobs",
          title: "Apply to ML Engineer / Applied AI roles",
          description: "Many enter via a broader SWE or Data Scientist role and transition into ML-focused work.",
          estWeeks: [6, 14],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$155,000",
    entrySalaryUSD: "$100,000 - $130,000",
    growthOutlook: "+23% projected growth over the next decade for ML-related roles (much faster than average)",
    demandLevel: "very high",
    competitiveness: "very high",
    demandNotes:
      "Extremely high demand and pay, but also the most credential/portfolio-competitive pathway here: many entry 'ML Engineer' postings expect a master's/PhD or very strong project experience. A common route is entering as a SWE or Data Scientist first, then specializing.",
    commonTitles: ["Machine Learning Engineer", "Applied Scientist", "AI Engineer", "Research Engineer"],
    typicalTimeToJobReadyMonths: [12, 20],
    experienceLevel: "requires-experience",
  },
  interviewPrep: {
    format: [
      "Coding screen (often LeetCode-style, sometimes ML-specific coding like implementing backprop)",
      "ML theory/design round (model choice, evaluation metrics, tradeoffs)",
      "ML system design (e.g., 'design a recommendation system')",
      "Behavioral + research/project deep-dive",
    ],
    whatEmployersLookFor: [
      "Real understanding of model internals, not just library API calls",
      "Ability to justify metric/model choices for a given business problem",
      "Practical deployment experience (not just notebooks, actual serving/monitoring)",
      "For research-leaning roles: published work or strong independent projects",
      "Increasingly: hands-on experience with LLMs/agents specifically, since demand has shifted hard toward applied generative AI in the last few years",
    ],
    sampleQuestions: [
      "Explain the bias-variance tradeoff",
      "How would you handle a severely imbalanced classification dataset?",
      "Design a system to recommend products to users at scale",
      "Walk me through a model you built: why that architecture, how did you evaluate it?",
    ],
    tips: [
      "Depth on 1-2 strong projects beats breadth across many shallow ones",
      "Be ready to derive/explain the math behind the models you claim to know",
      "Follow current LLM/agent tooling: it comes up constantly in 2025+ interviews",
    ],
  },
};
