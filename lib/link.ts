import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-types'

import { getMonaco } from './monaco.js'
import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor link to an LSP document link.
 *
 * @param link The Monaco link to convert.
 * @returns The link as an LSP document link.
 */
export function fromLink(link: monaco.languages.ILink): ls.DocumentLink {
  return {
    range: fromRange(link.range),
    target: link.url ? String(link.url) : undefined,
    tooltip: link.tooltip
  }
}

/**
 * Convert an LSP document link to a Monaco editor link.
 *
 * @param documentLink The LSP document link to convert.
 * @returns The document link as Monaco editor link.
 */
export function toLink(documentLink: ls.DocumentLink): monaco.languages.ILink {
  const { Uri } = getMonaco()

  return {
    range: toRange(documentLink.range),
    url: documentLink.target ? Uri.parse(documentLink.target) : undefined,
    tooltip: documentLink.tooltip
  }
}
