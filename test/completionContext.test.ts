import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionContext, toCompletionContext } from '../index.js'

runTests(fromCompletionContext, toCompletionContext)(
  {
    lsp: {
      triggerKind: ls.CompletionTriggerKind.Invoked
    },
    monaco: {
      triggerKind: monaco.languages.CompletionTriggerKind.Invoke
    }
  },
  {
    lsp: {
      triggerKind: ls.CompletionTriggerKind.TriggerCharacter,
      triggerCharacter: '<'
    },
    monaco: {
      triggerKind: monaco.languages.CompletionTriggerKind.TriggerCharacter,
      triggerCharacter: '<'
    }
  }
)
