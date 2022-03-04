import { CardData } from "../types/cardData";
import { imageBaseUrl } from "./insight";

export const sampleDataList: CardData[] = [
  {
    id: "1",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_07.png`,
    title: "장소",
    category: "Data",
    partner: "Kakao",
    isNew: true,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["장소 혼잡도", "코로나", "여행"],
    cardType: "normal",
  },
  {
    id: "2",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_06.png`,
    category: "Data",
    title: "티맵",
    partner: "SKTelecom",
    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["지하철", "객차 혼잡도"],
  },
  {
    id: "3",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data01.png`,
    category: "Data",
    title: "데이터2",
    partner: "PUZZLE",
    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["태그1"],
  },
  {
    id: "4",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data03.png`,
    category: "Data",
    title: "킥보드",
    partner: "지바이크",
    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["배달", "전기차"],
  },
  {
    id: "5",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_06.png`,
    category: "Data",
    title: "티맵",
    partner: "SKTelecom",
    isNew: true,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["지하철", "객차 혼잡도"],
  },
  {
    id: "6",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data01.png`,
    category: "Data",
    title: "데이터2",
    partner: "PUZZLE",
    isNew: true,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["태그1"],
  },
  {
    id: "7",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_data03.png`,
    category: "Data",
    title: "킥보드",
    partner: "지바이크",
    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["배달", "전기차"],
  },
  {
    id: "8",
    imgSrc: `${imageBaseUrl}/temp/img-thumb_06.png`,
    category: "Data",
    title: "티맵",
    partner: "SKTelecom",

    isNew: false,
    description:
      "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
    tagList: ["지하철", "객차 혼잡도"],
  },
];
