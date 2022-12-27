export const crudLocator = {
    
    getExamplesButton() {
        return cy.get('.actions')
    },
    getAddIcon() {
        return cy.get('.add')
    },
    getBookTitle() {
        return cy.get('#mat-input-0')
    },
    getBookAuthor() {
        return cy.get('#mat-input-1')
    },
    getBookDescription() {
        return cy.get('#mat-input-2')
    },
    getSaveButton() {
        return cy.get('.col-12 > .mat-primary')
    },
    getFirstBook() {
        return cy.get(':nth-child(2) > h3')
    },
    getDeleteButton () {
        return cy.get('.mat-warn')
    },
    getEditButton () {
        return cy.get('span.ng-star-inserted > .mat-accent')
    }
}