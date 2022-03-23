import { beforeEach } from "@jest/globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../styles/theme";
import ProjectJoinCard from "../../../components/intro/ProjectJoinCard";
import singletonRouter from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("ProjectJoinCard", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    render(
      <ThemeProvider theme={theme}>
        <ProjectJoinCard />
      </ThemeProvider>
    );
  });

  it("should have a title text", () => {
    expect(screen.getByTestId("project-join-card-title")).toHaveTextContent(
      "마음에 드는카드가 없나요?" // 마음에 드는<br />카드가 없나요?
    );
  });

  it("should have a subtitle text", () => {
    expect(screen.getByTestId("project-join-card-subtitle")).toHaveTextContent(
      "데이터 요청하기"
    );
  });

  it("should navigate request page when clicked card-link", () => {
    fireEvent.click(screen.getByTestId("project-join-card-test"));

    expect(singletonRouter).toMatchObject({ asPath: "/request" });
  });
});
