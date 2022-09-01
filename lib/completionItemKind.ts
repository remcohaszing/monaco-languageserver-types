import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor completion item kind to an LSP completion item kind.
 *
 * @param kind The Monaco completion item kind to convert.
 * @returns The completion item kind as an LSP completion item kind.
 */
export function fromCompletionItemKind(
  kind: monaco.languages.CompletionItemKind
): ls.CompletionItemKind {
  if (kind === 22 || kind === 25 || kind === 26) {
    throw new TypeError(`Completion kind ${kind} is not supported in LSP.`)
  }
  return kind === 0
    ? 2
    : kind === 1
    ? 3
    : kind === 2
    ? 4
    : kind === 3
    ? 5
    : kind === 4
    ? 6
    : kind === 5
    ? 7
    : kind === 6
    ? 22
    : kind === 7
    ? 8
    : kind === 8
    ? 9
    : kind === 9
    ? 10
    : kind === 10
    ? 23
    : kind === 11
    ? 24
    : kind === 12
    ? 11
    : kind === 13
    ? 12
    : kind === 14
    ? 21
    : kind === 15
    ? 13
    : kind === 16
    ? 20
    : kind === 17
    ? 14
    : kind === 18
    ? 1
    : kind === 19
    ? 16
    : kind === 20
    ? 17
    : kind === 21
    ? 18
    : kind === 23
    ? 19
    : kind === 24
    ? 25
    : 15
}

/**
 * Convert an LSP completion item kind to a Monaco editor completion item kind.
 *
 * @param kind The LSP completion item kind to convert.
 * @returns The completion item kind as Monaco editor completion item kind.
 */
export function toCompletionItemKind(
  kind: ls.CompletionItemKind
): monaco.languages.CompletionItemKind {
  return kind === 1
    ? 18
    : kind === 2
    ? 0
    : kind === 3
    ? 1
    : kind === 4
    ? 2
    : kind === 5
    ? 3
    : kind === 6
    ? 4
    : kind === 7
    ? 5
    : kind === 8
    ? 7
    : kind === 9
    ? 8
    : kind === 10
    ? 9
    : kind === 11
    ? 12
    : kind === 12
    ? 13
    : kind === 13
    ? 15
    : kind === 14
    ? 17
    : kind === 15
    ? 27
    : kind === 16
    ? 19
    : kind === 17
    ? 20
    : kind === 18
    ? 21
    : kind === 19
    ? 23
    : kind === 20
    ? 16
    : kind === 21
    ? 14
    : kind === 22
    ? 6
    : kind === 23
    ? 10
    : kind === 24
    ? 11
    : 24
}
