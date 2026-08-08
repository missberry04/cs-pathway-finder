import { Pathway } from "../types";

export const dataScience: Pathway = {
  slug: "data-science",
  title: "Data Science",
  tagline: "Turn data into decisions — analytics, statistics, and predictive modeling.",
  icon: "📊",
  matchProfile: {
    degrees: ["Statistics", "Math", "Economics", "Computer Science", "Physics", "Any quantitative field"],
    skills: ["statistics", "python", "sql", "excel", "analysis", "math", "curiosity about data"],
    goodFitFor: [
      "People who like finding patterns/stories in numbers",
      "Enjoy a mix of coding, math, and communicating findings to non-technical stakeholders",
      "Comfortable with ambiguity — data science problems are rarely clean",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: Python, SQL & Statistics",
      summary: "The three tools every data scientist uses daily.",
      milestones: [
        {
          id: "python-for-ds",
          title: "Learn Python for data analysis",
          description: "Core Python plus pandas, numpy, and matplotlib/seaborn for analysis and visualization.",
          estWeeks: [5, 8],
          resources: [
            { title: "Python for Data Science, AI & Development", type: "course", provider: "Coursera (IBM)", url: "https://www.coursera.org/learn/python-for-applied-data-science-ai", free: false },
          ],
        },
        {
          id: "sql-basics",
          title: "Learn SQL",
          description: "Every data role needs SQL — joins, aggregations, window functions.",
          estWeeks: [3, 4],
          resources: [
            { title: "SQL for Data Science", type: "course", provider: "Coursera (UC Davis)", url: "https://www.coursera.org/learn/sql-for-data-science", free: false },
            { title: "SQLZoo (free interactive practice)", type: "practice", provider: "SQLZoo", url: "https://sqlzoo.net/", free: true },
          ],
        },
        {
          id: "stats-basics",
          title: "Learn statistics & probability",
          description: "Descriptive stats, distributions, hypothesis testing, regression — the math underneath every model.",
          estWeeks: [5, 8],
          resources: [
            { title: "Statistics with Python Specialization", type: "course", provider: "Coursera (Michigan)", url: "https://www.coursera.org/specializations/statistics-with-python", free: false },
          ],
        },
      ],
    },
    {
      id: "ml-basics",
      title: "Phase 2: Machine Learning Foundations",
      summary: "Understand how models actually work before relying on libraries to build them.",
      milestones: [
        {
          id: "ml-course",
          title: "Take a foundational ML course",
          description: "Regression, classification, clustering, model evaluation, overfitting/underfitting.",
          estWeeks: [8, 12],
          resources: [
            { title: "Machine Learning Specialization", type: "course", provider: "Coursera (Andrew Ng / DeepLearning.AI)", url: "https://www.coursera.org/specializations/machine-learning-introduction", free: false },
          ],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Phase 3: Portfolio & Competitions",
      summary: "Prove you can go from raw data to insight on real, messy datasets.",
      milestones: [
        {
          id: "kaggle",
          title: "Compete in Kaggle competitions",
          description: "Start with 'Titanic' and 'House Prices', then a real competition — great for learning + portfolio.",
          estWeeks: [4, 8],
          resources: [
            { title: "Kaggle", type: "practice", provider: "Kaggle", url: "https://www.kaggle.com/", free: true },
          ],
        },
        {
          id: "end-to-end-project",
          title: "Build 2-3 end-to-end portfolio projects",
          description: "Pick real (messy) datasets, clean them, analyze, model, and write up findings clearly on GitHub.",
          estWeeks: [4, 8],
          resources: [
            { title: "GitHub", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Apply & Interview",
      summary: "Target the right entry titles and prepare for case-study-style interviews.",
      milestones: [
        {
          id: "apply-jobs",
          title: "Apply to Data Analyst → Data Scientist roles",
          description: "Most people enter via Data/Business Analyst roles, then move to Data Scientist after 1-2 years.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$108,000",
    entrySalaryUSD: "$70,000 - $90,000",
    growthOutlook: "+35% projected growth over the next decade (much faster than average)",
    demandLevel: "high",
    competitiveness: "high",
    demandNotes:
      "'Data Scientist' as a first job is competitive and often requires a master's or strong portfolio; 'Data Analyst' is a much more accessible entry point with high demand across every industry, not just tech.",
    commonTitles: ["Data Analyst", "Data Scientist", "Business Intelligence Analyst", "Quantitative Analyst"],
    typicalTimeToJobReadyMonths: [8, 14],
  },
  interviewPrep: {
    format: [
      "Take-home data challenge or SQL/stats screen",
      "Technical interview: stats, SQL, sometimes live coding in Python",
      "Case study round: 'how would you analyze X business problem'",
    ],
    whatEmployersLookFor: [
      "Ability to translate a vague business question into an analysis plan",
      "Solid SQL — this is tested almost everywhere, more than ML theory for entry roles",
      "Clear communication of findings to non-technical stakeholders",
      "A portfolio with real analysis, not just copied Kaggle notebooks",
    ],
    sampleQuestions: [
      "Write a SQL query to find the second-highest salary per department",
      "Explain p-values and statistical significance to a non-technical stakeholder",
      "How would you detect if an A/B test result is trustworthy?",
      "Walk me through a project in your portfolio end to end",
    ],
    tips: [
      "Practice explaining technical results in plain English — this is heavily weighted",
      "SQL fluency alone gets you through most first-round screens",
      "Show your work: a messy-to-clean data story is more convincing than a polished but shallow one",
    ],
  },
};
