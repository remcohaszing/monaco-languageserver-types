import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor marker severity to an LSP diagnostic severity.
 *
 * @param severity
 *   The Monaco marker severity to convert.
 * @returns
 *   The marker severity as an LSP diagnostic severity.
 */
export function fromMarkerSeverity(severity: monaco.MarkerSeverity): ls.DiagnosticSeverity {
  if (severity === (8 satisfies monaco.MarkerSeverity.Error)) {
    return 1 satisfies typeof ls.DiagnosticSeverity.Error
  }
  if (severity === (4 satisfies monaco.MarkerSeverity.Warning)) {
    return 2 satisfies typeof ls.DiagnosticSeverity.Warning
  }
  if (severity === (2 satisfies monaco.MarkerSeverity.Info)) {
    return 3 satisfies typeof ls.DiagnosticSeverity.Information
  }
  // Severity === MarkerSeverity.Hint
  return 4 satisfies typeof ls.DiagnosticSeverity.Hint
}

/**
 * Convert an LSP diagnostic severity to a Monaco editor marker severity.
 *
 * @param severity
 *   The LSP diagnostic severity to convert.
 * @returns
 *   The diagnostic severity as Monaco editor marker severity.
 */
export function toMarkerSeverity(severity: ls.DiagnosticSeverity): monaco.MarkerSeverity {
  if (severity === (1 satisfies typeof ls.DiagnosticSeverity.Error)) {
    return 8 satisfies monaco.MarkerSeverity.Error
  }
  if (severity === (2 satisfies typeof ls.DiagnosticSeverity.Warning)) {
    return 4 satisfies monaco.MarkerSeverity.Warning
  }
  if (severity === (3 satisfies typeof ls.DiagnosticSeverity.Information)) {
    return 2 satisfies monaco.MarkerSeverity.Info
  }
  // Severity === 4
  return 1 satisfies monaco.MarkerSeverity.Hint
}
