# Crexi SDET Task

## Prerequisites
Install Cucmber BDD framework :
npm install --save-dev cypress-cucumber-preprocessor
npm install tsify
npm install typescript

## Test approach
I have used BDD - Behavioral Driven Development framework approach to enhance reusability of steps and for ease of readability
Thats why you will notice updates to package.json and cypress.json. 
I also have allure reports generated after test.
The tests are written in BDD format and has Background before each scenario that will be executed to launch the webpage.
I have used pageLocators folder for all the locators. 
You will notice ,I have used JSON files in fixtures for data management.
Ideally working with devloper's to have `data-test` tag makes test robust. 

## File Structure
Feature file where all the BDD steps are located : cypress/integration/curdTest.feature
Step definitions of the test is defined in : cypress/integration/curdTest/curdTest.cy.ts

## Reporting
I have used Allure report plugin to generate reports
Installation is as follows : https://qaautomationlabs.com/how-to-integration-of-allure-report-with-cypress/

## Run the test and generate report 
Note : all at sdet-task folder level
Headless mode :
1. yarn run tests
2. npm run allure:report
OR
Headed mode : 
1. node_modules/.bin/cypress open
2. npm run allure:report

image.png

## Improvements
1. Integrate the tests with CI/CD pipeline like Jenkins
2. Adapt parallelization when tests are time consuming
3. Set standard rules/guidelines against PR review , may be template can help
4. Implementing Pre-commit hooks for linting like eslint
5. As part of regression we can be extensive in adding negative test cases

