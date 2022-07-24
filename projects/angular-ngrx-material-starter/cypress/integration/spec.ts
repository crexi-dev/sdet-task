describe('My First Test', () => {
  before(() => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });

  it('CRUD', () => {
    cy.contains('span', ' Examples ').should('be.visible').click();

    /* Navigate to CRUD Books Section */
    cy.contains('[href="/examples/crud"]', 'CRUD').should('be.visible').click();
    cy.get('[class="mat-ripple mat-button-ripple mat-button-ripple-round"]')
      .last()
      .click({ force: true });

    /* Fill in Title Name */
    cy.get('[data-placeholder="Title"]')
      .should('be.visible')
      .type('SDET Task')
      .should('have.value', 'SDET Task');

    /* Fill in Author Name */
    cy.get('#mat-input-1')
      .should('be.visible')
      .type('Richard Thomson')
      .should('have.value', 'Richard Thomson');

    /* Fill in Description */
    cy.get('#mat-input-2')
      .should('be.visible')
      .type('SDET Task Instructions')
      .should('have.value', 'SDET Task Instructions');

    /* Save the Book */
    cy.contains('button', 'Save')
      .should('be.visible')
      .click()
      .and('not.be.visible');
    /* Verify the Book is successfully created */
    cy.get('[class*="mat-card"]')
      .last()
      .within(() => {
        cy.contains('h3', 'SDET Task').should('be.visible');
        cy.contains('small', 'Richard Thomson').should('be.visible');
      });
    cy.get('[class="route-animations-elements ng-star-inserted"]').within(
      () => {
        cy.contains('h3', 'SDET Task').should('be.visible');
        cy.contains('p', 'SDET Task Instructions').should('be.visible');
        cy.contains('i', 'Richard Thomson').should('be.visible');
      }
    );

    /* Edit the Book */
    cy.get('[data-icon="edit"]').should('be.visible').click();
    cy.contains('button', 'Save').should('be.visible');

    /* Fill in Title Name */
    cy.get('[data-placeholder="Title"]')
      .should('be.visible')
      .clear()
      .type("SDET's Book")
      .should('have.value', "SDET's Book");

    /* Fill in Author Name */
    cy.get('#mat-input-1')
      .should('be.visible')
      .clear()
      .type('Richard Benson')
      .should('have.value', 'Richard Benson');

    /* Fill in Description */
    cy.get('#mat-input-2')
      .should('be.visible')
      .clear()
      .type("SDET's Guide Instructions")
      .should('have.value', "SDET's Guide Instructions");

    /* Save the Book */
    cy.contains('button', 'Save')
      .should('be.visible')
      .click()
      .and('not.be.visible');

    /* Verify the changes are saved */
    cy.get('[class*="mat-card"]')
      .last()
      .within(() => {
        cy.contains('h3', "SDET's Book").should('be.visible');
        cy.contains('small', 'Richard Benson').should('be.visible');
      });
    cy.get('[class="route-animations-elements ng-star-inserted"]').within(
      () => {
        cy.contains('h3', "SDET's Book").should('be.visible');
        cy.contains('p', "SDET's Guide Instructions").should('be.visible');
        cy.contains('i', 'Richard Benson').should('be.visible');
      }
    );

    /* Delete the Book */
    cy.get('[data-icon="trash"]').should('be.visible').click().and('not.exist');

    /* Verify the Book has been deleted */
    cy.get('[class*="mat-card"]').within(() => {
      cy.contains('h3', "SDET's Book").should('not.exist');
      cy.contains('small', 'Richard Benson').should('not.exist');
    });
    cy.get('[class="route-animations-elements ng-star-inserted"]').within(
      () => {
        cy.contains('h3', "SDET's Book").should('not.exist');
        cy.contains('p', "SDET's Guide Instructions").should('not.exist');
        cy.contains('i', 'Richard Benson').should('not.exist');
      }
    );
    cy.contains('h2', 'Book editor').should('exist');
  });
});
