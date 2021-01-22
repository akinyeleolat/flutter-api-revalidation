[![Build Status](https://travis-ci.com/akinyeleolat/flutter-api-revalidation.svg?branch=main)](https://travis-ci.com/akinyeleolat/flutter-api-revalidation)

#Flutterwave Challenge
## Description
Solution to Flutterwave Task.
API url: https://api-revalidation.herokuapp.com/


## Table of Contents

- [Documentation](#documentation)
- [Setup](#setup)
  - [Dependecies](#dependecies)
  - [Getting Started](#getting-started)
  - [Environmental Variables](#env-variable)
- [Testing](#testing)

## Documentation

https://documenter.getpostman.com/view/4919621/TVt17jGK

## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Clone the repository (See command below)

  ```[bash]
  git clone https://github.com/akinyeleolat/flutter-api-revalidation.git
  ```

- Run `cd flutter-api-revalidation` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  npm install
  ```
- Create a `.env` file in the root of your directory using the `env.example` file in the repository
- Start the application by running
  ```
  npm run dev
  ```



## Testing

[Jest](https://jestjs.io) is used as the testing framework for both the unit tests.


```
  npm run test
```
