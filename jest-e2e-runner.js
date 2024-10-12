/**
 * This file is a test-runner for vscode-test running on electron.
 * Official Documentation: https://code.visualstudio.com/api/working-with-extensions/testing-extension#the-test-runner-script
 */
const { runCLI } = require('jest');
const path = require('path');
const fs = require('fs');
// const vscode = require('./vscode-module');
// const vscodePath = require.resolve('vscode');
// console.log('vscodePath=',vscodePath);

// vscode.window.showInformationMessage("I am the runner.");

// fs.readdirSync(path.join(__dirname, 'out/test/suite')).forEach(file => {
  // console.log(file);
// });

console.log("I am in jest runner");
// console.log(`This is my Process ID: ${process.pid}`);

const options = {
  // Specify Jest configuration options here
  // You can also add a Jest config file path if needed
  // testMatch: ['<rootDir>/out/**/*.test.js'], // Adjust according to your test structure
  testMatch: ['<rootDir>/src/test/**/*.spec.js'], // Adjust according to your test structure
  // runInBand: true,

  // modulePaths: [
  //   "<rootDir>",
  // ],
  // moduleDirectories: [
  //   "node_modules"
  // ],
  moduleFileExtensions: [
    "js",
  ],
  verbose: true,
  moduleNameMapper: {
    // moogi: path.join(__dirname, "src", "test", "vscode-module.js"),
    moogi: "<rootDir>/src/test/vscode-module.js",
  },
  testEnvironment: "./vscode-environment.js",
};

console.log("running");

module.exports.run = () => {
runCLI( options, [process.cwd()]).then(result => {
  console.log(result);
  if (result.success) {
    console.log("Tests ran successfully!");
  } else {
    console.error("There were test failures.");
  }
}).catch(error => {
  console.error("Error running tests:", error);
});
}

if (require.main === module) {
  module.exports.run();
}