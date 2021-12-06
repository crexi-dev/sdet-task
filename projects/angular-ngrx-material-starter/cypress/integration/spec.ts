describe('CRUD Tests', () => {
  beforeEach(() => {
    // navigate to books
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-raised-button').contains('Examples').click();
  });

  it('can Create, Read, Update, and Delete books', () => {
    // create book
    let title = 'How to Write Cypress Test Cases';
    let author = 'Race Morel';
    let description = `A completely fake book that I definitely didn't write, but let's pretend I did.`;
    cy.get('.add').click();
    fill(title, author, description);
    cy.get('.mat-raised-button').contains('Save').click();
    // read book
    read(title, author, description);
    // update book
    let title2 = 'How to Write Even Better Cypress Test Cases';
    let author2 = 'Mace Rorel';
    let description2 = `A totally real book that I definitely wrote under an incredibly clever pseudonym.`;
    cy.get('fa-icon[icon="edit"]').click();
    fill(title2, author2, description2);
    cy.get('.mat-raised-button').contains('Save').click();
    // verify changes
    read(title2, author2, description2);
    // delete book
    cy.get('fa-icon[icon="trash"]').click();
    // verify book no longer appears
    cy.contains(title2).should('not.exist');
  });

  it('cannot create books without required fields', () => {
    cy.get('.add').click();
    // title is required
    cy.get('input[data-placeholder="Author"]').clear().type('Author');
    cy.get('textarea[data-placeholder="Description"]').clear().type('Description');
    cy.get('.mat-raised-button').contains('Save').click();
    cy.get('mat-error').contains('Title is required');
    // author is required
    cy.get('input[data-placeholder="Author"]').clear();
    cy.get('input[data-placeholder="Title"]').clear().type('Title');
    cy.get('.mat-raised-button').contains('Save').click();
    cy.get('mat-error').contains('Author is required');
  });

  it('cancelling book creation clears fields', () => {
    // fill out fields
    let title = 'How to Write Cypress Test Cases';
    let author = 'Race Morel';
    let description = `A completely fake book that I definitely didn't write, but let's pretend I did.`;
    cy.get('.add').click();
    fill(title, author, description);
    // cancel and then re-open new book
    cy.get('.mat-raised-button').contains('Cancel').click();
    cy.get('.add').click();
    // expect fields to be empty
    cy.get('input[data-placeholder="Title"]').invoke('text').then(($text) => {
      expect($text).to.be.empty;
    });
    cy.get('input[data-placeholder="Author"]').invoke('text').then(($text) => {
      expect($text).to.be.empty;
    });
    cy.get('textarea[data-placeholder="Description"]').invoke('text').then(($text) => {
      expect($text).to.be.empty;
    });
  });

  function read($title:string, $author:string, $description:string) {
    // verify correct information appears in left card
    cy.get(`.mat-card:contains(${$title})`).within(() => {
      cy.get('h3').contains($title);
      cy.get('small').contains($author);
    });
    // verify correct information appears in book editor
    cy.get('h2:contains(Book editor)').closest('div').within(() => {
      cy.get('h3').contains($title);
      cy.get('i').contains($author);
      cy.get('p').contains($description);
    });
  }

  function fill($title:string, $author:string, $description:string) {
    // fill out new book fields
    cy.get('input[data-placeholder="Title"]').clear().type($title);
    cy.get('input[data-placeholder="Author"]').clear().type($author);
    cy.get('textarea[data-placeholder="Description"]').clear().type($description);
  }

});
