import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import CategoryLabel from "../elements/CategoryLabel";
import { CardData } from "../../types/cardData";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import classNames from "classnames";
import TitleAndPartnerItem from "./TitleAndPartnerItem";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
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
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    opacity: 0.5;
  }
`;

const ImageWrapper = styled.div`
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";

    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.1) 72%,
      #000000 100%
    );
    mix-blend-mode: normal;
    opacity: 0.3;
    border-radius: 10px;
  }
`;

const TitleAndPartnerItemWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 320px;
  width: 254px;
  height: 56px;
`;

const ItemWrapper = styled.div<{ visible: boolean }>`
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

type Props = Partial<CardData> & { itemHidden: boolean };

const NormalCard = ({
  imgSrc = "",
  category = "Data",
  isNew = false,
  title = "",
  partner = "",
  itemHidden = false,
  dataType,
}: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={imgSrc}
          width={300}
          height={400}
          layout={"responsive"}
          alt={title ?? ""}
        />
      </ImageWrapper>
      <ItemWrapper visible={!itemHidden}>
        <CategoryLabel text={category} />
        {isNew && (
          <NewWrapper>
            <Text type={"copy"} scale={"8"}>
              NEW
            </Text>
          </NewWrapper>
        )}
        <TitleAndPartnerItemWrapper>
          <TitleAndPartnerItem
            title={title}
            partner={partner}
            oneLine={dataType === "data"}
          />
        </TitleAndPartnerItemWrapper>
      </ItemWrapper>
    </Container>
  );
};

export default NormalCard;
