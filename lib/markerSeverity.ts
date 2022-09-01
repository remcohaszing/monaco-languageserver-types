import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor marker severity to an LSP diagnostic severity.
 *
 * @param severity The Monaco marker severity to convert.
 * @returns The marker severity as an LSP diagnostic severity.
 */
export function fromMarkerSeverity(severity: monaco.MarkerSeverity): ls.DiagnosticSeverity {
  return severity === 1 ? 4 : severity === 2 ? 3 : severity === 4 ? 2 : 1
}

/**
 * Convert an LSP diagnostic severity to a Monaco editor marker severity.
 *
 * @param severity The LSP diagnostic severity to convert.
 * @returns The diagnostic severity as Monaco editor marker severity.
 */
export function toMarkerSeverity(severity: ls.DiagnosticSeverity): monaco.MarkerSeverity {
  return severity === 4 ? 1 : severity === 3 ? 2 : severity === 2 ? 4 : 8
}
