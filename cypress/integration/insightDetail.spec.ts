import { SITE_TITLE } from "../../assets/common_texts";

describe("Insight page", () => {
  // it("Visual regression test", () => {
  //   cy.visit("http://localhost:3000/insights/1");
  //   cy.matchImageSnapshot();
  // });

  it("should have a page title", async () => {
    cy.visit("http://localhost:3000/insights/1");

    cy.findByTestId("detail-page-header-title").then((element) => {
      cy.title().should("eq", `${element.text()} | ${SITE_TITLE}`);
    });
  });
});
