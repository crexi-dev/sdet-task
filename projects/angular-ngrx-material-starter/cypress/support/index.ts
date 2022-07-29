// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
import './commands';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

Cypress.Commands.add('visitCrudPage', () => {
    cy.visit('/examples/crud'); 
});

Cypress.Commands.add('getCrudPageTitle', () => {
    cy.get('h1'); 
});

Cypress.Commands.add('getYourBooksTitle', () => {
    cy.contains('h2', 'Your books'); 
});

Cypress.Commands.add('getBooksEditorTitle', () => {
    cy.contains('h2', 'Book editor'); 
})

Cypress.Commands.add('clickEditIcon', () => {
    cy.get('[data-icon="edit"]').should('be.visible').click();; 
});

Cypress.Commands.add('getDeleteIcon', () => {
    cy.contains('.mat-warn'); 
});

Cypress.Commands.add('getCancelIcon', () => {
    cy.contains('span.ng-star-inserted > :nth-child(3)'); 
});

Cypress.Commands.add('clickCreateNewBookButton', () => {
    cy.get('button.add').click();
});

Cypress.Commands.add('clickCancelCreateNewBookButton', () => {
    cy.contains('button', 'Cancel').click(); 
});

Cypress.Commands.add('addBookTitle', () => {
    let randomTitle = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    cy.get('#mat-input-0').type(randomTitle); 
});

Cypress.Commands.add('addAuthorName', () => {
    let randomAuthor = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    cy.get('#mat-input-1').type(randomAuthor); 
});

Cypress.Commands.add('addBookDescription', () => {
    let randomBookDescription = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    cy.get('#mat-input-2').type(randomBookDescription); 
});

Cypress.Commands.add('clickSaveButton', () => {
    cy.get('button.mat-primary').click();
});

Cypress.Commands.add('verifyBookInListOfCreatedBooks', () => {
    cy.get('.mat-card').should('be.visible').and('have.length.above', 0); 
});

Cypress.Commands.add('clearExistingBookTitle', () => {
    cy.get('#mat-input-0').clear(); 
});

Cypress.Commands.add('clearExistingAuthorName', () => {
    cy.get('#mat-input-1').clear(); 
});

Cypress.Commands.add('clearExistingBookDescription', () => {
    cy.get('#mat-input-2').clear(); 
});

Cypress.Commands.add('getBookEditErrorMessage', () => {
    cy.get('#mat-error-1').should('be.visible'); 
}); 
