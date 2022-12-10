import { faker } from '@faker-js/faker';
const titleText = faker.lorem.sentence(3);
const authorText = faker.lorem.sentence(2);
const descText = faker.lorem.sentence(5);

const booksHeader = '.container > :nth-child(2) > :nth-child(1) > h2';
const nullBooksHeader = 'span.justify-content-between > h2';
const titleField = '#mat-input-0';
const authorField = '#mat-input-1';
const descField = '#mat-input-2';
const saveButton = '.col-12 > .mat-primary';
const addButton = '.add';
const editButton = 'span.ng-star-inserted > .mat-accent';
const deleteButton = '.mat-warn';
const readField = '.container';


describe('CRUD Flow', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');

  });

  it('Navigate CRUD tab', () => { 
    cy.visit('/examples/crud/');
    cy.get(booksHeader).contains('Your books')

  });

  it('Create a new book', () => {
    cy.visit('/examples/crud/');
    cy.get(addButton).click()
    cy.get(titleField).type(titleText)
    cy.get(authorField).type(authorText)
    cy.get(descField).type(descText)
    cy.get(saveButton).click()
    cy.get(readField).contains(titleText + authorText) // Verifies successful Create and Read

  });     
  
  it('Update an existing book: Error state', () => {
    const titleError = '#mat-error-2';
    const authorError = '#mat-error-3';

    cy.visit('/examples/crud/123');
    cy.get(editButton).click()
    cy.get(titleField).click().clear()
    cy.get(authorField).click().clear()
    cy.get(descField).click().clear()
    cy.get(saveButton).click()
    cy.get(titleError).should('contain', 'Title is required') // Edge case
    cy.get(authorError).should('contain', 'Author is required') // Edge case

  }); 
  
  it('Update an existing book', () => {
    cy.visit('/examples/crud/123');
    cy.get(editButton).click()
    cy.get(titleField).click().clear().type(titleText)
    cy.get(authorField).click().clear().type(authorText)
    cy.get(descField).click().clear().type(descText)
    cy.get(saveButton).click()
    cy.get(readField).contains(titleText + authorText) // Verifies successful Update and Read

  }); 

  it('Delete a book', () => {
    cy.visit('/examples/crud/123');
    cy.get(deleteButton).click()
    cy.get(readField).should('not.contain', 'React Programming') // Verifies successful Delete
    cy.visit('/examples/crud/123'); // Edge case: Navigate to deleted book
    cy.get(nullBooksHeader).contains('Book editor') // Edge case: Verifies user is directed user to home view

  }); 


});
