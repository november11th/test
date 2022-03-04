import React from "react";
import { CardData } from "../../types/cardData";
import styled from "@emotion/styled";
import Image from "next/image";
import Text from "../elements/Text";
import CategoryLabel from "../CategoryLabel";
import { theme } from "../../styles/theme";
import classNames from "classnames";

const Container = styled.div`
  position: relative;

  background-color: white;

  width: 100%;
  height: 100%;
`;

const NewWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 296px;
  width: 44.4px;
  height: 20.4px;
  flex-grow: 0;
  margin: 1.5px 0 2.1px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    opacity: 0.5;
  }
`;

const TitleWrapper = styled.div`
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

const ImageWrapper = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

type Props = Partial<CardData>;

const EmphasisCard = ({
  imgSrc = "",
  isNew = false,
  title = "",
  category = "",
}: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={imgSrc} width={180} height={180} alt={title ?? ""} />
      </ImageWrapper>
      <CategoryLabel text={category} color={theme.colors.black} />
      {isNew && (
        <NewWrapper>
          <Text type={"copy"} scale={"8"}>
            NEW
          </Text>
        </NewWrapper>
      )}
      <TitleWrapper>
        <Text type={"copy"} scale={"5"} color={theme.colors.black}>
          {title}
        </Text>
      </TitleWrapper>
    </Container>
  );
};

export default EmphasisCard;
