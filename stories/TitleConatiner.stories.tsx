import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TitleContainer from "../components/card/TitleContainer";

export default {
  title: "Card/TitleContainer",
  component: TitleContainer,
} as ComponentMeta<typeof TitleContainer>;

export const Data: ComponentStory<typeof TitleContainer> = () => (
  <TitleContainer
    title={"데이터"}
    titleCount={2}
    description={
      "SK텔레콤에서 이동/체류 관련하여 제공 가능한 데이터 리스트입니다."
    }
  >
    <div>test</div>
  </TitleContainer>
);

export const Insight: ComponentStory<typeof TitleContainer> = () => (
  <TitleContainer
    title={"인사이트"}
    titleCount={2}
    description={
      "각 데이터는 여러 개의 인사이트로 구성되어 있습니다.\n" +
      "인사이트 에서는 데이터를 다양한 관점을 풀어내며 새로운 활용처를 상상해낼 수있게 합니다."
    }
  >
    <div>test</div>
  </TitleContainer>
);
