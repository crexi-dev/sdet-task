describe('create, read, edit & delete book', () => {
    const data = {
        bookTitle: 'Refresh',
        bookAuthor: 'Allergan',
        bookDescription: 'Refresh: MAKES DRY, IRRITATED EYES FEEL BETTER.',
        bookTitleEdited: 'Refresh Optive',
        bookAuthorEdited: 'Mega-3',
        bookDescriptionEdited: 'Lubricates and protects also relieves, lasik dryness.',
        existingBookTitle: 'Reactive Programming with Angular and ngrx'
    }
    before ('nav to main page and nav to examples', () => {
        cy.visit('/')
        cy.contains('Crexi SDET Task')
        cy.get('.actions')
            .should('have.text', ' Examples ')
        cy.get('.actions')
            .contains('Examples')
            .click()
    })
    it ('create a book & read it', () => {
        cy.get('.add')
            .click()
        cy.get('[data-placeholder="Title"]')
            .type(data.bookTitle)
        cy.get('[data-placeholder="Author"]')
            .type(data.bookAuthor)
        cy.get('[data-placeholder="Description"]')
            .type(data.bookDescription)
        cy.contains('button', 'Save')
            .click()
        cy.get('.container')
            .contains(data.bookTitle)
            .should('have.text', data.bookTitle)
            .click()
        cy.get('h2:contains(Book editor)')
            .closest('div').within(() => {
                cy.get('h3')
                    .should('have.text', data.bookTitle)
                cy.get('i')
                    .should('have.text', data.bookAuthor)
                cy.get('p')
                    .should('have.text', data.bookDescription)
            })
})
    it ('edit a book', () => {
        cy.get('h3')
            .contains(data.existingBookTitle)
            .click()
        cy.get('[data-icon="edit"]')
            .click()
        cy.get('[data-placeholder="Title"]')
            .clear()
            .type(data.bookTitleEdited)
        cy.get('[data-placeholder="Author"]')
            .clear()
            .type(data.bookAuthorEdited)
        cy.get('[data-placeholder="Description"]')
            .clear()
            .type(data.bookDescriptionEdited)
        cy.contains('button', 'Save')
            .click()
        cy.get('.container')
            .contains(data.bookTitleEdited)
            .should('have.text', data.bookTitleEdited)
        // reverting title to original state
        cy.get('[data-icon="edit"]')
            .click()
        cy.get('[data-placeholder="Title"]')
            .clear()
            .type(data.existingBookTitle)
        cy.contains('button', 'Save')
            .click()
})
    it ('delete a book', () => {
        cy.get('h3')
            .contains(data.existingBookTitle)
            .click()
        cy.get('[data-icon="trash"]')
            .click()
        cy.get('.container').contains(data.existingBookTitle)
            .should('not.exist')
})
})
