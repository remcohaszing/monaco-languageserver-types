import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor symbol kind to an LSP symbol kind.
 *
 * @param symbolKind The Monaco symbol kind to convert.
 * @returns The symbol kind as an LSP symbol kind.
 */
export function fromSymbolKind(symbolKind: monaco.languages.SymbolKind): ls.SymbolKind {
  if (symbolKind === 0 satisfies monaco.languages.SymbolKind.File) {
    return 1
  }
  if (symbolKind === 1 satisfies monaco.languages.SymbolKind.Module) {
    return 2
  }
  if (symbolKind === 2 satisfies monaco.languages.SymbolKind.Namespace) {
    return 3
  }
  if (symbolKind === 3 satisfies monaco.languages.SymbolKind.Package) {
    return 4
  }
  if (symbolKind === 4 satisfies monaco.languages.SymbolKind.Class) {
    return 5
  }
  if (symbolKind === 5 satisfies monaco.languages.SymbolKind.Method) {
    return 6
  }
  if (symbolKind === 6 satisfies monaco.languages.SymbolKind.Property) {
    return 7
  }
  if (symbolKind === 7 satisfies monaco.languages.SymbolKind.Field) {
    return 8
  }
  if (symbolKind === 8 satisfies monaco.languages.SymbolKind.Constructor) {
    return 9
  }
  if (symbolKind === 9 satisfies monaco.languages.SymbolKind.Enum) {
    return 10
  }
  if (symbolKind === 10 satisfies monaco.languages.SymbolKind.Interface) {
    return 11
  }
  if (symbolKind === 11 satisfies monaco.languages.SymbolKind.Function) {
    return 12
  }
  if (symbolKind === 12 satisfies monaco.languages.SymbolKind.Variable) {
    return 13
  }
  if (symbolKind === 13 satisfies monaco.languages.SymbolKind.Constant) {
    return 14
  }
  if (symbolKind === 14 satisfies monaco.languages.SymbolKind.String) {
    return 15
  }
  if (symbolKind === 15 satisfies monaco.languages.SymbolKind.Number) {
    return 16
  }
  if (symbolKind === 16 satisfies monaco.languages.SymbolKind.Boolean) {
    return 17
  }
  if (symbolKind === 17 satisfies monaco.languages.SymbolKind.Array) {
    return 18
  }
  if (symbolKind === 18 satisfies monaco.languages.SymbolKind.Object) {
    return 19
  }
  if (symbolKind === 19 satisfies monaco.languages.SymbolKind.Key) {
    return 20
  }
  if (symbolKind === 20 satisfies monaco.languages.SymbolKind.Null) {
    return 21
  }
  if (symbolKind === 21 satisfies monaco.languages.SymbolKind.EnumMember) {
    return 22
  }
  if (symbolKind === 22 satisfies monaco.languages.SymbolKind.Struct) {
    return 23
  }
  if (symbolKind === 23 satisfies monaco.languages.SymbolKind.Event) {
    return 24
  }
  if (symbolKind === 24 satisfies monaco.languages.SymbolKind.Operator) {
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
  if (symbolKind === 1) {
    return 0 satisfies monaco.languages.SymbolKind.File
  }
  if (symbolKind === 2) {
    return 1 satisfies monaco.languages.SymbolKind.Module
  }
  if (symbolKind === 3) {
    return 2 satisfies monaco.languages.SymbolKind.Namespace
  }
  if (symbolKind === 4) {
    return 3 satisfies monaco.languages.SymbolKind.Package
  }
  if (symbolKind === 5) {
    return 4 satisfies monaco.languages.SymbolKind.Class
  }
  if (symbolKind === 6) {
    return 5 satisfies monaco.languages.SymbolKind.Method
  }
  if (symbolKind === 7) {
    return 6 satisfies monaco.languages.SymbolKind.Property
  }
  if (symbolKind === 8) {
    return 7 satisfies monaco.languages.SymbolKind.Field
  }
  if (symbolKind === 9) {
    return 8 satisfies monaco.languages.SymbolKind.Constructor
  }
  if (symbolKind === 10) {
    return 9 satisfies monaco.languages.SymbolKind.Enum
  }
  if (symbolKind === 11) {
    return 10 satisfies monaco.languages.SymbolKind.Interface
  }
  if (symbolKind === 12) {
    return 11 satisfies monaco.languages.SymbolKind.Function
  }
  if (symbolKind === 13) {
    return 12 satisfies monaco.languages.SymbolKind.Variable
  }
  if (symbolKind === 14) {
    return 13 satisfies monaco.languages.SymbolKind.Constant
  }
  if (symbolKind === 15) {
    return 14 satisfies monaco.languages.SymbolKind.String
  }
  if (symbolKind === 16) {
    return 15 satisfies monaco.languages.SymbolKind.Number
  }
  if (symbolKind === 17) {
    return 16 satisfies monaco.languages.SymbolKind.Boolean
  }
  if (symbolKind === 18) {
    return 17 satisfies monaco.languages.SymbolKind.Array
  }
  if (symbolKind === 19) {
    return 18 satisfies monaco.languages.SymbolKind.Object
  }
  if (symbolKind === 20) {
    return 19 satisfies monaco.languages.SymbolKind.Key
  }
  if (symbolKind === 21) {
    return 20 satisfies monaco.languages.SymbolKind.Null
  }
  if (symbolKind === 22) {
    return 21 satisfies monaco.languages.SymbolKind.EnumMember
  }
  if (symbolKind === 23) {
    return 22 satisfies monaco.languages.SymbolKind.Struct
  }
  if (symbolKind === 24) {
    return 23 satisfies monaco.languages.SymbolKind.Event
  }
  if (symbolKind === 25) {
    return 24 satisfies monaco.languages.SymbolKind.Operator
  }
  // SymbolKind === 26
  return 25 satisfies monaco.languages.SymbolKind.TypeParameter
}
