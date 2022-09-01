import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor symbol kind to an LSP symbol kind.
 *
 * @param symbolKind The Monaco symbol kind to convert.
 * @returns The symbol kind as an LSP symbol kind.
 */
export function fromSymbolKind(symbolKind: monaco.languages.SymbolKind): ls.SymbolKind {
  return (symbolKind + 1) as ls.SymbolKind
}

/**
 * Convert an LSP symbol kind to a Monaco editor symbol kind.
 *
 * @param symbolKind The LSP symbol kind to convert.
 * @returns The symbol kind as Monaco editor symbol kind.
 */
export function toSymbolKind(symbolKind: ls.SymbolKind): monaco.languages.SymbolKind {
  return symbolKind - 1
}
