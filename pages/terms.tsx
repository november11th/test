import React from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "../components/layout/InnerContainerBase";
import Text from "../components/elements/Text";
import { TERMS_OF_USE } from "../assets/images/documents/terms_of_use";
import PuzzleMarkdown from "../components/elements/PuzzleMarkdown";
import PolicyViewer from "../components/layout/PolicyViewer";

const TermsPage = () => {
  return <PolicyViewer title={"이용약관"} content={TERMS_OF_USE} />;
};

export default TermsPage;
