import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionContext, toCompletionContext } from '../src/index.js'

runTests(fromCompletionContext, toCompletionContext)(
  {
    lsp: {
      triggerKind: lsp.CompletionTriggerKind.Invoked
    },
    monaco: {
      triggerKind: monaco.languages.CompletionTriggerKind.Invoke
    }
  },
  {
    lsp: {
      triggerKind: lsp.CompletionTriggerKind.TriggerCharacter,
      triggerCharacter: '<'
    },
    monaco: {
      triggerKind: monaco.languages.CompletionTriggerKind.TriggerCharacter,
      triggerCharacter: '<'
    }
  }
)
