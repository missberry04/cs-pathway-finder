import { Pathway } from "@/content/types";

export type DegreeField = "cs-related" | "quant-other" | "it-related" | "non-technical" | "self-taught-bootcamp";
export type ExperienceLevel = "none" | "some-hobby" | "1-3-years-adjacent" | "3-plus-years-adjacent";
export type Urgency = "asap" | "6-12-months" | "flexible";

export type BackgroundProfile = {
  degreeField: DegreeField;
  experienceLevel: ExperienceLevel;
  hoursPerWeek: number;
  urgency: Urgency;
  skills: string[];
};

export const DEGREE_OPTIONS: { id: DegreeField; label: string }[] = [
  { id: "cs-related", label: "CS / Software / Computer Engineering degree" },
  { id: "quant-other", label: "Other quantitative degree (Math, Stats, Econ, Physics, Engineering)" },
  { id: "it-related", label: "IT / Information Systems degree" },
  { id: "non-technical", label: "Non-technical degree" },
  { id: "self-taught-bootcamp", label: "No degree — bootcamp / self-taught" },
];

export const EXPERIENCE_OPTIONS: { id: ExperienceLevel; label: string }[] = [
  { id: "none", label: "No relevant experience yet" },
  { id: "some-hobby", label: "Some hobby projects / self-study" },
  { id: "1-3-years-adjacent", label: "1–3 years in an adjacent role (IT, analytics, support, etc.)" },
  { id: "3-plus-years-adjacent", label: "3+ years in an adjacent technical role" },
];

export const URGENCY_OPTIONS: { id: Urgency; label: string }[] = [
  { id: "asap", label: "ASAP — need a job within ~6 months" },
  { id: "6-12-months", label: "6–12 months is fine" },
  { id: "flexible", label: "Flexible / long-term career change" },
];

export const HOURS_OPTIONS: { value: number; label: string }[] = [
  { value: 5, label: "~5 hrs/week — squeezing it in around a demanding job" },
  { value: 10, label: "~10 hrs/week — steady part-time pace" },
  { value: 20, label: "~20 hrs/week — serious part-time commitment" },
  { value: 35, label: "35+ hrs/week — treating this like a full-time job" },
];

export const SKILL_OPTIONS: { id: string; label: string }[] = [
  { id: "programming", label: "General programming" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "web development", label: "Web development" },
  { id: "algorithms", label: "Algorithms / problem solving" },
  { id: "networking", label: "Networking" },
  { id: "linux", label: "Linux / command line" },
  { id: "security", label: "Security concepts" },
  { id: "statistics", label: "Statistics" },
  { id: "math", label: "Math (calculus, probability)" },
  { id: "linear algebra", label: "Linear algebra" },
  { id: "machine learning", label: "Machine learning" },
  { id: "sql", label: "SQL" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud platforms (AWS/Azure/GCP)" },
  { id: "scripting", label: "Scripting / automation" },
  { id: "systems design", label: "Systems design" },
  { id: "research", label: "Reading research / papers" },
];

/** How well each degree background fits each pathway, 0-1. Tuned by hand, not derived from data. */
const DEGREE_FIT: Record<string, Record<DegreeField, number>> = {
  "software-engineering": { "cs-related": 1.0, "quant-other": 0.6, "it-related": 0.5, "non-technical": 0.2, "self-taught-bootcamp": 0.7 },
  cybersecurity: { "cs-related": 0.8, "quant-other": 0.5, "it-related": 0.9, "non-technical": 0.4, "self-taught-bootcamp": 0.7 },
  "data-science": { "cs-related": 0.7, "quant-other": 1.0, "it-related": 0.4, "non-technical": 0.25, "self-taught-bootcamp": 0.5 },
  "ai-ml": { "cs-related": 0.9, "quant-other": 0.9, "it-related": 0.3, "non-technical": 0.15, "self-taught-bootcamp": 0.35 },
  "cloud-devops": { "cs-related": 0.8, "quant-other": 0.5, "it-related": 1.0, "non-technical": 0.3, "self-taught-bootcamp": 0.6 },
  "data-engineering": { "cs-related": 0.9, "quant-other": 0.7, "it-related": 0.6, "non-technical": 0.2, "self-taught-bootcamp": 0.5 },
};

const EXPERIENCE_DISCOUNT: Record<ExperienceLevel, number> = {
  none: 1.0,
  "some-hobby": 0.9,
  "1-3-years-adjacent": 0.75,
  "3-plus-years-adjacent": 0.6,
};

const DEMAND_WEIGHT: Record<Pathway["stats"]["demandLevel"], number> = {
  "very high": 1,
  high: 0.8,
  medium: 0.6,
  growing: 0.7,
};

const COMPETITIVENESS_WEIGHT: Record<Pathway["stats"]["competitiveness"], number> = {
  low: 1,
  medium: 0.8,
  high: 0.6,
  "very high": 0.4,
};

export function estimateTotalWeeks(pathway: Pathway): number {
  let weeks = 0;
  for (const phase of pathway.phases) {
    for (const milestone of phase.milestones) {
      weeks += (milestone.estWeeks[0] + milestone.estWeeks[1]) / 2;
    }
  }
  return weeks;
}

export function adjustedMonthsForProfile(pathway: Pathway, profile: BackgroundProfile): number {
  const baselineWeeks = estimateTotalWeeks(pathway);
  const paceFactor = 10 / Math.max(profile.hoursPerWeek, 1);
  const discount = EXPERIENCE_DISCOUNT[profile.experienceLevel];
  const adjustedWeeks = baselineWeeks * paceFactor * discount;
  return adjustedWeeks / 4.345;
}

export type PathwayMatch = {
  pathway: Pathway;
  score: number;
  adjustedMonths: number;
  reasons: string[];
};

export function scorePathways(pathways: Pathway[], profile: BackgroundProfile): PathwayMatch[] {
  const matches = pathways.map((pathway) => {
    const reasons: string[] = [];

    // Skill overlap — up to 35 points
    const overlap = pathway.matchProfile.skills.filter((s) => profile.skills.includes(s));
    const skillScore = Math.min(1, overlap.length / 3) * 35;
    if (overlap.length > 0) {
      reasons.push(`Matches ${overlap.length} of your listed skills (${overlap.slice(0, 3).join(", ")})`);
    }

    // Degree fit — up to 25 points
    const degreeFit = DEGREE_FIT[pathway.slug]?.[profile.degreeField] ?? 0.5;
    const degreeScore = degreeFit * 25;
    if (degreeFit >= 0.8) reasons.push("Your educational background lines up well with this field");

    // Timeline fit vs urgency — up to 20 points
    const adjustedMonths = adjustedMonthsForProfile(pathway, profile);
    let urgencyScore = 0;
    if (profile.urgency === "asap") {
      urgencyScore = Math.max(0, 1 - Math.max(0, adjustedMonths - 3) / 12) * 20;
      if (adjustedMonths <= 8) reasons.push(`At your available time, you could be job-ready in ~${Math.round(adjustedMonths)} months`);
    } else if (profile.urgency === "6-12-months") {
      urgencyScore = Math.max(0, 1 - Math.abs(adjustedMonths - 8) / 12) * 20;
      reasons.push(`Estimated ~${Math.round(adjustedMonths)} months to job-ready at your pace`);
    } else {
      urgencyScore = 0.7 * 20;
    }

    // Market factor — up to 20 points
    const marketScore = ((DEMAND_WEIGHT[pathway.stats.demandLevel] + COMPETITIVENESS_WEIGHT[pathway.stats.competitiveness]) / 2) * 20;
    if (pathway.stats.demandLevel === "very high" || pathway.stats.demandLevel === "high") {
      reasons.push(`${pathway.stats.demandLevel === "very high" ? "Very high" : "High"} current job-market demand (${pathway.stats.growthOutlook.split(" ")[0]} projected growth)`);
    }

    const score = Math.round(skillScore + degreeScore + urgencyScore + marketScore);

    return { pathway, score, adjustedMonths, reasons };
  });

  return matches.sort((a, b) => b.score - a.score);
}
