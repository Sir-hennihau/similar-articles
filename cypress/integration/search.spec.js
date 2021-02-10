/// <reference types="Cypress" />

describe("Searching a similar article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("renders the headline", () => {
    cy.contains("Similar articles");
  });

  it("renders the filterbar", () => {
    cy.get('[data-test="FilterBar"]')
      .should("contain", "Filters")
      .and("contain", "MY SOURCES")
      .and("contain", "PAST MONTH");
  });

  it("renders a list of similar articles", () => {
    cy.get('[data-test="SearchBar"]')
      .get("input")
      .click()
      .type(
        "https://blog.lateral.io/2020/10/using-machine-learning-to-segment-documents/"
      );
  });
});
