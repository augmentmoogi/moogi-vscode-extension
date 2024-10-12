# moogi README

Welcome


# E2E Support

This project shows how to make the e2e tests work with Jest.

The default test runner in vscode uses mocha behind the scenes.

However, many projects may prefer jest.

To get jest to work - we need to define:

* jest-runner.ts - to run the tests
* runTests.ts - to trigger the electron runner
* vscode-environment.js - to make vscode available to jest (resource)[// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
]
