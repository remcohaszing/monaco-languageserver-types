import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionTriggerKind, toCompletionTriggerKind } from '../src/index.js'

runTests(fromCompletionTriggerKind, toCompletionTriggerKind)(
  { lsp: lsp.CompletionTriggerKind.Invoked, monaco: monaco.languages.CompletionTriggerKind.Invoke },
  {
    lsp: lsp.CompletionTriggerKind.TriggerCharacter,
    monaco: monaco.languages.CompletionTriggerKind.TriggerCharacter
  },
  {
    lsp: lsp.CompletionTriggerKind.TriggerForIncompleteCompletions,
    monaco: monaco.languages.CompletionTriggerKind.TriggerForIncompleteCompletions
  }
)
