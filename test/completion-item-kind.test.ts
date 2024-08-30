import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionItemKind, toCompletionItemKind } from '../src/index.js'

runTests(fromCompletionItemKind, toCompletionItemKind)(
  { lsp: lsp.CompletionItemKind.Text, monaco: monaco.languages.CompletionItemKind.Text },
  { lsp: lsp.CompletionItemKind.Method, monaco: monaco.languages.CompletionItemKind.Method },
  { lsp: lsp.CompletionItemKind.Function, monaco: monaco.languages.CompletionItemKind.Function },
  {
    lsp: lsp.CompletionItemKind.Constructor,
    monaco: monaco.languages.CompletionItemKind.Constructor
  },
  { lsp: lsp.CompletionItemKind.Field, monaco: monaco.languages.CompletionItemKind.Field },
  { lsp: lsp.CompletionItemKind.Variable, monaco: monaco.languages.CompletionItemKind.Variable },
  { lsp: lsp.CompletionItemKind.Class, monaco: monaco.languages.CompletionItemKind.Class },
  { lsp: lsp.CompletionItemKind.Interface, monaco: monaco.languages.CompletionItemKind.Interface },
  { lsp: lsp.CompletionItemKind.Module, monaco: monaco.languages.CompletionItemKind.Module },
  { lsp: lsp.CompletionItemKind.Property, monaco: monaco.languages.CompletionItemKind.Property },
  { lsp: lsp.CompletionItemKind.Unit, monaco: monaco.languages.CompletionItemKind.Unit },
  { lsp: lsp.CompletionItemKind.Value, monaco: monaco.languages.CompletionItemKind.Value },
  { lsp: lsp.CompletionItemKind.Enum, monaco: monaco.languages.CompletionItemKind.Enum },
  { lsp: lsp.CompletionItemKind.Keyword, monaco: monaco.languages.CompletionItemKind.Keyword },
  { lsp: lsp.CompletionItemKind.Snippet, monaco: monaco.languages.CompletionItemKind.Snippet },
  { lsp: lsp.CompletionItemKind.Color, monaco: monaco.languages.CompletionItemKind.Color },
  { lsp: lsp.CompletionItemKind.File, monaco: monaco.languages.CompletionItemKind.File },
  { lsp: lsp.CompletionItemKind.Reference, monaco: monaco.languages.CompletionItemKind.Reference },
  { lsp: lsp.CompletionItemKind.Folder, monaco: monaco.languages.CompletionItemKind.Folder },
  {
    lsp: lsp.CompletionItemKind.EnumMember,
    monaco: monaco.languages.CompletionItemKind.EnumMember
  },
  { lsp: lsp.CompletionItemKind.Constant, monaco: monaco.languages.CompletionItemKind.Constant },
  { lsp: lsp.CompletionItemKind.Struct, monaco: monaco.languages.CompletionItemKind.Struct },
  { lsp: lsp.CompletionItemKind.Event, monaco: monaco.languages.CompletionItemKind.Event },
  { lsp: lsp.CompletionItemKind.Operator, monaco: monaco.languages.CompletionItemKind.Operator },
  {
    lsp: lsp.CompletionItemKind.TypeParameter,
    monaco: monaco.languages.CompletionItemKind.TypeParameter
  }
)
