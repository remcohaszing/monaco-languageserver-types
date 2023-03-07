import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { getMonaco } from './monaco.js'
import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor location link to an LSP location link.
 *
 * @param locationLink The Monaco location link to convert.
 * @returns The location link as an LSP location link.
 */
export function fromLocationLink(locationLink: monaco.languages.LocationLink): ls.LocationLink {
  const result: ls.LocationLink = {
    targetRange: fromRange(locationLink.range),
    targetSelectionRange: locationLink.targetSelectionRange
      ? fromRange(locationLink.targetSelectionRange)
      : fromRange(locationLink.range),
    targetUri: String(locationLink.uri)
  }

  if (locationLink.originSelectionRange) {
    result.originSelectionRange = fromRange(locationLink.originSelectionRange)
  }

  return result
}

/**
 * Convert an LSP location link to a Monaco editor location link.
 *
 * @param locationLink The LSP location link to convert.
 * @returns The location link as Monaco editor location link.
 */
export function toLocationLink(locationLink: ls.LocationLink): monaco.languages.LocationLink {
  const { Uri } = getMonaco()

  const result: monaco.languages.LocationLink = {
    range: toRange(locationLink.targetRange),
    targetSelectionRange: toRange(locationLink.targetSelectionRange),
    uri: Uri.parse(locationLink.targetUri)
  }

  if (locationLink.originSelectionRange) {
    result.originSelectionRange = toRange(locationLink.originSelectionRange)
  }

  return result
}
