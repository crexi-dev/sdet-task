import { faker } from '@faker-js/faker';
const booksHeader = '.container > :nth-child(2) > :nth-child(1) > h2';


describe('CRUD Flow', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });

  it('Navigate CRUD tab', () => { 
    cy.visit('/examples/crud/');
    cy.get(booksHeader).contains('Your books') //unless static, consider adding data-cy tag for specific h2 tag
  });

  it('Creation flow and read check', () => {
    const titleText = faker.lorem.sentence(4);
    const authorText = faker.lorem.sentence(2);
    const descText = faker.lorem.sentence(5);
    cy.visit('/examples/crud/');
    cy.get('.add').click()
    cy.get('#mat-input-0').type(titleText)
    cy.get('#mat-input-1').type(authorText)
    cy.get('#mat-input-2').type(descText)
    cy.get('.col-12 > .mat-primary').click()
    cy.get('.container').contains(titleText + authorText)
  });     
  
  it('Update flow and error msg check', () => {
    const textGeneration = faker.lorem.sentence(5);
    cy.visit('/examples/crud/123');
    cy.get('span.ng-star-inserted > .mat-accent').click()
    cy.get('#mat-input-0').click().clear()
    cy.get('.col-12 > .mat-primary').click() //save
    cy.get('#mat-error-2').should('contain', 'Title is required')
    cy.get('#mat-input-0').click().type('Reactive Programming with Angular and ngrx')
    cy.get('.col-12 > .mat-primary').click()
    cy.get('span.ng-star-inserted > .mat-accent').click()
    cy.get('#mat-input-2').click().clear().type(textGeneration)
    cy.get('.col-12 > .mat-primary').click()
    cy.get('p').contains(textGeneration)
  }); 

  it('Deletion flow and check deleted id routes to home screen', () => {
    cy.visit('/examples/crud/123');
    cy.get('.mat-warn').click()
    cy.get('.content').should('not.contain', 'React Programming')
    cy.visit('/examples/crud/123');
    cy.get('span.justify-content-between > h2').contains('Book editor')

  }); 




});
