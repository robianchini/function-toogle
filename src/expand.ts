import * as vscode from 'vscode';

export const expand = () => {
  // Obtenha o documento de texto ativo
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;

    // Regex para encontrar Arrow Functions
    const arrowFunctionRegex =
      /\basync\s+\w+\s*\([^]*?\)|\bfunction\s+\w+\s*\([^]*?\)|const\s+\w+\s*=\s*(?:async\s+)?\([^]*?\)/g;

    // Obtém todo o texto do documento
    const fullText = document.getText();

    // Encontra todas as Arrow Functions usando regex
    const matches = fullText.match(arrowFunctionRegex);

    if (matches) {
      // Itera sobre as correspondências e colapsa (minimiza) cada uma delas
      matches.forEach((match) => {
        const startPos = document.positionAt(fullText.indexOf(match));
        const endPos = document.positionAt(
          fullText.indexOf(match) + match.length
        );
        const range = new vscode.Range(startPos, endPos);

        editor.selection = new vscode.Selection(startPos, startPos); // Seleciona a função
        vscode.commands.executeCommand('editor.unfold'); // Executa o comando de colapso (minimize)
      });
    }
  }
};
