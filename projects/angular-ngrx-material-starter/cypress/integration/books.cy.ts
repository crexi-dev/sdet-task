var bookTitle = 'Atlas Shrugged';
var bookAuthor = 'Ayn Rand';
var bookDescription = 'Who is John Galt?';
var firstBookTitle = 'Reactive Programming with Angular and ngrx';
var firstBookAuthor = 'Oren Farhi';
var firstBookDescription = 'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'

describe('CRUD Library', () => {
  beforeEach(() => {
    cy.visit('/examples/crud')
  })

  it('should allow user to read existing entry', () => {
    cy.verifyBook(firstBookTitle, firstBookAuthor);
  });

  it('should allow user to read existing entry on mobile', () => {
    cy.viewport('iphone-x')
      .verifyBook(firstBookTitle, firstBookAuthor);
  });

  it('should allow user to create a new entry', () => {
    cy.createBook(bookTitle, bookAuthor, bookDescription)
      .verifyBook(bookTitle, bookAuthor)
      .verifyBookDetails(bookTitle, bookAuthor, bookDescription);
  });

  it('should allow user to update existing entry', () => {
    var updatedTitle = 'High Fidelity';
    var updatedAuthor = 'Nick Hornby';
    var updatedDescription = 'An obsessive music fan who examines his top ' +
      'five worst break ups to understand his most recent heartbreak.';
    cy.createBook(bookTitle, bookAuthor, bookDescription)
      .get('[data-icon="edit"]').click()
      .addBookDetails(updatedTitle, updatedAuthor, updatedDescription)
      .verifyBook(updatedTitle, updatedAuthor)
      .verifyBookDetails(updatedTitle, updatedAuthor, updatedDescription);
  });

  it('should allow user to delete existing entry', () => {
    cy.createBook(bookTitle, bookAuthor, bookDescription)
      .get('[data-icon="trash"]').click()
      .verifyBook(firstBookTitle, firstBookAuthor);
  });
});
