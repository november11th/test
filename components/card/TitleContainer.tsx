import React from "react";
import styled from "@emotion/styled";
import TextWithCount from "../elements/TextWithCount";
import Text from "../elements/Text";

const Container = styled.div`
  padding-top: 44px;
  min-width: ${({ theme }) => theme.size.pageWidth};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div``;

const DescriptionWrapper = styled.div`
  margin-top: 9px;
  text-align: center;
`;

const Body = styled.div`
  margin-top: 67px;
  display: flex;
  justify-content: center;
`;

interface Props {
  title: string;
  titleCount?: number;
  description?: string;
  children?: React.ReactNode;
}

const TitleContainer = ({
  title,
  titleCount = 0,
  description,
  children,
}: Props) => {
  return (
    <Container>
      <Header>
        <TitleWrapper data-testid={"title-container-title"}>
          <TextWithCount count={titleCount}>{title}</TextWithCount>
        </TitleWrapper>
        {description && (
          <DescriptionWrapper data-testid={"title-container-description"}>
            <Text type={"copy"} scale={"6"}>
              {description}
            </Text>
          </DescriptionWrapper>
        )}
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default TitleContainer;
