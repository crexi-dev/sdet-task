import { onCreateBookPage } from '../support/bookEditorPage';

beforeEach('Load library page', () => {
  onCreateBookPage.visitBooksPage(); // ideally, naviagation would be its own page
});

describe('Verify default book', () => {
  it('Verifies that books page loads', () => {
    cy.contains('CRUD books using @ngrx/entity & @ngrx/router-store').should(
      'be.visible'
    );
    cy.contains('Your books').should('be.visible');
  });
});

describe('Verify default book', () => {
  it('Verifies that default book is present', () => {
    cy.contains('CRUD books using @ngrx/entity & @ngrx/router-store').should(
      'be.visible'
    );
    onCreateBookPage.selectBookByTitle(
      'Reactive Programming with Angular and ngrx'
    );
    cy.contains(
      'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
    ).should('be.visible');
  });
});

describe('Creating books', () => {
  it('succefully adds a new book', () => {
    onCreateBookPage.visitBooksPage();
    onCreateBookPage.openBookEditor();
    onCreateBookPage.typeBookInformation(
      'Dune (novel)',
      'Frank Herbert',
      'Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs.'
    );
    onCreateBookPage.saveNewBook();
    onCreateBookPage.getBookByTitle('Dune (novel)').should('be.visible');
  });
});

describe('Updating books', () => {
  it('succefully adds a new book and updates it', () => {
    onCreateBookPage.visitBooksPage();
    onCreateBookPage.openBookEditor();
    onCreateBookPage.typeBookInformation(
      'Fahrenheit 451',
      'Ray Bradbury',
      'Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury.'
    );
    onCreateBookPage.saveNewBook();
    onCreateBookPage.selectBookByTitle('Fahrenheit 451');
    onCreateBookPage.editSelectedBook();
    onCreateBookPage.typeBookInformation(
      'Red Book',
      'Not Ray Bradbury',
      `That's used to be a good book but no more`
    );
    onCreateBookPage.saveNewBook();
    onCreateBookPage.getBookByTitle('Fahrenheit 451').should('not.exist');
    onCreateBookPage.getBookByTitle('Red Book').should('be.visible');
  });
});

describe('Deleting books', () => {
  it('succefully adds a new book and deletes it', () => {
    onCreateBookPage.visitBooksPage();
    onCreateBookPage.openBookEditor();
    onCreateBookPage.typeBookInformation(
      'Brave New World',
      'Aldous Huxley',
      'Brave New World is a dystopian social science fiction novel by English author Aldous Huxley, written in 1931 and published in 1932.'
    );
    onCreateBookPage.saveNewBook();
    onCreateBookPage.selectBookByTitle('Brave New World');
    onCreateBookPage.deleteSelectedBook();
    onCreateBookPage.getBookByTitle('Brave New World').should('not.exist');
  });
});
