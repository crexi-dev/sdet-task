describe("Crud Books Test", () => {

  before(() => {
    cy.visit("/");
    cy.get(".actions").contains("Examples").click();
  });

  describe("Verify Crud Books page default elements", () => {
    it("Address bar displays correct URL", () => {
      cy.url().should("contain", "/examples/crud/");
    });

    it("Page tabs are displayed", () => {
      const tabTitle = ["Todos", "Stocks", "Theming", "CRUD", "Form", "Notifications", "Elements", "Auth"];

      tabTitle.forEach(function (value) {
          cy.get(".mat-tab-list")
            .children()
            .should('contain', value);
      });
    });

    it("Page title is correct", () => {
      cy.get("h1").contains("CRUD books using @ngrx/entity & @ngrx/router-store");
    });

    it("'Your books' section is displayed and contents are seen", () => {
      cy.get("h2").should("contain", "Your books");
      cy.get("mat-card h3").should("contain", "Reactive Programming with Angular and ngrx");
      cy.get("mat-card small").should("contain", "Oren Farhi");
      cy.get('.add').should("be.visible");
    });

    it("'Book editor' section is displayed and contents are seen", () => {
      cy.get("h2").contains("Book editor");
      cy.get("p").contains("Books can be managed in this editor and are added, updated, deleted and selected through @ngrx/entity.");
    });
  });

  describe('Verify that a book selection can be made', () => {
    it("Book selection opens book editor and editor icons are seen", () => {
      cy.get("mat-card").contains("Oren Farhi").click();
      cy.get('[icon="edit"]').should("be.visible");
      cy.get('[icon="trash"]').should("be.visible");
      cy.get('[icon="times"]').should("be.visible")
      cy.get("p").contains("Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions")
      cy.get("i").contains("Oren Farhi")
    });

    it("'Cancel' button closes book editor", () =>{
      cy.get("mat-card").contains("Oren Farhi").click();
      cy.get('[icon="edit"]').click();
      cy.get("button").contains("Cancel").click();
      cy.get("form").should("be.not.visible");
    });

    it("'x' selection closes book editor", () => {
      cy.get('[icon="times"]').click();
      cy.contains("Books can be managed in this editor and are added, updated, deleted and selected through @ngrx/entity.");
    });
  });

  describe("Verify an empty book list", () => {
    it("Empty book text seen after selecting a book then the 'trash' icon", () => {
      cy.get("mat-card").click();
      cy.get('[icon="trash"]').click();
      cy.contains("Looks like you don't have any books, let's add some!").should("be.visible");
    });
  });

  describe("Verify adding and deleting books", () => {
    it("Able to add a book after selecting the plus button", () => {
      cy.get('.add').click();
      cy.get("form").should("be.visible")
      cy.get('[formcontrolname="title"]').type("Fun With Cypress");
      cy.get('[formcontrolname="author"]').type("Chester Tester");
      cy.get('[formcontrolname="description"]').type("Here is a fun way to learn Cypress and explore automated testing.");
      cy.get("button").contains("Save").click();
      cy.get("mat-card h3").should("contain", "Fun With Cypress");
      cy.get("mat-card small").should("contain", "Chester Tester");
    });

    it("Able to add another book after selecting the plus button, book count should be two", () => {
      cy.get('.add').click();
      cy.get("form").should("be.visible");
      cy.get('[formcontrolname="title"]').type("Reactive Programming with Angular and ngrx");
      cy.get('[formcontrolname="author"]').type("Oren Farhi");
      cy.get('[formcontrolname="description"]').type("Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions");
      cy.get("button").contains("Save").click();
      cy.get("mat-card h3").should("contain", "Reactive Programming with Angular and ngrx");
      cy.get("mat-card small").should("contain", "Oren Farhi");
      cy.get("mat-card").should('have.length', 2);
    });

    it("Deleting a book removes book from 'Your book' list", () => {
      cy.get("mat-card").contains("Chester Tester").click();
      cy.get('[icon="trash"]').click();
      cy.get("mat-card h3").should("not.contain", "Fun With Cypress");
      cy.get("mat-card small").should("not.contain", "Chester Tester");
    });
  });

  describe("Editing a book", () => {
    before(() => {
      cy.get('.add').click();
      cy.get("form").should("be.visible")
      cy.get('[formcontrolname="title"]').type("Reactive Programming with Angular and ngrx");
      cy.get('[formcontrolname="author"]').type("Oren Farhi");
      cy.get('[formcontrolname="description"]').type("Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions");
      cy.get("button").contains("Save").click();
      cy.get("mat-card h3").should("contain", "Reactive Programming with Angular and ngrx");
      cy.get("mat-card small").should("contain", "Oren Farhi");
    });
    
    beforeEach(() => {
      cy.get("mat-card").contains("Oren Farhi").click();
      cy.get('[icon="edit"]').click();
      cy.get("form").should("be.visible");
    });

    it("'Edit book' selection opens book editor form", () => {
      cy.get('[formcontrolname="title"]').should("have.value", "Reactive Programming with Angular and ngrx");
      cy.get('[formcontrolname="author"]').should("have.value", "Oren Farhi");
      cy.get('[formcontrolname="description"]').should("have.value","Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions");
    })

    it("Edit book title", () => {
      cy.get('[formcontrolname="title"]').clear().type("Angular and ngrx");
      cy.get("button").contains("Save").click();
      cy.get("mat-card h3").should("contain", "Angular and ngrx");
    });

    it("Edit book Author", () => {
      cy.get('[formcontrolname="author"]').clear().type("Oren Farhi Junior");
      cy.get("button").contains("Save").click();
      cy.get("mat-card small").should("contain", "Oren Farhi Junior");
    });

    it("Edit book Description", () => {
      cy.get('[formcontrolname="description"]').clear().type("Learn to Harness the Power of Reactive Programming in a fun way");
      cy.get("button").contains("Save").click();
      cy.get("mat-card").contains("Oren Farhi").click();
      cy.get("p").should("contain", "Learn to Harness the Power of Reactive Programming in a fun way");
    });
  });

})
