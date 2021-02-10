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

  it("renders a validation error on bad input", () => {
    cy.get('[data-test="SearchBar"]')
      .get("input")
      .click()
      .type("this is not an url");

    cy.get('[data-test="SearchBarValidationError"]').should(
      "contain",
      "Please enter a valid URL."
    );
  });

  it("renders a list of similar articles", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://document-parser-api.lateral.io/",
      },
      { statusCode: 200, fixture: "document_parser.json" }
    );

    cy.intercept(
      {
        method: "POST",
        url: "https://news-api.lateral.io/documents/similar-to-text",
      },
      { statusCode: 200, fixture: "similar_to_text.json" }
    );

    cy.get('[data-test="SearchBar"]')
      .get("input")
      .click()
      .type(
        "https://blog.lateral.io/2020/10/using-machine-learning-to-segment-documents/"
      );

    cy.get('[data-test="SearchBar"]').get("button").click();

    cy.get('[data-test="ArticleList"]')
      .should("contain", "Draining Data Quagmires with Semantics")
      .and("contain", "89% similar")
      .and("contain", "Jun 13, 2019")
      .and("contain", "Forbes");
  });
});
