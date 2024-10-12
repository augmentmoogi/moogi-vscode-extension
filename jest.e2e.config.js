// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const path = require("path");

module.exports = {
  moduleFileExtensions: ["js"],
  testMatch: ["<rootDir>/src/test/suite/**.spec.js"],
  testEnvironment: "./vscode-environment.js",
  verbose: true,
  moduleNameMapper: {
    moogi: path.join(__dirname, "src", "test", "vscode-module.js"),
  },
};