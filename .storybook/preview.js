import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

import "../styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  smallLaptop: {
    name: "1024",
    styles: {
      width: "1024px",
      height: "600px",
    },
  },
  laptop: {
    name: "1280",
    styles: {
      width: "1280px",
      height: "1024px",
    },
  },
  largeLaptop: {
    name: "1440",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  },
  desktop: {
    name: "1920",
    styles: {
      width: "1920px",
      height: "1200px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: { viewports: customViewports },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
