import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CongestionLevel from "../components/interactive/subway/CongestionLevel";

export default {
  title: "Subway/CongestionLevel",
  component: CongestionLevel,
} as ComponentMeta<typeof CongestionLevel>;

const Template: ComponentStory<typeof CongestionLevel> = (args: any) => {
  return <CongestionLevel />;
};

export const CongestionLevelPanel = Template.bind({});
CongestionLevelPanel.args = {};
