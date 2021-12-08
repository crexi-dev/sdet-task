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

import { resolve } from 'cypress/types/bluebird';

Cypress.Commands.add('confirmBookTitle', (cardNumber) => {
  cy.get('crx-examples').as('crxExamples');
  cy.get('@crxExamples')
    .find('mat-card h3')
    .eq(cardNumber)
    .then((card) => {
      const cardText = card.text();
      cy.get('@crxExamples')
        .find('div.route-animations-elements h3')
        .should('have.text', cardText);
    });
});

Cypress.Commands.add('confirmBookAuthor', (cardNumber) => {
  cy.get('crx-examples').as('crxExamples');
  cy.get('@crxExamples')
    .find('mat-card small')
    .eq(cardNumber)
    .then((card) => {
      const cardText = card.text();
      cy.get('@crxExamples')
        .find('div.route-animations-elements i')
        .should('have.text', cardText);
    });
});

Cypress.Commands.add('enterTitleAndAuthor', (title, author) => {
  return cy
    .get("input[formcontrolname='title']")
    .clear()
    .type(title)
    .then(() => {
      cy.get("input[formcontrolname='author']").clear().type(author);
    });
});

Cypress.Commands.add('verfiyOrderOfCards', () => {
  cy.get('mat-card h3').then((cards) => {
    const strings = [...cards].map((el) => el.innerText);
    expect(strings).to.deep.equal([...strings].sort());
  });
});
