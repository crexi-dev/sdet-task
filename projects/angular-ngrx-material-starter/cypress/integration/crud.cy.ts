const text = require('../fixtures/text.json');

describe('Crud Test Suite', () => {
    beforeEach(() => {
        cy.log('Navigate to /example/crud');
        cy.visit('/examples/crud');
    });

    it('should be able to add a book', () => {
        cy.log('Adding a new Book');
        cy.get('.add').should('be.visible').click()
        .get('#mat-input-0').should('be.visible').type(text.title)
        .get('#mat-input-1').should('be.visible').type(text.author)
        .get('#mat-input-2').should('be.visible').type(text.descrption)
        .get('.col-12 > .mat-primary').should('be.visible').click();

        cy.log('Verifying the Book Card');
        cy.get('.container > :nth-child(2) > :nth-child(1) > :nth-child(2)').should('be.visible').contains(text.title)
        .get(':nth-child(2) > small').should('be.visible').contains(text.author);

        cy.log('Verifying the Book editor');
        cy.get('span.justify-content-between > h2').should('be.visible').contains('Book editor')
        .get(':nth-child(2) > .route-animations-elements.ng-star-inserted > h3').should('be.visible').contains(text.title)
        .get('p').should('be.visible').contains(text.descrption)
        .get('i').should('be.visible').contains(text.author);
    });

    it('should be able to edit a book', () => {
        cy.log('Editing a book');
        cy.get('.mat-card').should('be.visible').click()
        .get('.mat-accent > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa > path').should('be.visible').click()
        .get('#mat-input-0').should('be.visible').clear().type(text.title)
        .get('#mat-input-1').should('be.visible').clear().type(text.author)
        .get('.col-12 > .mat-primary').should('be.visible').click();

        cy.log('Verifying the Book editor');
        cy.get('span.justify-content-between > h2').should('be.visible').contains('Book editor')
        .get(':nth-child(2) > .route-animations-elements.ng-star-inserted > h3').should('be.visible').contains(text.title)
        .get('i').should('be.visible').contains(text.author);
    });

    it('should be able to delete a book', () => {
        cy.log('deleting a book');
        cy.get('.mat-card').should('be.visible').click()
        .get('.mat-warn > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa > path').should('be.visible').click();

        cy.log('Book card should not exist');
        cy.get('.mat-card > h3').should('not.exist');

        cy.log('Editor card is not visible');
        cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted > h3').should('not.exist');
    });
});