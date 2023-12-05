import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionTriggerKind, toCompletionTriggerKind } from '../src/index.js'

runTests(fromCompletionTriggerKind, toCompletionTriggerKind)(
  { lsp: ls.CompletionTriggerKind.Invoked, monaco: monaco.languages.CompletionTriggerKind.Invoke },
  {
    lsp: ls.CompletionTriggerKind.TriggerCharacter,
    monaco: monaco.languages.CompletionTriggerKind.TriggerCharacter
  },
  {
    lsp: ls.CompletionTriggerKind.TriggerForIncompleteCompletions,
    monaco: monaco.languages.CompletionTriggerKind.TriggerForIncompleteCompletions
  }
)
