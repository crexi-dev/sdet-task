export class takeHomeTestPageObjects {
    // Page elements
    addBtn_ELEMENT = () => cy.get('.add')
    title_ELEMENT = () => cy.get('#mat-input-0')
    author_ELEMENT = () => cy.get('#mat-input-1')
    description_ELEMENT = () => cy.get('#mat-input-2')
    saveBtn_ELEMENT = () => cy.get('.mat-primary > .mat-button-wrapper')
    firstBook_ELEMENT = () => cy.get(':nth-child(1) > :nth-child(3) > h3')
    firstAuthor_Element = () => cy.get('mat-card[style=""] > small')
    editBtn_ELEMENT = () => cy.get('span.ng-star-inserted > .mat-accent > .mat-button-wrapper')

    // Generic Page Functions
    click_FUNCTION = (selector) => selector.click()
    type_FUNCTION = (targetElement, text) => targetElement.clear().type(text)
    shouldAssertion_FUNCTION = (locator, action, string) => locator.should(action, string)

    // Specific page functions
    pageTitleAssertion = () => cy.get('h1').should('have.text', 'CRUD books using @ngrx/entity & @ngrx/router-store')
    saveRecord = () => cy.get('.mat-primary > .mat-button-wrapper').click()
    deleteRecord = () => cy.get('.mat-warn > .mat-button-wrapper').click()
    contains = (string, action) => cy.contains(string).should(action)
}