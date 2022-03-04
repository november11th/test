import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../components/elements/Text";
import { theme } from "../styles/theme";

export default {
  title: "Common/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleCase1 = Template.bind({});
TitleCase1.args = {
  children: "서비스 개발",
  type: "title",
  scale: "1",
  color: theme.colors.point6A,
};

export const TitleCase2 = Template.bind({});
TitleCase2.args = {
  children: "PUZZLE 서비스 개발",
  type: "title",
  scale: "2",
};

export const TitleCase3 = Template.bind({});
TitleCase3.args = {
  children: "PUZZLE 서비스 개발",
  type: "title",
  scale: "3",
};

export const TitleCase4 = Template.bind({});
TitleCase4.args = {
  children: "PUZZLE 서비스 개발",
  type: "title",
  scale: "4",
};

export const TitleCase5 = Template.bind({});
TitleCase5.args = {
  children: "PUZZLE 서비스 개발",
  type: "title",
  scale: "5",
};

export const TitleCase6 = Template.bind({});
TitleCase6.args = {
  children: "PUZZLE 서비스 개발",
  type: "title",
  scale: "6",
};

export const CopyCase1 = Template.bind({});
CopyCase1.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "1",
};

export const CopyCase2 = Template.bind({});
CopyCase2.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "1",
};

export const CopyCase3 = Template.bind({});
CopyCase3.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "1",
};

export const CopyCase4 = Template.bind({});
CopyCase4.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "4",
};

export const CopyCase5 = Template.bind({});
CopyCase5.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "5",
};

export const CopyCase6 = Template.bind({});
CopyCase6.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "6",
};

export const CopyCase7 = Template.bind({});
CopyCase7.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "7",
};

export const CopyCase8 = Template.bind({});
CopyCase8.args = {
  children: "PUZZLE 서비스 개발",
  type: "copy",
  scale: "8",
};
