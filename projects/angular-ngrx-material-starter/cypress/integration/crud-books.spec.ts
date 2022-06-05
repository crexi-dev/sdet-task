describe('CRUD Books Test', () => {

  const title = 'Test Book'
  const author = 'Kartheek'
  const description = 'Test Description'
  const updatedTitle = 'Updated Book Title'

    it('adds a book', () => {
      cy.visit('/examples/crud/');

      cy.log('Adding a new Book');

      cy.get('button.add .ng-fa-icon').click();
      cy.get('#mat-input-0').type(title);
      cy.get('#mat-input-1').type(author);
      cy.get('#mat-input-2').type(description);
      cy.contains('Save').click();
      cy.contains(title).should('be.visible');
    });


    it('edits a book', () => {
      cy.contains(title).click();

      cy.log('Editing the Book');

      cy.get('fa-icon[icon="edit"]').click()
      cy.get('#mat-input-0').clear();
      cy.get('#mat-input-0').type(updatedTitle);
      cy.contains('Save').click();
      cy.log('Verify book updated title should exist');
      cy.contains(updatedTitle).should('be.visible');
      cy.log('Verify book initial title should exist');
      cy.contains(title).should('not.exist');
    });


    it('deletes a book', () => {
      cy.contains(updatedTitle).click();
      cy.log('Deleting the Book');

      cy.get('fa-icon[icon="trash"]').click();
      cy.log('Verify book title should not exist');
      cy.contains(updatedTitle).should('not.exist');
    });

  });