# Instructions

This project contains a React app (implemented) and Cypress tests (unimplemented).

The app is an implementation of Fizz Buzz. Your goal is to write tests in `cypress/e2e/fizzbuzz.cy.js` based on the following requirements. If you find any bugs, write a bug report in `bugs.md`. If you are familiar with React, you can also try to fix the bug in `src/FizzBuzz.tsx`. If you have any feedback for the developer that could make testing easier or more robust, please share it.

- There is a value that starts at `1`
- There is a button "Increment" that increases the value by 1 each time it is clicked
- The value is displayed, labeled by `Value:`
  - The label is in a `dt` element, and the value is in the subsequent `dd` element
- A result is displayed, labeled by `Result:`
  - The label is in a `dt` element, and the result is in the subsequent `dd` element
  - If the value is divisible by 3, the result is `Fizz`
  - If the value is divisible by 5, the result is `Buzz`
  - If the value is divisible by 3 and 5, the result is `Fizz Buzz`
  - Otherwise, the result is `Neither`

## Running the App and Tests

- Install dependencies with `npm i`
- Start the React app with `npm run dev`
- Then, in another terminal (keep the React app running), run Cypress with `npm run cy:open`
