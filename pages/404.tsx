import React from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import ErrorPagePanel from "../components/error/ErrorPagePanel";
import Text from "../components/elements/Text";
import ErrorPagePrevButton from "../components/error/ErrorPagePrevButton";
import ErrorPageMainButton from "../components/error/ErrorPageMainButton";
import * as ErrorPageStyledComponents from "../components/error/ErrorPageStyledComponents";

const NotFoundErrorPage = () => {
  return (
    <ErrorPageStyledComponents.Container>
      <ErrorPageStyledComponents.Inside>
        <ErrorPagePanel>
          <ErrorPageStyledComponents.TitleWrapper>
            <Text type={"title"} scale={"3"}>
              죄송합니다.
            </Text>
            <Text type={"title"} scale={"3"}>
              요청하신 페이지를 찾을 수 없습니다.
            </Text>
          </ErrorPageStyledComponents.TitleWrapper>
          <ErrorPageStyledComponents.DescriptionWrapper>
            <Text type={"copy"} scale={"2"}>
              방문하시려는 페이지의 주소가 잘못 입력되었거나,
            </Text>
            <Text type={"copy"} scale={"2"}>
              페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수
              없습니다.
            </Text>
            <Text type={"copy"} scale={"2"}>
              입력하신 주소가 정확한지 다시한번 확인해주시기 바랍니다.
            </Text>
          </ErrorPageStyledComponents.DescriptionWrapper>
          <ErrorPageStyledComponents.ButtonWrapper>
            <ErrorPagePrevButton />
            <ErrorPageMainButton />
          </ErrorPageStyledComponents.ButtonWrapper>
        </ErrorPagePanel>
      </ErrorPageStyledComponents.Inside>
    </ErrorPageStyledComponents.Container>
  );
};

export default NotFoundErrorPage;
