import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import CategoryLabel from "../CategoryLabel";
import { CardData } from "../../types/cardData";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import classNames from "classnames";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
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

  height: 56px;
  -webkit-line-clamp: 2;

  &.oneLine {
    height: 28px;
    -webkit-line-clamp: 1;
  }
`;

const PartnerWrapper = styled.div`
  position: absolute;
  left: 23px;
  top: 346px;
  p {
    opacity: 0.9;
  }
`;

type Props = Partial<CardData>;

const NormalCard = ({
  imgSrc = "",
  category = "DATA",
  isNew = false,
  title = "",
  partner = "",
}: Props) => {
  return (
    <Container>
      <Image
        src={imgSrc}
        width={300}
        height={400}
        layout={"responsive"}
        alt={title ?? ""}
      />
      <CategoryLabel text={category} />

      {isNew && (
        <NewWrapper>
          <Text type={"copy"} scale={"8"}>
            NEW
          </Text>
        </NewWrapper>
      )}
      <TitleWrapper className={classNames({ oneLine: partner!! })}>
        <Text type={"copy"} scale={"5"} color={theme.colors.white}>
          {title}
        </Text>
      </TitleWrapper>
      {partner && (
        <PartnerWrapper>
          <Text type={"copy"} scale={"8"} color={theme.colors.white}>
            {partner}
          </Text>
        </PartnerWrapper>
      )}
    </Container>
  );
};

export default NormalCard;
