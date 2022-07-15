declare namespace Cypress {

  interface Chainable {
    LoadURL(): void
    Move_to_CRUD_Page(): void
    Validate_the_headers_in_CRUD_page() : void
    Creating_a_book(title: string, author: string, description: string): void
    Validate_created_book(title: string, author: string, description: string): void
    Editing_created_book(title: string, author: string, description: string): void
    Validate_modified_book(title: string, author: string, description: string): void
    Delete_book(): void
  }
}

Cypress.Commands.add('LoadURL', ()=> {
  cy.visit('/');
  cy.contains('Crexi SDET Task');
  cy.get('.mat-button').contains('Examples');
})

Cypress.Commands.add('Move_to_CRUD_Page', () => {
  cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper').click();
})

Cypress.Commands.add('Validate_the_headers_in_CRUD_page', () => {
  cy.get('h1').contains('CRUD books using @ngrx/entity & @ngrx/router-store');
  cy.get('.container > :nth-child(2) > :nth-child(1) > h2').contains('Your books');
})

Cypress.Commands.add('Creating_a_book', (title,author,description) => {
  cy.get('.add').click();
  cy.get('#mat-input-0').type(title);
  cy.get('#mat-input-1').type(author);
  cy.get('#mat-input-2').type(description);
  cy.get('.col-12 > .mat-primary').click();
})

Cypress.Commands.add('Validate_created_book', (title,author,description) => {
  cy.xpath(`//mat-card/h3[contains(text(),'${title}')]//following::small[1]`).contains(author)
  cy.xpath(`//mat-card/h3[contains(text(),'${title}')]`).contains(title)
  cy.get('p').contains(description)
})

Cypress.Commands.add('Editing_created_book', (updatedTitle,updatedAuthor,updatedDescription) => {
  cy.get('.mat-accent > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();
  cy.get('#mat-input-0').clear().click();
  cy.get('#mat-input-0').type(updatedTitle);
  cy.get('#mat-input-1').clear();
  cy.get('#mat-input-1').type(updatedAuthor);
  cy.get('#mat-input-2').clear();
  cy.get('#mat-input-2').type(updatedDescription);
  cy.get('.mat-primary > .mat-button-wrapper').click();
})

Cypress.Commands.add('Validate_modified_book', (updatedTitle,updatedAuthor,updatedDescription) => {
  cy.xpath(`//mat-card/h3[contains(text(),'${updatedTitle}')]//following::small[1]`).contains(updatedAuthor)
  cy.xpath(`//mat-card/h3[contains(text(),'${updatedTitle}')]`).contains(updatedTitle)
  cy.get('p').contains(updatedDescription)
})

Cypress.Commands.add('Delete_book', () => {
  cy.get('.mat-warn > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();
})


