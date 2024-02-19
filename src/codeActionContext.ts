import type * as monaco from 'monaco-types'
import { type Writable } from 'type-fest'
import type * as lsp from 'vscode-languageserver-protocol'

import { fromCodeActionTriggerType } from './codeActionTriggerType.js'
import { fromMarkerData, toMarkerData } from './markerData.js'

/**
 * Convert a Monaco editor code action context to an LSP code action context.
 *
 * @param codeActionContext
 *   The Monaco code action context to convert.
 * @returns
 *   The code action context as an LSP code action context.
 */
export function fromCodeActionContext(
  codeActionContext: monaco.languages.CodeActionContext
): lsp.CodeActionContext {
  const result: lsp.CodeActionContext = {
    diagnostics: codeActionContext.markers.map(fromMarkerData),
    triggerKind: fromCodeActionTriggerType(codeActionContext.trigger)
  }

  if (codeActionContext.only != null) {
    result.only = [codeActionContext.only]
  }

  return result
}

export interface ToCodeActionContextOptions {
  /**
   * The default severity in case it’s not provided by a diagnostic.
   *
   * @default MarkerSeverity.Error
   */
  defaultSeverity?: monaco.MarkerSeverity
}

/**
 * Convert an LSP code action context to a Monaco editor code action context.
 *
 * @param codeActionContext
 *   The LSP code action context to convert.
 * @param options
 *   Additional options needed to construct the Monaco code action context.
 * @returns
 *   The code action context as Monaco editor code action context.
 */
export function toCodeActionContext(
  codeActionContext: lsp.CodeActionContext,
  options?: ToCodeActionContextOptions
): monaco.languages.CodeActionContext {
  const result: Writable<monaco.languages.CodeActionContext> = {
    markers: codeActionContext.diagnostics.map((diagnostic) => toMarkerData(diagnostic, options)),
    trigger: fromCodeActionTriggerType(
      codeActionContext.triggerKind ?? (2 satisfies monaco.languages.CodeActionTriggerType.Auto)
    )
  }

  if (codeActionContext.only?.[0]) {
    result.only = codeActionContext.only[0]
  }

  return result
}
