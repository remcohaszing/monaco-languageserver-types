import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionItemKind, toCompletionItemKind } from '../index.js'

runTests(fromCompletionItemKind, toCompletionItemKind)(
  { lsp: ls.CompletionItemKind.Text, monaco: monaco.languages.CompletionItemKind.Text },
  { lsp: ls.CompletionItemKind.Method, monaco: monaco.languages.CompletionItemKind.Method },
  { lsp: ls.CompletionItemKind.Function, monaco: monaco.languages.CompletionItemKind.Function },
  {
    lsp: ls.CompletionItemKind.Constructor,
    monaco: monaco.languages.CompletionItemKind.Constructor
  },
  { lsp: ls.CompletionItemKind.Field, monaco: monaco.languages.CompletionItemKind.Field },
  { lsp: ls.CompletionItemKind.Variable, monaco: monaco.languages.CompletionItemKind.Variable },
  { lsp: ls.CompletionItemKind.Class, monaco: monaco.languages.CompletionItemKind.Class },
  { lsp: ls.CompletionItemKind.Interface, monaco: monaco.languages.CompletionItemKind.Interface },
  { lsp: ls.CompletionItemKind.Module, monaco: monaco.languages.CompletionItemKind.Module },
  { lsp: ls.CompletionItemKind.Property, monaco: monaco.languages.CompletionItemKind.Property },
  { lsp: ls.CompletionItemKind.Unit, monaco: monaco.languages.CompletionItemKind.Unit },
  { lsp: ls.CompletionItemKind.Value, monaco: monaco.languages.CompletionItemKind.Value },
  { lsp: ls.CompletionItemKind.Enum, monaco: monaco.languages.CompletionItemKind.Enum },
  { lsp: ls.CompletionItemKind.Keyword, monaco: monaco.languages.CompletionItemKind.Keyword },
  { lsp: ls.CompletionItemKind.Snippet, monaco: monaco.languages.CompletionItemKind.Snippet },
  { lsp: ls.CompletionItemKind.Color, monaco: monaco.languages.CompletionItemKind.Color },
  { lsp: ls.CompletionItemKind.File, monaco: monaco.languages.CompletionItemKind.File },
  { lsp: ls.CompletionItemKind.Reference, monaco: monaco.languages.CompletionItemKind.Reference },
  { lsp: ls.CompletionItemKind.Folder, monaco: monaco.languages.CompletionItemKind.Folder },
  {
    lsp: ls.CompletionItemKind.EnumMember,
    monaco: monaco.languages.CompletionItemKind.EnumMember
  },
  { lsp: ls.CompletionItemKind.Constant, monaco: monaco.languages.CompletionItemKind.Constant },
  { lsp: ls.CompletionItemKind.Struct, monaco: monaco.languages.CompletionItemKind.Struct },
  { lsp: ls.CompletionItemKind.Event, monaco: monaco.languages.CompletionItemKind.Event },
  { lsp: ls.CompletionItemKind.Operator, monaco: monaco.languages.CompletionItemKind.Operator },
  {
    lsp: ls.CompletionItemKind.TypeParameter,
    monaco: monaco.languages.CompletionItemKind.TypeParameter
  }
)
