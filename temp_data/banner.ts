import { Banner } from "../types/banner";
import { imageBaseUrl } from "./insight";

export const bannerSlideList: Banner[] = [
  {
    src: `${imageBaseUrl}/temp/kv-banner-01.png`,
    link: "/",
    title: "내가 매일 타는 \n지하철의 혼잡도를 \n알고싶다면?",
    category: "테마별 인사이트",
  },
  {
    src: `${imageBaseUrl}/temp/kv-banner-02.png`,
    link: "/",
    title: "특정 아파트에 \n거주하는 거주민은 \n어떤 학원을 보낼까?",
    category: "신규 인사이트",
  },
  {
    src: `${imageBaseUrl}/temp/kv-banner-01.png`,
    link: "/",
    title: "내가 매일 타는 \n지하철의 혼잡도를 \n알고싶다면?",
    category: "서비스 소개",
  },
];
