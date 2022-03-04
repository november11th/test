import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SubwayLineSelector from "../components/interactive/subway/SubwayLineSelector";

export default {
  title: "Subway/SubwayLineSelector",
  component: SubwayLineSelector,
} as ComponentMeta<typeof SubwayLineSelector>;

const Template: ComponentStory<typeof SubwayLineSelector> = (args: any) => {
  const [selectedLineIndex, setSelectedLine] = useState(0);
  return (
    <SubwayLineSelector
      {...args}
      selectedIndex={selectedLineIndex}
      setIndex={setSelectedLine}
    />
  );
};

export const Selector = Template.bind({});
Selector.args = {
  list: ["1", "3", "4", "5"],
};
