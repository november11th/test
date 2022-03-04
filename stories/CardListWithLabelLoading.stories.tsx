import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CardListWithLabelLoading from "../components/CardListWithLabelLoading";

export default {
  title: "Common/CardListWithLabelLoading",
  component: CardListWithLabelLoading,
} as ComponentMeta<typeof CardListWithLabelLoading>;

export const Normal: ComponentStory<typeof CardListWithLabelLoading> = () => (
  <CardListWithLabelLoading />
);
