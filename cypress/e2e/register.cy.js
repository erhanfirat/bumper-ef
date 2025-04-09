describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  it("Name alpanumeric validation test", () => {
    cy.get("[data-test=df-name-input]").type("!^+++");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Name can contain only letters and numbers").should(
      "be.visible"
    );
  });

  it("Name max 255 validation test", () => {
    cy.get("[data-test=df-name-input]")
      .clear()
      .type(
        "12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio12345667890qweerttyuuio123"
      );
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Name cannot be longer than 255 characters").should(
      "be.visible"
    );
  });

  it("Name valid test", () => {
    cy.get("[data-test=df-name-input]").clear().type("RegularName").blur();
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Name cannot be longer than 255 characters").should(
      "not.exist"
    );
    cy.contains("Name can contain only letters and numbers").should(
      "not.exist"
    );
    cy.contains("Name is required").should("not.exist");
  });

  it("Mobile phone pattern violation test", () => {
    cy.get("[data-test=df-mobile-input]").clear().type("7123123123");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Mobile phone number is not valid").should("be.visible");
  });

  it("Mobile phone valid test", () => {
    cy.get("[data-test=df-mobile-input]").clear().type("07123123123");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Mobile phone number is not valid").should("not.exist");
  });

  it("Email address pattern violation test", () => {
    cy.get("[data-test=df-email-input]").type("asddsa");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Email address is not valid").should("be.visible");
  });

  it("Email address min 5 character test", () => {
    cy.get("[data-test=df-email-input]").type("a@a");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Email address must be longer than 5 characters").should(
      "be.visible"
    );
  });

  it("Email address valid test", () => {
    cy.get("[data-test=df-email-input]").clear().type("abc@abc.com");
    cy.get("[data-test=df-submit-btn]").click();

    cy.contains("Email address is not valid").should("not.exist");
    cy.contains("Email address must be longer than 5 characters").should(
      "not.exist"
    );
  });

  it("All form fields are valid test", () => {
    cy.get("[data-test=df-name-input]").clear().type("A5Sportback").blur();
    cy.get("[data-test=df-company-input]")
      .clear()
      .type("Audi Car Service")
      .blur();
    cy.get("[data-test=df-mobile-input]").clear().type("07123123123");
    cy.get("[data-test=df-email-input]").clear().type("service@audi.com");
    cy.get("[data-test=df-postcode-input]").clear().type("NB12");
    cy.get("[data-test=df-pay-now]").click();

    cy.get("[data-test=df-submit-btn]").click();
  });
});
