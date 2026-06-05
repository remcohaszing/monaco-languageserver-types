import type * as monaco from 'monaco-types'
import type { Writable } from 'type-fest'
import type * as lsp from 'vscode-languageserver-protocol'

import { fromRelativePattern, toRelativePattern } from './relative-pattern.js'

/**
 * Convert a Monaco editor language filter to an LSP notebook document filter or text document
 * filter.
 *
 * @param languageFilter
 *   The Monaco language filter to convert.
 * @returns
 *   The language filter as an LSP notebook document filter or text document filter.
 */
export function fromLanguageFilter(
  languageFilter: monaco.languages.LanguageFilter
): lsp.NotebookDocumentFilter | lsp.TextDocumentFilter {
  const textDocumentFilter: Partial<lsp.NotebookDocumentFilter & lsp.TextDocumentFilter> = {}

  if (languageFilter.language != null) {
    textDocumentFilter.language = languageFilter.language
  }

  if (languageFilter.notebookType != null) {
    textDocumentFilter.notebookType = languageFilter.notebookType
  }

  if (languageFilter.pattern != null) {
    textDocumentFilter.pattern =
      typeof languageFilter.pattern === 'string'
        ? languageFilter.pattern
        : fromRelativePattern(languageFilter.pattern)
  }

  if (languageFilter.scheme != null) {
    textDocumentFilter.scheme = languageFilter.scheme
  }

  return textDocumentFilter as lsp.NotebookDocumentFilter | lsp.TextDocumentFilter
}

/**
 * Convert an LSP notebook document filter or text document filter or notebook filter to a Monaco
 * editor language filter.
 *
 * @param filter
 *   The LSP text document filter or notebook filter to convert.
 * @returns
 *   The text document filter or notebook filter as Monaco editor language filter.
 */
export function toLanguageFilter(
  filter: lsp.NotebookDocumentFilter | lsp.TextDocumentFilter
): monaco.languages.LanguageFilter {
  const languageFilter: Writable<monaco.languages.LanguageFilter> = {}

  if ('language' in filter && filter.language != null) {
    languageFilter.language = filter.language
  }

  if ('notebookType' in filter && filter.notebookType != null) {
    languageFilter.notebookType = filter.notebookType
  }

  if (filter.pattern != null) {
    languageFilter.pattern =
      typeof filter.pattern === 'string' ? filter.pattern : toRelativePattern(filter.pattern)
  }

  if (filter.scheme != null) {
    languageFilter.scheme = filter.scheme
  }

  return languageFilter
}
