import { Pathway } from "../types";
import { softwareEngineering } from "./software-engineering";
import { cybersecurity } from "./cybersecurity";
import { dataScience } from "./data-science";
import { aiMl } from "./ai-ml";
import { cloudDevops } from "./cloud-devops";
import { dataEngineering } from "./data-engineering";
import { mobileDevelopment } from "./mobile-development";
import { gameDevelopment } from "./game-development";
import { qaTestAutomation } from "./qa-test-automation";
import { uxUiDesign } from "./ux-ui-design";
import { softwareArchitecture } from "./software-architecture";
import { itSupportSysadmin } from "./it-support-sysadmin";

export const pathways: Pathway[] = [
  softwareEngineering,
  cybersecurity,
  dataScience,
  aiMl,
  cloudDevops,
  dataEngineering,
  mobileDevelopment,
  gameDevelopment,
  qaTestAutomation,
  uxUiDesign,
  itSupportSysadmin,
  softwareArchitecture,
];

export function getPathway(slug: string): Pathway | undefined {
  return pathways.find((p) => p.slug === slug);
}
