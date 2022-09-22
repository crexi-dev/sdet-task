describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });

  // CREATES/READS A BOOK
  it('Create and Read a book', () => {
    cy.get('.actions').click();
    cy.get('.add').click();
    cy.get('#mat-input-0').type("Refactoring");
    cy.get('#mat-input-1').type("Kent Beck");
    cy.get('#mat-input-2').type("book description");
    cy.get('.col-12 > .mat-primary').click();

    //Read The Book
    cy.get('.container > :nth-child(2) > :nth-child(1)').contains('Refactoring')
  })

  //Update The Book
  it('Update a Book', () => {
    //Verify correct book
    cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted').contains("Refactoring");
    //Edit
    cy.get('.mat-accent > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa > path').click();
    cy.get('#mat-input-2').clear().type('Different description');
    cy.get('.col-12 > .mat-primary').click();
    //Verify it changed
    cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted').contains('Different description')
  })

  //Delete The Book
  it('Delete A Book', () => {
    cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted').contains("Refactoring");
    cy.get('.mat-warn').click();
    //Verify Deletion
    cy.get('.container > :nth-child(2) > :nth-child(1)').not('Refactoring')
    //Or
      //cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted').contains("Books can be managed in this editor and are added, updated, deleted and selected through @ngrx/entity.")
  })
});

//My knowledge of Cypress is still limited, but I would like to learn and refactor some things even more:
    // I've used faker gem in the past so I wouldn't have to hard code in the name/author/description and it could test different combos
    // I would like to learn more so that I can get elements other than by it's hard coded title
