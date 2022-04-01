import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DataCard from "../components/card/DataCard";

export default {
  title: "Card/DataCard",
  component: DataCard,
} as ComponentMeta<typeof DataCard>;

const Template: ComponentStory<typeof DataCard> = (args) => (
  <DataCard {...args} />
);

export const Case1: ComponentStory<typeof DataCard> = Template.bind({});
Case1.args = {
  imageUrl: "/images/data_card_subway.png",
  title: "테스트 타이틀",
  partner: "서울교통공사",
  description: "테스트입니다.",
  displayName: "1",
};
