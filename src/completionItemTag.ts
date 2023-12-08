import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor completion item tag to an LSP completion item tag.
 *
 * @param tag
 *   The Monaco completion item tag to convert.
 * @returns
 *   The completion item tag as an LSP completion item tag.
 */
export function fromCompletionItemTag(
  tag: monaco.languages.CompletionItemTag
): ls.CompletionItemTag {
  return tag
}

/**
 * Convert an LSP completion item tag to a Monaco editor completion item tag.
 *
 * @param tag
 *   The LSP completion item tag to convert.
 * @returns
 *   The completion item tag as Monaco editor completion item tag.
 */
export function toCompletionItemTag(tag: ls.CompletionItemTag): monaco.languages.CompletionItemTag {
  return tag
}
