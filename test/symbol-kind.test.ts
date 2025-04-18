import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromSymbolKind, toSymbolKind } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSymbolKind, toSymbolKind)(
  { lsp: lsp.SymbolKind.File, monaco: monaco.languages.SymbolKind.File },
  { lsp: lsp.SymbolKind.Module, monaco: monaco.languages.SymbolKind.Module },
  { lsp: lsp.SymbolKind.Namespace, monaco: monaco.languages.SymbolKind.Namespace },
  { lsp: lsp.SymbolKind.Package, monaco: monaco.languages.SymbolKind.Package },
  { lsp: lsp.SymbolKind.Class, monaco: monaco.languages.SymbolKind.Class },
  { lsp: lsp.SymbolKind.Method, monaco: monaco.languages.SymbolKind.Method },
  { lsp: lsp.SymbolKind.Property, monaco: monaco.languages.SymbolKind.Property },
  { lsp: lsp.SymbolKind.Field, monaco: monaco.languages.SymbolKind.Field },
  { lsp: lsp.SymbolKind.Constructor, monaco: monaco.languages.SymbolKind.Constructor },
  { lsp: lsp.SymbolKind.Enum, monaco: monaco.languages.SymbolKind.Enum },
  { lsp: lsp.SymbolKind.Interface, monaco: monaco.languages.SymbolKind.Interface },
  { lsp: lsp.SymbolKind.Function, monaco: monaco.languages.SymbolKind.Function },
  { lsp: lsp.SymbolKind.Variable, monaco: monaco.languages.SymbolKind.Variable },
  { lsp: lsp.SymbolKind.Constant, monaco: monaco.languages.SymbolKind.Constant },
  { lsp: lsp.SymbolKind.String, monaco: monaco.languages.SymbolKind.String },
  { lsp: lsp.SymbolKind.Number, monaco: monaco.languages.SymbolKind.Number },
  { lsp: lsp.SymbolKind.Boolean, monaco: monaco.languages.SymbolKind.Boolean },
  { lsp: lsp.SymbolKind.Array, monaco: monaco.languages.SymbolKind.Array },
  { lsp: lsp.SymbolKind.Object, monaco: monaco.languages.SymbolKind.Object },
  { lsp: lsp.SymbolKind.Key, monaco: monaco.languages.SymbolKind.Key },
  { lsp: lsp.SymbolKind.Null, monaco: monaco.languages.SymbolKind.Null },
  { lsp: lsp.SymbolKind.EnumMember, monaco: monaco.languages.SymbolKind.EnumMember },
  { lsp: lsp.SymbolKind.Struct, monaco: monaco.languages.SymbolKind.Struct },
  { lsp: lsp.SymbolKind.Event, monaco: monaco.languages.SymbolKind.Event },
  { lsp: lsp.SymbolKind.Operator, monaco: monaco.languages.SymbolKind.Operator },
  { lsp: lsp.SymbolKind.TypeParameter, monaco: monaco.languages.SymbolKind.TypeParameter }
)
