import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor inline completion trigger kind to an LSP inline completion trigger kind.
 *
 * @param inlineCompletionTriggerKind
 *   The Monaco inline completion trigger kind to convert.
 * @returns
 *   The inline completion trigger kind as an LSP inline completion trigger kind.
 */
export function fromInlineCompletionTriggerKind(
  inlineCompletionTriggerKind: monaco.languages.InlineCompletionTriggerKind
): lsp.InlineCompletionTriggerKind {
  if (
    inlineCompletionTriggerKind ===
    (0 satisfies monaco.languages.InlineCompletionTriggerKind.Automatic)
  ) {
    return 2 satisfies typeof lsp.InlineCompletionTriggerKind.Automatic
  }

  return 1 satisfies typeof lsp.InlineCompletionTriggerKind.Invoked
}

/**
 * Convert an LSP inline completion trigger kind to a Monaco editor inline completion trigger kind.
 *
 * @param inlineCompletionTriggerKind
 *   The LSP inline completion trigger kind to convert.
 * @returns
 *   The inline completion trigger kind as Monaco editor inline completion trigger kind.
 */
export function toInlineCompletionTriggerKind(
  inlineCompletionTriggerKind: lsp.InlineCompletionTriggerKind
): monaco.languages.InlineCompletionTriggerKind {
  if (
    inlineCompletionTriggerKind === (2 satisfies typeof lsp.InlineCompletionTriggerKind.Automatic)
  ) {
    return 0 satisfies monaco.languages.InlineCompletionTriggerKind.Automatic
  }

  return 1 satisfies monaco.languages.InlineCompletionTriggerKind.Explicit
}
