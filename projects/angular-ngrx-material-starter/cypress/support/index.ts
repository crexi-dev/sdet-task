// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.ß
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
 import './commands';
 import * as loc from '../data/elements.json';

 // Get and click el
Cypress.Commands.add('getAndClick', (el) => cy.get(el, { timeout: 7000,})
        .click())

Cypress.Commands.add('typeAvalue', (el, value) => {
    cy.get(el, {timeout: 7000 })
      .type(value)
})

Cypress.Commands.add('createAbook', (title, author, desc) => {
      cy.typeAvalue(loc.elememt.titleEl, title)
        .typeAvalue(loc.elememt.authorEl, author)
        .typeAvalue(loc.elememt.descriptionEl, desc)
        .getAndClick(loc.elememt.saveBtn)
});
Cypress.Commands.add('invokeText', (el) => cy .get(el, {
          timeout: 7000,
      })
      .invoke('text'));
