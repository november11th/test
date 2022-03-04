import styled from "@emotion/styled";
import React from "react";
import Button from "../elements/Button";

const Container = styled.div`
  position: absolute;
  left: 0;
  padding-top: 96px;

  & > h1 {
    white-space: pre-line;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 64px;
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

interface Props {
  onPress: () => void;
}
const ProjectParticipateHeader = ({ onPress }: Props) => {
  return (
    <Container>
      <h1>{`데이터 요청\n진행과정입니다.`}</h1>
      <Button text="요청하기" onPress={onPress} size={"l"} color={"blue"} />
    </Container>
  );
};

export default ProjectParticipateHeader;
