import styled from "@emotion/styled";
import React from "react";
import Text from "../../elements/Text";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin: 0px 4px 0px 0px;
  padding: 0px 8px 0px 8px;
  border-radius: 20px;
  background-color: #f4f6f7; /* grayF4 */

  &:last-of-type {
    margin: 0px;
  }
`;

interface Props {
  hashtagArray: string[];
  className?: string;
}
const MapInfoHashtag = ({ hashtagArray, className }: Props) => {
  return (
    <Container className={className}>
      {hashtagArray.map((x: string, i: number) => (
        <Tag key={i}>
          <Text type={"copy"} scale={"7"}>
            {x}
          </Text>
        </Tag>
      ))}
    </Container>
  );
};
export default MapInfoHashtag;
