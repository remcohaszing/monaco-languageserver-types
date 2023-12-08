import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor range to an LSP range.
 *
 * @param range
 *   The Monaco range to convert.
 * @returns
 *   The range as an LSP range.
 */
export function fromRange(range: monaco.IRange): ls.Range {
  return {
    start: { line: range.startLineNumber - 1, character: range.startColumn - 1 },
    end: { line: range.endLineNumber - 1, character: range.endColumn - 1 }
  }
}

/**
 * Convert an LSP range to a Monaco editor range.
 *
 * @param range
 *   The LSP range to convert.
 * @returns
 *   The range as Monaco editor range.
 */
export function toRange(range: ls.Range): monaco.IRange {
  return {
    startLineNumber: range.start.line + 1,
    startColumn: range.start.character + 1,
    endLineNumber: range.end.line + 1,
    endColumn: range.end.character + 1
  }
}
