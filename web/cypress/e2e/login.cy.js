// 1. Criando a função reutilizável
function executarLoopDezVezes(callback) {
  Cypress._.times(10, (index) => {
    // index começa em 0 e vai até 9
    callback(index + 1); 
  });
}

describe("Login", () => {
  it("CT001 - Validar a exibição dos elementos de texto da tela de Login", () => {
    cy.starter()
    cy.contains("Acesse sua conta")
    .should("be.visible");
    cy.contains("Cadastre-se")
    .should("be.visible");
    cy.contains("Esqueci minha senha")
    .should("be.visible");
    cy.contains("Ou se preferir")
    .should("be.visible");
    cy.contains("Entre com Google")
    .should("be.visible");
    cy.contains("E-mail")
    .should("be.visible");
    cy.contains("Senha")
    .should("be.visible");
    cy.contains("Entrar")
    .should("be.visible");
  });
});

describe("Login", () => {
  it("CT002 - Login com credenciais válidas", () => {
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
  it("CT003 - Tentativa de login com senha incorreta", () => {
    cy.starter()
    cy.SubmitLoginForm('papito@webdojo.com','incorrect_password')
    cy.contains("Acesso negado! Tente novamente.")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("CT004 - Tentativa de login com e-mail incorreto/não cadastrado", () => {
    cy.starter()
    cy.SubmitLoginForm('joaojr@webdojo.com','katana123')
    cy.contains("Acesso negado! Tente novamente.")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("CT005 - Tentar efetuar login via conta Google (Social Login)", () => {
    cy.starter()
    cy.contains("button", "Entre com Google").click();
    cy.contains("O login social está desativado!")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("CT006 - Fluxo de tentativa de cadastro de novo usuário", () => {
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
  it("CT007 - Submeter login sem preencher a senha", () => {
    cy.starter()
    cy.SubmitLoginFormWithoutPassword('joaojr@webdojo.com')
    cy.contains("Você precisa de uma senha para entrar! 🔒")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("CT008 - Submeter login sem preencher o e-mail", () => {
    cy.starter()
    cy.SubmitLoginFormWithoutEmail('katana123')
    cy.contains("Ei, não esqueça de digitar seu email!")
    .should("be.visible");
  });
});


describe("Login", () => {
  it("CT009 - Acionar opção de recuperação de senha", () => {
    cy.starter()
    cy.contains("button", "Esqueci minha senha").click();
    console.log("Clicou no botão de esqueci minha senha");
  });
});

describe("Login", () => {
  it("CN002 - Visualizar e ocultar a senha (Alternância de Visibilidade)", () => {
    cy.starter()
    cy.SimpleForm('papito@webdojo.com','incorrect_password')
    executarLoopDezVezes((index) => {
      cy.get('svg.lucide-eye').parent().click();
      cy.get('#password').should('have.attr', 'type', 'text');
      console.log(`Passou ${index} vezes`);
      cy.get('svg.lucide-eye-off').parent().click();
      cy.get('#password').should('have.attr', 'type', 'password');
      console.log(`Passou ${index} vezes`);
    });
  });
});

