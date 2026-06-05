import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

import { URI } from 'vscode-uri'

import { fromRange, toRange } from './range.js'
import { fromTextEdit, toTextEdit } from './text-edit.js'
import { fromWorkspaceEditMetadata, toWorkspaceEditMetadata } from './workspace-edit-metadata.js'
import { fromWorkspaceFileEdit, toWorkspaceFileEdit } from './workspace-file-edit.js'

type TextDocumentEdit = lsp.AnnotatedTextEdit | lsp.SnippetTextEdit | lsp.TextEdit

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
  let changeAnnotationCount = 0
  const changeAnnotations: Record<string, lsp.ChangeAnnotation> = {}
  const changes: Record<string, lsp.TextEdit[]> = {}
  const documentChanges: (
    | lsp.CreateFile
    | lsp.DeleteFile
    | lsp.RenameFile
    | lsp.TextDocumentEdit
  )[] = []
  const textDocumentMap = new Map<string, Map<number, TextDocumentEdit[]>>()

  for (const edit of workspaceEdit.edits) {
    if (!('resource' in edit)) {
      documentChanges.push(fromWorkspaceFileEdit(edit))
      continue
    }

    if (!('versionId' in edit)) {
      // Edit is a CustomEdit. This is no supported in lSP.
      continue
    }

    const uri = String(edit.resource)
    if (edit.versionId == null) {
      changes[uri] ||= []
      changes[uri].push(fromTextEdit(edit.textEdit))
      continue
    }

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

    const textDocumentEdit: TextDocumentEdit = edit.textEdit.insertAsSnippet
      ? {
          range: fromRange(edit.textEdit.range),
          snippet: { kind: 'snippet', value: edit.textEdit.text }
        }
      : fromTextEdit(edit.textEdit)

    if (edit.metadata) {
      ;(textDocumentEdit as lsp.AnnotatedTextEdit).annotationId = String(changeAnnotationCount)
      changeAnnotations[changeAnnotationCount] = fromWorkspaceEditMetadata(edit.metadata)
      changeAnnotationCount += 1
    }

    textDocumentEdits.push(textDocumentEdit)
  }

  const result: lsp.WorkspaceEdit = {
    changes,
    documentChanges
  }

  if (changeAnnotationCount) {
    result.changeAnnotations = changeAnnotations
  }

  return result
}

/**
 * Convert an LSP text edit and uri to a Monaco editor workspace text edit.
 *
 * @param textEdit
 *   The LSP text edit to convert.
 * @param uri
 *   The uri of the workspace text edit.
 * @param changeAnnotations
 *   The change annotations that are present in the workspace edit.
 * @param versionId
 *   The version ID of the workspace text edit.
 * @returns
 *   The text edit and uri as Monaco editor workspace text edit.
 */
function toWorkspaceTextEdit(
  textEdit: TextDocumentEdit,
  uri: string,
  changeAnnotations: lsp.WorkspaceEdit['changeAnnotations'],
  versionId?: number
): monaco.languages.IWorkspaceTextEdit {
  const workspaceTextEdit: monaco.languages.IWorkspaceTextEdit = {
    resource: URI.parse(uri),
    versionId,
    textEdit:
      'snippet' in textEdit
        ? { range: toRange(textEdit.range), insertAsSnippet: true, text: textEdit.snippet.value }
        : toTextEdit(textEdit)
  }

  if ('annotationId' in textEdit && textEdit.annotationId != null) {
    const changeAnnotation = changeAnnotations?.[textEdit.annotationId]
    if (changeAnnotation) {
      workspaceTextEdit.metadata = toWorkspaceEditMetadata(changeAnnotation)
    }
  }

  return workspaceTextEdit
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
        edits.push(toWorkspaceTextEdit(textEdit, uri, workspaceEdit.changeAnnotations))
      }
    }
  }

  if (workspaceEdit.documentChanges) {
    for (const documentChange of workspaceEdit.documentChanges) {
      if (!('textDocument' in documentChange)) {
        edits.push(toWorkspaceFileEdit(documentChange))
        continue
      }

      for (const textEdit of documentChange.edits) {
        edits.push(
          toWorkspaceTextEdit(
            textEdit,
            documentChange.textDocument.uri,
            workspaceEdit.changeAnnotations,
            documentChange.textDocument.version ?? undefined
          )
        )
      }
    }
  }

  return {
    edits
  }
}
