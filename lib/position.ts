import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor position to an LSP range.
 *
 * @param position The Monaco position to convert.
 * @returns The position as an LSP position.
 */
export function fromPosition(position: monaco.IPosition): ls.Position {
  return { character: position.column - 1, line: position.lineNumber - 1 }
}

/**
 * Convert an LSP position to a Monaco editor position.
 *
 * @param position The LSP position to convert.
 * @returns The position as Monaco editor position.
 */
export function toPosition(position: ls.Position): monaco.IPosition {
  return { lineNumber: position.line + 1, column: position.character + 1 }
}
