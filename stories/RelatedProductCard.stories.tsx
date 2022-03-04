import { ComponentMeta, ComponentStory } from "@storybook/react";
import RelatedProductCard from "../components/card/RelatedProductCard";
import React from "react";

export default {
  title: "Insight/RelatedProductCard",
  component: RelatedProductCard,
} as ComponentMeta<typeof RelatedProductCard>;

const Template: ComponentStory<typeof RelatedProductCard> = (args) => (
  <RelatedProductCard {...args} />
);

export const ProductWithPartner = Template.bind({});
ProductWithPartner.args = {
  data: {
    type: "API",
    name: "지하철 실시간 혼잡도",
    partner: "서울교통공사",
  },
};

export const ProductWithoutPartner = Template.bind({});
ProductWithoutPartner.args = {
  data: {
    type: "excel",
    name: "여행지 체류 시간",
  },
};
