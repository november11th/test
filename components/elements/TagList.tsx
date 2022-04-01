import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import { theme } from "../../styles/theme";
import classNames from "classnames";

const Container = styled.div`
  position: relative;
`;
const TagListWrapper = styled.div<{ color: string }>`
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: max-content;
  width: 100%;

  &.underline {
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.color};
    }
  }
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
const Tag = styled.span<{ color: string }>`
  display: flex;
  min-width: max-content;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.color};

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
      background-color: ${(props) => props.color};
    }

    em + em {
      margin-left: 2px;
    }
  }
`;

interface Props {
  tagList: string[];
  size: "s" | "l";
  color: string;
  hasUnderline: boolean;
  className?: string;
}

const TagList = ({
  tagList = [],
  size = "s",
  color = `${theme.colors.white}`,
  hasUnderline,
  className,
}: Props) => {
  const showTagsNum = size === "s" ? 2 : 8;

  return (
    <Container className={className}>
      <TagListWrapper
        color={color}
        className={classNames({ underline: hasUnderline })}
      >
        {tagList.slice(0, showTagsNum).map((tag, index) => (
          <TagWrapper key={`${index}-${tag}`} className={`size--${size}`}>
            <Tag className={`size--${size}`} color={color}>
              {size === "s" ? (
                <Text type={"copy"} scale={"7"} color={color}>
                  {`#${tag}`}
                </Text>
              ) : (
                <Text type={"copy"} scale={"6"} color={color}>
                  {`#${tag}`}
                </Text>
              )}
            </Tag>
          </TagWrapper>
        ))}

        {tagList.length > showTagsNum && (
          <TagWrapper className={`size--${size}`}>
            <Tag className={`size--${size} more`} color={color}>
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

TagList.defaultProps = {
  hasUnderline: false,
};
export default TagList;
