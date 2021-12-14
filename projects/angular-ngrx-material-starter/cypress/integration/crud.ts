describe('CRUD SDET Test Suite', () => {
  let bookTitle = 'Sentient Bots';
  let bookAuthor = 'CypressIO';
  let bookDescription = 'This a helpful description';
  let editModifier = 'New edit';
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples').click();
    cy.contains('CRUD').click();
  })
  it('Adds, Edits and Removes CRUD items', () => {
    cy.contains('Reactive Programming with Angular and ngrx').should('be.visible');
    cy.get('.add').click();
    cy.get('#mat-input-0').type(bookTitle);
    cy.get('#mat-input-1').type(bookAuthor);
    cy.get('#mat-input-2').type(bookDescription);
    cy.contains('Save').click()
    //Editing CRUD
    cy.get('span.ng-star-inserted > .mat-accent').click()
    cy.get('#mat-input-2').type(editModifier);
    cy.contains('Save').click()
    cy.get('p').should('contain', editModifier);
    //Removing CRUD
    cy.get('.mat-warn').click()
    cy.get('p').should('not.contain', editModifier);
  });
});
