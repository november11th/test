import React, { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRef } from "react";
import InnerContainerBase from "../layout/InnerContainerBase";
import Text from "../elements/Text";
import CompanyLogo1 from "../../assets/images/partners/icon-company_1.svg";
import CompanyLogo2 from "../../assets/images/partners/icon-company_2.svg";
import CompanyLogo6 from "../../assets/images/partners/icon-company_6.svg";
import CompanyLogo7 from "../../assets/images/partners/icon-company_7.svg";
import CompanyLogo8 from "../../assets/images/partners/icon-company_8.svg";
import CompanyLogo10 from "../../assets/images/partners/icon-company_10.svg";
import { useNavBarTheme } from "../../hooks/useNavBarTheme";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const companyList = [
  <CompanyLogo1 />,
  <CompanyLogo2 />,
  <Image
    width={240}
    height={(240 / 624) * 210}
    layout="fixed"
    src="/assets/images/partners/icon-company_3.png"
    alt="company3"
  />,
  <Image
    width={240}
    height={(240 / 460) * 84}
    layout="fixed"
    src="/assets/images/partners/icon-company_4.png"
    alt="company4"
  />,
  <Image
    width={240}
    height={(240 / 624) * 120}
    layout="fixed"
    src="/assets/images/partners/icon-company_5.png"
    alt="company5"
  />,
  <CompanyLogo6 />,
  <CompanyLogo7 />,
  <CompanyLogo8 />,
  <Image
    width={240}
    height={(240 / 400) * 97}
    layout="fixed"
    src="/assets/images/partners/icon-company_9.png"
    alt="company9"
  />,
  <CompanyLogo10 />,
];

export const Container = styled(InnerContainerBase)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  padding: 160px 0px 160px 0px;
  margin-top: ${({ theme }) => theme.size.navBarHeight};
`;
export const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 40px 0px 0px 0px;
  padding: 0px;
`;
export const LogoContainer = styled.li`
  position: relative;
  height: 140px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Partners = () => {
  const companyListRef = useRef<any>(null);
  const [, setNavBarTheme] = useNavBarTheme();
  const companyN = companyList.length;

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
      ScrollTrigger.getById("partner-scroll")?.kill(true);
    };
  }, [setNavBarTheme]);

  return (
    <Container ref={companyListRef}>
      <Text type={"title"} scale={"4"}>
        {`${companyN}개 이상의 기업/기관에서\n활용하고 있습니다.`}
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
