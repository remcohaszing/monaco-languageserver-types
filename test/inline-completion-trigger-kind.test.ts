import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromInlineCompletionTriggerKind, toInlineCompletionTriggerKind } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromInlineCompletionTriggerKind, toInlineCompletionTriggerKind)(
  {
    lsp: lsp.InlineCompletionTriggerKind.Automatic,
    monaco: monaco.languages.InlineCompletionTriggerKind.Automatic
  },
  {
    lsp: lsp.InlineCompletionTriggerKind.Invoked,
    monaco: monaco.languages.InlineCompletionTriggerKind.Explicit
  }
)
