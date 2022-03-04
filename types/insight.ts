export interface Insight {
  tagList: string[];
  title: string;
  partner: string;
  type: InsightType;
  reportContent?: string;
  interactiveType?: InteractiveType;
}

type InsightType = "report" | "interactive";
type InteractiveType = "subway";
