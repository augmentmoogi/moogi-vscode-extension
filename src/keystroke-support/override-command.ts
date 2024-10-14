import * as vscode from "vscode";

const configuration = vscode.workspace.getConfiguration("moogi");

function overrideCommand(
  context: vscode.ExtensionContext,
  command: string,
  callback: (...args: any[]) => any
) {
  const disposable = vscode.commands.registerCommand(command, async (args) => {
    if (configuration.disableExtension) {
      return vscode.commands.executeCommand("default:" + command, args);
    }

    if (!vscode.window.activeTextEditor) {
      return;
    }

    if (
      vscode.window.activeTextEditor.document &&
      vscode.window.activeTextEditor.document.uri.toString() === "debug:input"
    ) {
      return vscode.commands.executeCommand("default:" + command, args);
    }

    return callback(args) as vscode.Disposable;
  });
  context.subscriptions.push(disposable);
}

export { overrideCommand };
