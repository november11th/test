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
  text: sampleDataDescription,
};
