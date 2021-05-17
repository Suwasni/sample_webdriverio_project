# Sample webdriver io framework

### Description
This is a sample frontend test automation project framework.
Used tools:
    Chai
    Mocha
    Spec Reporter
    Typescript
    WDIO timeline reporter


## Running the project
    "test-functional": "wdio functional.conf.js"

### Pre-requisites
None

### Installation
Defined in package.json and package-lock.json
```
cd webdriverHomepage-test-automation
rm -rf node_modules/
npm install
``

### Settings
None

### Structure
pages - Individual functional pages with objects and actions across application
scecs - Test suites with test cases
support - Test support/helpers (e.g test data management, reporter etc.)
*.conf.js - Various setting files to configure the execution environments and test capabilities

### Reporting
All tests results are visible in the terminal via the Spec reporter plugin.