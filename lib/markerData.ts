import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'
import { URI } from 'vscode-uri'

import { fromMarkerSeverity, toMarkerSeverity } from './markerSeverity.js'
import { fromMarkerTag, toMarkerTag } from './markerTag.js'
import { fromRange, toRange } from './range.js'
import { fromRelatedInformation, toRelatedInformation } from './relatedInformation.js'

/**
 * Convert a Monaco editor marker data to an LSP diagnostic.
 *
 * @param markerData The Monaco marker data to convert.
 * @returns The marker data as an LSP diagnostic.
 */
export function fromMarkerData(markerData: monaco.editor.IMarkerData): ls.Diagnostic {
  const diagnostic: ls.Diagnostic = {
    message: markerData.message,
    range: fromRange(markerData),
    severity: fromMarkerSeverity(markerData.severity)
  }

  if (typeof markerData.code === 'string') {
    diagnostic.code = markerData.code
  } else if (markerData.code != null) {
    diagnostic.code = markerData.code.value
    diagnostic.codeDescription = { href: String(markerData.code.target) }
  }

  if (markerData.relatedInformation) {
    diagnostic.relatedInformation = markerData.relatedInformation.map(fromRelatedInformation)
  }

  if (markerData.tags) {
    diagnostic.tags = markerData.tags.map(fromMarkerTag)
  }

  if (markerData.source != null) {
    diagnostic.source = markerData.source
  }

  return diagnostic
}

export interface ToMarkerDataOptions {
  /**
   * The default severity in case it’s not provided by the diagnostic.
   *
   * @default MarkerSeverity.Error
   */
  defaultSeverity?: monaco.MarkerSeverity
}

/**
 * Convert an LSP diagnostic to a Monaco editor marker data.
 *
 * @param diagnostic The LSP diagnostic to convert.
 * @param options Additional options needed to construct the Monaco marker data.
 * @returns The diagnostic as Monaco editor marker data.
 */
export function toMarkerData(
  diagnostic: ls.Diagnostic,
  options?: ToMarkerDataOptions
): monaco.editor.IMarkerData {
  const markerData: monaco.editor.IMarkerData = {
    ...toRange(diagnostic.range),
    message: diagnostic.message,
    severity: diagnostic.severity
      ? toMarkerSeverity(diagnostic.severity)
      : options?.defaultSeverity ?? (8 satisfies monaco.MarkerSeverity.Error)
  }

  if (diagnostic.code != null) {
    markerData.code =
      diagnostic.codeDescription == null
        ? String(diagnostic.code)
        : { value: String(diagnostic.code), target: URI.parse(diagnostic.codeDescription.href) }
  }

  if (diagnostic.relatedInformation) {
    markerData.relatedInformation = diagnostic.relatedInformation.map(toRelatedInformation)
  }

  if (diagnostic.tags) {
    markerData.tags = diagnostic.tags.map(toMarkerTag)
  }

  if (diagnostic.source != null) {
    markerData.source = diagnostic.source
  }

  return markerData
}
