export interface Insight {
  tagList: string[];
  title: string;
  partner: string;
  type: InsightType;
  reportContent?: string;
  interactiveType?: InteractiveType;
  category: string;
  description: string;
}

type InsightType = "report" | "interactive";
export type InteractiveType =
  /* 지하철 */
  | "subwayCongestionCar"
  | "subwayCongestionRoute"
  | "subwayCongestionTrain"

  /* 장소 */
  | "poiCongestionHourly"

  /* 주거생활 */
  | "aptSimilar"

  /* 여행 */
  | "travelPopularEmdr"
  | "travelTravelerDaily"

  /* 킥보드 */
  | "kickboardHourlyHeat"
  | "kickboardStartEndSpot"

  /* 예외 */
  | "";

export interface InteractiveText {
  desc: string;
  placeholder?: string;
  footnoteHref?: string;
  defaultOption: any /* 하나로정하면 에러나서 여기만 */;
}
