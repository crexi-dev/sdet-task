/// <reference types="cypress" />

import * as loc from '../data/elements.json';

describe('My First Test', () => {

  it('User navigate to Crexi home page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });
  it('User should able to click example button', () => {
    cy.getAndClick('.actions .mat-button-wrapper')
      .get('h1')
      .should('contain.text', loc.textVal.ExamPleTitle)
  });
  it('User should not the see editor form by default', () => {
    cy.get('form')
      .should('not.be.visible')
  })
  it('User should see a book list by default', () => {
   
    cy.get(loc.elememt.booklistEl)
      .should('be.visible')
      .and('have.length', 1)
  })
  it('User should able to click plus button', () => {
    cy.getAndClick(loc.elememt.addBtn)
      .get(loc.elememt.form)
      .should('be.visible')
   });

   it('User should see Book editor form', () => {
       cy.get('form input')
         .should('be.visible')
         .get('form textarea')
         .should('be.visible')   
   })

   it('Click save button with form data', () => {

      cy.getAndClick(loc.elememt.saveBtn)
        .get('input:invalid')
        .should('have.length', 2)
        .get(loc.elememt.titleErorr)
        .should('contain.text', loc.textVal.titleErrorText)
        .get(loc.elememt.authorErorr)
        .should('contain.text', loc.textVal.authorErrorText)
   })

   it('Bug: User try to create a book item without title', () => {
       cy.createAbook(loc.textVal.title, ' ', ' ' )
         .get('input:invalid')
         .should('have.length', 1)
         .get(loc.elememt.titleErorr)
   })
   it('User create a book item', () => {
      cy.getAndClick(loc.elememt.addBtn)
        .createAbook(loc.textVal.title, loc.textVal.Author, loc.textVal.desc)
        .get(loc.elememt.headline)
        .first()
        .should('be.visible')
        .should('contain.text', loc.textVal.title)
    }) 

   it('User should able to see delete and edit icons', () => {
       cy.get('.d-flex .ng-star-inserted button')
         .should('be.visible')
         .and('have.length', 3)
   })

});
