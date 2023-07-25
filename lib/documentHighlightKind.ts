import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { getMonaco } from './monaco.js'

/**
 * Convert a Monaco editor document highlight kind to an LSP document highlight kind.
 *
 * @param kind The Monaco document highlight kind to convert.
 * @returns The document highlight kind as an LSP document highlight kind.
 */
export function fromDocumentHighlightKind(
  kind: monaco.languages.DocumentHighlightKind
): ls.DocumentHighlightKind {
  const { DocumentHighlightKind } = getMonaco().languages

  if (kind === DocumentHighlightKind.Read) {
    return 2
  }
  if (kind === DocumentHighlightKind.Write) {
    return 3
  }
  return 1
}

/**
 * Convert an LSP document highlight kind to a Monaco editor document highlight kind.
 *
 * @param kind The LSP document highlight kind to convert.
 * @returns The document highlight kind as Monaco editor document highlight kind.
 */
export function toDocumentHighlightKind(
  kind: ls.DocumentHighlightKind
): monaco.languages.DocumentHighlightKind {
  const { DocumentHighlightKind } = getMonaco().languages

  if (kind === 2) {
    return DocumentHighlightKind.Read
  }
  if (kind === 3) {
    return DocumentHighlightKind.Write
  }
  return DocumentHighlightKind.Text
}
