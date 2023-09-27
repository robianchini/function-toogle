/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.collapse = void 0;
const vscode = __webpack_require__(1);
const collapse = () => {
    // Obtenha o documento de texto ativo
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const document = editor.document;
        // Regex para encontrar Arrow Functions
        const arrowFunctionRegex = /\basync\s+\w+\s*\([^]*?\)|\bfunction\s+\w+\s*\([^]*?\)|const\s+\w+\s*=\s*(?:async\s+)?\([^]*?\)/g;
        // Obtém todo o texto do documento
        const fullText = document.getText();
        // Encontra todas as Arrow Functions usando regex
        const matches = fullText.match(arrowFunctionRegex);
        if (matches) {
            // Itera sobre as correspondências e colapsa (minimiza) cada uma delas
            matches.forEach((match) => {
                const startPos = document.positionAt(fullText.indexOf(match));
                const endPos = document.positionAt(fullText.indexOf(match) + match.length);
                const range = new vscode.Range(startPos, endPos);
                editor.selection = new vscode.Selection(startPos, startPos); // Seleciona a função
                vscode.commands.executeCommand('editor.fold'); // Executa o comando de colapso (minimize)
            });
            vscode.window.showInformationMessage('Todas as Arrow Functions foram colapsadas.');
        }
    }
};
exports.collapse = collapse;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.expand = void 0;
const vscode = __webpack_require__(1);
const expand = () => {
    // Obtenha o documento de texto ativo
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const document = editor.document;
        // Regex para encontrar Arrow Functions
        const arrowFunctionRegex = /\basync\s+\w+\s*\([^]*?\)|\bfunction\s+\w+\s*\([^]*?\)|const\s+\w+\s*=\s*(?:async\s+)?\([^]*?\)/g;
        // Obtém todo o texto do documento
        const fullText = document.getText();
        // Encontra todas as Arrow Functions usando regex
        const matches = fullText.match(arrowFunctionRegex);
        if (matches) {
            // Itera sobre as correspondências e colapsa (minimiza) cada uma delas
            matches.forEach((match) => {
                const startPos = document.positionAt(fullText.indexOf(match));
                const endPos = document.positionAt(fullText.indexOf(match) + match.length);
                const range = new vscode.Range(startPos, endPos);
                editor.selection = new vscode.Selection(startPos, startPos); // Seleciona a função
                vscode.commands.executeCommand('editor.unfold'); // Executa o comando de colapso (minimize)
            });
            vscode.window.showInformationMessage('Todas as Arrow Functions foram colapsadas.');
        }
    }
};
exports.expand = expand;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = void 0;
const vscode = __webpack_require__(1);
const collapse_1 = __webpack_require__(2);
const expand_1 = __webpack_require__(3);
function activate(context) {
    const expandButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
    expandButton.text = 'Fx$(chevron-down)';
    expandButton.command = 'minifyFunction.expand';
    expandButton.tooltip = 'Expand all functions';
    expandButton.show();
    const minifyButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
    minifyButton.text = 'Fx$(chevron-up)';
    minifyButton.command = 'minifyFunction.minify';
    minifyButton.tooltip = 'Collapse all functions';
    minifyButton.show();
    context.subscriptions.push(vscode.commands.registerCommand('minifyFunction.expand', expand_1.expand));
    context.subscriptions.push(vscode.commands.registerCommand('minifyFunction.minify', collapse_1.collapse));
}
exports.activate = activate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map