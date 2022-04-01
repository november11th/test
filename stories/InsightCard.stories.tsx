import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InsightCard from "../components/card/InsightCard";

export default {
  title: "Card/InsightCard",
  component: InsightCard,
} as ComponentMeta<typeof InsightCard>;

const Template: ComponentStory<typeof InsightCard> = (args) => (
  <InsightCard {...args} />
);

export const Subway: ComponentStory<typeof InsightCard> = Template.bind({});
Subway.args = {
  title: "두 줄로도 가능한\n 인사이트 영역",
  category: "체험형 인사이트",
  description:
    "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. 그래프의 색깔은 스타필드하남에 방문한 해당 연령대/성별의 비율이 원래 그 연령대/성별의 비율보다 높다는 것을 의미합니다. 스타필드하남과 스타필드안성의 경우 3,40대 남성과 여성 비율이 높게 나타나는 것을 알 수 있습니다.",
  // backgroundColor: "red",
};
