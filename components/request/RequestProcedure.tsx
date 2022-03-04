import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectParticipateHeader from "./ProjectParticipateHeader";
import RequestProcedureStep from "./RequestProcedureStep";
import InnerContainerBase from "../InnerContainerBase";

gsap.registerPlugin(ScrollTrigger);

const InnerContainer = styled(InnerContainerBase)`
  position: relative;
  height: 100vh;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Container = styled.div`
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const ListContainer = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  bottom: 0;
  right: 0px;
  transform: translateY(-50%);

  li:first-of-type {
    margin-top: 0;
  }
`;
const Background = styled.div`
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &.step1 {
    background: url("./images/temporary/img-project_bg2.jpg");
  }
  &.step2 {
    background: url("./images/temporary/img-project_bg3.jpg");
  }
  &.step3 {
    background: url("./images/temporary/img-project_bg4.jpg");
  }
  &.step4 {
    background: url("./images/temporary/img-project_bg5.jpg");
  }
  &.step5 {
    background: url("./images/temporary/img-project_bg6.jpg");
  }
`;

interface Props {
  onButtonPress: () => void;
}
const RequestProcedure = ({ onButtonPress }: Props) => {
  const outerDivRef2 = useRef<any>(null);
  const [currentStep, setStep] = useState<number>(0);

  useEffect(() => {
    const sections = gsap.utils.toArray(
      outerDivRef2.current.querySelectorAll(".background")
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: "request-procedure",
        trigger: outerDivRef2.current,
        start: "top top",
        end: "+=500%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          self.isActive &&
            setSection(Math.ceil(self.progress * sections.length) - 1);
        },
      },
    });

    function setSection(index: number) {
      setStep(index);
      const anotherItems = sections.filter((item, i) => {
        return i != index;
      });
      gsap.killTweensOf(anotherItems);
      gsap.to(anotherItems, { autoAlpha: 0, duration: 1 });
      gsap.to([sections[index]], { autoAlpha: 1, duration: 1 });
    }

    return () => {
      ScrollTrigger.getById("request-procedure").kill(true);
    };
  }, []);

  return (
    <Container ref={outerDivRef2}>
      <Background className="background step1" />
      <Background className="background step2" />
      <Background className="background step3" />
      <Background className="background step4" />

      <InnerContainer>
        <ProjectParticipateHeader onPress={onButtonPress} />
        <ListContainer>
          <RequestProcedureStep
            no={1}
            title={"데이터 및 인사이트 제안"}
            desc={`참여하기 버튼을 눌러 프로젝트 카테고리를\n선택하고, 설명을 입력해 주세요.`}
            isActive={currentStep === 0}
          />
          <RequestProcedureStep
            no={2}
            title={"상세 요건 작성"}
            desc={`비밀 유지 협약을 맺고, 프로젝트의 세부적인\n요건을 작성합니다.`}
            isActive={currentStep === 1}
          />
          <RequestProcedureStep
            no={3}
            title={"데이터/인사이트 생성"}
            desc={`상세 요건을 반영한 데이터/인사이트가\n생성되고, 피드백을 거쳐 가공됩니다.`}
            isActive={currentStep === 2}
          />
          <RequestProcedureStep
            no={4}
            title={"프로젝트 완료"}
            desc={`서비스 내 Data Intelligence에 기재되거나 요청\n담당자에게 결과물을 제공합니다.`}
            isActive={currentStep === 3}
          />
        </ListContainer>
      </InnerContainer>
    </Container>
  );
};

export default RequestProcedure;
