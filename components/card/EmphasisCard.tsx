import React from "react";
import { CardData } from "../../types/cardData";
import styled from "@emotion/styled";
import Image from "next/image";
import Text from "../elements/Text";
import CategoryLabel from "../elements/CategoryLabel";
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

  && p {
    font-weight: bold;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PartnerWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 346px;
  p {
    opacity: 0.9;
  }
`;

const ItemWrapper = styled.div<{ visible: boolean }>`
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

type Props = Partial<CardData> & { itemHidden: boolean };

const EmphasisCard = ({
  imgSrc = "",
  isNew = false,
  title = "",
  category = "",
  itemHidden = false,
}: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={imgSrc} width={180} height={180} alt={title ?? ""} />
      </ImageWrapper>
      <ItemWrapper visible={!itemHidden}>
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
      </ItemWrapper>
    </Container>
  );
};

export default EmphasisCard;
