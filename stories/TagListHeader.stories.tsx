import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagList from "../components/elements/TagList";

export default {
  title: "Common/tagList",
  component: TagList,
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => {
  return <TagList {...args} />;
};

export const CardTags = Template.bind({});
CardTags.args = {
  tagList: ["지하철", "혼잡도"],
  size: "s",
};

export const CardTooManyTags = Template.bind({});
CardTooManyTags.args = {
  tagList: ["지하철", "혼잡도", "경로"],
  size: "s",
};

export const HeaderTags = Template.bind({});
HeaderTags.args = {
  tagList: ["지하철", "혼잡도", "경로", "수도권", "AI"],
  size: "l",
};

export const HeaderTooManyTags = Template.bind({});
HeaderTooManyTags.args = {
  tagList: [
    "지하철",
    "혼잡도",
    "경로",
    "수도권",
    "AI",
    "Wi-Fi",
    "교통",
    "대중교통",
    "출근",
  ],
  size: "l",
};
