import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CardUnit from "../components/card/CardUnit";
import { CardData } from "../types/cardData";

export default {
  title: "Common/CardUnit",
  component: CardUnit,
} as ComponentMeta<typeof CardUnit>;

const Template: ComponentStory<typeof CardUnit> = (args) => (
  <div
    style={{
      display: "grid",
      width: "1280px",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}
  >
    <CardUnit {...args} />
  </div>
);

const BASE_DATA: CardData = {
  id: "1",
  imgSrc: "/temp/img-thumb_07.png",
  title: "장소",
  category: "Data",
  partner: "Kakao",
  isNew: true,
  description:
    "TMAP은 티맵모빌리티에서 제공하는 지도 및 텔레매틱스 서비스를 위한 통합 브랜드입니다.",
  tagList: ["장소 혼잡도", "코로나", "여행"],
  cardType: "normal",
};

export const Normal = Template.bind({});
Normal.args = {
  data: {
    ...BASE_DATA,
  },
};

export const Emphasis = Template.bind({});
Emphasis.args = {
  data: {
    ...BASE_DATA,
    title: "장소 혼잡도가 궁금하다면?",
    imgSrc: "/temp/icon-spot.svg",
    partner: undefined,
    cardType: "emphasis",
  },
};
