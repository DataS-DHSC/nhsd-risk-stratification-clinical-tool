# NHSD Risk Stratification Clinical Tool

[![CI Status](https://github.com/DataS-DHSC/nhsd-risk-stratification-clinical-tool/actions/workflows/main.yaml/badge.svg)](https://github.com/DataS-DHSC/nhsd-risk-stratification-clinical-tool/actions/)

## Introduction

NHSD Risk Stratification Clinical Tool Frontend.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/) -- If you use [asdf](https://asdf-vm.com), then it will use the version of node defined in .tool-versions
- [make](https://www.gnu.org/software/make/)

## Installation

Create a `.env` file by copying the `.env.template` and filling in the values.
Then run `make setup`, this with download and install all the dependencies needed to build the project.

Also you should install an IDE such as VS Code, or WebStorm.

### Build

Build the nextjs based server:
`make build`

### Run dev server

Check that ENVIRONMENT is not in the .env file, then

`make dev` # opens on <http://localhost:3010>

### Testing and Linting

For developers:

```shell script
  make test-unit-watch #run local unit tests in watch mode on dev environment
  make test  #run all tests before opening an MR
```

To run all tests locally

```shell script
make test
```

To view test report locally, run this and browser window will open with the test report,
assuming the tests have all been run

```shell script
yarn run test:allure:serve
```

Other useful commands:

```shell script
make lint

make test-unit

make test-unit-coverage
```

### Cleaning

Removes downloaded files and generated code:

```shell script
make clean
```
