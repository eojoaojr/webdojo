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


describe("Login", () => {
  it("Deve informar que login social está desativado!", () => {
    cy.starter()
    cy.contains("button", "Entre com Google").click();
    cy.contains("O login social está desativado!")
    .should("be.visible");
  });
});

describe("Login", () => {
  it("Deve informar que login social está desativado!", () => {
    cy.starter()
    cy.contains("button", "Entre com Google").click();
    cy.contains("O login social está desativado!")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("Deve informar os campos para cadastro", () => {
    cy.starter()
    cy.contains("span", "Cadastre-se").click();
    cy.contains("Crie sua conta")
    .should("be.visible");
    cy.get("#name").type("John Doe");
    cy.get("#email").type("johndoe@example.com");
    cy.get("#password").type("password123");
    cy.contains("button", "Criar conta").click();
    cy.contains("Erro ao criar conta")
    .should("be.visible");
    cy.contains("button", "Voltar para o Login").click();
    cy.contains("Acesse sua conta")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("Deve informar ao usuario que deve preencher todos os campos [Sem Senha]", () => {
    cy.starter()
    cy.SubmitLoginFormWithoutPassword('joaojr@webdojo.com')
    cy.contains("Você precisa de uma senha para entrar! 🔒")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("Deve informar ao usuario que deve preencher todos os campos [Sem Email]", () => {
    cy.starter()
    cy.SubmitLoginFormWithoutEmail('katana123')
    cy.contains("Ei, não esqueça de digitar seu email!")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("Dever um texto para esquecimento de senha", () => {
    cy.starter()
    cy.contains("button", "Esqueci minha senha").click();
    console.log("Clicou no botão de esqueci minha senha");
  });
});