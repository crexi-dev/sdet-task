# Crexi SDET Task

## Prerequisites
You should have [Node](https://nodejs.org/en/download/) installed
You should have [Angular CLI](https://angular.io/guide/setup-local) installed

## Assignment Instructions

### Setup
* [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) this repository
* Open the project from your local directory using the code editor of your choice
* Install local packages using `npm install`
* Make sure the project runs locally using `ng serve`
* Run cypress tests using `ng e2e`, you should see 1 passing test

### Test Cases
* Create test cases for CRUD Books `/examples/crud/` (adding, editing and deleting book data)
* Create tests for those test cases in the `cypress` project
* Having tests themselves, which are pretty straightforward, we're interested in the design patterns you choose, how do you structure the code (POM, Cypress commands, etc.), how do you seed/cleanup the data, etc. Even though the task is simple, we want you to apply the same principles you'd apply when working on real production task.
* Create `README.md` explaining your design choises and thought process and potential improvements you'd think of
* Submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)

## Additional Information
You should spend no more than a few hours on this assignment

You should not need to change any files in the 'src' directory

This test project was generated using [Angular Material Starter](https://github.com/tomastrajan/angular-ngrx-material-starter)

The test project also uses [Angular Material](https://material.angular.io/components/categories)
