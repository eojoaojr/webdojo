describe("Login", () => {
  it("Deve logar com sucesso", () => {
    cy.starter()
    cy.SubmitLoginForm('papito@webdojo.com','katana123')
    cy.get('[data-cy="user-name"]')
      .should("be.visible", "Papito")
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes.",
      );
  });
});


describe("Login", () => {
  it("Deve informar senha incorreta", () => {
    cy.starter()
    cy.SubmitLoginForm('papito@webdojo.com','incorrect_password')
    cy.contains("Acesso negado! Tente novamente.")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("Deve informar email incorreto", () => {
    cy.starter()
    cy.SubmitLoginForm('joaojr@webdojo.com','katana123')
    cy.contains("Acesso negado! Tente novamente.")
    .should("be.visible");
  });
});
