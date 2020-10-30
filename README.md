# Functional Programming

[Wiki](https://github.com/theonejonahgold/functional-programming/wiki) • [Concept](#concept) • [Practicing with survey data](https://github.com/theonejonahgold/functional-programming/wiki/Oefenen-met-survey-data-🙈) • [Processing RDW Data](https://github.com/theonejonahgold/functional-programming/wiki/RDW-Data-verwerken-🦍)

This repo is created to process data provided by de Volkskrant, so that a data visualisation can be created using D3. The data consists of parking data gathered by the RDW (Dutch Vehicle Authority), and contains many different variables that can be put together, combined, made relationships with. This should create an interesting data-visualisation, which de Volkskrant can use to write an article. Read more about this in my [Debriefing](https://github.com/theonejonahgold/functional-programming/wiki/Debriefing-🐒).

## Learning goals

- Understanding and applying Functional Programming principles:
  - Pure and Impure functions
  - Higher-order functions
  - Composition
  - Currying
  - Immutability
- Data processing techniques

## Getting started

### Setting up the repo

To get started, you first need to clone the repo and install the dependencies:

```bash
git clone https://github.com/theonejonahgold/functional-programming
cd functional-programming
yarn install || yarn
```

### Available commands

```bash
yarn watch # Watches the src & dist folder on file changes
yarn build # Builds the TypeScript code in the src folder
yarn start # Starts Node in the dist folder
yarn lint  # Runs ESLint on files to check for consistent code.
```

## Concept

[Extended version](https://github.com/theonejonahgold/functional-programming/wiki/Concept-🦧)

### Main Question

How much do parking garages support de 24-hour economy?

### Research questions

- How many parking garages are open 24 hours a day?
- What is the average closing time for parking garages?
- Do parking garages change their prices during the night, and how?
- With how many parking garages can you exit with your vehicle throughout the entire day?
- Where are the most parking places with 24-hour availability?

### Used variables

The used variables are available through [this link](https://github.com/theonejonahgold/functional-programming/wiki/Concept-🦧#gebruikte-variabelen).

## Project structure

```bash
.
├── src    # Contains TS source code.
│   ├── data      # Here, all the data files are put. For privacy reasons, this folder only contains a .gitkeep file on the public repository. You need to supply your own data.
│   ├── utilities # Utilities are general functions that can be adapted to certain use cases. They are divided into files named after the type they manipulate.
│   ├── helpers   # This folder is for functions used for specific use cases like language parsing.
│   ├── modules   # The modules folder is a place where all functions compositions are written.
│   ├── types     # TypeScript types, interfaces and modules live here. The compiler automatically puts these into the environment, so no extra type imports are needed.
│   └── index.ts  # Where it all comes together. This file is run when compiled to JS code.
├── dist   # Contains identical folder structure as src folder, with compiled JS code and source maps instead of TS code.
└── config # Contains the Nodemon configurations used for development of this project.
```

## Functional Programming Principles Applied

- [Composition](https://github.com/cmda-tt/course-20-21/blob/master/examples/functional-patterns/composition.md): The combining of functions to create extra functionality.
- [Functional purity](https://github.com/cmda-tt/course-20-21/blob/master/examples/functional-patterns/impure.md): All functions give the same output when the same input is used.
- [Data immutability](https://github.com/cmda-tt/course-20-21/blob/master/examples/functional-patterns/immutability.md): All data passed into the functions is copied and then mutated, so that the original data itself is never mutated.
- [Currying](https://en.wikipedia.org/wiki/Currying): All functions return a function that can be used in a Higher-order function.
- [Higher order functions](https://github.com/cmda-tt/course-20-21/blob/master/examples/functional-patterns/ho-functions.md): All functions created can be passed into these to manipulate the data passed.

## Tools used

- [NodeJS](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/lang/en/)
- [TypeScript](https://www.typescriptlang.org)
- [Nodemon](https://nodemon.io)
- [ramda](https://github.com/ramda/ramda)
- [dotenv](https://github.com/motdotla/dotenv)
- [ESLint](https://eslint.org) with the [ESLint Functional Plugin](https://github.com/jonaskello/eslint-plugin-functional/) and [Prettier](https://github.com/prettier/eslint-plugin-prettier) configurations (config from the ESLint Functional page with own adjustments)
