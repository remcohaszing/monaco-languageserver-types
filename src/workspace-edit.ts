import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'
import { URI } from 'vscode-uri'

import { fromTextEdit, toTextEdit } from './text-edit.js'
import { fromWorkspaceFileEdit, toWorkspaceFileEdit } from './workspace-file-edit.js'

/**
 * Convert a Monaco editor workspace edit to an LSP workspace edit.
 *
 * @param workspaceEdit
 *   The Monaco workspace edit to convert.
 * @returns
 *   The workspace edit as an LSP workspace edit.
 */
export function fromWorkspaceEdit(
  workspaceEdit: monaco.languages.WorkspaceEdit
): lsp.WorkspaceEdit {
  const changes: Record<string, lsp.TextEdit[]> = {}
  const documentChanges: (
    | lsp.CreateFile
    | lsp.DeleteFile
    | lsp.RenameFile
    | lsp.TextDocumentEdit
  )[] = []
  const textDocumentMap = new Map<string, Map<number, lsp.TextEdit[]>>()

  for (const edit of workspaceEdit.edits) {
    if ('resource' in edit) {
      const uri = String(edit.resource)
      if (edit.versionId == null) {
        changes[uri] = []
        changes[uri].push(fromTextEdit(edit.textEdit))
      } else {
        let versionMap = textDocumentMap.get(uri)
        if (!versionMap) {
          versionMap = new Map()
          textDocumentMap.set(uri, versionMap)
        }
        let textDocumentEdits = versionMap.get(edit.versionId)
        if (!textDocumentEdits) {
          textDocumentEdits = []
          versionMap.set(edit.versionId, textDocumentEdits)
          documentChanges.push({
            textDocument: { uri, version: edit.versionId },
            edits: textDocumentEdits
          })
        }
        textDocumentEdits.push(fromTextEdit(edit.textEdit))
      }
    } else {
      documentChanges.push(fromWorkspaceFileEdit(edit))
    }
  }

  return {
    changes,
    documentChanges
  }
}

/**
 * Convert an LSP text edit and uri to a Monaco editor workspace text edit.
 *
 * @param textEdit
 *   The LSP text edit to convert.
 * @param uri
 *   The uri of the workspace text edit.
 * @param versionId
 *   The version ID of the workspace text edit.
 * @returns
 *   The text edit and uri as Monaco editor workspace text edit.
 */
function toWorkspaceTextEdit(
  textEdit: lsp.TextEdit,
  uri: string,
  versionId?: number
): monaco.languages.IWorkspaceTextEdit {
  return {
    resource: URI.parse(uri),
    versionId,
    textEdit: toTextEdit(textEdit)
  }
}

/**
 * Convert an LSP workspace edit to a Monaco editor workspace edit.
 *
 * @param workspaceEdit
 *   The LSP workspace edit to convert.
 * @returns
 *   The workspace edit as Monaco editor workspace edit.
 */
export function toWorkspaceEdit(workspaceEdit: lsp.WorkspaceEdit): monaco.languages.WorkspaceEdit {
  const edits: monaco.languages.WorkspaceEdit['edits'] = []

  if (workspaceEdit.changes) {
    for (const [uri, textEdits] of Object.entries(workspaceEdit.changes)) {
      for (const textEdit of textEdits) {
        edits.push(toWorkspaceTextEdit(textEdit, uri))
      }
    }
  }

  if (workspaceEdit.documentChanges) {
    for (const documentChange of workspaceEdit.documentChanges) {
      if ('textDocument' in documentChange) {
        for (const textEdit of documentChange.edits) {
          edits.push(
            toWorkspaceTextEdit(
              textEdit,
              documentChange.textDocument.uri,
              documentChange.textDocument.version ?? undefined
            )
          )
        }
      } else {
        edits.push(toWorkspaceFileEdit(documentChange))
      }
    }
  }

  return {
    edits
  }
}
