import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

import { getMonaco } from './monaco.js'

/**
 * Convert a Monaco editor completion trigger kind to an LSP completion trigger kind.
 *
 * @param kind The Monaco completion trigger kind to convert.
 * @returns The completion trigger kind as an LSP completion trigger kind.
 */
export function fromCompletionTriggerKind(
  kind: monaco.languages.CompletionTriggerKind
): ls.CompletionTriggerKind {
  const { CompletionTriggerKind } = getMonaco().languages

  if (kind === CompletionTriggerKind.Invoke) {
    return 1
  }
  if (kind === CompletionTriggerKind.TriggerCharacter) {
    return 2
  }

  // Kind === TriggerForIncompleteCompletions.
  return 3
}

/**
 * Convert an LSP completion trigger kind to a Monaco editor completion trigger kind.
 *
 * @param kind The LSP completion trigger kind to convert.
 * @returns The completion trigger kind as Monaco editor completion trigger kind.
 */
export function toCompletionTriggerKind(
  kind: ls.CompletionTriggerKind
): monaco.languages.CompletionTriggerKind {
  const { CompletionTriggerKind } = getMonaco().languages

  if (kind === 1) {
    return CompletionTriggerKind.Invoke
  }
  if (kind === 2) {
    return CompletionTriggerKind.TriggerCharacter
  }

  // Kind === 3
  return CompletionTriggerKind.TriggerForIncompleteCompletions
}
