import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CarHeat from "../components/interactive/subway/CarHeat";

export default {
  title: "Subway/CarHeat",
  component: CarHeat,
} as ComponentMeta<typeof CarHeat>;

const Template: ComponentStory<typeof CarHeat> = (args: any) => {
  return <CarHeat {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  data: [
    {
      value: 1,
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 4,
      label: "최다하차",
    },
    {
      value: 3,
      label: "최다하차",
    },
    {
      value: 3,
    },
    {
      value: 2,
    },
    {
      value: 1,
    },
    {
      value: 1,
    },
    {
      value: 1,
    },
  ],
};
