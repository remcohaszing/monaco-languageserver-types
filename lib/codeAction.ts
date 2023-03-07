import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { fromMarkerData, toMarkerData } from './markerData.js'
import { fromWorkspaceEdit, toWorkspaceEdit } from './workspaceEdit.js'

/**
 * Convert a Monaco editor code action to an LSP code action.
 *
 * @param codeAction The Monaco code action to convert.
 * @returns The code action as an LSP code action.
 */
export function fromCodeAction(codeAction: monaco.languages.CodeAction): ls.CodeAction {
  return {
    title: codeAction.title,
    diagnostics: codeAction.diagnostics?.map(fromMarkerData),
    disabled: codeAction.disabled
      ? {
          reason: codeAction.disabled
        }
      : undefined,
    edit: codeAction.edit ? fromWorkspaceEdit(codeAction.edit) : undefined,
    kind: codeAction.kind,
    isPreferred: codeAction.isPreferred
  }
}

export interface ToCodeActionOptions {
  /**
   * The default severity in case it’s not provided by a diagnostic.
   *
   * @default MarkerSeverity.Error
   */
  defaultSeverity?: monaco.MarkerSeverity
}

/**
 * Convert an LSP code action to a Monaco editor code action.
 *
 * @param codeAction The LSP code action to convert.
 * @param options Additional options needed to construct the Monaco code action.
 * @returns The code action as Monaco editor code action.
 */
export function toCodeAction(
  codeAction: ls.CodeAction,
  options?: ToCodeActionOptions
): monaco.languages.CodeAction {
  return {
    title: codeAction.title,
    diagnostics: codeAction.diagnostics?.map((diagnostic) => toMarkerData(diagnostic, options)),
    disabled: codeAction.disabled?.reason,
    edit: codeAction.edit ? toWorkspaceEdit(codeAction.edit) : undefined,
    kind: codeAction.kind,
    isPreferred: codeAction.isPreferred
  }
}
