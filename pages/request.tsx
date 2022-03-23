import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import RequestIntro from "../components/request/RequestIntro";
import RequestProcedure from "../components/request/RequestProcedure";
import Partners from "../components/request/Partners";
import RequestEmail from "../components/request/RequestEmail";
import RequestProjectList from "../components/request/RequestProjectList";
import RequestFloatingTab from "../components/request/RequestFloatingTab";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import { useNavBarTheme } from "../hooks/useNavBarTheme";

const InnerContainer = styled(InnerContainerBase)``;
const Div = styled.div``;

type ObjType = {
  [index: number]: any;
  0: any;
  1: any;
  2: any;
};

const Request = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [, setNavBarTheme] = useNavBarTheme();

  useEffect(() => {
    tabIndex === 0 ? setNavBarTheme("black") : setNavBarTheme("white");

    return () => {
      setNavBarTheme("white");
    };
  }, [tabIndex, setNavBarTheme]);

  const renderPage: ObjType = {
    0: (
      <Div>
        <RequestIntro />
        <RequestProcedure onButtonPress={() => setTabIndex(2)} />
        <Partners />
      </Div>
    ),
    1: <RequestProjectList />,
    2: <RequestEmail />,
  };

  return (
    <Div>
      {renderPage[tabIndex]}
      <InnerContainer>
        <RequestFloatingTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </InnerContainer>
    </Div>
  );
};

export default Request;
