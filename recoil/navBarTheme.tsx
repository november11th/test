import { atom } from "recoil";
import { NavBarTheme } from "../types/common";

export const navBarTheme = atom<NavBarTheme>({
  key: "navBarTheme",
  default: "white",
});
