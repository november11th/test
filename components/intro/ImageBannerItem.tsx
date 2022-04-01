import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import InnerContainerBase from "../layout/InnerContainerBase";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import Link from "next/link";
import { Banner } from "../../types/banner";

const Container = styled.div`
  position: relative;
  height: 800px;
`;

const Inside = styled(InnerContainerBase)`
  position: relative;
  background-color: transparent;
  z-index: 1;

  height: 800px;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  margin-top: 223px;

  width: 580px;
  height: 135px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const DescriptionWrapper = styled.div`
  margin-top: 30px;

  width: 580px;
  height: 150px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const LinkWrapper = styled.a`
  position: absolute;
  bottom: 145px;

  & p {
    text-decoration-line: underline;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;

  &:after {
    position: absolute;
    inset: 0;
    content: "";

    background: linear-gradient(
      117.96deg,
      rgba(0, 0, 0, 0.7) 0.54%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

type Props = Banner;

const ImageBannerItem = ({
  imageUrl,
  title,
  description,
  buttonTitle,
  link,
}: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={imageUrl}
          layout={"fill"}
          objectFit={"cover"}
          priority={true}
          alt={""}
        />
      </ImageWrapper>
      <Inside>
        <TitleWrapper>
          <Text type={"title"} scale={"4"} color={theme.colors.white}>
            {title}
          </Text>
        </TitleWrapper>
        <DescriptionWrapper>
          <Text type={"copy"} scale={"4"} color={theme.colors.white}>
            {description}
          </Text>
        </DescriptionWrapper>
        <Link href={link} passHref={true}>
          <LinkWrapper>
            <Text type={"copy"} scale={"5"} color={theme.colors.white}>
              {buttonTitle}
            </Text>
          </LinkWrapper>
        </Link>
      </Inside>
    </Container>
  );
};

export default ImageBannerItem;
