import { render, screen } from "@testing-library/react";
import TitleContainer from "../../../components/card/TitleContainer";
import React from "react";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "@emotion/react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("TitleContainer", () => {
  it("should have title", () => {
    render(<TitleContainer title={"데이터"} titleCount={2} />, {
      wrapper: Wrapper,
    });

    const title = screen.getByTestId("title-container-title");
    const description = screen.queryByTestId("title-container-description");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("데이터");

    expect(description).not.toBeInTheDocument();
  });

  it("should have title and description", () => {
    render(
      <TitleContainer
        title={"데이터"}
        titleCount={2}
        description={"test description"}
      />,
      {
        wrapper: Wrapper,
      }
    );

    const title = screen.getByTestId("title-container-title");
    const description = screen.queryByTestId("title-container-description");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("데이터");

    expect(description).toBeInTheDocument();
  });

  it("should have children", () => {
    render(
      <TitleContainer title={"데이터"}>
        <div data-testid={"test-body"}>test body</div>
      </TitleContainer>,
      {
        wrapper: Wrapper,
      }
    );

    const body = screen.getByTestId("test-body");

    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent("test body");
  });
});
