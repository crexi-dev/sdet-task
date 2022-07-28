describe('Should create new books', ()=> {
    it('User should be able to navigate to the crud page', () => {
        cy.visitCrudPage();
        cy.getCrudPageTitle();
        cy.getYourBooksTitle();
        cy.getBooksEditorTitle();  
    });

    it('User should be able to create a new book', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton();
        cy.verifyBookInListOfCreatedBooks();    
    });

    it('User should be able to cancel creation of a new book', () => {
        cy.visitCrudPage();
        cy.clickCreateNewBookButton();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickCancelCreateNewBookButton(); 
    }); 
}); 