default: help

.PHONY: help test .check-env-file .setup .lint .build

SHELL=/bin/bash -eu -o pipefail

EXECUTABLES = npm yarn
K := $(foreach exec,$(EXECUTABLES), $(if $(shell $(exec) --version || echo $?),some string,$(error "Unable to check $(exec) --version in PATH. Please install.")))

.clean:
	rm -rf node_modules
	rm -rf out/
	rm -rf .next/
	rm -rf .yarn/unplugged/ .yarn/build-state.yml .yarn/install-state.gz .pnp.js
	rm -rf reports/

.setup:
	yarn install --prefer-offline --har --frozen-lockfile

.fmt:
	yarn run fmt

.lint:
	yarn run lint
	yarn run lint:style

.test-unit:
	yarn run test:unit

.test-unit-coverage:
	yarn run test:unit:coverage

.test-generate-allure-reports:
	yarn run test:allure:generate

.test-license-file:
  yarn run licenses:check

.build:
	yarn run licenses:update
	yarn run build

.dev:
	yarn run dev

.start:
	yarn run start

.audit:
	yarn run audit
	yarn run security-scan

.check-env-file:
ifeq ("$(wildcard .env)","")
	$(error	a .env file must be present to run the application. Copy .env.template and add your settings)
endif

.analyze:
	ANALYZE=true yarn build

help:
	@echo "Commands"
	@echo "========"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2, $$3, $$4, $$5, $$6, $$7, $$8, $$9, $$10, $$11, $$12, $$13, $$14, $$15, $$16, $$17, $$18, $$19, $$20, $$21, $$22, $$23, $$24}'

# main scripts
clean: .clean ## Clean temp folders in workspace

setup: .setup ## Install pipenv and npm packages

build: .build ## Build html to /public

start: .check-env-file build .start ## Start nodejs server after Build

dev: .check-env-file .dev ## Run server with hot-reloading

fmt: .fmt ## Run prettier

lint: .lint ## Linting test

test-unit: .test-unit .test-license-file ## Unit testing using Jest

test-unit-watch: .test-unit-watch ## Unit testing with hot reload using Jest

test-unit-coverage: .test-unit-coverage ## Unit testing coverage using Jest

test: lint test-unit .test-license-file ## Full testing with linting

audit: .audit ## Performs audit on installed packages, throwing error if packages with level=high found

analyze: .analyze ## Show size breakdown of javascript bundle sizes
