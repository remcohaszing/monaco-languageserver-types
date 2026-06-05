import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor relative pattern to an LSP relative pattern.
 *
 * @param relativePattern
 *   The Monaco relative pattern to convert.
 * @returns
 *   The relative pattern as an LSP relative pattern.
 */
export function fromRelativePattern(
  relativePattern: monaco.languages.IRelativePattern
): lsp.RelativePattern {
  return {
    baseUri: relativePattern.base,
    pattern: relativePattern.pattern
  }
}

/**
 * Convert an LSP relative pattern to a Monaco editor relative pattern.
 *
 * @param relativePattern
 *   The LSP relative pattern to convert.
 * @returns
 *   The relative pattern as Monaco editor relative pattern.
 */
export function toRelativePattern(
  relativePattern: lsp.RelativePattern
): monaco.languages.IRelativePattern {
  return {
    base:
      typeof relativePattern.baseUri === 'string'
        ? relativePattern.baseUri
        : relativePattern.baseUri.uri,
    pattern: relativePattern.pattern
  }
}
