describe('Should edit existing books', () => {
    it('should allow user to deselect book before editing', () => {

    });
     
    it('should use allow the user to edit an existing book', () => {
        cy.visitCrudPage(); 
        cy.clickFromListOfCreatedBooks(); 
        cy.clickEditIcon();
        cy.addBookTitle(); 
        cy.addAuthorName();
        cy.addBookDescription();
        cy.clickSaveButton(); 
    })
})