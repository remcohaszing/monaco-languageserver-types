import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-types'

import { getMonaco } from './monaco.js'
import {
  fromWorkspaceFileEditOptions,
  toWorkspaceFileEditOptions
} from './workspaceFileEditOptions.js'

type WorkspaceFileEdit = ls.CreateFile | ls.DeleteFile | ls.RenameFile

/**
 * Convert Monaco editor workspace file edit options to LSP workspace file edit options.
 *
 * @param workspaceFileEdit The Monaco workspace file edit options to convert.
 * @returns The range as LSP workspace file edit options.
 */
export function fromWorkspaceFileEdit(
  workspaceFileEdit: monaco.languages.IWorkspaceFileEdit
): WorkspaceFileEdit {
  if (workspaceFileEdit.oldResource) {
    if (workspaceFileEdit.newResource) {
      return {
        kind: 'rename',
        oldUri: String(workspaceFileEdit.oldResource),
        newUri: String(workspaceFileEdit.newResource),
        options:
          workspaceFileEdit.options && fromWorkspaceFileEditOptions(workspaceFileEdit.options)
      }
    }

    return {
      kind: 'delete',
      uri: String(workspaceFileEdit.oldResource),
      options: workspaceFileEdit.options && fromWorkspaceFileEditOptions(workspaceFileEdit.options)
    }
  }

  if (workspaceFileEdit.newResource) {
    return {
      kind: 'create',
      uri: String(workspaceFileEdit.newResource),
      options: workspaceFileEdit.options && fromWorkspaceFileEditOptions(workspaceFileEdit.options)
    }
  }

  throw new Error('Could not convert workspace file edit to language server type', {
    cause: workspaceFileEdit
  })
}

/**
 * Convert an LSP workspace file edit to a Monaco editor workspace file edit.
 *
 * @param workspaceFileEdit The LSP workspace file edit to convert.
 * @returns The workspace file edit options Monaco editor workspace file edit options.
 */
export function toWorkspaceFileEdit(
  workspaceFileEdit: WorkspaceFileEdit
): monaco.languages.IWorkspaceFileEdit {
  const { Uri } = getMonaco()

  if (workspaceFileEdit.kind === 'create') {
    return {
      newResource: Uri.parse(workspaceFileEdit.uri),
      options: workspaceFileEdit.options
        ? toWorkspaceFileEditOptions(workspaceFileEdit.options)
        : undefined
    }
  }

  if (workspaceFileEdit.kind === 'delete') {
    return {
      oldResource: Uri.parse(workspaceFileEdit.uri),
      options: workspaceFileEdit.options
        ? toWorkspaceFileEditOptions(workspaceFileEdit.options)
        : undefined
    }
  }

  return {
    oldResource: Uri.parse(workspaceFileEdit.oldUri),
    newResource: Uri.parse(workspaceFileEdit.newUri),
    options: workspaceFileEdit.options
      ? toWorkspaceFileEditOptions(workspaceFileEdit.options)
      : undefined
  }
}
