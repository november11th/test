describe("Data Detail page", () => {
  it("Visual regression test", () => {
    cy.visit("http://localhost:3000/data/1");
    cy.matchImageSnapshot();
  });
});
