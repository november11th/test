import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import { theme } from "../../styles/theme";

const Container = styled.div``;
const TagListWrapper = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: max-content;
  width: 100%;
`;
const TagWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &.size--s {
    padding-left: 2px;
    padding-right: 2px;
    &:first-of-type {
      padding-left: 0px;
    }
  }

  &.size--l {
    padding-left: 4px;
    padding-right: 4px;
    &:first-of-type {
      padding-left: 0px;
    }
  }
`;
const Tag = styled.span`
  display: flex;
  min-width: max-content;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray97};

  &.size--s {
    border-radius: 20px;
    padding: 2px 10px;
  }

  &.size--l {
    border-radius: 20px;
    padding: 2px 10px;
  }

  &.more {
    padding: 1px 8px 1px 8px;
    em {
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.gray97};
    }

    em + em {
      margin-left: 2px;
    }
  }
`;

interface Props {
  tagList: string[];
  size: "s" | "l";
  className?: string;
}

const TagList = ({ tagList = [], size = "s", className }: Props) => {
  const showTagsNum = size === "s" ? 2 : 8;

  return (
    <Container className={className}>
      <TagListWrapper>
        {tagList.slice(0, showTagsNum).map((tag, index) => (
          <TagWrapper key={`${index}-${tag}`} className={`size--${size}`}>
            <Tag className={`size--${size}`}>
              {size === "s" ? (
                <Text type={"copy"} scale={"7"} color={theme.colors.gray97}>
                  {`#${tag}`}
                </Text>
              ) : (
                <Text type={"copy"} scale={"6"} color={theme.colors.gray97}>
                  {`#${tag}`}
                </Text>
              )}
            </Tag>
          </TagWrapper>
        ))}

        {tagList.length > showTagsNum && (
          <TagWrapper className={`size--${size}`}>
            <Tag className={`size--${size} more`}>
              <em />
              <em />
              <em />
            </Tag>
          </TagWrapper>
        )}
      </TagListWrapper>
    </Container>
  );
};

export default TagList;
