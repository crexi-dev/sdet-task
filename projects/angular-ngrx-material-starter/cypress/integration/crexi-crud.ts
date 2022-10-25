describe('Crexi Book CRUD', () => {
  let title='', author='', description='';

  const createBook = (title:string, author:string, description:string) => {
    cy.get('[data-placeholder="Title"]').clear().type(title);
    cy.get('[data-placeholder="Author"]').clear().type(author);
    cy.get('[data-placeholder="Description"]').clear().type(description);
  } 

  const saveBook = () => {
    cy.contains('Save').click();
  }

  const selectBook = (title:string) => {
    cy.contains(title).click(); // verify book is created successfully and displayed on the left panel
  }

  const verifyBookInfo = (title:string, author:string, description:string) => {
    cy.contains('Book editor').parentsUntil("[div='col-md-6']")
    .should('contain', title).and('contain',author).and('contain', description); // verify all the fields are correct
  }

  before(() => {
    cy.visit('/examples/crud');
  });

  beforeEach(()=> {
    let uuid = () => Cypress._.random(0, 1e6)
    title=`title${uuid()}`;
    author = 'Mark Twain';
    description = 'Mark can author'
    cy.get("[type='button']").should('have.length',1).click(); // click the add button
  })

  it('should create a new random book title and verify successful book creation', () => { 
    saveBook(); // click Save button to show fields verification message
    cy.contains(' Title is required ').should('be.visible'); // verify empty title field is not allowed
    cy.contains(' Author is required ').should('be.visible'); // verify empty author field is not allowed
    createBook(title, author, description);
    saveBook(); // save the form
    selectBook(title);
    verifyBookInfo(title, author, description);
  });

  it('should edit an existing book title and verify successful book update', () => {
    const editedTitle = `${title}-edited`;
    const editedAuthor = `${author}-edited`;
    const editedDescription = `${description}-edited`;
    createBook(title, author, description);
    saveBook();
    selectBook(title);
    cy.contains('Book editor').parentsUntil("[div='col-md-6']").should('contain', title);
    cy.get('[data-icon="edit"]').click();
    createBook(editedTitle, editedAuthor, editedDescription);
    saveBook();
    selectBook(editedTitle);
    verifyBookInfo(editedTitle, editedAuthor, editedDescription);
  });

  it('should delete an existing book successfully', () => {
    createBook(title, author, description);
    saveBook();
    selectBook(title);
    cy.contains('Book editor').parentsUntil("[div='col-md-6']").should('contain', title);
    cy.get('[data-icon="trash"]').click();
    cy.contains('Your books').parent().should('not.contain', title) // left panel should not contain book
  });
});
