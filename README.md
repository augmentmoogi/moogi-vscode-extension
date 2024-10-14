# moogi README

Welcome


# Package Manager

This project uses pnpm as project manager.

# E2E Support

This project shows how to make the e2e tests work with Jest.

The default test runner in vscode uses mocha behind the scenes.

However, many projects may prefer jest.

To get jest to work - we need to define:

* jest-runner.ts - to run the tests
* runTests.ts - to trigger the electron runner
* vscode-environment.js - to make vscode available to jest (resource)[// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
]


# Overriding Type Command

The extension shows how to override the type command.
At the current state of the extension - anything you type will be captured and will NOT be applied on the editor.
Look at the logs to see the events.



# Ignore lib check

This project decided to use the ignoreLibCheck on tsconfig after running into multiple issues (not provoked by code changes).
After reading online for several resources, I decided that a playground project is not crucial enough to have lib checks.