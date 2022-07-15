var randomWords = require('random-words');

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');
  });
});

describe.only('Karthikeyan Alaguraja : Crexi SDET Task', () => {
  
 it('Simple and Easy way of doing CRUD operations', () => {
    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');

    // Clicking on examples and this direct to the assignement
    cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper').click();

    // Validating the Headers in CRUD page
    cy.get('h1').contains('CRUD books using @ngrx/entity & @ngrx/router-store');
    cy.get('.container > :nth-child(2) > :nth-child(1) > h2').contains('Your books');

    // Creating a book with necessary details
    cy.get('.add').click();
    cy.get('#mat-input-0').type('Automation Header');
    cy.get('#mat-input-1').type('Automation Author');
    cy.get('#mat-input-2').type('Automation Description');
    cy.get('.col-12 > .mat-primary').click();

    // Reading the book with entered details
    cy.get(':nth-child(2) > h3').contains('Automation Header');
    cy.get(':nth-child(2) > small').contains('Automation Author');
    cy.get('p').contains('Automation Description')

    // Editing the book with different details
    cy.get('.mat-accent > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();
    cy.get('#mat-input-0').clear();
    cy.get('#mat-input-0').type('Automation Header1');
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type('Automation Author1');
    cy.get('#mat-input-2').clear();
    cy.get('#mat-input-2').type('Automation Description1');
    cy.get('.mat-primary > .mat-button-wrapper').click();

    // Reading the book with updated details
    cy.get(':nth-child(2) > h3').contains('Automation Header1');
    cy.get(':nth-child(2) > small').contains('Automation Author1');
    cy.get('p').contains('Automation Description1')

    // Deleting the book CRUD Page
    cy.get('.mat-warn > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();
  });

 it('CRUD operations with no Hard coding of Test Data', () => {
    const title: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const author: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const description: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedTitle: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedAuthor: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedDescription: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });

    cy.visit('/');
    cy.contains('Crexi SDET Task');
    cy.get('.mat-button').contains('Examples');

    // Clicking on examples and this direct to the assignement
    cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper').click();

    // Validating the Headers in CRUD page
    cy.get('h1').contains('CRUD books using @ngrx/entity & @ngrx/router-store');
    cy.get('.container > :nth-child(2) > :nth-child(1) > h2').contains('Your books');

    // Creating a book with necessary details
    cy.get('.add').click();
    cy.get('#mat-input-0').type("Z");
    cy.get('#mat-input-0').type(title[0]);
    cy.get('#mat-input-1').type(author[0]);
    cy.get('#mat-input-2').type(description[0]);
    cy.get('.col-12 > .mat-primary').click();

    // Reading the book with entered details
    cy.get(':nth-child(1) > :nth-child(3) > h3').contains(title[0]);
    cy.get(':nth-child(3) > small').contains(author[0]);
    cy.get('p').contains(description[0])

    // Editing the book with different details
    cy.get('.mat-accent > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();
    cy.get('#mat-input-0').clear().click();
    cy.get('#mat-input-0').type("Y");
    cy.get('#mat-input-0').type(updatedTitle[0]);
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type(updatedAuthor[0]);
    cy.get('#mat-input-2').clear();
    cy.get('#mat-input-2').type(updatedDescription[0]);
    cy.get('.mat-primary > .mat-button-wrapper').click();

    // Reading the book with updated details
    cy.get(':nth-child(1) > :nth-child(3) > h3').contains(updatedTitle[0]);
    cy.get(':nth-child(3) > small').contains(updatedAuthor[0]);
    cy.get('p').contains(updatedDescription[0])

    // Deleting the book CRUD Page
    cy.get('.mat-warn > .mat-button-wrapper > .ng-fa-icon > .svg-inline--fa').click();

    //TODO: 
    /*
     If you look at the code we have a problem here, the books are populating in Tile's alabhetic order.
     If we use random data, then getting the elements like this wont work all the time. SO my next test case will handle this problem
    */
  });

 it('CRUD operations with XPATH and action class', () => {
    const title: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const author: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const description: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedTitle: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedAuthor: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });
    const updatedDescription: string = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });

    cy.LoadURL();
    cy.Move_to_CRUD_Page();
    cy.Validate_the_headers_in_CRUD_page();
    cy.Creating_a_book(title[0], author[0], description[0]);
    cy.Validate_created_book(title[0], author[0], description[0])
    cy.Editing_created_book(updatedTitle[0], updatedAuthor[0], updatedDescription[0])
    cy.Validate_modified_book(updatedTitle[0], updatedAuthor[0], updatedDescription[0])
    cy.Delete_book();
  });

  it('CRUD operation with Page Object Model', () => {
    console.log("Sorry i have reached the 1 hour time limit, But trust me POM is my strength. If you need more i can add the same test with POM");
  })

})