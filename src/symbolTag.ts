import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor symbol tag to an LSP symbol tag.
 *
 * @param symbolTag
 *   The Monaco symbol tag to convert.
 * @returns
 *   The symbol tag as an LSP symbol tag.
 */
export function fromSymbolTag(symbolTag: monaco.languages.SymbolTag): ls.SymbolTag {
  return symbolTag
}

/**
 * Convert an LSP symbol tag to a Monaco editor symbol tag.
 *
 * @param symbolTag
 *   The LSP symbol tag to convert.
 * @returns
 *   The symbol tag as Monaco editor symbol tag.
 */
export function toSymbolTag(symbolTag: ls.SymbolTag): monaco.languages.SymbolTag {
  return symbolTag
}
