import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";

import ThemeFilter from "../components/themes/ThemeFilter";

export default {
  title: "Common/ThemeFilter",
  component: ThemeFilter,
} as ComponentMeta<typeof ThemeFilter>;

const Template: ComponentStory<typeof ThemeFilter> = (args) => (
  <ThemeFilter {...args} />
);

export const ShortList = Template.bind({});
ShortList.args = {
  themeList: ["서비스", "데이터"],
};

export const LongList = Template.bind({});
LongList.args = {
  themeList: [
    "서비스",
    "데이터",
    "겨울",
    "대한민국",
    "러시아",
    "미국",
    "일본",
    "중국",
    "지하철",
    "눈사람",
  ],
};
