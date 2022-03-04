describe("Insight page", () => {
  it("Visual regression test", () => {
    cy.visit("http://localhost:3000/insights/1");
    cy.matchImageSnapshot();
  });
});
