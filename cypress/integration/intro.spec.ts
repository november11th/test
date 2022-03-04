describe("Intro page", () => {
  it("Visual regression test", () => {
    cy.visit("http://localhost:3000/");
    cy.matchImageSnapshot();
  });
});
