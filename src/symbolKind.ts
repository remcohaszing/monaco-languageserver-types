import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor symbol kind to an LSP symbol kind.
 *
 * @param symbolKind The Monaco symbol kind to convert.
 * @returns The symbol kind as an LSP symbol kind.
 */
export function fromSymbolKind(symbolKind: monaco.languages.SymbolKind): ls.SymbolKind {
  if (symbolKind === (0 satisfies monaco.languages.SymbolKind.File)) {
    return 1 satisfies typeof ls.SymbolKind.File
  }
  if (symbolKind === (1 satisfies monaco.languages.SymbolKind.Module)) {
    return 2 satisfies typeof ls.SymbolKind.Module
  }
  if (symbolKind === (2 satisfies monaco.languages.SymbolKind.Namespace)) {
    return 3 satisfies typeof ls.SymbolKind.Namespace
  }
  if (symbolKind === (3 satisfies monaco.languages.SymbolKind.Package)) {
    return 4 satisfies typeof ls.SymbolKind.Package
  }
  if (symbolKind === (4 satisfies monaco.languages.SymbolKind.Class)) {
    return 5 satisfies typeof ls.SymbolKind.Class
  }
  if (symbolKind === (5 satisfies monaco.languages.SymbolKind.Method)) {
    return 6 satisfies typeof ls.SymbolKind.Method
  }
  if (symbolKind === (6 satisfies monaco.languages.SymbolKind.Property)) {
    return 7 satisfies typeof ls.SymbolKind.Property
  }
  if (symbolKind === (7 satisfies monaco.languages.SymbolKind.Field)) {
    return 8 satisfies typeof ls.SymbolKind.Field
  }
  if (symbolKind === (8 satisfies monaco.languages.SymbolKind.Constructor)) {
    return 9 satisfies typeof ls.SymbolKind.Constructor
  }
  if (symbolKind === (9 satisfies monaco.languages.SymbolKind.Enum)) {
    return 10 satisfies typeof ls.SymbolKind.Enum
  }
  if (symbolKind === (10 satisfies monaco.languages.SymbolKind.Interface)) {
    return 11 satisfies typeof ls.SymbolKind.Interface
  }
  if (symbolKind === (11 satisfies monaco.languages.SymbolKind.Function)) {
    return 12 satisfies typeof ls.SymbolKind.Function
  }
  if (symbolKind === (12 satisfies monaco.languages.SymbolKind.Variable)) {
    return 13 satisfies typeof ls.SymbolKind.Variable
  }
  if (symbolKind === (13 satisfies monaco.languages.SymbolKind.Constant)) {
    return 14 satisfies typeof ls.SymbolKind.Constant
  }
  if (symbolKind === (14 satisfies monaco.languages.SymbolKind.String)) {
    return 15 satisfies typeof ls.SymbolKind.String
  }
  if (symbolKind === (15 satisfies monaco.languages.SymbolKind.Number)) {
    return 16 satisfies typeof ls.SymbolKind.Number
  }
  if (symbolKind === (16 satisfies monaco.languages.SymbolKind.Boolean)) {
    return 17 satisfies typeof ls.SymbolKind.Boolean
  }
  if (symbolKind === (17 satisfies monaco.languages.SymbolKind.Array)) {
    return 18 satisfies typeof ls.SymbolKind.Array
  }
  if (symbolKind === (18 satisfies monaco.languages.SymbolKind.Object)) {
    return 19 satisfies typeof ls.SymbolKind.Object
  }
  if (symbolKind === (19 satisfies monaco.languages.SymbolKind.Key)) {
    return 20 satisfies typeof ls.SymbolKind.Key
  }
  if (symbolKind === (20 satisfies monaco.languages.SymbolKind.Null)) {
    return 21 satisfies typeof ls.SymbolKind.Null
  }
  if (symbolKind === (21 satisfies monaco.languages.SymbolKind.EnumMember)) {
    return 22 satisfies typeof ls.SymbolKind.EnumMember
  }
  if (symbolKind === (22 satisfies monaco.languages.SymbolKind.Struct)) {
    return 23 satisfies typeof ls.SymbolKind.Struct
  }
  if (symbolKind === (23 satisfies monaco.languages.SymbolKind.Event)) {
    return 24 satisfies typeof ls.SymbolKind.Event
  }
  if (symbolKind === (24 satisfies monaco.languages.SymbolKind.Operator)) {
    return 25 satisfies typeof ls.SymbolKind.Operator
  }
  // SymbolKind === SymbolKind.TypeParameter
  return 26 satisfies typeof ls.SymbolKind.TypeParameter
}

/**
 * Convert an LSP symbol kind to a Monaco editor symbol kind.
 *
 * @param symbolKind The LSP symbol kind to convert.
 * @returns The symbol kind as Monaco editor symbol kind.
 */
export function toSymbolKind(symbolKind: ls.SymbolKind): monaco.languages.SymbolKind {
  if (symbolKind === (1 satisfies typeof ls.SymbolKind.File)) {
    return 0 satisfies monaco.languages.SymbolKind.File
  }
  if (symbolKind === (2 satisfies typeof ls.SymbolKind.Module)) {
    return 1 satisfies monaco.languages.SymbolKind.Module
  }
  if (symbolKind === (3 satisfies typeof ls.SymbolKind.Namespace)) {
    return 2 satisfies monaco.languages.SymbolKind.Namespace
  }
  if (symbolKind === (4 satisfies typeof ls.SymbolKind.Package)) {
    return 3 satisfies monaco.languages.SymbolKind.Package
  }
  if (symbolKind === (5 satisfies typeof ls.SymbolKind.Class)) {
    return 4 satisfies monaco.languages.SymbolKind.Class
  }
  if (symbolKind === (6 satisfies typeof ls.SymbolKind.Method)) {
    return 5 satisfies monaco.languages.SymbolKind.Method
  }
  if (symbolKind === (7 satisfies typeof ls.SymbolKind.Property)) {
    return 6 satisfies monaco.languages.SymbolKind.Property
  }
  if (symbolKind === (8 satisfies typeof ls.SymbolKind.Field)) {
    return 7 satisfies monaco.languages.SymbolKind.Field
  }
  if (symbolKind === (9 satisfies typeof ls.SymbolKind.Constructor)) {
    return 8 satisfies monaco.languages.SymbolKind.Constructor
  }
  if (symbolKind === (10 satisfies typeof ls.SymbolKind.Enum)) {
    return 9 satisfies monaco.languages.SymbolKind.Enum
  }
  if (symbolKind === (11 satisfies typeof ls.SymbolKind.Interface)) {
    return 10 satisfies monaco.languages.SymbolKind.Interface
  }
  if (symbolKind === (12 satisfies typeof ls.SymbolKind.Function)) {
    return 11 satisfies monaco.languages.SymbolKind.Function
  }
  if (symbolKind === (13 satisfies typeof ls.SymbolKind.Variable)) {
    return 12 satisfies monaco.languages.SymbolKind.Variable
  }
  if (symbolKind === (14 satisfies typeof ls.SymbolKind.Constant)) {
    return 13 satisfies monaco.languages.SymbolKind.Constant
  }
  if (symbolKind === (15 satisfies typeof ls.SymbolKind.String)) {
    return 14 satisfies monaco.languages.SymbolKind.String
  }
  if (symbolKind === (16 satisfies typeof ls.SymbolKind.Number)) {
    return 15 satisfies monaco.languages.SymbolKind.Number
  }
  if (symbolKind === (17 satisfies typeof ls.SymbolKind.Boolean)) {
    return 16 satisfies monaco.languages.SymbolKind.Boolean
  }
  if (symbolKind === (18 satisfies typeof ls.SymbolKind.Array)) {
    return 17 satisfies monaco.languages.SymbolKind.Array
  }
  if (symbolKind === (19 satisfies typeof ls.SymbolKind.Object)) {
    return 18 satisfies monaco.languages.SymbolKind.Object
  }
  if (symbolKind === (20 satisfies typeof ls.SymbolKind.Key)) {
    return 19 satisfies monaco.languages.SymbolKind.Key
  }
  if (symbolKind === (21 satisfies typeof ls.SymbolKind.Null)) {
    return 20 satisfies monaco.languages.SymbolKind.Null
  }
  if (symbolKind === (22 satisfies typeof ls.SymbolKind.EnumMember)) {
    return 21 satisfies monaco.languages.SymbolKind.EnumMember
  }
  if (symbolKind === (23 satisfies typeof ls.SymbolKind.Struct)) {
    return 22 satisfies monaco.languages.SymbolKind.Struct
  }
  if (symbolKind === (24 satisfies typeof ls.SymbolKind.Event)) {
    return 23 satisfies monaco.languages.SymbolKind.Event
  }
  if (symbolKind === (25 satisfies typeof ls.SymbolKind.Operator)) {
    return 24 satisfies monaco.languages.SymbolKind.Operator
  }
  // SymbolKind === 26
  return 25 satisfies monaco.languages.SymbolKind.TypeParameter
}
