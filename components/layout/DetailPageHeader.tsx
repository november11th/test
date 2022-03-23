import React from "react";
import styled from "@emotion/styled";
import PageHeader from "./PageHeader";
import Text from "../elements/Text";
import TagList from "../elements/TagList";
import { theme } from "../../styles/theme";
import Image from "next/image";

const paddingTop = 52;
const Container = styled(PageHeader)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${paddingTop}px;
  padding-bottom: 180px;
`;

const Header = styled.div`
  position: absolute;
  margin-top: calc(325px - ${paddingTop}px);
  max-width: 675px;
`;

const Type = styled(Text)`
  margin: 0 0 0 0;
`;
const Title = styled(Text)`
  margin: 20px 0 0 0;
`;

const Description = styled(Text)`
  margin-top: 20px;
`;

const Partner = styled.div`
  display: inline-block;
  margin: 20px 0 0 0;
  padding: 8px 20px 8px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  transform: translateX(600px) translateY(-${paddingTop}px);
`;

interface Props {
  category?: string;
  tagList: string[];
  title: string;
  description?: string;
  partner?: string;
  imgUrl?: string;
}

const DetailPageHeader = ({
  category = "DATA",
  tagList = [],
  title = "",
  description,
  partner,
  imgUrl,
}: Props) => {
  return (
    <Container>
      {imgUrl && (
        <ImageWrapper>
          <Image
            alt={title}
            src={imgUrl}
            width={650}
            height={650}
            priority={true}
          />
        </ImageWrapper>
      )}
      <TagList size={"l"} tagList={tagList} />
      <Header>
        <Type type={"copy"} scale={"1"} color={theme.colors.gray70}>
          {category}
        </Type>
        <Title type={"title"} scale={"3"} testId={"detail-page-header-title"}>
          {title}
        </Title>
        {description && (
          <Description type={"copy"} scale={"4"}>
            {description}
          </Description>
        )}
        {partner && (
          <Partner>
            <Text type={"copy"} scale={"7"} color={theme.colors.white}>
              {`PROJECT WITH ${partner}`}
            </Text>
          </Partner>
        )}
      </Header>
    </Container>
  );
};

export default DetailPageHeader;
