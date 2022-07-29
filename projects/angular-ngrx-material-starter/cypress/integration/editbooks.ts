describe('Should edit existing books', () => {
    it('User should be able to navigate to the crud page', () => {
        cy.visitCrudPage();
        cy.getCrudPageTitle();
        cy.getYourBooksTitle();
        cy.getBooksEditorTitle();  
    });

    it('should allow the user to edit an existing book', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton();
        cy.verifyBookInListOfCreatedBooks();  

        cy.clickEditIcon();
        cy.clearExistingBookTitle();
        cy.clearExistingAuthorName();
        cy.clearExistingBookDescription();  

        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton();  
    });

    it('should show the user an error when book information is not provided', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle();
        cy.clickSaveButton();
        cy.getBookEditErrorMessage(); 
    });
})