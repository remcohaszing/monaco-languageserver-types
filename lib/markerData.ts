import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { fromMarkerSeverity, toMarkerSeverity } from './markerSeverity.js'
import { fromMarkerTag, toMarkerTag } from './markerTag.js'
import { getMonaco } from './monaco.js'
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
    code: String(markerData.code),
    message: markerData.message,
    range: fromRange(markerData),
    severity: fromMarkerSeverity(markerData.severity),
    source: markerData.source,
    tags: markerData.tags?.map(fromMarkerTag),
    relatedInformation: markerData.relatedInformation?.map(fromRelatedInformation)
  }

  if (markerData.code == null) {
    diagnostic.code = undefined
    diagnostic.codeDescription = undefined
  } else if (typeof markerData.code === 'string') {
    diagnostic.code = markerData.code
    diagnostic.codeDescription = undefined
  } else {
    diagnostic.code = markerData.code.value
    diagnostic.codeDescription = { href: String(markerData.code.target) }
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
  const { MarkerSeverity, Uri } = getMonaco()

  return {
    ...toRange(diagnostic.range),
    code:
      diagnostic.code == null
        ? undefined
        : diagnostic.codeDescription
        ? { value: String(diagnostic.code), target: Uri.parse(diagnostic.codeDescription.href) }
        : String(diagnostic.code),
    message: diagnostic.message,
    relatedInformation: diagnostic.relatedInformation?.map(toRelatedInformation),
    severity: diagnostic.severity
      ? toMarkerSeverity(diagnostic.severity)
      : options?.defaultSeverity ?? MarkerSeverity.Error,
    source: diagnostic.source,
    tags: diagnostic.tags?.map(toMarkerTag)
  }
}
