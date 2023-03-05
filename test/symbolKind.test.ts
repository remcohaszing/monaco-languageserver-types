import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromSymbolKind, toSymbolKind } from '../index.js'

runTests(
  fromSymbolKind,
  toSymbolKind,
  )([
    { lsp: ls.SymbolKind.File, monaco: monaco.languages.SymbolKind.File },
    { lsp: ls.SymbolKind.Module, monaco: monaco.languages.SymbolKind.Module },
    { lsp: ls.SymbolKind.Namespace, monaco: monaco.languages.SymbolKind.Namespace },
    { lsp: ls.SymbolKind.Package, monaco: monaco.languages.SymbolKind.Package },
    { lsp: ls.SymbolKind.Class, monaco: monaco.languages.SymbolKind.Class },
    { lsp: ls.SymbolKind.Method, monaco: monaco.languages.SymbolKind.Method },
    { lsp: ls.SymbolKind.Property, monaco: monaco.languages.SymbolKind.Property },
    { lsp: ls.SymbolKind.Field, monaco: monaco.languages.SymbolKind.Field },
    { lsp: ls.SymbolKind.Constructor, monaco: monaco.languages.SymbolKind.Constructor },
    { lsp: ls.SymbolKind.Enum, monaco: monaco.languages.SymbolKind.Enum },
    { lsp: ls.SymbolKind.Interface, monaco: monaco.languages.SymbolKind.Interface },
    { lsp: ls.SymbolKind.Function, monaco: monaco.languages.SymbolKind.Function },
    { lsp: ls.SymbolKind.Variable, monaco: monaco.languages.SymbolKind.Variable },
    { lsp: ls.SymbolKind.Constant, monaco: monaco.languages.SymbolKind.Constant },
    { lsp: ls.SymbolKind.String, monaco: monaco.languages.SymbolKind.String },
    { lsp: ls.SymbolKind.Number, monaco: monaco.languages.SymbolKind.Number },
    { lsp: ls.SymbolKind.Boolean, monaco: monaco.languages.SymbolKind.Boolean },
    { lsp: ls.SymbolKind.Array, monaco: monaco.languages.SymbolKind.Array },
    { lsp: ls.SymbolKind.Object, monaco: monaco.languages.SymbolKind.Object },
    { lsp: ls.SymbolKind.Key, monaco: monaco.languages.SymbolKind.Key },
    { lsp: ls.SymbolKind.Null, monaco: monaco.languages.SymbolKind.Null },
    { lsp: ls.SymbolKind.EnumMember, monaco: monaco.languages.SymbolKind.EnumMember },
    { lsp: ls.SymbolKind.Struct, monaco: monaco.languages.SymbolKind.Struct },
    { lsp: ls.SymbolKind.Event, monaco: monaco.languages.SymbolKind.Event },
    { lsp: ls.SymbolKind.Operator, monaco: monaco.languages.SymbolKind.Operator },
    { lsp: ls.SymbolKind.TypeParameter, monaco: monaco.languages.SymbolKind.TypeParameter }
  ]
)
