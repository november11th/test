import facepaint from "facepaint";

// min-width 기준
export const mediaSize = {
  MOBILE: "320px",
  TABLET: "768px",
  LAPTOP: "1024px",
  DESKTOP: "1440px",
  WRAPPER: "1760px",
};

export function getMediaQuery(sizeList: string[]) {
  return facepaint(sizeList.map((bp) => `@media (min-width: ${bp})`));
}
