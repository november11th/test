import React from "react";
import styled from "@emotion/styled";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import Link from "next/link";

const Container = styled.div<{ background_color: string }>`
  padding: 21px 25px;
  background-color: ${({ background_color }) => background_color};
  width: 300px;
  height: 245px;
  box-sizing: border-box;

  &:hover {
    outline: 0.5px solid #979797;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Inside = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div``;

const TitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  && p {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 31px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

interface Props {
  title: string;
  category: "체험형 인사이트" | "일반 인사이트";
  description: string;
  backgroundColor?: string;
  displayName: string;
}

const InsightCard = ({
  title,
  category = "일반 인사이트",
  description,
  backgroundColor = "white",
  displayName,
}: Props) => {
  const isBackgroundColorWhite = backgroundColor === "white";

  return (
    <Link href={`/insights/${displayName}`} passHref={true}>
      <a>
        <Container
          data-testid={"insight-card"}
          background_color={backgroundColor}
        >
          <Inside>
            <CategoryWrapper data-testid="insight-card-category">
              <Text
                type={"copy"}
                scale={"8"}
                color={
                  isBackgroundColorWhite
                    ? theme.colors.gray6e
                    : theme.colors.grayF4
                }
              >
                {category}
              </Text>
            </CategoryWrapper>
            <TitleWrapper data-testid="insight-card-title">
              <Text
                type={"copy"}
                scale={"5"}
                color={
                  isBackgroundColorWhite
                    ? theme.colors.black
                    : theme.colors.white
                }
              >
                {title}
              </Text>
            </TitleWrapper>
            <DescriptionWrapper data-testid="insight-card-description">
              <Text
                type={"copy"}
                scale={"7"}
                color={
                  isBackgroundColorWhite
                    ? theme.colors.black
                    : theme.colors.white
                }
              >
                {description}
              </Text>
            </DescriptionWrapper>
          </Inside>
        </Container>
      </a>
    </Link>
  );
};

export default InsightCard;
