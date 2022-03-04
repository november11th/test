import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CarHeatPanel from "../components/interactive/subway/CarHeatPanel";

export default {
  title: "Subway/CarHeatPanel",
  component: CarHeatPanel,
} as ComponentMeta<typeof CarHeatPanel>;

const Template: ComponentStory<typeof CarHeatPanel> = (args: any) => {
  return <CarHeatPanel {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  congestionTrainLevel: 2,
  nextStation: "동암",
  endStation: "소요산역",
  congestionCar: [
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
