import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { getMonaco } from './monaco.js'

/**
 * Convert a Monaco editor marker severity to an LSP diagnostic severity.
 *
 * @param severity The Monaco marker severity to convert.
 * @returns The marker severity as an LSP diagnostic severity.
 */
export function fromMarkerSeverity(severity: monaco.MarkerSeverity): ls.DiagnosticSeverity {
  const { MarkerSeverity } = getMonaco()

  if (severity === MarkerSeverity.Error) {
    return 1
  }
  if (severity === MarkerSeverity.Warning) {
    return 2
  }
  if (severity === MarkerSeverity.Info) {
    return 3
  }
  // Severity === MarkerSeverity.Hint
  return 4
}

/**
 * Convert an LSP diagnostic severity to a Monaco editor marker severity.
 *
 * @param severity The LSP diagnostic severity to convert.
 * @returns The diagnostic severity as Monaco editor marker severity.
 */
export function toMarkerSeverity(severity: ls.DiagnosticSeverity): monaco.MarkerSeverity {
  const { MarkerSeverity } = getMonaco()

  if (severity === 1) {
    return MarkerSeverity.Error
  }
  if (severity === 2) {
    return MarkerSeverity.Warning
  }
  if (severity === 3) {
    return MarkerSeverity.Info
  }
  // Severity === 4
  return MarkerSeverity.Hint
}
