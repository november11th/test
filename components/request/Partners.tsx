import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRef } from "react";
import InnerContainerBase from "../InnerContainerBase";
import Text from "../elements/Text";
import CompanyLogo1 from "../../assets/images/common/icon-company_logo1.svg";
import CompanyLogo2 from "../../assets/images/common/icon-company_logo2.svg";
import CompanyLogo3 from "../../assets/images/common/icon-company_logo3.svg";
import CompanyLogo4 from "../../assets/images/common/icon-company_logo4.svg";
import CompanyLogo5 from "../../assets/images/common/icon-company_logo5.svg";
import CompanyLogo6 from "../../assets/images/common/icon-company_logo6.svg";
import CompanyLogo7 from "../../assets/images/common/icon-company_logo7.svg";
import { useNavBarTheme } from "../../hooks/useNavBarTheme";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const companyList = [
  <CompanyLogo1 />,
  <CompanyLogo2 />,
  <CompanyLogo3 />,
  <CompanyLogo4 />,
  <CompanyLogo5 />,
  <CompanyLogo6 />,
  <CompanyLogo7 />,
];

const Container = styled(InnerContainerBase)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  padding: 160px 0px 160px 0px;
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;
const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 40px 0px 0px 0px;
  padding: 0px;
`;
const LogoContainer = styled.li`
  height: 140px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Partners = () => {
  const companyListRef = useRef<any>(null);
  const [, setNavBarTheme] = useNavBarTheme();

  useEffect(() => {
    ScrollTrigger.create({
      id: "partner-scroll",
      trigger: companyListRef.current,
      start: "top-=160 top",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => setNavBarTheme("white"),
      onLeaveBack: () => setNavBarTheme("black"),
    });
    return () => {
      ScrollTrigger.getById("partner-scroll").kill(true);
    };
  }, [setNavBarTheme]);

  return (
    <Container ref={companyListRef}>
      <Text type={"title"} scale={"4"}>
        {`7개의 회사가\nPUZZLE과 함께했습니다.`}
      </Text>
      <CompanyList>
        {companyList.map((item, index) => (
          <LogoContainer key={index}>{item}</LogoContainer>
        ))}
      </CompanyList>
    </Container>
  );
};

export default Partners;
