import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectParticipateHeader from "./ProjectParticipateHeader";
import RequestProcedureStep from "./RequestProcedureStep";
import InnerContainerBase from "../layout/InnerContainerBase";
import Image from "next/image";
import { steps } from "popmotion";

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
`;

const backgroundImage = [
  "/images/temporary/img-project_bg2.jpg",
  "/images/temporary/img-project_bg3.jpg",
  "/images/temporary/img-project_bg4.jpg",
  "/images/temporary/img-project_bg5.jpg",
  "/images/temporary/img-project_bg6.jpg",
];

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
      ScrollTrigger.getById("request-procedure")?.kill(true);
    };
  }, []);

  return (
    <Container ref={outerDivRef2}>
      {backgroundImage.map((imageUrl, index) => (
        <Background className="background" key={imageUrl}>
          <Image
            src={imageUrl}
            layout={"fill"}
            objectFit={"cover"}
            priority={true}
            alt={`bg${index}`}
          />
        </Background>
      ))}

      <InnerContainer>
        <ProjectParticipateHeader onPress={onButtonPress} />
        <ListContainer>
          <RequestProcedureStep
            no={1}
            title={"????????? ??? ???????????? ??????"}
            desc={`???????????? ????????? ?????? ???????????? ???????????????\n????????????, ????????? ????????? ?????????.`}
            isActive={currentStep === 0}
          />
          <RequestProcedureStep
            no={2}
            title={"?????? ?????? ??????"}
            desc={`?????? ?????? ????????? ??????, ??????????????? ????????????\n????????? ???????????????.`}
            isActive={currentStep === 1}
          />
          <RequestProcedureStep
            no={3}
            title={"?????????/???????????? ??????"}
            desc={`?????? ????????? ????????? ?????????/???????????????\n????????????, ???????????? ?????? ???????????????.`}
            isActive={currentStep === 2}
          />
          <RequestProcedureStep
            no={4}
            title={"???????????? ??????"}
            desc={`????????? ??? Data Intelligence??? ??????????????? ??????\n??????????????? ???????????? ???????????????.`}
            isActive={currentStep === 3}
          />
        </ListContainer>
      </InnerContainer>
    </Container>
  );
};

export default RequestProcedure;
