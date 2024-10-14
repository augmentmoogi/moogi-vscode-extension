// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { overrideTypeCommand } from "./keystroke-support";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "moogi" is now active!');

  const handleUri = (uri: vscode.Uri) => {
    console.log("this is uri", uri);
    const queryParams = new URLSearchParams(uri.query);

    if (queryParams.has("say")) {
      vscode.window.showInformationMessage(
        `URI Handler says: ${queryParams.get("say") as string}`
      );
    }
  };

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("moogi.helloWorld", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World from moogi!");
  });

  context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.window.registerUriHandler({
      handleUri,
    })
  );

  overrideTypeCommand(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
