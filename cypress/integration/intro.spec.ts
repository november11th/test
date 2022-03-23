import { SITE_TITLE } from "../../assets/common_texts";

describe("Intro page", () => {
  // it("Visual regression test", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.matchImageSnapshot();
  // });

  it("should have a page title", () => {
    cy.visit("http://localhost:3000/");

    cy.title().should("eq", SITE_TITLE);
  });
});
