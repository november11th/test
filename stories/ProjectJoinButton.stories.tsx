import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProjectJoinButton from "../components/layout/navbar/ProjectJoinButton";
import React from "react";

export default {
  title: "Layout/ProjectJoinButton",
  component: ProjectJoinButton,
} as ComponentMeta<typeof ProjectJoinButton>;

const Template: ComponentStory<typeof ProjectJoinButton> = (args) => (
  <ProjectJoinButton {...args} />
);

export const Request = Template.bind({});
Request.args = {
  children: "데이터 요청하기",
};

export const Test = Template.bind({});
Test.args = {
  children: "Test",
};
