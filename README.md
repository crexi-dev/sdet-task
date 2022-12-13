# Crexi SDET Task - Kimberly L. Sawh

### Test Case Organization:
* I wanted to organize the order of test cases from the outermost elements, then drilling inwards. 
* I did my best to make sure each describe block can be run independently from each other
* I ran each describe block with "describe.only" and the test passes
* I also ran each describe block with "describe.skip" and the test also passes

### How I Structured The Code:
* Firstly, verifying the default elements within the Crud Books page: As seen in the "Crud Books page default elements" describe block
* Then I focused on the functionality relating to the "Your books" and "Book editor" sections: Selecting a book, Displaying an empty book list, Adding and deleting books and Editing a book

### Potential Improvements
* Figure out ways to trim each "it" block for better readability
* Create a reusable function in the commands.ts file on adding a new book, possibly test for an edge case on how many books can the 'Your books' list handle
* Add checks to see if the input fields accept special characters
* Add checks to see if the input fields have a character limit
* Add a check on what happens if a user clicks the browser "back" button on the book editor form screen
