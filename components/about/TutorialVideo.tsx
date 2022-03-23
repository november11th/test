import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.grayD0};
  display: flex;
  position: relative;
  margin-bottom: 100px;

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pointA5};
    width: 620px;
    height: 440px;
    border-radius: 5px;
    top: 0px;
    transform: translateX(-50px) translateY(-50px);
    z-index: -10;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pointA5};
    width: 620px;
    height: 440px;
    border-radius: 5px;
    bottom: 0px;
    right: 0px;
    transform: translateX(50px) translateY(50px);
    z-index: -10;
  }
`;

const TutorialVideo = () => {
  return (
    <Container>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default TutorialVideo;
