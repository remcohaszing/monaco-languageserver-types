import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor markdown string to an LSP markup content.
 *
 * @param markdownString The Monaco markdown string to convert.
 * @returns The markdown string as an LSP markup content.
 */
export function fromMarkdownString(markdownString: monaco.IMarkdownString): ls.MarkupContent {
  return {
    kind: 'markdown',
    value: markdownString.value
  }
}

/**
 * Convert an LSP markup content to a Monaco editor markdown string.
 *
 * @param markupContent The LSP markup content to convert.
 * @returns The markup content as a Monaco editor markdown string.
 */
export function toMarkdownString(markupContent: ls.MarkupContent): monaco.IMarkdownString {
  return {
    value: markupContent.value
  }
}
