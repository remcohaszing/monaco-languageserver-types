import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor workspace edit metadata to an LSP change annotation.
 *
 * @param workspaceEditMetadata
 *   The Monaco workspace edit to convert.
 * @returns
 *   The workspace edit metadata as an LSP change annotation.
 */
export function fromWorkspaceEditMetadata(
  workspaceEditMetadata: monaco.languages.WorkspaceEditMetadata
): lsp.ChangeAnnotation {
  const changeAnnotation: lsp.ChangeAnnotation = {
    label: workspaceEditMetadata.label,
    needsConfirmation: workspaceEditMetadata.needsConfirmation
  }

  if (workspaceEditMetadata.description != null) {
    changeAnnotation.description = workspaceEditMetadata.description
  }

  return changeAnnotation
}

/**
 * Convert an LSP change annotation to a Monaco editor workspace edit metadata.
 *
 * @param changeAnnotation
 *   The LSP workspace edit to convert.
 * @returns
 *   The change annotation as Monaco editor workspace edit metadata.
 */
export function toWorkspaceEditMetadata(
  changeAnnotation: lsp.ChangeAnnotation
): monaco.languages.WorkspaceEditMetadata {
  const workspaceEditMetadata: monaco.languages.WorkspaceEditMetadata = {
    label: changeAnnotation.label,
    needsConfirmation: changeAnnotation.needsConfirmation ?? false
  }

  if (changeAnnotation.description != null) {
    workspaceEditMetadata.description = changeAnnotation.description
  }

  return workspaceEditMetadata
}
