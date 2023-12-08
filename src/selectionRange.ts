import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor selection range to an LSP selection range.
 *
 * @param selectionRange
 *   The Monaco selection range to convert.
 * @returns
 *   The selection range as an LSP selection range.
 */
export function fromSelectionRange(
  selectionRange: monaco.languages.SelectionRange
): ls.SelectionRange {
  return {
    range: fromRange(selectionRange.range)
  }
}

/**
 * Convert an LSP selection range to a Monaco editor selection range.
 *
 * @param selectionRange
 *   The LSP selection range to convert.
 * @returns
 *   The selection range as Monaco editor selection range.
 */
export function toSelectionRange(
  selectionRange: ls.SelectionRange
): monaco.languages.SelectionRange {
  return {
    range: toRange(selectionRange.range)
  }
}
