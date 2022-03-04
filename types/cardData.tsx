export interface CardData {
  id: string;
  imgSrc: string;
  category: string;
  isNew: boolean;
  title: string;
  partner?: string;
  description: string;
  tagList: string[];
  dataType?: "data" | "insight";
  cardType?: "normal" | "emphasis";
}
