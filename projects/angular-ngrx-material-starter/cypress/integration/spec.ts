describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.window().should('have.prop', 'AppComponent');
  });
  it('Clicks Example Button and confirms route', () => {
    cy.get('crx-about').as('crxAbout');
    cy.get('@crxAbout').find('h1').should('have.text', 'Crexi SDET Task');
    cy.get('@crxAbout').find('a').should('include.text', 'Examples').click();
    cy.url().should('include', '/examples/crud');
  });
  it('Confirms clicking on book', () => {
    cy.get("input[formcontrolname='title']").should('be.hidden');
    cy.get("input[formcontrolname='author']").should('be.hidden');
    cy.get("textarea[formcontrolname='description']").should('be.hidden');
    cy.get('button').contains('Save').should('be.hidden');
    cy.get('button').contains('Cancel').should('be.hidden');
    cy.get('crx-examples').as('crxExamples');
    cy.get('@crxExamples')
      .find('h2')
      .should('contain.text', 'Your books')
      .and('contain.text', 'Book editor');
    cy.get('@crxExamples')
      .find('p')
      .should('contain.text', 'Books can be managed in this editor');
    cy.get('@crxExamples').find('mat-card').should('have.length', 1).click();
    cy.confirmBookTitle(0);
    cy.confirmBookAuthor(0);
  });
  it('Deletes book', () => {
    cy.get("fa-icon[icon='trash']").click();
    cy.get('mat-card').should('have.length', 0);
    cy.get('p')
      .eq(0)
      .should(
        'have.text',
        "Looks like you don't have any books, let's add some!"
      );
  });
  it('Adds then cancels', () => {
    cy.get("fa-icon[icon='plus']").click();
    cy.enterTitleAndAuthor('To Kill a Mockingbird', 'Harper Lee').then(() => {
      cy.get('button').contains('Cancel').click();
    });
    cy.get('p')
      .eq(1)
      .should('contain.text', 'Books can be managed in this editor');
  });
  it('Adds first book without errors', () => {
    cy.get("fa-icon[icon='plus']").click();
    cy.enterTitleAndAuthor('To Kill a Mockingbird', 'Harper Lee').then(() => {
      cy.get("textarea[formcontrolname='description']")
        .type(
          'In the twentieth century, To Kill a Mockingbird is probably the most widely read book dealing with race in America, and its main character, Atticus Finch, the most enduring fictional image of racial heroism'
        )
        .then(() => {
          cy.get('button').contains('Save').click();
        });
    });
    cy.get('mat-card')
      .should('have.length', 1)
      .and('contain.text', 'To Kill a Mockingbird')
      .and('contain.text', 'Harper Lee')
      .click();
    cy.confirmBookTitle(0);
    cy.confirmBookAuthor(0);
    cy.get('p').should('contain.text', 'Atticus Finch');
  });
  it('Adds second book with errors', () => {
    cy.get("fa-icon[icon='plus']").click();
    cy.get('button').contains('Save').click();
    cy.get('mat-error')
      .should('contain.text', 'Title is required')
      .and('contain.text', 'Author is required');
    cy.get("input[formcontrolname='title']")
      .as('titleInput')
      .should('have.class', 'ng-invalid');
    cy.get('@titleInput').type('Title.txt');
    cy.get('@titleInput').should('have.class', 'ng-valid');
    cy.get("input[formcontrolname='author']")
      .as('authorInput')
      .should('have.class', 'ng-invalid');
    cy.get('@authorInput').type('Author.jpeg');
    cy.get('@authorInput').should('have.class', 'ng-valid');
    cy.get('button').contains('Save').click();
    cy.get('mat-card').should('have.length', 2);
    cy.confirmBookTitle(0);
    cy.confirmBookAuthor(0);
    cy.get('p').should('have.text', '');
    cy.verfiyOrderOfCards();
  });
  it('Edits book details', () => {
    cy.get("fa-icon[icon='edit']").click();
    cy.enterTitleAndAuthor('Twilight', 'Stephenie Meyer').then(() => {
      cy.get("textarea[formcontrolname='description']")
        .type(
          'Twilight is a 2005 young adult vampire-romance novel, and the first in the Twilight series'
        )
        .then(() => {
          cy.get('button').contains('Save').click();
        });
      cy.get('mat-card')
        .should('have.length', 2)
        .and('contain.text', 'Twilight')
        .and('contain.text', 'Stephenie Meyer');
      cy.confirmBookTitle(1);
      cy.confirmBookAuthor(1);
      cy.get('p').should(
        'contain.text',
        '2005 young adult vampire-romance novel'
      );
      cy.verfiyOrderOfCards();
    });
  });
  it('Deselects book', () => {
    cy.get("fa-icon[icon='times']").click();
    cy.get('p').should('contain.text', 'Books can be managed in this editor');
    cy.get("input[formcontrolname='title']").should('be.hidden');
    cy.get("input[formcontrolname='author']").should('be.hidden');
    cy.get("textarea[formcontrolname='description']").should('be.hidden');
    cy.get('button').contains('Save').should('be.hidden');
    cy.get('button').contains('Cancel').should('be.hidden');
  });
});
