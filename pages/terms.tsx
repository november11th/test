import React from "react";
import { TERMS_OF_USE } from "../assets/images/documents/terms_of_use";
import PolicyViewer from "../components/layout/PolicyViewer";

const TermsPage = () => {
  return <PolicyViewer title={"이용약관"} content={TERMS_OF_USE} />;
};

export default TermsPage;
