import SvgCongestionLevel1 from "../assets/images/congestion-level-1.svg";
import SvgCongestionLevel2 from "../assets/images/congestion-level-2.svg";
import SvgCongestionLevel3 from "../assets/images/congestion-level-3.svg";
import SvgCongestionLevel4 from "../assets/images/congestion-level-4.svg";
import { theme } from "../styles/theme";

// 혼잡도 레벨에 따라 알맞은 svg 꺼내주기
export const getCongestionSvg = (level: string | number) => {
  const level_ = typeof level === "number" ? String(level) : level;
  switch (level_) {
    case "1":
      return <SvgCongestionLevel1 />;
    case "2":
      return <SvgCongestionLevel2 />;
    case "3":
      return <SvgCongestionLevel3 />;
    case "4":
      return <SvgCongestionLevel4 />;
  }
};

// 혼잡도 레벨 array -> 혼잡도 컬러셋 array
export const getCongestionLevelColor = (congestionLevelArray: number[]) => {
  return congestionLevelArray.map((level: number) => {
    switch (level) {
      case 1:
        return theme.colors.congestionLevel1;
      case 2:
        return theme.colors.congestionLevel2;
      case 3:
        return theme.colors.congestionLevel3;
      case 4:
        return theme.colors.congestionLevel4;
      default:
        return theme.colors.white;
    }
  });
};

// 역사명
export const addStationPostFix = (name: string) => {
  if (name[name.length - 1] === "역") return name;
  else return `${name}역`;
};
