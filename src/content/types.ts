export type ResourceType = "course" | "practice" | "reading" | "tool" | "cert";

export type Resource = {
  title: string;
  type: ResourceType;
  provider: string;
  url: string;
  free: boolean;
};

export type Milestone = {
  id: string;
  title: string;
  description: string;
  /** Estimated weeks to complete, as [min, max], assuming ~10hrs/week baseline pace */
  estWeeks: [number, number];
  resources: Resource[];
};

export type Phase = {
  id: string;
  title: string;
  summary: string;
  milestones: Milestone[];
};

export type JobStats = {
  medianSalaryUSD: string;
  entrySalaryUSD: string;
  growthOutlook: string;
  demandLevel: "very high" | "high" | "medium" | "growing";
  competitiveness: "low" | "medium" | "high" | "very high";
  demandNotes: string;
  commonTitles: string[];
  /** Realistic time for a dedicated beginner to become job-ready, in months, at baseline ~10hrs/week */
  typicalTimeToJobReadyMonths: [number, number];
};

export type InterviewPrep = {
  format: string[];
  whatEmployersLookFor: string[];
  sampleQuestions: string[];
  tips: string[];
};

export type MatchProfile = {
  /** Degree fields that map well to this pathway */
  degrees: string[];
  /** Skills/keywords that indicate a good fit */
  skills: string[];
  /** Short description of who tends to thrive here */
  goodFitFor: string[];
};

export type Pathway = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  phases: Phase[];
  stats: JobStats;
  interviewPrep: InterviewPrep;
  matchProfile: MatchProfile;
};
