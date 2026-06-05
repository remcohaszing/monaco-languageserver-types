import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

import { fromCommand, toCommand } from './command.js'
import { fromCompletionItemKind, toCompletionItemKind } from './completion-item-kind.js'
import { fromCompletionItemTag, toCompletionItemTag } from './completion-item-tag.js'
import { fromMarkdownString, toMarkdownString } from './markdown-string.js'
import { fromRange, toRange } from './range.js'
import { fromSingleEditOperation, toSingleEditOperation } from './single-edit-operation.js'

/**
 * Convert a Monaco editor completion item range to an LSP completion item text edit.
 *
 * @param edit
 *   The Monaco completion item range to convert.
 * @param newText
 *   The text of the text edit.
 * @returns
 *   The completion item range as an LSP completion item text edit.
 */
function fromCompletionItemRange(
  edit: monaco.languages.CompletionItem['range'],
  newText: string
): lsp.InsertReplaceEdit | lsp.TextEdit {
  if ('insert' in edit) {
    return {
      newText,
      insert: fromRange(edit.insert),
      replace: fromRange(edit.replace)
    }
  }

  return {
    newText,
    range: fromRange(edit)
  }
}

/**
 * Convert a Monaco editor completion item to an LSP completion item.
 *
 * @param completionItem
 *   The Monaco completion item to convert.
 * @returns
 *   The completion item as an LSP completion item.
 */
export function fromCompletionItem(
  completionItem: monaco.languages.CompletionItem
): lsp.CompletionItem {
  const result: lsp.CompletionItem = {
    kind: fromCompletionItemKind(completionItem.kind),
    label:
      typeof completionItem.label === 'string' ? completionItem.label : completionItem.label.label,
    textEdit: fromCompletionItemRange(completionItem.range, completionItem.insertText)
  }

  if (completionItem.additionalTextEdits) {
    result.additionalTextEdits = completionItem.additionalTextEdits.map(fromSingleEditOperation)
  }

  if (completionItem.command) {
    result.command = fromCommand(completionItem.command)
  }

  if (completionItem.commitCharacters) {
    result.commitCharacters = completionItem.commitCharacters
  }

  if (completionItem.detail != null) {
    result.detail = completionItem.detail
  }

  if (typeof completionItem.documentation === 'string') {
    result.documentation = completionItem.documentation
  } else if (completionItem.documentation) {
    result.documentation = fromMarkdownString(completionItem.documentation)
  }

  if (completionItem.filterText != null) {
    result.filterText = completionItem.filterText
  }

  if (
    completionItem.insertTextRules ===
    (4 satisfies monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet)
  ) {
    result.insertTextFormat = 2 satisfies typeof lsp.InsertTextFormat.Snippet
  } else if (
    completionItem.insertTextRules ===
    (1 satisfies monaco.languages.CompletionItemInsertTextRule.KeepWhitespace)
  ) {
    result.insertTextMode = 2 satisfies typeof lsp.InsertTextMode.adjustIndentation
  }

  if (completionItem.preselect != null) {
    result.preselect = completionItem.preselect
  }

  if (completionItem.sortText != null) {
    result.sortText = completionItem.sortText
  }

  if (completionItem.tags) {
    result.tags = completionItem.tags.map(fromCompletionItemTag)
  }

  return result
}

interface ToCompletionItemOptions {
  /**
   * Specifies how to apply certain fields
   */
  applyKind?: lsp.CompletionItemApplyKinds | undefined

  /**
   * The item defaults of a completion list.
   */
  itemDefaults?: lsp.CompletionItemDefaults | undefined

  /**
   * A fallback range to use in case the completion item doesn’t provide one.
   */
  range: monaco.languages.CompletionItem['range']
}

/**
 * Convert an LSP completion item text edit to a Monaco editor range.
 *
 * @param edit
 *   The LSP completion item text edit to convert.
 * @returns
 *   The completion item text edit as Monaco editor range.
 */
function toCompletionItemRange(
  edit: lsp.Range | lsp.TextEdit | Omit<lsp.InsertReplaceEdit, 'newText'>
): monaco.languages.CompletionItem['range'] {
  if ('range' in edit) {
    return toRange(edit.range)
  }

  if ('insert' in edit && 'replace' in edit) {
    return {
      insert: toRange(edit.insert),
      replace: toRange(edit.replace)
    }
  }

  return toRange(edit)
}

/**
 * Convert an LSP completion item to a Monaco editor completion item.
 *
 * @param completionItem
 *   The LSP completion item to convert.
 * @param options
 *   Additional options needed to construct the Monaco completion item.
 * @returns
 *   The completion item as Monaco editor completion item.
 */
export function toCompletionItem(
  completionItem: lsp.CompletionItem,
  options: ToCompletionItemOptions
): monaco.languages.CompletionItem {
  const { applyKind, itemDefaults } = options
  let {
    additionalTextEdits,
    command,
    commitCharacters,
    detail,
    documentation,
    filterText,
    insertText,
    insertTextFormat = itemDefaults?.insertTextFormat,
    insertTextMode = itemDefaults?.insertTextMode,
    kind,
    label,
    preselect,
    sortText,
    tags,
    textEdit = itemDefaults?.editRange
  } = completionItem
  let range: monaco.languages.CompletionItem['range']

  if (textEdit) {
    range = toCompletionItemRange(textEdit)
    if ('newText' in textEdit) {
      insertText = textEdit.newText
    }
  } else {
    range = { ...options.range }
  }

  const result: monaco.languages.CompletionItem = {
    insertText: insertText ?? label,
    kind:
      kind == null
        ? (18 satisfies monaco.languages.CompletionItemKind.Text)
        : toCompletionItemKind(kind),
    label,
    range
  }

  if (additionalTextEdits) {
    result.additionalTextEdits = additionalTextEdits.map(toSingleEditOperation)
  }

  if (command) {
    result.command = toCommand(command)
  }

  if (itemDefaults?.commitCharacters) {
    if (!commitCharacters) {
      commitCharacters = itemDefaults.commitCharacters
    } else if (applyKind?.commitCharacters === (2 satisfies typeof lsp.ApplyKind.Merge)) {
      commitCharacters = commitCharacters.concat(itemDefaults.commitCharacters)
    }
  }

  if (commitCharacters) {
    result.commitCharacters = commitCharacters
  }

  if (detail != null) {
    result.detail = detail
  }

  if (typeof documentation === 'string') {
    result.documentation = documentation
  } else if (documentation) {
    result.documentation = toMarkdownString(documentation)
  }

  if (filterText != null) {
    result.filterText = filterText
  }

  if (insertTextFormat === 2) {
    result.insertTextRules =
      4 satisfies monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
  } else if (insertTextMode === 2) {
    result.insertTextRules =
      1 satisfies monaco.languages.CompletionItemInsertTextRule.KeepWhitespace
  }

  if (preselect != null) {
    result.preselect = preselect
  }

  if (sortText != null) {
    result.sortText = sortText
  }

  if (tags) {
    result.tags = tags.map(toCompletionItemTag)
  }

  return result
}
