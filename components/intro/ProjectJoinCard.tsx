import React from "react";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import SvgIconPlus from "../../assets/images/common/icon-plus.svg";
import Link from "next/link";
import Text from "../elements/Text";

const Container = styled.div`
  position: relative;
`;

const Inside = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ theme }) => theme.size.cardWidth};
  height: ${({ theme }) => theme.size.cardHeight};
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 2px 20px 5px rgba(0, 0, 0, 0.03);
  border: solid 0.5px #d0d3d7;
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
    ${Inside}:hover & {
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

const Title = styled.div``;

const SubTitle = styled.span`
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
      <Inside>
        <Link href={"/request"} passHref>
          <a data-testid={"project-join-card-test"}>
            <CardInside>
              <Title data-testid={"project-join-card-title"}>
                <Text type={"copy"} scale={"3"}>
                  마음에 드는
                  <br />
                  카드가 없나요?
                </Text>
              </Title>
              <IconWrapper>
                <SvgIconPlus />
              </IconWrapper>
              <SubTitle data-testid={"project-join-card-subtitle"}>
                <Text type={"copy"} scale={"7"}>
                  데이터 요청하기
                </Text>
              </SubTitle>
            </CardInside>
          </a>
        </Link>
      </Inside>
    </Container>
  );
};

export default ProjectJoinCard;
