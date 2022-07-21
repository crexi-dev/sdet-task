/// <reference types="cypress" />
import * as loc from '../data/elements.json';

describe('User can update and delete a post', () => {

  it('Navigate to example page', () => {
    cy.visit('/examples/crud/')
      .getAndClick(loc.elememt.addBtn)
      .createAbook(loc.textVal.title, loc.textVal.Author, loc.textVal.desc)
  });
  
  it('User click close icon', () => {
     cy.getAndClick(loc.elememt.cancleIcon)
       .get('code')
       .should('be.visible');
  })
   it('User click edit icon', () => {
    cy.get(loc.elememt.headline)
      .first()
      .click({timeout:7000})
      .getAndClick(loc.elememt.editIcon)
      .get(loc.elememt.titleEl)
      .should('be.visible')
   })
   it('User click cancle icon', () => {
       cy.getAndClick('button.mat-raised-button:nth-child(2)')
         .should('not.be.visible')    
   })
   it('User update a book info', () => {
     cy.get(loc.elememt.headline)
       .first()
       .click({timeout:7000})
       .getAndClick(loc.elememt.editIcon)
       .createAbook('Update', 'Update', 'Update')
       .get(':nth-child(2) > .route-animations-elements.ng-star-inserted')
       .then( ($el) => {
         cy.wrap($el)
           .find('h3')
           .should('contain.text', 'Update')
           .get($el)
           .find('p')
           .should('contain.text', 'Update')
           .get($el)
           .find('i')
           .should('contain.text', 'Update')
       })
   })
   it('User delete a book item', () => {
       cy.getAndClick(loc.elememt.delectIcon)
         .get(loc.elememt.headline)
         .should('have.length', 1)
         .and('not.contain.text', 'Update')
   })

});