import NavbarSearchInput from "../../../../components/layout/navbar/NavbarSearchInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "../../../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { beforeEach } from "@jest/globals";

describe("NavbarSearchInput", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <NavbarSearchInput navBarTheme={"white"} />{" "}
      </ThemeProvider>
    );
  });
  describe("search-input-wrapper", () => {
    it("should be hidden", () => {
      expect(screen.getByTestId("search-input-wrapper")).toHaveStyle(
        `visibility: hidden`
      );
    });

    it("should be visible when open-search-input-button clicked", () => {
      fireEvent.click(screen.getByTestId("open-search-input-button"));

      expect(screen.getByTestId("search-input-wrapper")).toHaveStyle(
        `visibility: visible`
      );
    });
  });
  describe("search-input", () => {
    it("should be not focused", () => {
      expect(screen.getByTestId("search-input")).not.toHaveFocus();
    });

    it("should be focused when open-search-input-button clicked", () => {
      fireEvent.click(screen.getByTestId("open-search-input-button"));

      expect(screen.getByTestId("search-input")).toHaveFocus();
    });
  });
});
