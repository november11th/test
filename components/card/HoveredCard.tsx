import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import { CardData } from "../../types/cardData";
import TagList from "../TagList";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TagListWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 20px;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 320px;
  width: 254px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: black;

  height: 56px;
  -webkit-line-clamp: 2;
`;

const MarqueeWrapper = styled(Marquee)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 100%;
`;

const MarqueeText = styled.span`
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  margin-left: 100px;
`;

interface Props extends Partial<CardData> {
  marquePlay: boolean;
}
const HoveredCard = ({
  title = "",
  description = "",
  tagList = [],
  marquePlay,
}: Props) => {
  return (
    <Container>
      <TagListWrapper>
        <TagList tagList={tagList} size={"s"} />
      </TagListWrapper>
      <MarqueeWrapper
        direction={"left"}
        speed={100}
        gradient={false}
        loop={marquePlay ? 0 : -1}
      >
        <MarqueeText>{marquePlay ? title : ""}</MarqueeText>
      </MarqueeWrapper>
      <DescriptionWrapper>
        <Text type={"copy"} scale={"6"} color={theme.colors.black}>
          {description}
        </Text>
      </DescriptionWrapper>
    </Container>
  );
};

export default HoveredCard;
