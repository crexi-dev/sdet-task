// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createBook', (bookTitle, bookAuthor, bookDescription) => {
    cy.get('.add').click()
      .addBookDetails(bookTitle, bookAuthor, bookDescription);
})

Cypress.Commands.add('addBookDetails', (bookTitle, bookAuthor, bookDescription) => {
    cy.get('[data-placeholder="Title"]').clear().type(bookTitle);
    cy.get('[data-placeholder="Author"]').clear().type(bookAuthor);
    cy.get('[data-placeholder="Description"]').clear().type(bookDescription);
    cy.get('.mat-primary > .mat-button-wrapper').click();
})

Cypress.Commands.add('verifyFirstBook', (bookTitle, bookAuthor) => {
    cy.get('[class="row"]').contains('h3', bookTitle);
    cy.get('[class="row"]').contains('small', bookAuthor);
})

Cypress.Commands.add('verifyBookDetails', (bookTitle, bookAuthor, bookDescription) => {
    cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted > h3').contains(bookTitle);
    cy.get('p').contains(bookDescription);
    cy.get('i').contains(bookAuthor);
})