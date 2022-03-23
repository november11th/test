import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PlayController from "../components/interactive/common/PlayController";

export default {
  title: "Subway/PlayController",
  component: PlayController,
} as ComponentMeta<typeof PlayController>;

const Template: ComponentStory<typeof PlayController> = (args: any) => {
  const [value, setValue] = useState(330);
  return (
    <PlayController {...args} value={value} setValue={setValue} initial={330} />
  );
};

export const Controller = Template.bind({});
Controller.args = {};
