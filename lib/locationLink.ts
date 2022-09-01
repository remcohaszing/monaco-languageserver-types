import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor location link to an LSP location link.
 *
 * @param locationLink The Monaco location link to convert.
 * @returns The location link as an LSP location link.
 */
export function fromLocationLink(locationLink: monaco.languages.LocationLink): ls.LocationLink {
  return {
    originSelectionRange:
      locationLink.originSelectionRange && fromRange(locationLink.originSelectionRange),
    targetRange: fromRange(locationLink.range),
    targetSelectionRange: locationLink.targetSelectionRange
      ? fromRange(locationLink.targetSelectionRange)
      : fromRange(locationLink.range),
    targetUri: String(locationLink.uri)
  }
}

/**
 * Convert an LSP location link to a Monaco editor location link.
 *
 * @param locationLink The LSP location link to convert.
 * @param Uri The Monaco Uri constructor.
 * @returns The location link as Monaco editor location link.
 */
export function toLocationLink(
  locationLink: ls.LocationLink,
  Uri: typeof monaco.Uri
): monaco.languages.LocationLink {
  return {
    originSelectionRange:
      locationLink.originSelectionRange && toRange(locationLink.originSelectionRange),
    range: toRange(locationLink.targetRange),
    targetSelectionRange: toRange(locationLink.targetSelectionRange),
    uri: Uri.parse(locationLink.targetUri)
  }
}
