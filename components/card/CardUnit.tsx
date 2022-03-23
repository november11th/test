import React, { useState } from "react";
import styled from "@emotion/styled";
import HoveredCard from "./HoveredCard";
import NormalCard from "./NormalCard";
import Link from "next/link";
import { CardData } from "../../types/cardData";
import EmphasisCard from "./EmphasisCard";

const Container = styled.div`
  position: relative;
  margin: auto;
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

  ${Container}:hover & {
    filter: blur(5px);
  }
`;

const HoveredCardWrapper = styled(CardWrapperBase)`
  display: block;
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: calc(100%);
  height: calc(100%);

  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  background-color: rgb(0, 0, 0, 0.6);
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.03);
  border: solid 0.5px #d0d3d7;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`;

interface Props {
  data: CardData;
}
const CardUnit = ({ data }: Props) => {
  const {
    imgSrc,
    category,
    isNew,
    title,
    partner,
    tagList,
    description,
    dataType = "data",
    cardType = "normal",
    displayName,
  } = data;

  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/${dataType}/${displayName}`}>
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
                  itemHidden={hovered}
                  dataType={dataType}
                />
              ) : (
                <EmphasisCard
                  isNew={isNew}
                  partner={partner}
                  imgSrc={imgSrc}
                  category={category}
                  title={title}
                  itemHidden={hovered}
                />
              )}
            </NormalCardWrapper>
            <HoveredCardWrapper>
              <HoveredCard
                tagList={tagList}
                title={title}
                description={description}
                partner={partner}
                dataType={dataType}
              />
            </HoveredCardWrapper>
          </Inside>
        </a>
      </Link>
    </Container>
  );
};

export default CardUnit;
