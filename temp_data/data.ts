import { CardData } from "../types/cardData";
import { imageBaseUrl } from "./insight";

export interface DataIntelligence extends CardData {
  backgroundImageUrl: string;
}

export const sampleDataList: DataIntelligence[] = [
  {
    id: "4",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_07.png`,
    category: "Data",
    title: "지하철 혼잡도",
    partner: "서울교통공사",
    isNew: true,
    description:
      "지하철 혼잡도는 수도권 1~9호선 모든 역사에 대한 혼잡도 정보를 제공합니다",
    tagList: ["지하철", "대중교통", "혼잡도"],
    displayName: "지하철-혼잡도",
    backgroundImageUrl: "/images/data_detail_bg_subway.svg",
  },
  {
    id: "1",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data02.png`,
    title: "쇼핑,여가 장소 혼잡도",
    category: "Data",
    partner: "Kakao",
    isNew: true,
    description:
      "장소혼잡도는 장소(POI)의 혼잡한 정도를 준실시간으로 제공합니다",
    tagList: ["장소", "POI", "여행"],
    cardType: "normal",
    displayName: "쇼핑,여가-장소-혼잡도",
    backgroundImageUrl: "/images/data_detail_bg_poi.svg",
  },
  {
    id: "8",
    imgSrc: `${imageBaseUrl}/temp/thumbnail_travel.jpg`,
    category: "Data",
    title: "국내 여행",
    partner: "SKTelecom",
    isNew: true,
    description:
      "숙박 여행 데이터는 국내 인기 여행지와 여행지별 여행 장소, 여행자 특성(성별, 연령대, 동반자 유형) 등 여행에 관한 정보를 제공합니다",
    tagList: ["여행", "숙박"],
    displayName: "국내-여행",
    backgroundImageUrl: "/images/data_detail_bg_travel.svg",
  },
  {
    id: "5",
    imgSrc: `${imageBaseUrl}/temp/life_thumbnail.png`,
    category: "Data",
    title: "주거생활",
    partner: "SKTelecom",
    isNew: true,
    description:
      "주거생활은 아파트별 거주자 특징과 라이프스타일을 통계데이터로 제공합니다",
    tagList: ["주거", "아파트"],
    displayName: "주거생활",
    backgroundImageUrl: "/images/data_detail_bg_apt.svg",
  },
  {
    id: "3",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data03.png`,
    category: "Data",
    title: "공유킥보드 이용",
    partner: "지바이크",
    isNew: true,
    description:
      "공유킥보드는 지역구별 공유킥보드 이용 관련 정보를 통계적 데이터로 제공합니다",
    tagList: ["킥보드", "교통"],
    displayName: "공유킥보드-이용",
    backgroundImageUrl: "/images/data_detail_bg_kickboard.svg",
  },
];
