import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navBarTheme } from "../recoil/navBarTheme";
import { NavBarTheme } from "../types/common";

// 현재 navBarTheme에 대한 useRecoilState hook
export const useNavBarTheme = () => {
  return useRecoilState(navBarTheme);
};

// 페이지 진입시 navBarTheme 상태를 간단하게 변경하는 hook
export const useSetNavBarTheme = (theme: NavBarTheme) => {
  const setNavBarTheme = useSetRecoilState(navBarTheme);

  useEffect(() => {
    setNavBarTheme(theme);
    return () => {
      setNavBarTheme("white");
    };
  }, []);
};
