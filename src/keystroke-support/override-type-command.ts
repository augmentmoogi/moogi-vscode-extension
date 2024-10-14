import * as vscode from "vscode";
import { overrideCommand } from "./override-command";

function overrideTypeCommand(context: vscode.ExtensionContext) {
  overrideCommand(context, "type", async (a, b, c) => {
    console.log(a, b, c);
    // void vscode.commands.executeCommand("default:type", {
    //     text: args.text,
    // });
  });
}

export { overrideTypeCommand };
