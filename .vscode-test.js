// .vscode-test.js
const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    label: 'unitTests',
    files: './out/test/**/*.test.js',
    
    version: 'insiders',
    launchArgs: ['--disable-extensions', '--extensionTestsPath', './jest-e2e-runner.js'],
    workspaceFolder: './sampleWorkspace',
    mocha: {
      ui: 'tdd',
      timeout: 20000
    }
  }
  // you can specify additional test configurations, too
]);