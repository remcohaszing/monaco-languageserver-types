import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor command to an LSP command.
 *
 * @param command The Monaco command to convert.
 * @returns The command as an LSP command.
 */
export function fromCommand(command: monaco.languages.Command): ls.Command {
  return {
    title: command.title,
    command: command.id,
    arguments: command.arguments
  }
}

/**
 * Convert an LSP command to a Monaco editor command.
 *
 * @param command The LSP command to convert.
 * @returns The command as Monaco editor command.
 */
export function toCommand(command: ls.Command): monaco.languages.Command {
  return {
    title: command.title,
    id: command.command,
    arguments: command.arguments
  }
}
