import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor formatting options to an LSP formatting options.
 *
 * @param formattingOptions The Monaco formatting options to convert.
 * @returns The formatting options as an LSP formatting options.
 */
export function fromFormattingOptions(
  formattingOptions: monaco.languages.FormattingOptions
): ls.FormattingOptions {
  return {
    insertSpaces: formattingOptions.insertSpaces,
    tabSize: formattingOptions.tabSize
  }
}

/**
 * Convert an LSP formatting options to a Monaco editor formatting options.
 *
 * @param formattingOptions The LSP formatting options to convert.
 * @returns The formatting options as Monaco editor formatting options.
 */
export function toFormattingOptions(
  formattingOptions: ls.FormattingOptions
): monaco.languages.FormattingOptions {
  return {
    insertSpaces: formattingOptions.insertSpaces,
    tabSize: formattingOptions.tabSize
  }
}
