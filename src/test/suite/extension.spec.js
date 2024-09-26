// import * as assert from "assert";

const assert = require ('assert');
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from "vscode";

console.log(`Process ID: ${process.pid}`);
// jest.resetModules();
// jest.requireActual();
// jest.resetModules();
// const vscode = jest.requireActual('vscode');
const vscode = require('vscode');
// import * as myExtension from '../../extension';



// suite("Extension Test Suite", () => {
  test("Sample test", (done) => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    console.log("I am in a test");
    vscode.window.showInformationMessage("This is an actual test!.");
    setTimeout(() => {
      done();
    }, 1000);
  });
// });
