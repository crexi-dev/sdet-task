// Import Cucumber prefix
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { crudLocator } from '../../pageLocators/crudLocators';

/// <reference types="cypress" />

    // background test steps
    Given('the user navigates to the crexi test application', () => {
        cy.visit('/');
        cy.contains('Crexi SDET Task');
        cy.get('.mat-button').contains('Examples');
    });

    And('the user clicks on examples', () => {
        crudLocator.getExamplesButton().contains('Examples').click();
    });

    Then('the user lands on the book editor webpage', () => {
        cy.url().should('include', '/examples/crud/');
    });