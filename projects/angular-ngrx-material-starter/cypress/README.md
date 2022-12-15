## Design Choices
- Generally, and to the scope of this exercise, UI/E2E testing best practices were followed
- CRUD tests were written as `CRUDBooks.cy.ts`. If there were multiple tests needed here for CRUD, we could create additional spec files under a `CRUDBooks` subfolder
	- Create, Read, Update & Delete tests were written as 3 `.it()` blocks
- In an effort to ensure no dependency on tests exists, each test `.it()` can be ran independently of one another. This was checked by changing `it` to `it.only` on the test and re-running all tests to ensure only a single one runs. 
- Shared Code: We also run certain shared code before tests by utilizing `before` hooks
	- Every tests will visit the url for CRUD Books and verify we're on the correct page before executing
	- We also load fixtures by utilizing `cypress/fixtures` to store data for our tests. This keeps test data and test code separate
	- As for POM, we follow the standard POM practice to represent all locators and functions related to that page in the application. We store the pages under `cypress/pages/<page_name>` and import them in our tests.
	- The above practice greatly helps with code reusability and code maintainability. We are able to leverage the same locators in other tests and suites
	- For locators, we could work with developer and ensure locators of interest also have `data-test-id` to ensure resiliency 
- Assumptions & Data Seeding (also listed in code):
	- For update & deletion: We are assuming the database comes with a book already to avoid creating a new book to update or delete. This was verified as well through Cypress and src code. 
	- However, if I were to create a new book through UI (not API/DB) for this test, I would definitely make use of Cypress Commands to reduce code reptition. 
	- `testIsolation` mode is also enabled. Because of this, Cypress resets browser context before every test thus dom and browser state is not preserved. Therefore we can ensure the test starts off in a clean slate every single time, with only a single book on every test run (the seeded book). Therefore cleanup is performed automatically between tests. If we were on a live environment (eg in AWS), then cleanup effort for data would be different as the assumption would be that the application stores data in a real database. 
	- Ideally, if needed, we would seed database beforehand (via API / DB script) to avoid doing it via UI. Example, if certain books with pattern names were needed or a large datasets were needed, this would be much easier to do via API/DB data seeding using `cy.task()` as an example 
 

## Potential Improvements 

-   Adding negative path testing:
	-   We could add cases in fixtures files which will account for erroneous titles, descriptions or missing information 
	-   We could also account for negative path user flows where user can go back and forth between different tabs. Here, user does not take the most straightforward path to creating, updating & delete books as we have done so in our tests 
-   Adding data driven testing for happy & negative path:
	- Currently we used fixtures files to drive & feed data. We can create other fixtures (with inputs and expected outputs) and thus generate loops to iterate over those fixtures, to drive our test cases 
	- This can be helpful for both happy path & negative testing 
- If needed and we determine the need to reuse and copy code from test to test, we can also leverage Cypress custom commands. The custom commands will be stored at `cypress/support/commands.js` file and since these loaded before any test files are evaluated, they are available to all tests
	- However, it is very common to overuse these. Custom commands work well when you're needing to describe behavior that's desirable across all of your tests but if not used carefully, can cause more bloat. I generally have used them for functions, login, logout, and other common utilities 
- Other improvements to project:
	- Adding Cypress Dashboard for Runs + Run Analysis 
	- Adding parallelization (when long running tests are in play)
	- Building this into CI/CD (Github Actions, CircleCI, Drone etc..)
	- Pre-commit hooks (via Husky) / linting 
	- Adding formal pull request template for contributing to tests, so best practices are followed 
    - Adding & building project via docker image to ensure same test bed 

## Type of Change

-   [ ] Bug fix 
-   [x] New feature/test 
-   [ ] Other

## How Has This Been Tested?

Single run functionality (x1) was tested via `npx cypress run --browser=chrome` & `ng e2e` on Chrome Browser 

<img width="757" alt="Screen Shot 2022-12-15 at 7 20 38 PM" src="https://user-images.githubusercontent.com/903492/208014949-0c7179e9-324a-47d2-ab9a-adb289cde547.png">


Repeat functionality (x10) was tested via `npx cypress-repeat run -n 10` to ensure no test flakiness exists and test is 100% repeatable. 

<img width="755" alt="Screen Shot 2022-12-15 at 7 26 49 PM" src="https://user-images.githubusercontent.com/903492/208015200-434dd140-313e-4e91-a7b2-c4a3b787c395.png">



##  Best Practices 

-   [x] I have commented my code, particularly in hard-to-understand areas
-   [x] Where possible, existing functionality or tests scripts were reused
-   [x] My code follows the style guidelines of this project
-   [x] I have performed a self-review of my own code
-   [x] My changes generate no new warnings or errors
-   [x] Ensure no secrets or passwords are checked into the repository


## Exit Criteria for Test Additions & Improvements


-   [x] My test is architected in a way that will make the updating of DOM attributes easy
-   [x] My test must have no dependencies on other tests
-   [x] I have validated that my tests still pass after merging master into my branch
-   [x] My tests are able to run on Chrome browser
-   [x] My test are able to run in parallel with other tests
-   [x] I have performed repeatability analysis (x10 times)
