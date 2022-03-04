import React from "react";
import styled from "@emotion/styled";
import ShapeTextP from "../../assets/images/common/img-shape-P.svg";
import ShapeTextU from "../../assets/images/common/img-shape-U.svg";
import ShapeTextZ from "../../assets/images/common/img-shape-Z.svg";
import ShapeTextL from "../../assets/images/common/img-shape-L.svg";
import ShapeTextE from "../../assets/images/common/img-shape-E.svg";
import ScrollDownIcon from "../../assets/images/common/icon-scrollDown.svg";

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
  gap: 20px;

  animation: moveTop 2s ease-out 0.1s forwards;

  @keyframes moveTop {
    0% {
      transform: translateY(50vh);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const GridItem = styled.div`
  padding: 8px;
  svg {
    width: 93%;
    height: 93%;
  }
`;

const GridItemMoveLeft = styled(GridItem)`
  animation: moveLeft 2.2s ease-out forwards;
  @keyframes moveLeft {
    0% {
      transform: translateX(150%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const GridItemMoveRight = styled(GridItem)`
  animation: moveRight 1.9s ease-out 0.2s forwards;

  @keyframes moveRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const ScrollDown = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -8px;
  left: 0;

  svg {
    height: 28px;
  }
`;

const ScrollDownText = styled.span`
  padding-right: 10px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.58px;
  font-weight: 600;
`;

const IntroPuzzleLogo = () => {
  return (
    <Container>
      <Inside>
        <GridContainer>
          <GridItem>
            <ShapeTextP />
          </GridItem>
          <GridItem>
            <ShapeTextU />
          </GridItem>
          <GridItem />
          <GridItemMoveLeft>
            <ShapeTextZ />
          </GridItemMoveLeft>
          <GridItem />
          <GridItem>
            <ShapeTextZ />
          </GridItem>
          <GridItem />
          <GridItemMoveRight>
            <ShapeTextL />
          </GridItemMoveRight>
          <GridItemMoveRight>
            <ShapeTextE />
          </GridItemMoveRight>
        </GridContainer>
        <ScrollDown>
          <ScrollDownText>Scroll Down</ScrollDownText>
          <ScrollDownIcon />
        </ScrollDown>
      </Inside>
    </Container>
  );
};

export default IntroPuzzleLogo;
