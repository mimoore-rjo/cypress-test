describe("fizzbuzz spec", () => {
  function visit() {
    cy.visit("http://localhost:5173");
  }
  it("passes", () => {
    visit();
  });
});
