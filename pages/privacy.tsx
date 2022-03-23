import React from "react";
import { PRIVACY_POLICIES } from "../assets/images/documents/privacy";

import PolicyViewer from "../components/layout/PolicyViewer";

const PrivacyPage = () => {
  return (
    <PolicyViewer title={"개인정보 처리방침"} content={PRIVACY_POLICIES} />
  );
};

export default PrivacyPage;
