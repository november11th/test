import React from "react";
import Image from "next/image";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import Link from "next/link";
import styled from "@emotion/styled";
import { Banner } from "../../types/banner";

const Inside = styled.div`
  position: relative;
  left: 54px;
`;

const DescriptionWrapper = styled.div<{ bg_color: string }>`
  position: absolute;
  top: 78px;
  right: 0px;
  width: 700px;
  height: 600px;

  background-color: ${({ bg_color }) => bg_color};

  border-radius: 8px;

  padding: 50px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerCategoryWrapper = styled.div`
  margin-bottom: 17px;
`;

const BannerTitleWrapper = styled.div`
  margin-bottom: 36px;
`;

const BannerDescriptionWrapper = styled.div`
  margin-bottom: 36px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const RadiusImage = styled(Image)`
  border-radius: 8px;
`;

const BannerButton = styled.a<{ bg_color: string }>`
  padding: 12px 44px;
  border: 1px solid #f4f8ff;
  border-radius: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    p {
      color: ${({ bg_color }) => bg_color};
    }
  }
`;

const IndexNumberWrapper = styled.div<{ bg_color: string }>`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 0px;
  bottom: 0px;
  background-color: ${({ bg_color }) => bg_color};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionWrapperInside = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BANNER_COLOR_LIST = [
  theme.colors.bannerBG01,
  theme.colors.bannerBG02,
  theme.colors.bannerBG03,
  theme.colors.bannerBG04,
];

type Props = Banner & { bannerIndex: number };

const IntroBannerItem = ({
  category,
  imageUrl,
  title,
  description,
  link,
  buttonTitle,
  bannerIndex,
}: Props) => {
  const bannerColor = BANNER_COLOR_LIST[bannerIndex % BANNER_COLOR_LIST.length];
  return (
    <>
      <Inside>
        <RadiusImage
          src={imageUrl}
          width={650}
          height={760}
          alt={title}
          priority={true}
        />
      </Inside>
      <DescriptionWrapper bg_color={bannerColor}>
        <DescriptionWrapperInside>
          <BannerCategoryWrapper>
            <Text type={"copy"} scale={"4"} color={theme.colors.white}>
              {category}
            </Text>
          </BannerCategoryWrapper>
          <BannerTitleWrapper>
            <Text type={"title"} scale={"4"} color={theme.colors.white}>
              {title}
            </Text>
          </BannerTitleWrapper>
          <BannerDescriptionWrapper>
            <Text type={"copy"} scale={"4"} color={theme.colors.white}>
              {description}
            </Text>
          </BannerDescriptionWrapper>
          <ButtonWrapper>
            <Link href={link} passHref={true}>
              <BannerButton bg_color={bannerColor}>
                <Text type={"copy"} scale={"6"} color={theme.colors.white}>
                  {buttonTitle}
                </Text>
              </BannerButton>
            </Link>
          </ButtonWrapper>
        </DescriptionWrapperInside>
      </DescriptionWrapper>
      <IndexNumberWrapper bg_color={bannerColor}>
        <Text type={"title"} scale={"4"} color={theme.colors.white}>
          {bannerIndex + 1}
        </Text>
      </IndexNumberWrapper>
    </>
  );
};

export default IntroBannerItem;
