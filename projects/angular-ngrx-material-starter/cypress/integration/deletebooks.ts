describe('Should delete an existing book', () => {
    it('User should be able to navigate to the crud page', () => {
        cy.visitCrudPage();
        cy.getCrudPageTitle();
        cy.getYourBooksTitle();
        cy.getBooksEditorTitle();  
    });

    it('should allow the user to deselect a book', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton();
        cy.clickDeselectButton(); 
    }); 

    it('should allow the user to delete an existing book', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton();
        cy.verifyBookInListOfCreatedBooks();
        
        cy.clickDeleteIcon();
        cy.verifyBookHasBeenDeleted();   
    }); 
}); 