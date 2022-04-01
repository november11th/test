import React from "react";
import styled from "@emotion/styled";
import PageHeader from "./PageHeader";
import Text from "../elements/Text";
import TagList from "../elements/TagList";
import BackgroundIcon from "../../public/images/puzzle_header_insight_icon.svg";
import { theme } from "../../styles/theme";
import ProjectWith from "./detailHeader/ProjectWith";

const StyledPageHeader = styled(PageHeader)`
  flex-direction: column;
  justify-content: space-between;
  height: 500px; /* insight는 크기가 조금 더 작음 */
`;
const StyledTagList = styled(TagList)`
  margin-top: 160px;
`;
const Header = styled.div`
  margin-top: 50px;
  max-width: 675px;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 80px;
`;
const Type = styled(Text)``;
const Title = styled(Text)``;

interface Props {
  category?: string;
  tagList: string[];
  title: string;
  partner?: string;
}

const InsightDetailPageHeader = ({
  category,
  tagList = [],
  title = "",
  partner,
}: Props) => {
  return (
    <StyledPageHeader dim={false}>
      <IconWrapper>
        <BackgroundIcon />
      </IconWrapper>
      <StyledTagList
        size={"l"}
        tagList={tagList}
        color={theme.colors.gray6e}
        hasUnderline={false}
      />
      <Header>
        <Type type={"copy"} scale={"7"} color={theme.colors.gray6e}>
          {category}
        </Type>
        <Title
          type={"title"}
          scale={"3"}
          color={theme.colors.gray33}
          testId={"detail-page-header-title"}
        >
          {title}
        </Title>
        {partner && <ProjectWith partner={partner} type={"INSIGHT"} />}
      </Header>
    </StyledPageHeader>
  );
};

export default InsightDetailPageHeader;
