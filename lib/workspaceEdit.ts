import type * as monaco from 'monaco-editor'
import type * as ts from 'typescript/lib/tsserverlibrary.js'
import type * as ls from 'vscode-languageserver-types'

import { toRange } from './range.js'

/**
 * Convert a Monaco editor workspace edit to an LSP workspace edit.
 *
 * @param workspaceEit The Monaco workspace edit to convert.
 * @returns The workspace edit as an LSP workspace edit.
 */
export function fromWorkspaceEdit(workspaceEit: monaco.languages.WorkspaceEdit): ls.WorkspaceEdit {
  return {}
}

/**
 * Convert an LSP workspace edit to a Monaco editor workspace edit.
 *
 * @param workspaceEit The LSP workspace edit to convert.
 * @param Uri The Monaco Uri constructor.
 * @returns The workspace edit as Monaco editor workspace edit.
 */
export function toWorkspaceEdit(
  workspaceEit: ls.WorkspaceEdit,
  Uri: typeof monaco.Uri
): monaco.languages.WorkspaceEdit {
  const edits: monaco.languages.IWorkspaceTextEdit[] = []

  for (const [uri, textEdits] of Object.entries(workspaceEit.changes)) {
    for (const textEdit of textEdits) {
      edits.push({
        resource: Uri.parse(uri),
        textEdit: {
          text: textEdit.newText,
          range: toRange(textEdit.range)
        }
      })
    }
  }

  return {
    edits
  }
}
