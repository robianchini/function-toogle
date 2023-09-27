import * as vscode from 'vscode';
import { collapse } from './collapse';
import { expand } from './expand';

export function activate(context: vscode.ExtensionContext) {
  const expandButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    1
  );
  expandButton.text = 'Fx$(chevron-down)';
  expandButton.command = 'minifyFunction.expand';
  expandButton.tooltip = 'Expand all functions';
  expandButton.show();

  const minifyButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  minifyButton.text = 'Fx$(chevron-up)';
  minifyButton.command = 'minifyFunction.minify';
  minifyButton.tooltip = 'Collapse all functions';
  minifyButton.show();

  context.subscriptions.push(
    vscode.commands.registerCommand('minifyFunction.expand', expand)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('minifyFunction.minify', collapse)
  );
}
