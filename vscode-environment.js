// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const { TestEnvironment } = require("jest-environment-node");
const vscode = require("vscode");

console.log("this is vscode-environment");

class VsCodeEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    this.global.vscode = vscode;
  }

async teardown() {
    this.global.vscode = {};
    await super.teardown();
  }
}

module.exports = VsCodeEnvironment;