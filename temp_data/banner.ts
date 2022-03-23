import { Banner } from "../types/banner";
import { imageBaseUrl } from "./insight";

export const newBannerList = [
  {
    category: null,
    title: `PUZZLE은 
    SK텔레콤의 위치데이터를 기반으로
    사람들의 거주/이동/체류에 대한
    다양한 인사이트를 제공하는 
    데이터 서비스입니다`,
    description: `데이터는 어렵다? 
            PUZZLE은 어렵게만 느껴졌던 '데이터'를 기반으로 
            생활에 유용한 정보를 제공합니다
            `,
    buttonTitle: "서비스 소개 보기",
    link: "/about",
    imageUrl: "/temp/puzzle_banner_logo.png",
  },
  {
    category: "신규 데이터",
    title: `내가 매일 타는 지하철의 
            혼잡도를 알고싶다면?`,
    description: `지하철 혼잡도는 
                국토교통부의 지하철 혼잡도 기준을 따르고 있으며,
                한 칸의 승객 수가 160명일 때를 
                100%로 환산하여 제공됩니다`,
    buttonTitle: "자세히 보기",
    link: "/data/지하철-혼잡도",
    imageUrl: "/temp/kv-banner-01.png",
  },
  {
    category: "신규 데이터",
    title: `특정 아파트에 
            거주하는 거주민은 어떤 학원을 보낼까?`,
    description: `주거생활 데이터는 
              SK텔레콤의 가족 결합 데이터, 인터넷 설치 이전 신청 
              및 우편물 주소 데이터, 콜데이터(CDR), 기지국 데이터 등과 
              국토교통부의 공동주택 데이터를 결합하여 집계되었습니다`,
    buttonTitle: "자세히 보기",
    link: "/data/주거생활",
    imageUrl: "/temp/kv-banner-02.png",
  },
];
