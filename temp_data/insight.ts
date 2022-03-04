import { RelatedProduct } from "../types/relatedProduct";
import { CardData } from "../types/cardData";
import { Insight } from "../types/insight";
import { sampleDataDescription } from "./data_description";

export const imageBaseUrl =
  "https://hidden-puzzle-hub-file-bucket.s3.ap-northeast-2.amazonaws.com";

export const sampleRelatedProduct: RelatedProduct[] = [
  {
    type: "API",
    name: "API명",
    partner: "서울교통공사",
  },
  {
    type: "API",
    name: "API명",
  },
  {
    type: "excel",
    name: "엑셀데이터",
    partner: "지바이크",
  },
  {
    type: "excel",
    name: "엑셀데이터",
  },
  {
    type: "API",
    name: "마트혼잡도",
  },
  {
    type: "API",
    name: "여행데이터",
    partner: "제주도",
  },
];

export const sampleInsightList = [
  {
    id: "1",
    imgSrc: `${imageBaseUrl}/temp/icon-spot.png`,
    title: "아이와 함께 갈만한 여행장소 - 제주도 제주시편",
    category: "일반 인사이트",
    isNew: true,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["장소 혼잡도", "코로나", "여행"],
    cardType: "emphasis",
    dataType: "insights",
    partner: "SKTelecom",
    reportContent: sampleDataDescription,
    interactiveType: null,
    type: "report",
  },
  {
    id: "2",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_07.png`,
    title: "출/퇴근길 가장 혼잡한 구간",
    category: "Interactive 인사이트",
    isNew: true,
    description:
      "수도권 1~9호선, 신분당선의 출/퇴근길 가장 혼잡한 구간을 확인할 수 있습니다. ",
    tagList: ["지하철 혼잡도", "지하철", "여행"],
    cardType: "normal",
    dataType: "insights",
    type: "interactive",
    partner: "서울교통공사",
    interactiveType: "subway",
    reportContent: null,
  },
  {
    id: "3",
    imgSrc: `${imageBaseUrl}/temp/icon-detail-course.png`,
    title: "전기차 충전기수 대비 이용자 수",
    category: "실시간 인사이트",
    isNew: false,
    description:
      "2021년 12월 기준 서울시 시군구 별 전기차 이용 거주민수를 해당 지역에 공공에 오픈된 전기차 충전소의 충전기 수와 비교한 차트입니다.",
    tagList: ["전기차"],
    cardType: "emphasis",
    dataType: "insights",
    partner: "티맵모빌리티",
    reportContent: sampleDataDescription,
    interactiveType: null,
    type: "report",
  },
  {
    id: "4",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data03.png`,
    category: "일반 인사이트",
    title: "킥보드 이용 분석",
    subTitle: "장소 혼잡도 궁금하다면?",
    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["배달", "전기차"],
    dataType: "insights",
    partner: "지바이크",
    reportContent: sampleDataDescription,
    interactiveType: null,
    type: "report",
  },
];
