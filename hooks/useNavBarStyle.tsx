import { useNavBarTheme } from "./useNavBarTheme";
import { theme } from "../styles/theme";
import SvgIconMenuBlack from "../assets/images/layout/gnb-icon-menu-black.svg";
import SvgIconLogoBlack from "../assets/images/layout/gnb-logo-black.svg";
import SvgIconSearchBlack from "../assets/images/layout/gnb-icon-search-black.svg";
import SvgIconMenuWhite from "../assets/images/layout/gnb-icon-menu-white.svg";
import SvgIconLogoWhite from "../assets/images/layout/gnb-logo-white.svg";
import SvgIconSearchWhite from "../assets/images/layout/gnb-icon-search-white.svg";
import React from "react";

const useNavBarStyle = () => {
  const [navBarTheme] = useNavBarTheme();

  const navBarStyle = () => {
    switch (navBarTheme) {
      case "white":
        return {
          color: theme.colors.black,
          backgroundColor: theme.colors.white,
          menu: <SvgIconMenuBlack />,
          logo: <SvgIconLogoBlack />,
          search: <SvgIconSearchBlack />,
        };
      case "black":
        return {
          color: theme.colors.white,
          backgroundColor: "transparent",
          menu: <SvgIconMenuWhite />,
          logo: <SvgIconLogoWhite />,
          search: <SvgIconSearchWhite />,
        };
      case "gray":
        return {
          color: theme.colors.black,
          backgroundColor: theme.colors.cardListBackground,
          menu: <SvgIconMenuBlack />,
          logo: <SvgIconLogoBlack />,
          search: <SvgIconSearchBlack />,
        };
      default:
        return {
          color: theme.colors.black,
          backgroundColor: theme.colors.white,
        };
    }
  };

  return navBarStyle();
};

export default useNavBarStyle;
