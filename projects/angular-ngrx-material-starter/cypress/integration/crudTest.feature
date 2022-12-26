Feature: CRUD Books 
I/user wants to add, edit and delete the book data on the angular app running locally

Scenario: User navigates to the book editor webpage
    Given the user navigates to the crexi test application
    And the user clicks on examples
    Then the user lands on the book editor webpage

@create
Scenario: Creating a book
    When the user clicks on the + sign
    And the user enters book details
    Then a new book is added to the book list

@update
Scenario: Updating a book
    When the user click on the edit button of the first book
    And edits the book details
    Then the book is updated

@delete
Scenario: Delete a book
    When the user click on the delete button of the first book
    Then the book is deleted