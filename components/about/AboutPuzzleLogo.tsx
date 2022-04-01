import React from "react";
import styled from "@emotion/styled";
import ShapeTextP from "../../assets/images/common/img-shape-P.svg";
import ShapeTextU from "../../assets/images/common/img-shape-U.svg";
import ShapeTextZ from "../../assets/images/common/img-shape-Z.svg";
import ShapeTextL from "../../assets/images/common/img-shape-L.svg";
import ShapeTextE from "../../assets/images/common/img-shape-E.svg";

const Container = styled.div`
  position: relative;
`;
const Inside = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @keyframes moveTop {
    0% {
      transform: translateY(50vh);
    }

    100% {
      transform: translateY(0);
    }
  }
  gap: 0px;
  animation: none;
`;
const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  svg {
    width: 93%;
    height: 93%;
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &.text--p {
    background-color: ${({ theme }) => theme.colors.pointA5};
  }
  &.text--u {
    background-color: ${({ theme }) => theme.colors.pointEf};
  }
  &.text--z--first {
    background-color: ${({ theme }) => theme.colors.pointEb};
  }
  &.text--z--second {
    background-color: ${({ theme }) => theme.colors.point60};
  }
  &.text--l {
    background-color: ${({ theme }) => theme.colors.chart67};
  }
  &.text--e {
    background-color: ${({ theme }) => theme.colors.chart0C};
  }
`;

const AboutPuzzleLogo = () => {
  return (
    <Container>
      <Inside>
        <GridContainer>
          <GridItem className="text--p">
            <ShapeTextP />
          </GridItem>
          <GridItem className="text--u">
            <ShapeTextU />
          </GridItem>
          <GridItem />
          <GridItem className="text--z--first">
            <ShapeTextZ />
          </GridItem>
          <GridItem />
          <GridItem className="text--z--second">
            <ShapeTextZ />
          </GridItem>
          <GridItem />
          <GridItem className="text--l">
            <ShapeTextL />
          </GridItem>
          <GridItem className="text--e">
            <ShapeTextE />
          </GridItem>
        </GridContainer>
      </Inside>
    </Container>
  );
};

export default AboutPuzzleLogo;
