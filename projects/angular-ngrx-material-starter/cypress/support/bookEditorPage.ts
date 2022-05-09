export class CreateBookPage {
  visitBooksPage() {
    cy.visit('/examples/crud/');
  }

  openBookEditor() {
    cy.get('[data-icon="plus"]').click();
  }

  saveNewBook() {
    cy.contains('Save').click();
  }

  cancelNewBook() {
    cy.contains('Cancel').click();
  }

  typeTitle(title: string) {
    cy.get('[data-placeholder="Title"]').clear().type(title);
  }

  typeAuthor(author: string) {
    cy.get('[data-placeholder="Author"]').clear().type(author);
  }

  typeDescription(description: string) {
    cy.get('[data-placeholder="Description"]').clear().type(description);
  }

  getBookByTitle(title: string) {
    return cy.get('[class="row"]').contains('h3', title);
  }

  selectBookByTitle(title: string) {
    this.getBookByTitle(title).click();
  }

  typeBookInformation(title: string, author: string, description: string) {
    this.typeTitle(title);
    this.typeAuthor(author);
    this.typeDescription(description);
  }

  editSelectedBook() {
    cy.get('[data-icon="edit"]').click();
  }

  deleteSelectedBook() {
    cy.get('[data-icon="trash"]').click();
  }
  deselectSelectedBook() {
    cy.get('[data-icon="times"]').click();
  }
}

export const onCreateBookPage = new CreateBookPage();
