// const { takeHomeTestPageObjects } = require ('takeHomeTestPageObjects.js')
import { takeHomeTestPageObjects } from "./takeHomeTestPageObjects"
import testData from '../../../../cypress/fixtures/testData.json'

const pageObs = new takeHomeTestPageObjects()

describe('Take Home Test', () => {

  /*
    The following test cases are basic CRUD with assertions per the requirement as I understood it in the readme.
  
    Normally I would have defined:
      Field boundary tests (lower and upper limits)
      Special, numerical and any other char scenarios I can think of
      Security (Injection)
      Cross browser validation
      Mobile if applicable
  */  

  before('Nav', () => {
    cy.visit('/examples/crud/')
    pageObs.pageTitleAssertion()
  })

  it('ADDS a book', () => {
    pageObs.click_FUNCTION(pageObs.addBtn_ELEMENT())
    pageObs.type_FUNCTION(pageObs.title_ELEMENT(), testData.title)
    pageObs.type_FUNCTION(pageObs.author_ELEMENT(), testData.authorPreUpdate)
    pageObs.type_FUNCTION(pageObs.description_ELEMENT(), testData.description)
    pageObs.click_FUNCTION(pageObs.saveBtn_ELEMENT())
    pageObs.shouldAssertion_FUNCTION(pageObs.firstBook_ELEMENT(), 'have.text', 'The Alchemist')
  });

  it('EDITS a book', () => {
    pageObs.click_FUNCTION(pageObs.editBtn_ELEMENT())
    pageObs.type_FUNCTION(pageObs.author_ELEMENT(), testData.authorPostUpdate)
    pageObs.saveRecord() // I did this to show this could be a specific page function
    pageObs.shouldAssertion_FUNCTION(pageObs.firstBook_ELEMENT(), 'have.text', 'The Alchemist')
    pageObs.shouldAssertion_FUNCTION(pageObs.firstAuthor_Element(), 'have.text', 'Paulo Coelho')

  });

  it('DELETES a book', () => {
    pageObs.deleteRecord()
    pageObs.contains('The Alchemist', 'not.exist')
  });

});


