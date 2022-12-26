// Import Cucumber prefix
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { crudLocator } from '../../pageLocators/crudLocators';


When('the user clicks on the + sign', () => {
    crudLocator.getAddIcon().click()
});

And('the user enters book details', () => {
    cy.fixture('dataFile.json').then((file) => {
        // load data from dataFile.json
        crudLocator.getBookTitle().type(file.BookDetails.BookTitle)
        crudLocator.getBookAuthor().type(file.BookDetails.BookAuthor)
        crudLocator.getBookDescription().type(file.BookDetails.BookDescription)
      })
      // Click on save button
      crudLocator.getSaveButton().click()
});

Then('a new book is added to the book list', () => {
    cy.fixture('dataFile.json').then((file) => {
        crudLocator.getFirstBook().contains(file.BookDetails.BookTitle)
    })
});

When('the user click on the edit button of the first book', () => {
    crudLocator.getFirstBook().click()
    crudLocator.getEditButton().click()
});

And('edits the book details', () => {
    cy.fixture('dataFile.json').then((file) => {
        // load data from dataFile.json
        crudLocator.getBookTitle().clear().type(file.BookDetails.EditedBookTitle)
        crudLocator.getBookAuthor().clear().type(file.BookDetails.EditedBookAuthor)
        crudLocator.getBookDescription().clear().type(file.BookDetails.EditedBookDescription)
      })
      // Click on save button
      crudLocator.getSaveButton().click()

});

Then('the book is updated', () => {
    cy.fixture('dataFile.json').then((file) => {
        crudLocator.getFirstBook().contains(file.BookDetails.EditedBookTitle)
    })
});

When('the user click on the delete button of the first book', () => {
    crudLocator.getFirstBook().click()
    crudLocator.getDeleteButton().click()
});

Then('the book is deleted', () => {
    cy.fixture('dataFile.json').then((file) => {
        crudLocator.getFirstBook().should('not.have.text',file.BookDetails.EditedBookTitle)
    })
});