import React from "react";
import Text from "../elements/Text";
import ErrorPageButton from "./ErrorPageButton";
import { useRouter } from "next/router";

const ErrorPagePrevButton = () => {
  const router = useRouter();
  return (
    <ErrorPageButton onClick={() => router.back()}>
      <Text type={"copy"} scale={"6"}>
        이전화면
      </Text>
    </ErrorPageButton>
  );
};

export default ErrorPagePrevButton;
