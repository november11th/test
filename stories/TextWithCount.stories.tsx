import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TextWithCount from "../components/TextWithCount";

export default {
  title: "Common/TextWithCount",
  component: TextWithCount,
} as ComponentMeta<typeof TextWithCount>;

export const Data10: ComponentStory<typeof TextWithCount> = () => (
  <TextWithCount count={10}>Data</TextWithCount>
);

export const Insight999: ComponentStory<typeof TextWithCount> = () => (
  <TextWithCount count={999}>Insight</TextWithCount>
);
