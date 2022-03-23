import { RecoilRoot } from "recoil";
import { renderHook } from "@testing-library/react-hooks";
import { useSetNavBarTheme } from "../../hooks/useNavBarTheme";

describe("useSetNavBarTheme", () => {
  it("should return initial theme value ", () => {
    const { rerender, result } = renderHook(() => useSetNavBarTheme("white"), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual("white");
  });
  it("should return proper theme value when deps changed", () => {
    let isFallback = true;

    const { rerender, result } = renderHook(
      ({ value }: any) => useSetNavBarTheme(value, [value]),
      {
        wrapper: RecoilRoot,
        initialProps: { value: isFallback ? "white" : "black" },
      }
    );

    expect(result.current).toEqual("white");

    isFallback = false;

    rerender({ value: isFallback ? "white" : "black" });

    expect(result.current).toEqual("black");
  });
});
