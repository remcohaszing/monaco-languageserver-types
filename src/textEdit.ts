import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor text edit to an LSP text edit.
 *
 * @param textEdit
 *   The Monaco text edit to convert.
 * @returns
 *   The text edit as an LSP text edit.
 */
export function fromTextEdit(textEdit: monaco.languages.TextEdit): ls.TextEdit {
  return {
    range: fromRange(textEdit.range),
    newText: textEdit.text
  }
}

/**
 * Convert an LSP text edit to a Monaco editor text edit.
 *
 * @param textEdit
 *   The LSP text edit to convert.
 * @returns
 *   The text edit as Monaco editor text edit.
 */
export function toTextEdit(textEdit: ls.TextEdit): monaco.languages.TextEdit {
  return {
    range: toRange(textEdit.range),
    text: textEdit.newText
  }
}
