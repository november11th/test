import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InsightCard from "../components/card/InsightCard";
import InsightCardList from "../components/card/InsightCardList";
import { newSampleInsightList } from "../temp_data/insight";

export default {
  title: "Card/InsightCardList",
  component: InsightCardList,
} as ComponentMeta<typeof InsightCardList>;

export const Normal: ComponentStory<typeof InsightCard> = (args) => (
  <InsightCardList
    cardList={Object.values(newSampleInsightList).reduce(
      (list: any, total) => [...total, ...list],
      []
    )}
  />
);
