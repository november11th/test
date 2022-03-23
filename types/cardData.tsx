export type DataInsightType = "data" | "insights";

export interface CardData {
  id: string;
  imgSrc: string;
  category: string;
  isNew: boolean;
  title: string;
  partner?: string;
  description: string;
  tagList: string[];
  dataType?: DataInsightType;
  cardType?: "normal" | "emphasis";
  displayName: string;
}
