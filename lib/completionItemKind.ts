import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor completion item kind to an LSP completion item kind.
 *
 * @param kind The Monaco completion item kind to convert.
 * @returns The completion item kind as an LSP completion item kind.
 */
export function fromCompletionItemKind(
  kind: monaco.languages.CompletionItemKind
): ls.CompletionItemKind | undefined {
  if (kind === 18 satisfies monaco.languages.CompletionItemKind.Text) {
    return 1
  }
  if (kind === 0 satisfies monaco.languages.CompletionItemKind.Method) {
    return 2
  }
  if (kind === 1 satisfies monaco.languages.CompletionItemKind.Function) {
    return 3
  }
  if (kind === 2 satisfies monaco.languages.CompletionItemKind.Constructor) {
    return 4
  }
  if (kind === 3 satisfies monaco.languages.CompletionItemKind.Field) {
    return 5
  }
  if (kind === 4 satisfies monaco.languages.CompletionItemKind.Variable) {
    return 6
  }
  if (kind === 5 satisfies monaco.languages.CompletionItemKind.Class) {
    return 7
  }
  if (kind === 7 satisfies monaco.languages.CompletionItemKind.Interface) {
    return 8
  }
  if (kind === 8 satisfies monaco.languages.CompletionItemKind.Module) {
    return 9
  }
  if (kind === 9 satisfies monaco.languages.CompletionItemKind.Property) {
    return 10
  }
  if (kind === 12 satisfies monaco.languages.CompletionItemKind.Unit) {
    return 11
  }
  if (kind === 13 satisfies monaco.languages.CompletionItemKind.Value) {
    return 12
  }
  if (kind === 15 satisfies monaco.languages.CompletionItemKind.Enum) {
    return 13
  }
  if (kind === 17 satisfies monaco.languages.CompletionItemKind.Keyword) {
    return 14
  }
  if (kind === 27 satisfies monaco.languages.CompletionItemKind.Snippet) {
    return 15
  }
  if (kind === 19 satisfies monaco.languages.CompletionItemKind.Color) {
    return 16
  }
  if (kind === 20 satisfies monaco.languages.CompletionItemKind.File) {
    return 17
  }
  if (kind === 21 satisfies monaco.languages.CompletionItemKind.Reference) {
    return 18
  }
  if (kind === 23 satisfies monaco.languages.CompletionItemKind.Folder) {
    return 19
  }
  if (kind === 16 satisfies monaco.languages.CompletionItemKind.EnumMember) {
    return 20
  }
  if (kind === 14 satisfies monaco.languages.CompletionItemKind.Constant) {
    return 21
  }
  if (kind === 6 satisfies monaco.languages.CompletionItemKind.Struct) {
    return 22
  }
  if (kind === 10 satisfies monaco.languages.CompletionItemKind.Event) {
    return 23
  }
  if (kind === 11 satisfies monaco.languages.CompletionItemKind.Operator) {
    return 24
  }
  if (kind === 24 satisfies monaco.languages.CompletionItemKind.TypeParameter) {
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
  if (kind === 1) {
    return 18 satisfies monaco.languages.CompletionItemKind.Text
  }
  if (kind === 2) {
    return 0 satisfies monaco.languages.CompletionItemKind.Method
  }
  if (kind === 3) {
    return 1 satisfies monaco.languages.CompletionItemKind.Function
  }
  if (kind === 4) {
    return 2 satisfies monaco.languages.CompletionItemKind.Constructor
  }
  if (kind === 5) {
    return 3 satisfies monaco.languages.CompletionItemKind.Field
  }
  if (kind === 6) {
    return 4 satisfies monaco.languages.CompletionItemKind.Variable
  }
  if (kind === 7) {
    return 5 satisfies monaco.languages.CompletionItemKind.Class
  }
  if (kind === 8) {
    return 7 satisfies monaco.languages.CompletionItemKind.Interface
  }
  if (kind === 9) {
    return 8 satisfies monaco.languages.CompletionItemKind.Module
  }
  if (kind === 10) {
    return 9 satisfies monaco.languages.CompletionItemKind.Property
  }
  if (kind === 11) {
    return 12 satisfies monaco.languages.CompletionItemKind.Unit
  }
  if (kind === 12) {
    return 13 satisfies monaco.languages.CompletionItemKind.Value
  }
  if (kind === 13) {
    return 15 satisfies monaco.languages.CompletionItemKind.Enum
  }
  if (kind === 14) {
    return 17 satisfies monaco.languages.CompletionItemKind.Keyword
  }
  if (kind === 15) {
    return 27 satisfies monaco.languages.CompletionItemKind.Snippet
  }
  if (kind === 16) {
    return 19 satisfies monaco.languages.CompletionItemKind.Color
  }
  if (kind === 17) {
    return 20 satisfies monaco.languages.CompletionItemKind.File
  }
  if (kind === 18) {
    return 21 satisfies monaco.languages.CompletionItemKind.Reference
  }
  if (kind === 19) {
    return 23 satisfies monaco.languages.CompletionItemKind.Folder
  }
  if (kind === 20) {
    return 16 satisfies monaco.languages.CompletionItemKind.EnumMember
  }
  if (kind === 21) {
    return 14 satisfies monaco.languages.CompletionItemKind.Constant
  }
  if (kind === 22) {
    return 6 satisfies monaco.languages.CompletionItemKind.Struct
  }
  if (kind === 23) {
    return 10 satisfies monaco.languages.CompletionItemKind.Event
  }
  if (kind === 24) {
    return 11 satisfies monaco.languages.CompletionItemKind.Operator
  }

  // Kind === 25
  return 24 satisfies monaco.languages.CompletionItemKind.TypeParameter
}
