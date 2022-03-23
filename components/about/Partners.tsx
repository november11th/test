import React from "react";
import Text from "../elements/Text";
import {
  companyList,
  Container,
  CompanyList,
  LogoContainer,
} from "../request/Partners";

const Partners = () => {
  const companyN = companyList.length;

  return (
    <Container>
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
