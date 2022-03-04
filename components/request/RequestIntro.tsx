import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RequestMessage from "./RequestMessage";
import InnerContainerBase from "../InnerContainerBase";

gsap.registerPlugin(ScrollTrigger);
const InnerContainer = styled(InnerContainerBase)``;
const Container = styled.div`
  min-height: 100vh;
  background-image: url("./images/temporary/img-project_bg1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const RequestIntro = () => {
  const outerDivRef1 = useRef<any>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(
      outerDivRef1.current.querySelectorAll(".inner")
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: outerDivRef1.current,
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
      const anotherItems = sections.filter((item, i) => {
        return i != index;
      });
      gsap.killTweensOf(anotherItems);
      gsap.to(anotherItems, { autoAlpha: 0, duration: 0.6 }); // 다른아이템은 안보이게
      gsap.to([sections[index]], { autoAlpha: 1, duration: 1 }); // 해당아이템은 보이게
    }
  }, []);

  return (
    <Container ref={outerDivRef1}>
      <InnerContainer>
        <RequestMessage id={"section1"} text={"원하는 데이터가 없으신가요?"} />
        <RequestMessage
          id={"section2"}
          text={`필요한 DATA와 알고 싶은 INSIGHT를\n직접 제안해 주세요.`}
        />
        <RequestMessage
          id={"section3"}
          text={`데이터에 대해 잘 모르셔도 괜찮습니다.\n아이디어 하나만 있다면 충분합니다.`}
        />
        <RequestMessage id={"section4"} text={"PUZZLE과 함께 만들어 보세요!"} />
      </InnerContainer>
    </Container>
  );
};

export default RequestIntro;
