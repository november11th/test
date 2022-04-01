import React from "react";
import styled from "@emotion/styled";
import Text from "../elements/Text";
import PuzzleMarkdown from "../elements/PuzzleMarkdown";
import FullPageContainer from "./FullPageContainer";

const TitleWrapper = styled.div`
  padding: 30px 49px;
  border-bottom: solid 1.2px ${({ theme }) => theme.colors.grayD0};
`;

const ContentWrapper = styled.div`
  height: 100%;
  padding: 50px 59px;
  overflow-y: scroll;
`;

interface Props {
  title: string;
  content: string;
}

const PolicyViewer = ({ title = "", content = "" }: Props) => {
  return (
    <FullPageContainer>
      <TitleWrapper>
        <Text type={"title"} scale={"4"}>
          {title}
        </Text>
      </TitleWrapper>
      <ContentWrapper>
        <PuzzleMarkdown text={content} />
      </ContentWrapper>
    </FullPageContainer>
  );
};

export default PolicyViewer;
