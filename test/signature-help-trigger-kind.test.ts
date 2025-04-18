import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromSignatureHelpTriggerKind, toSignatureHelpTriggerKind } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSignatureHelpTriggerKind, toSignatureHelpTriggerKind)(
  {
    lsp: lsp.SignatureHelpTriggerKind.Invoked,
    monaco: monaco.languages.SignatureHelpTriggerKind.Invoke
  },
  {
    lsp: lsp.SignatureHelpTriggerKind.TriggerCharacter,
    monaco: monaco.languages.SignatureHelpTriggerKind.TriggerCharacter
  },
  {
    lsp: lsp.SignatureHelpTriggerKind.ContentChange,
    monaco: monaco.languages.SignatureHelpTriggerKind.ContentChange
  }
)
