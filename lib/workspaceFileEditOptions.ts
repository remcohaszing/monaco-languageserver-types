import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

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
  return {
    ignoreIfExists: options.ignoreIfExists,
    ignoreIfNotExists: options.ignoreIfNotExists,
    overwrite: options.overwrite,
    recursive: options.recursive
  }
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
  return {
    overwrite: options.overwrite,
    ignoreIfExists: options.ignoreIfExists,
    ignoreIfNotExists: options.ignoreIfNotExists,
    recursive: options.recursive
  }
}
