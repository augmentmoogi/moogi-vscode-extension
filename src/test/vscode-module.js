// vscode-module.js
// console.log('this is vscode-module');
// const vscode = require('./internal-vscode'); // Assumes you're in an environment where 'vscode' is available

// module.exports = vscode;


// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
console.log("this is vscode-module");
module.exports = global.vscode;