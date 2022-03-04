import SvgCongestionLevel1 from "../assets/images/congestion-level-1.svg";
import SvgCongestionLevel2 from "../assets/images/congestion-level-2.svg";
import SvgCongestionLevel3 from "../assets/images/congestion-level-3.svg";
import SvgCongestionLevel4 from "../assets/images/congestion-level-4.svg";

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
