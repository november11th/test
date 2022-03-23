import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProjectJoinButton from "../components/layout/navbar/ProjectJoinButton";
import React from "react";
import PuzzleMarkdown from "../components/elements/PuzzleMarkdown";
import { sampleDataDescription } from "../temp_data/data_description";

export default {
  title: "Common/PuzzleMarkdown",
  component: PuzzleMarkdown,
} as ComponentMeta<typeof PuzzleMarkdown>;

const Template: ComponentStory<typeof PuzzleMarkdown> = (args) => (
  <PuzzleMarkdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  text: sampleDataDescription["지하철-혼잡도"],
};

export const Test = Template.bind({});
Test.args = {
  text: `
  ##### [인덕원역]→[잠실역] 구간의 경로 혼잡도
  ###### 수요일, 오전 8시 탑승, 2021.12.19 ~ 2022.03.19 데이터 기준
  
  테스트입니다.테스트
  
  
`,
};
