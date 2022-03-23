export interface Insight {
  tagList: string[];
  title: string;
  partner: string;
  type: InsightType;
  reportContent?: string;
  interactiveType?: InteractiveType;
  category: string;
}

type InsightType = "report" | "interactive";
type InteractiveType = "subway";

export interface InteractiveText {
  desc: string;
  placeholder?: string;
  footnoteHref?: string;
  defaultOption: any /* 하나로정하면 에러나서 여기만 */;
}
