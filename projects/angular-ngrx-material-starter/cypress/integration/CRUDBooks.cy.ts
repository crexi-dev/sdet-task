import { data } from 'cypress/types/jquery';
import {  CRUDPage } from '../pages/CRUDPage';

describe('CRUD Tests - CRUD Books', () => {
  
  //Visits crud before all tests 
  before(function () {
    cy.visit('/examples/crud');
    cy.contains('Crexi SDET Task');
    CRUDPage.getTitleMessage().contains("CRUD books using", { matchCase: false }) //Verify on CRUD Page before starting tests  
  })

  //Used to load fixtures before each test 
  beforeEach(function () {
    cy.fixture('CRUDBooksData').then((test_data) => { 
      this.test_data = test_data
    })
  })

  it('Create a Book', function () {

    //Create a Book 
    CRUDPage.getPlusButton().click()  // Click Add 
    CRUDPage.getTitleTextField().type(this.test_data.NewBookTitle)  //Insert  Fields 
    CRUDPage.getAuthorTextField().type(this.test_data.NewBookAuthor)
    CRUDPage.getDescriptionTextField().type(this.test_data.NewBookDescription)
    CRUDPage.getSaveButton().click()
    
    //Verify creation in Your Books Column (Left Column)
    CRUDPage.getYourBooks().should('contain', this.test_data.NewBookTitle).and('contain', this.test_data.NewBookAuthor) //Verify in Your Books
    
    //Verify title, description & author in Book Editor (Right Column)
    cy.contains(this.test_data.NewBookTitle).click()
    CRUDPage.getBookEditorTitleText().should('contain', this.test_data.NewBookTitle)
    CRUDPage.getBookEditorDescriptionText().should('contain', this.test_data.NewBookDescription)
    CRUDPage.getBookEditorAuthorText().should('contain', this.test_data.NewBookAuthor)

  })
  
  it('Update a Book', function () {

    //We are assuming the database comes with a single book already to avoid creating a new book to update  
    //Ideally we would seed database beforehand (via API / DB script) to avoid doing it via UI
    //If I were to create a new book through UI for this test, I would definitely make use of Cypress Commands to reduce code reptition

    //To reduce dependency, the first book in DB will be updated to check for "Update" functionality
    CRUDPage.getFirstBook().click()
    CRUDPage.getEditButton().click()  

    //For sanity, we will update all aspects of the book. 
    // It doesn't matter what the previous title is for update functionality check 
    //There could be an edge case where the Edited Book Name already exists in DB. However, in this SDET task use case, we reset browser state in every Cypress test session anyways 
    CRUDPage.getTitleTextField().clear().type(this.test_data.EditedBookTitle)  
    CRUDPage.getAuthorTextField().clear().type(this.test_data.EditedBookAuthor)
    CRUDPage.getDescriptionTextField().clear().type(this.test_data.EditedBookDescription)
    CRUDPage.getSaveButton().click()
    CRUDPage.getYourBooks().should('contain', this.test_data.EditedBookTitle).and('contain', this.test_data.EditedBookAuthor) //Verify Add exists 
  })

  it('Delete a Book', function () {

    //We are assuming the database comes with a book already to avoid creating a new book to delete 
    //Ideally we would seed database beforehand (via API / DB script) to avoid doing it via UI 
    //If I were to create a new book through UI for this test, I would definitely make use of Cypress Commands to reduce code reptition

    //To reduce dependency, the first book in DB will be deleted to check for "Delete" functionality
    CRUDPage.getFirstBook().click()
    CRUDPage.getEditButton().click()  
  
    CRUDPage.getTitleTextField().then(($title) => {
      const title = $title.val() //Store title before deleting book 
      CRUDPage.getDeleteButton().click() //Delete the book 
      CRUDPage.getYourBooks().should('not.contain', title) //Verify title doesn't exist anymore 

    })
    
  })

})

