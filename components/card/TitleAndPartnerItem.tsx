import React from "react";
import classNames from "classnames";
import Text from "../elements/Text";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 254px;
  height: 56px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;

  &.oneLine {
    height: 28px;
    -webkit-line-clamp: 1;
  }

  && p {
    font-weight: bold;
  }
`;

const PartnerWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 25px;
  p {
    opacity: 0.9;
  }
`;

interface Props {
  title: string;
  partner?: string;
  oneLine?: boolean;
}

const TitleAndPartnerItem = ({ title, partner, oneLine = true }: Props) => {
  return (
    <Container>
      <TitleWrapper className={classNames({ oneLine: oneLine!! })}>
        <Text type={"copy"} scale={"5"} color={theme.colors.white}>
          {title}
        </Text>
      </TitleWrapper>
      {oneLine && partner && (
        <PartnerWrapper>
          <Text type={"copy"} scale={"8"} color={theme.colors.white}>
            {partner}
          </Text>
        </PartnerWrapper>
      )}
    </Container>
  );
};

export default TitleAndPartnerItem;
