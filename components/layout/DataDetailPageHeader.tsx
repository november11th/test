import React from "react";
import styled from "@emotion/styled";
import PageHeader from "./PageHeader";
import Text from "../elements/Text";
import TagList from "../elements/TagList";
import { theme } from "../../styles/theme";
import ProjectWith from "./detailHeader/ProjectWith";

const StyledPageHeader = styled(PageHeader)`
  flex-direction: column;
  justify-content: space-between;
`;
const StyledTagList = styled(TagList)`
  margin-top: 160px;
`;
const Header = styled.div`
  margin-top: 50px;
  max-width: 675px;
`;
const Title = styled(Text)`
  margin: 20px 0 0 0;
`;
const Description = styled(Text)`
  margin-top: 10px;
  width: 600px;
`;

interface Props {
  category?: string;
  tagList: string[];
  title: string;
  description?: string;
  partner?: string;
  imgUrl?: string;
}

const DataDetailPageHeader = ({
  tagList = [],
  title = "",
  description,
  partner,
  imgUrl,
}: Props) => {
  return (
    <StyledPageHeader imgUrl={imgUrl} dim={true}>
      <StyledTagList
        size={"l"}
        tagList={tagList}
        color={theme.colors.white}
        hasUnderline={true}
      />
      <Header>
        <Title
          type={"title"}
          scale={"3"}
          color={theme.colors.white}
          testId={"detail-page-header-title"}
        >
          {title}
        </Title>
        <Description type={"copy"} scale={"4"} color={theme.colors.white}>
          {description}
        </Description>
        {partner && <ProjectWith partner={partner} type={"DATA"} />}
      </Header>
    </StyledPageHeader>
  );
};

export default DataDetailPageHeader;
