import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-types'

import { getMonaco } from './monaco.js'

/**
 * Convert a Monaco editor completion item kind to an LSP completion item kind.
 *
 * @param kind The Monaco completion item kind to convert.
 * @returns The completion item kind as an LSP completion item kind.
 */
export function fromCompletionItemKind(
  kind: monaco.languages.CompletionItemKind
): ls.CompletionItemKind | undefined {
  const { CompletionItemKind } = getMonaco().languages

  if (kind === CompletionItemKind.Text) {
    return 1
  }
  if (kind === CompletionItemKind.Method) {
    return 2
  }
  if (kind === CompletionItemKind.Function) {
    return 3
  }
  if (kind === CompletionItemKind.Constructor) {
    return 4
  }
  if (kind === CompletionItemKind.Field) {
    return 5
  }
  if (kind === CompletionItemKind.Variable) {
    return 6
  }
  if (kind === CompletionItemKind.Class) {
    return 7
  }
  if (kind === CompletionItemKind.Interface) {
    return 8
  }
  if (kind === CompletionItemKind.Module) {
    return 9
  }
  if (kind === CompletionItemKind.Property) {
    return 10
  }
  if (kind === CompletionItemKind.Unit) {
    return 11
  }
  if (kind === CompletionItemKind.Value) {
    return 12
  }
  if (kind === CompletionItemKind.Enum) {
    return 13
  }
  if (kind === CompletionItemKind.Keyword) {
    return 14
  }
  if (kind === CompletionItemKind.Snippet) {
    return 15
  }
  if (kind === CompletionItemKind.Color) {
    return 16
  }
  if (kind === CompletionItemKind.File) {
    return 17
  }
  if (kind === CompletionItemKind.Reference) {
    return 18
  }
  if (kind === CompletionItemKind.Folder) {
    return 19
  }
  if (kind === CompletionItemKind.EnumMember) {
    return 20
  }
  if (kind === CompletionItemKind.Constant) {
    return 21
  }
  if (kind === CompletionItemKind.Struct) {
    return 22
  }
  if (kind === CompletionItemKind.Event) {
    return 23
  }
  if (kind === CompletionItemKind.Operator) {
    return 24
  }
  if (kind === CompletionItemKind.TypeParameter) {
    return 25
  }
}

/**
 * Convert an LSP completion item kind to a Monaco editor completion item kind.
 *
 * @param kind The LSP completion item kind to convert.
 * @returns The completion item kind as Monaco editor completion item kind.
 */
export function toCompletionItemKind(
  kind: ls.CompletionItemKind
): monaco.languages.CompletionItemKind {
  const { CompletionItemKind } = getMonaco().languages

  if (kind === 1) {
    return CompletionItemKind.Text
  }
  if (kind === 2) {
    return CompletionItemKind.Method
  }
  if (kind === 3) {
    return CompletionItemKind.Function
  }
  if (kind === 4) {
    return CompletionItemKind.Constructor
  }
  if (kind === 5) {
    return CompletionItemKind.Field
  }
  if (kind === 6) {
    return CompletionItemKind.Variable
  }
  if (kind === 7) {
    return CompletionItemKind.Class
  }
  if (kind === 8) {
    return CompletionItemKind.Interface
  }
  if (kind === 9) {
    return CompletionItemKind.Module
  }
  if (kind === 10) {
    return CompletionItemKind.Property
  }
  if (kind === 11) {
    return CompletionItemKind.Unit
  }
  if (kind === 12) {
    return CompletionItemKind.Value
  }
  if (kind === 13) {
    return CompletionItemKind.Enum
  }
  if (kind === 14) {
    return CompletionItemKind.Keyword
  }
  if (kind === 15) {
    return CompletionItemKind.Snippet
  }
  if (kind === 16) {
    return CompletionItemKind.Color
  }
  if (kind === 17) {
    return CompletionItemKind.File
  }
  if (kind === 18) {
    return CompletionItemKind.Reference
  }
  if (kind === 19) {
    return CompletionItemKind.Folder
  }
  if (kind === 20) {
    return CompletionItemKind.EnumMember
  }
  if (kind === 21) {
    return CompletionItemKind.Constant
  }
  if (kind === 22) {
    return CompletionItemKind.Struct
  }
  if (kind === 23) {
    return CompletionItemKind.Event
  }
  if (kind === 24) {
    return CompletionItemKind.Operator
  }

  // Kind === 25
  return CompletionItemKind.TypeParameter
}
