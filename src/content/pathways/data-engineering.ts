import { Pathway } from "../types";

export const dataEngineering: Pathway = {
  slug: "data-engineering",
  title: "Data Engineering",
  tagline: "Build the pipelines and infrastructure that move and store data at scale.",
  icon: "🗄️",
  matchProfile: {
    degrees: ["Computer Science", "Information Systems", "Math", "Engineering (any)"],
    skills: ["sql", "python", "databases", "systems design", "etl", "cloud"],
    goodFitFor: [
      "People who like backend/systems work more than analysis or modeling",
      "Enjoy designing reliable, scalable infrastructure others depend on",
      "A strong blend of software engineering and data skills",
    ],
  },
  phases: [
    {
      id: "fundamentals",
      title: "Phase 1: SQL, Python & Data Modeling",
      summary: "The foundation every pipeline is built on.",
      milestones: [
        {
          id: "sql-advanced",
          title: "Master SQL (including advanced querying)",
          description: "Joins, window functions, query optimization, indexing: data engineers live in SQL.",
          estWeeks: [4, 6],
          resources: [
            { title: "SQL for Data Science", type: "course", provider: "Coursera (UC Davis)", url: "https://www.coursera.org/learn/sql-for-data-science", free: false },
            { title: "SQLZoo (free interactive practice)", type: "practice", provider: "SQLZoo", url: "https://sqlzoo.net/", free: true },
          ],
        },
        {
          id: "python-etl",
          title: "Learn Python for data pipelines",
          description: "Scripting, working with APIs, pandas: the glue for ETL work.",
          estWeeks: [4, 6],
          resources: [
            { title: "Python for Everybody", type: "course", provider: "Coursera (Michigan)", url: "https://www.coursera.org/specializations/python", free: false },
          ],
        },
        {
          id: "data-modeling",
          title: "Learn data modeling & warehousing concepts",
          description: "Star schemas, normalization, OLTP vs OLAP: how to structure data for scale.",
          estWeeks: [3, 5],
          resources: [
            { title: "Data Warehousing for Business Intelligence", type: "course", provider: "Coursera (Colorado)", url: "https://www.coursera.org/specializations/data-warehousing", free: false },
          ],
        },
      ],
    },
    {
      id: "pipelines",
      title: "Phase 2: Pipeline Tools & Orchestration",
      summary: "The tools that move data reliably at scale.",
      milestones: [
        {
          id: "airflow",
          title: "Learn workflow orchestration (Airflow)",
          description: "Scheduling and monitoring data pipelines is core to the job.",
          estWeeks: [4, 6],
          resources: [
            { title: "Apache Airflow Fundamentals", type: "course", provider: "Udemy", url: "https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/", free: false },
          ],
        },
        {
          id: "spark",
          title: "Learn big data processing (Spark)",
          description: "Distributed processing for datasets too large for a single machine.",
          estWeeks: [5, 8],
          resources: [
            { title: "Big Data Analysis with Apache Spark", type: "course", provider: "edX (UC Berkeley)", url: "https://www.edx.org/", free: true },
          ],
        },
      ],
    },
    {
      id: "cloud-data",
      title: "Phase 3: Cloud Data Warehousing",
      summary: "Almost all modern data infra runs in the cloud.",
      milestones: [
        {
          id: "warehouse-platform",
          title: "Learn a cloud data warehouse",
          description: "Snowflake, BigQuery, or Redshift: pick one and get hands-on.",
          estWeeks: [4, 8],
          resources: [
            { title: "Snowflake Hands-On Essentials", type: "course", provider: "Snowflake (free)", url: "https://www.snowflake.com/en/developers/learn-to-code/", free: true },
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "Phase 4: Portfolio & Job Search",
      summary: "Build an end-to-end pipeline project and start applying.",
      milestones: [
        {
          id: "pipeline-project",
          title: "Build an end-to-end pipeline project",
          description: "Ingest → transform → load → visualize, using real (even if small) data, deployed and documented.",
          estWeeks: [4, 8],
          resources: [
            { title: "GitHub", type: "tool", provider: "GitHub", url: "https://github.com/", free: true },
          ],
        },
        {
          id: "apply-jobs",
          title: "Apply to Data Engineer / Analytics Engineer roles",
          description: "Entry titles: Junior Data Engineer, Analytics Engineer, ETL Developer.",
          estWeeks: [4, 12],
          resources: [
            { title: "LinkedIn Jobs", type: "tool", provider: "LinkedIn", url: "https://www.linkedin.com/jobs/", free: true },
          ],
        },
      ],
    },
  ],
  stats: {
    medianSalaryUSD: "$130,000",
    entrySalaryUSD: "$80,000 - $100,000",
    growthOutlook: "+20% projected growth over the next decade for data infrastructure roles",
    demandLevel: "high",
    competitiveness: "medium",
    demandNotes:
      "Every company generating data needs pipelines to move and organize it; the field is less saturated at entry level than data science because it's less well-known as a distinct career path.",
    commonTitles: ["Data Engineer", "Analytics Engineer", "ETL Developer", "Big Data Engineer"],
    typicalTimeToJobReadyMonths: [8, 14],
  },
  interviewPrep: {
    format: [
      "SQL screen (often live, sometimes take-home)",
      "System design for data pipelines ('design an ingestion pipeline for X')",
      "Python/coding round",
      "Behavioral",
    ],
    whatEmployersLookFor: [
      "Strong, fast SQL: this is non-negotiable",
      "Understanding of tradeoffs between batch vs streaming, normalization vs denormalization",
      "Experience with at least one orchestration tool (Airflow is the most commonly asked about)",
      "Ability to reason about pipeline reliability and failure handling",
    ],
    sampleQuestions: [
      "Design a data pipeline to ingest and process clickstream data in near real-time",
      "Write a SQL query using window functions to find running totals per user",
      "How would you handle a pipeline that partially fails halfway through?",
      "Star schema vs snowflake schema: when would you use each?",
    ],
    tips: [
      "Be ready to whiteboard a pipeline architecture, not just write queries",
      "Know at least one orchestration tool (Airflow) and one warehouse (Snowflake/BigQuery) in depth",
      "Talk about data quality/validation: it's an easy way to stand out",
    ],
  },
};
