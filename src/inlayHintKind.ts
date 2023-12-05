import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor inlay hint kind to an LSP inlay hint kind.
 *
 * @param inlayHintKind The Monaco inlay hint kind to convert.
 * @returns The inlay hint kind as an LSP inlay hint kind.
 */
export function fromInlayHintKind(inlayHintKind: monaco.languages.InlayHintKind): ls.InlayHintKind {
  return inlayHintKind
}

/**
 * Convert an LSP inlay hint kind to a Monaco editor inlay hint kind.
 *
 * @param inlayHintKind The LSP inlay hint kind to convert.
 * @returns The inlay hint kind as Monaco editor inlay hint kind.
 */
export function toInlayHintKind(inlayHintKind: ls.InlayHintKind): monaco.languages.InlayHintKind {
  return inlayHintKind
}
