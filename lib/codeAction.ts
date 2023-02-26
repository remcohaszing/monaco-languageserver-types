import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

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

/**
 * Convert an LSP code action to a Monaco editor code action.
 *
 * @param codeAction The LSP code action to convert.
 * @param Uri The Monaco Uri constructor.
 * @returns The code action as Monaco editor code action.
 */
export function toCodeAction(
  codeAction: ls.CodeAction,
  Uri: typeof monaco.Uri
): monaco.languages.CodeAction {
  return {
    title: codeAction.title,
    diagnostics: codeAction.diagnostics?.map((diagnostic) => toMarkerData(diagnostic, Uri)),
    disabled: codeAction.disabled?.reason,
    edit: codeAction.edit ? toWorkspaceEdit(codeAction.edit, Uri) : undefined,
    kind: codeAction.kind,
    isPreferred: codeAction.isPreferred
  }
}
