import React from "react";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import SvgIconPlus from "../../assets/images/common/icon-plus.svg";
import Link from "next/link";
import Text from "../elements/Text";

const Container = styled.div`
  grid-column: span 3 / span 3;
  position: relative;
`;

const MarqueeWrapper = styled(Marquee)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 100%;
`;

const MarqueeText = styled.span`
  font-size: 200px;
  font-weight: 600;
  line-height: 1;
  margin-right: 400px;
  color: ${({ theme }) => theme.colors.grayD9};
`;

const GridContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  width: 100%;
  height: 100%;

  z-index: 101;
`;

const CardContainer = styled.a`
  position: relative;
  background-color: white;
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.03);
  border: solid 0.5px #d0d3d7;
  width: ${({ theme }) => theme.size.cardWidth};
  height: ${({ theme }) => theme.size.cardHeight};
`;

const CardInside = styled.div`
  padding: 26px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: calc(50% + 8px);
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);

  svg {
    ${CardContainer}:hover & {
      animation: rotate 0.5s linear forwards;
      transform-origin: 50% 50%;
    }

    @keyframes rotate {
      100% {
        transform: rotate(90deg);
      }
    }
  }
`;

const SubTitle = styled.div``;

const LinkText = styled.span`
  position: absolute;
  left: 26px;
  bottom: 26px;
  background: url("/assets/images/common/btn-arrow.svg") no-repeat right center;
  padding-right: 18px;
  background-size: 21px auto;
`;

const ProjectJoinCard = () => {
  return (
    <Container>
      <MarqueeWrapper direction={"left"} speed={300} gradient={false}>
        <MarqueeText>PUZZLE PROJECT</MarqueeText>
      </MarqueeWrapper>

      <GridContainer>
        <div />
        <Link href={"/request"} passHref>
          <CardContainer>
            <CardInside>
              <SubTitle>
                <Text type={"copy"} scale={"3"}>
                  마음에 드는
                </Text>
                <Text type={"copy"} scale={"3"}>
                  상품이 없나요?
                </Text>
              </SubTitle>
              <IconWrapper>
                <SvgIconPlus />
              </IconWrapper>
              <LinkText>
                <Text type={"copy"} scale={"7"}>
                  PUZZLE 프로젝트 참여하기
                </Text>
              </LinkText>
            </CardInside>
          </CardContainer>
        </Link>
        <div />
      </GridContainer>
    </Container>
  );
};

export default ProjectJoinCard;
