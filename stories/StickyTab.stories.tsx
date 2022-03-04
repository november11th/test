import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StickyTab from "../components/elements/StickyTab";

export default {
  title: "Common/StickyTab",
  component: StickyTab,
} as ComponentMeta<typeof StickyTab>;

const Template: ComponentStory<typeof StickyTab> = (args: any) => {
  const [tabIndex, setTabIndex] = useState(0);
  return <StickyTab {...args} tabIndex={tabIndex} setTabIndex={setTabIndex} />;
};

export const Tab = Template.bind({});
Tab.args = {
  tabList: ["서비스", "데이터"],
};

export const TabWithoutUnderline = Template.bind({});
TabWithoutUnderline.args = {
  tabList: ["연관 데이터 상품"],
  hasUnderline: false,
};

export const TabWithShare = Template.bind({});
TabWithShare.args = {
  tabList: ["관련 서비스", "데이터 설명"],
  hasShare: true,
};
