import React, { useState } from "react";
import styled from "@emotion/styled";
import HoveredCard from "./HoveredCard";
import NormalCard from "./NormalCard";
import Link from "next/link";
import { CardData } from "../../types/cardData";
import EmphasisCard from "./EmphasisCard";

const Container = styled.div`
  position: relative;
`;

const Inside = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ theme }) => theme.size.cardWidth};
  height: ${({ theme }) => theme.size.cardHeight};
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.03);
  border: solid 0.5px #d0d3d7;
`;

const CardWrapperBase = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const NormalCardWrapper = styled(CardWrapperBase)`
  display: block;
  position: relative;
  z-index: 9;
`;

const HoveredCardWrapper = styled(CardWrapperBase)`
  display: block;
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: calc(100%);
  height: calc(100%);

  background-color: ${({ theme }) => theme.colors.grayF4};

  visibility: hidden;
  transform: translateX(100%);
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);

  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.03);
  border: solid 0.5px #d0d3d7;

  ${Container}:hover & {
    visibility: visible;
    transform: translateX(0);
  }
`;

interface Props {
  data: CardData;
}
const CardUnit = ({ data }: Props) => {
  const {
    id,
    imgSrc,
    category,
    isNew,
    title,
    partner,
    tagList,
    description,
    dataType = "data",
    cardType = "normal",
  } = data;

  const [marquePlay, setMarquePlay] = useState(false);

  return (
    <Container
      onMouseEnter={() => setMarquePlay(true)}
      onMouseLeave={() => setMarquePlay(false)}
    >
      <Link href={`/${dataType}/${id}`}>
        <a>
          <Inside>
            <NormalCardWrapper>
              {cardType === "normal" ? (
                <NormalCard
                  isNew={isNew}
                  partner={partner}
                  imgSrc={imgSrc}
                  category={category}
                  title={title}
                />
              ) : (
                <EmphasisCard
                  isNew={isNew}
                  partner={partner}
                  imgSrc={imgSrc}
                  category={category}
                  title={title}
                />
              )}
            </NormalCardWrapper>
            <HoveredCardWrapper>
              <HoveredCard
                tagList={tagList}
                title={title}
                description={description}
                marquePlay={marquePlay}
              />
            </HoveredCardWrapper>
          </Inside>
        </a>
      </Link>
    </Container>
  );
};

export default CardUnit;
