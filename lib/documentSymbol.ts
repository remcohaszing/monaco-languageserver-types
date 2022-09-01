import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { fromRange, toRange } from './range.js'
import { fromSymbolKind, toSymbolKind } from './symbolKind.js'
import { fromSymbolTag, toSymbolTag } from './symbolTag.js'

/**
 * Convert a Monaco editor document symbol to an LSP document symbol.
 *
 * @param documentSymbol The Monaco document symbol to convert.
 * @returns The document symbol as an LSP document symbol.
 */
export function fromDocumentSymbol(
  documentSymbol: monaco.languages.DocumentSymbol
): ls.DocumentSymbol {
  return {
    children: documentSymbol.children?.map(fromDocumentSymbol),
    detail: documentSymbol.detail || undefined,
    kind: fromSymbolKind(documentSymbol.kind),
    name: documentSymbol.name,
    range: fromRange(documentSymbol.range),
    selectionRange: fromRange(documentSymbol.selectionRange),
    tags: documentSymbol.tags.map(fromSymbolTag)
  }
}

/**
 * Convert an LSP document symbol to a Monaco editor document symbol.
 *
 * @param documentSymbol The LSP document symbol to convert.
 * @returns The document symbol as Monaco editor document symbol.
 */
export function toDocumentSymbol(
  documentSymbol: ls.DocumentSymbol
): monaco.languages.DocumentSymbol {
  return {
    children: documentSymbol.children?.map(toDocumentSymbol),
    detail: documentSymbol.detail ?? '',
    kind: toSymbolKind(documentSymbol.kind),
    name: documentSymbol.name,
    range: toRange(documentSymbol.range),
    selectionRange: toRange(documentSymbol.selectionRange),
    tags: documentSymbol.tags?.map(toSymbolTag) ?? []
  }
}
