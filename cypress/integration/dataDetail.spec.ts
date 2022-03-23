import { SITE_TITLE } from "../../assets/common_texts";

describe("Data Detail page", () => {
  it("should have a page title", () => {
    cy.visit(encodeURI("http://localhost:3000/data/지하철-혼잡도"));

    cy.findByTestId("detail-page-header-title").then((element) => {
      cy.title().should("eq", `${element.text()} | ${SITE_TITLE}`);
    });
  });

  it("should show first(default) tab panel", () => {
    cy.visit(encodeURI("http://localhost:3000/data/지하철-혼잡도"));

    cy.findByTestId("tab-panel-insight-list").should("exist");
  });

  it("should show second tab panel when clicked anchor button", () => {
    cy.visit(encodeURI("http://localhost:3000/data/지하철-혼잡도"));

    // show first tab panel
    cy.findByTestId("tab-panel-insight-list").should("exist");

    // show second tab panel
    cy.findByTestId("tab-anchor-1").click();
    cy.findByTestId("tab-panel-description").should("exist");

    // return to first tab panel
    cy.findByTestId("tab-anchor-0").click();
    cy.findByTestId("tab-panel-insight-list").should("exist");
  });

  it("should show second tab panel when selected url query", () => {
    cy.visit(encodeURI("http://localhost:3000/data/지하철-혼잡도?tabIndex=1"));

    // show second tab panel
    cy.findByTestId("tab-panel-description").should("exist");
  });

  it("should show first tab panel when selected invalid url query", () => {
    cy.visit(
      encodeURI("http://localhost:3000/data/지하철-혼잡도?tabIndex=abc")
    );

    // show second tab panel
    cy.findByTestId("tab-panel-insight-list").should("exist");
  });
});
