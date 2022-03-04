import { atom, useRecoilState } from "recoil";

const isOpenMenuState = atom({
  key: "isOpenMenu",
  default: false,
});

export const useIsOpenMenuState = () => {
  return useRecoilState(isOpenMenuState);
};
