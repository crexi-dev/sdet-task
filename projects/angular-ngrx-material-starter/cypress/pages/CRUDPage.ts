export const CRUDPage = {
    getTitleMessage() {
        return cy.get('h1')
    },

    getPlusButton(){
        return cy.get('.add')
    }, 

    getTitleTextField(){
        return cy.get('#mat-input-0')
    },

    getAuthorTextField(){
        return cy.get('#mat-input-1')
    },

    getDescriptionTextField(){
        return cy.get('#mat-input-2')
    },

    getBookEditorTitleText(){
        return cy.get(':nth-child(2) > .route-animations-elements.ng-star-inserted > h3')
    },

    getBookEditorAuthorText(){
        return cy.get('i')
    },

    getBookEditorDescriptionText(){
        return cy.get('p')
    },

    getSaveButton(){
        return cy.get('.col-12 > .mat-primary')
    },
    
    getCancelButton(){
        return cy.get('.col-12 > :nth-child(2) > .mat-button-wrapper')
    },

    getEditButton(){
        return cy.get('span.ng-star-inserted > .mat-accent')

    },

    getDeleteButton(){
        return cy.get('.mat-warn')
    }, 

    getDeselectButton(){
        return cy.get('span.ng-star-inserted > :nth-child(3)')
    },

    getYourBooks(){
        return cy.get('.container > :nth-child(2) > :nth-child(1)')
    },
    
    getFirstBook(){
        return cy.get('.container > :nth-child(2) > :nth-child(1) > :nth-child(2)')
    }
    
}
