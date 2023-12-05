import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

type LSFileEditOptions = ls.CreateFileOptions & ls.DeleteFileOptions & ls.RenameFileOptions

/**
 * Convert Monaco editor workspace file edit options to LSP workspace file edit options.
 *
 * @param options The Monaco workspace file edit options to convert.
 * @returns The range as LSP workspace file edit options.
 */
export function fromWorkspaceFileEditOptions(
  options: monaco.languages.WorkspaceFileEditOptions
): LSFileEditOptions {
  const result: LSFileEditOptions = {}

  if (options.ignoreIfExists != null) {
    result.ignoreIfExists = options.ignoreIfExists
  }
  if (options.ignoreIfNotExists != null) {
    result.ignoreIfNotExists = options.ignoreIfNotExists
  }
  if (options.overwrite != null) {
    result.overwrite = options.overwrite
  }
  if (options.recursive != null) {
    result.recursive = options.recursive
  }

  return result
}

/**
 * Convert LSP workspace file edit options to Monaco editor workspace file edit options.
 *
 * @param options The LSP workspace file edit options to convert.
 * @returns The workspace file edit options Monaco editor workspace file edit options.
 */
export function toWorkspaceFileEditOptions(
  options: LSFileEditOptions
): monaco.languages.WorkspaceFileEditOptions {
  const result: monaco.languages.WorkspaceFileEditOptions = {}

  if (options.ignoreIfExists != null) {
    result.ignoreIfExists = options.ignoreIfExists
  }
  if (options.ignoreIfNotExists != null) {
    result.ignoreIfNotExists = options.ignoreIfNotExists
  }
  if (options.overwrite != null) {
    result.overwrite = options.overwrite
  }
  if (options.recursive != null) {
    result.recursive = options.recursive
  }

  return result
}
