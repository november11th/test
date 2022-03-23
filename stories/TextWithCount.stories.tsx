import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TextWithCount from "../components/elements/TextWithCount";
import { TitleCase2 } from "./Text.stories";
import Text from "../components/elements/Text";

const Template: ComponentStory<typeof TextWithCount> = (args) => (
  <TextWithCount {...args} />
);

export default {
  title: "Common/TextWithCount",
  component: TextWithCount,
} as ComponentMeta<typeof TextWithCount>;

export const Data10: ComponentStory<typeof TextWithCount> = Template.bind({});
Data10.args = {
  children: "PUZZLE 서비스 개발",
  count: 10,
  size: "small",
};
