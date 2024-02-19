import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

import { fromMarkerData, toMarkerData } from './markerData.js'
import { fromWorkspaceEdit, toWorkspaceEdit } from './workspaceEdit.js'

/**
 * Convert a Monaco editor code action to an LSP code action.
 *
 * @param codeAction
 *   The Monaco code action to convert.
 * @returns
 *   The code action as an LSP code action.
 */
export function fromCodeAction(codeAction: monaco.languages.CodeAction): lsp.CodeAction {
  const result: lsp.CodeAction = {
    title: codeAction.title
  }

  if (codeAction.diagnostics) {
    result.diagnostics = codeAction.diagnostics.map(fromMarkerData)
  }

  if (codeAction.disabled != null) {
    result.disabled = { reason: codeAction.disabled }
  }

  if (codeAction.edit) {
    result.edit = fromWorkspaceEdit(codeAction.edit)
  }

  if (codeAction.isPreferred != null) {
    result.isPreferred = codeAction.isPreferred
  }

  if (codeAction.kind) {
    result.kind = codeAction.kind
  }

  return result
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
 * @param codeAction
 *   The LSP code action to convert.
 * @param options
 *   Additional options needed to construct the Monaco code action.
 * @returns
 *   The code action as Monaco editor code action.
 */
export function toCodeAction(
  codeAction: lsp.CodeAction,
  options?: ToCodeActionOptions
): monaco.languages.CodeAction {
  const result: monaco.languages.CodeAction = {
    title: codeAction.title,
    isPreferred: codeAction.isPreferred
  }

  if (codeAction.diagnostics) {
    result.diagnostics = codeAction.diagnostics.map((diagnostic) =>
      toMarkerData(diagnostic, options)
    )
  }

  if (codeAction.disabled) {
    result.disabled = codeAction.disabled.reason
  }

  if (codeAction.edit) {
    result.edit = toWorkspaceEdit(codeAction.edit)
  }

  if (codeAction.isPreferred != null) {
    result.isPreferred = codeAction.isPreferred
  }

  if (codeAction.kind) {
    result.kind = codeAction.kind
  }

  return result
}
