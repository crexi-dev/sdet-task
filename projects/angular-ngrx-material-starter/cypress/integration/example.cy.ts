describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });
});
