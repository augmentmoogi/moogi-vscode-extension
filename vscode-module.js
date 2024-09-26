// vscode-module.js
console.log('this is vscode-module');
const vscode = require('./internal-vscode'); // Assumes you're in an environment where 'vscode' is available

module.exports = vscode;