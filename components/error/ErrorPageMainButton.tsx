import React from "react";
import Text from "../elements/Text";
import ErrorPageButton from "./ErrorPageButton";
import { useRouter } from "next/router";

const ErrorPageMainButton = () => {
  const router = useRouter();
  return (
    <ErrorPageButton onClick={() => router.push("/")}>
      <Text type={"copy"} scale={"6"}>
        메인으로
      </Text>
    </ErrorPageButton>
  );
};

export default ErrorPageMainButton;
