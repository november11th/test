import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { theme } from "../../styles/theme";
import Text from "../elements/Text";
import Link from "next/link";

const Container = styled.div`
  width: 300px;
  height: 350px;
  position: relative;
`;

const TextContainer = styled.div`
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 240px;
  transition: all ease 0.2s 0s;

  padding-top: 30px;
  padding-left: 23px;
  padding-right: 23px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${Container}:hover & {
    top: 116px;
  }
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  && p {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
`;

const PartnerWrapper = styled.div`
  margin-top: 5px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  display: none;

  ${Container}:hover & {
    display: inherit;
    margin-top: 9px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    text-align: center;
  }
`;

interface Props {
  imageUrl: string;
  title: string;
  partner: string;
  description: string;
  displayName: string;
}

const ImageWrapper = styled.div`
  &:after {
    visibility: hidden;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";

    background-color: black;
    opacity: 0.7;

    ${Container}:hover & {
      visibility: visible;
    }
  }
`;

const DataCard = ({
  imageUrl,
  title,
  partner,
  description,
  displayName,
}: Props) => {
  return (
    <Link href={`/data/${displayName}`} passHref={true}>
      <a>
        <Container>
          <ImageWrapper>
            <Image
              src={imageUrl}
              width={300}
              height={350}
              alt={""}
              priority={true}
            />
          </ImageWrapper>
          <TextContainer>
            <TitleWrapper>
              <Text type={"copy"} scale={"5"} color={theme.colors.black}>
                {title}
              </Text>
            </TitleWrapper>
            <PartnerWrapper>
              <Text type={"copy"} scale={"8"} color={theme.colors.black}>
                {partner}
              </Text>
            </PartnerWrapper>
            <DescriptionWrapper>
              <Text type={"copy"} scale={"7"} color={theme.colors.black}>
                {description}
              </Text>
            </DescriptionWrapper>
          </TextContainer>
        </Container>
      </a>
    </Link>
  );
};

export default DataCard;
