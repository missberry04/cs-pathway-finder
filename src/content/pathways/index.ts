import { Pathway } from "../types";
import { softwareEngineering } from "./software-engineering";
import { cybersecurity } from "./cybersecurity";
import { dataScience } from "./data-science";
import { aiMl } from "./ai-ml";
import { cloudDevops } from "./cloud-devops";
import { dataEngineering } from "./data-engineering";

export const pathways: Pathway[] = [
  softwareEngineering,
  cybersecurity,
  dataScience,
  aiMl,
  cloudDevops,
  dataEngineering,
];

export function getPathway(slug: string): Pathway | undefined {
  return pathways.find((p) => p.slug === slug);
}
