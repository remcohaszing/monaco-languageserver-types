import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { getMonaco } from './monaco.js'

/**
 * Convert a Monaco editor symbol kind to an LSP symbol kind.
 *
 * @param symbolKind The Monaco symbol kind to convert.
 * @returns The symbol kind as an LSP symbol kind.
 */
export function fromSymbolKind(symbolKind: monaco.languages.SymbolKind): ls.SymbolKind {
  const { SymbolKind } = getMonaco().languages

  if (symbolKind === SymbolKind.File) {
    return 1
  }
  if (symbolKind === SymbolKind.Module) {
    return 2
  }
  if (symbolKind === SymbolKind.Namespace) {
    return 3
  }
  if (symbolKind === SymbolKind.Package) {
    return 4
  }
  if (symbolKind === SymbolKind.Class) {
    return 5
  }
  if (symbolKind === SymbolKind.Method) {
    return 6
  }
  if (symbolKind === SymbolKind.Property) {
    return 7
  }
  if (symbolKind === SymbolKind.Field) {
    return 8
  }
  if (symbolKind === SymbolKind.Constructor) {
    return 9
  }
  if (symbolKind === SymbolKind.Enum) {
    return 10
  }
  if (symbolKind === SymbolKind.Interface) {
    return 11
  }
  if (symbolKind === SymbolKind.Function) {
    return 12
  }
  if (symbolKind === SymbolKind.Variable) {
    return 13
  }
  if (symbolKind === SymbolKind.Constant) {
    return 14
  }
  if (symbolKind === SymbolKind.String) {
    return 15
  }
  if (symbolKind === SymbolKind.Number) {
    return 16
  }
  if (symbolKind === SymbolKind.Boolean) {
    return 17
  }
  if (symbolKind === SymbolKind.Array) {
    return 18
  }
  if (symbolKind === SymbolKind.Object) {
    return 19
  }
  if (symbolKind === SymbolKind.Key) {
    return 20
  }
  if (symbolKind === SymbolKind.Null) {
    return 21
  }
  if (symbolKind === SymbolKind.EnumMember) {
    return 22
  }
  if (symbolKind === SymbolKind.Struct) {
    return 23
  }
  if (symbolKind === SymbolKind.Event) {
    return 24
  }
  if (symbolKind === SymbolKind.Operator) {
    return 25
  }
  // SymbolKind === SymbolKind.TypeParameter
  return 26
}

/**
 * Convert an LSP symbol kind to a Monaco editor symbol kind.
 *
 * @param symbolKind The LSP symbol kind to convert.
 * @returns The symbol kind as Monaco editor symbol kind.
 */
export function toSymbolKind(symbolKind: ls.SymbolKind): monaco.languages.SymbolKind {
  const { SymbolKind } = getMonaco().languages

  if (symbolKind === 1) {
    return SymbolKind.File
  }
  if (symbolKind === 2) {
    return SymbolKind.Module
  }
  if (symbolKind === 3) {
    return SymbolKind.Namespace
  }
  if (symbolKind === 4) {
    return SymbolKind.Package
  }
  if (symbolKind === 5) {
    return SymbolKind.Class
  }
  if (symbolKind === 6) {
    return SymbolKind.Method
  }
  if (symbolKind === 7) {
    return SymbolKind.Property
  }
  if (symbolKind === 8) {
    return SymbolKind.Field
  }
  if (symbolKind === 9) {
    return SymbolKind.Constructor
  }
  if (symbolKind === 10) {
    return SymbolKind.Enum
  }
  if (symbolKind === 11) {
    return SymbolKind.Interface
  }
  if (symbolKind === 12) {
    return SymbolKind.Function
  }
  if (symbolKind === 13) {
    return SymbolKind.Variable
  }
  if (symbolKind === 14) {
    return SymbolKind.Constant
  }
  if (symbolKind === 15) {
    return SymbolKind.String
  }
  if (symbolKind === 16) {
    return SymbolKind.Number
  }
  if (symbolKind === 17) {
    return SymbolKind.Boolean
  }
  if (symbolKind === 18) {
    return SymbolKind.Array
  }
  if (symbolKind === 19) {
    return SymbolKind.Object
  }
  if (symbolKind === 20) {
    return SymbolKind.Key
  }
  if (symbolKind === 21) {
    return SymbolKind.Null
  }
  if (symbolKind === 22) {
    return SymbolKind.EnumMember
  }
  if (symbolKind === 23) {
    return SymbolKind.Struct
  }
  if (symbolKind === 24) {
    return SymbolKind.Event
  }
  if (symbolKind === 25) {
    return SymbolKind.Operator
  }
  // SymbolKind === 26
  return SymbolKind.TypeParameter
}
