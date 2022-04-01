import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Wrapper;
