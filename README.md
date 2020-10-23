# Functional Programming

This repo is created to process data provided by De Volkskrant, so that a data visualisation can be created using D3. The data consists of parking data gathered by the RDW (Netherlands Vehicle Authority), and contains many different variables that can be put together, combined, made relationships of.

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
```

## Project structure

```bash
.
├── src    # Contains TS source code
│   ├── data      # Here, all the data files are put. For privacy reasons, this folder only contains a .gitkeep file on the public repository. You need to supply your own data.
│   ├── helpers   # This folder is for functions used for specific use cases like language parsing.
│   ├── modules   # The modules folder is a place where functional chains are written to parse certains columns of the provided data.
│   ├── types     # TypeScript types, interfaces and modules live here. The compiler automatically puts these into the environment, so no extra type imports are needed.
│   ├── utilities # Utilities are general functions that can be adapted to certain use cases. They are divided into files named after the type they manipulate.
│   └── index.ts  # Where it all comes together. This file is run when compiled to JS code.
├── dist   # Contains identitcal folder structure as src folder, with compiled JS code and source maps instead of TS code
└── config # Contains the nodemon configurations used for development of this project.
```

## Learning goals

- Understanding and applying Functional Programming principles:
  - Pure and Impure functions
  - Higher-order functions
  - Composition
  - Currying
  - Immutability
- Data processing techniques

## Tools used

- [NodeJS](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/lang/en/)
- [TypeScript](https://www.typescriptlang.org)
- [Nodemon](https://nodemon.io)
- [dotenv](https://github.com/motdotla/dotenv)
