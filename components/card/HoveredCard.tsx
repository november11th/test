import React from "react";
import styled from "@emotion/styled";
import { CardData } from "../../types/cardData";
import TagList from "../elements/TagList";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import TitleAndPartnerItem from "./TitleAndPartnerItem";

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

const TextWrapper = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WhiteTagList = styled(TagList)`
  & span {
    border-color: white;
  }
  & p {
    color: white;
  }

  && .more {
    & em {
      background-color: white;
    }
  }
`;

const TitleAndPartnerItemWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 96px;
  width: 254px;
  height: 56px;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 165px;
  width: 254px;
  height: 200px;

  white-space: nowrap;
  line-height: 1.2em;
  overflow: hidden;

  color: black;
`;

type Props = Partial<CardData>;

const HoveredCard = ({
  description = "",
  tagList = [],
  title = "",
  partner,
  dataType,
}: Props) => {
  return (
    <Container>
      <TagListWrapper>
        <WhiteTagList tagList={tagList} size={"s"} />
      </TagListWrapper>
      <TitleAndPartnerItemWrapper>
        <TitleAndPartnerItem
          title={title}
          partner={partner}
          oneLine={dataType === "data"}
        />
      </TitleAndPartnerItemWrapper>
      <DescriptionWrapper>
        <TextWrapper type={"copy"} scale={"6"} color={theme.colors.white}>
          {description}
        </TextWrapper>
      </DescriptionWrapper>
    </Container>
  );
};

export default HoveredCard;
