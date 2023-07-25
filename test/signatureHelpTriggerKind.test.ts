import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromSignatureHelpTriggerKind, toSignatureHelpTriggerKind } from '../index.js'

runTests(fromSignatureHelpTriggerKind, toSignatureHelpTriggerKind)(
  {
    lsp: ls.SignatureHelpTriggerKind.Invoked,
    monaco: monaco.languages.SignatureHelpTriggerKind.Invoke
  },
  {
    lsp: ls.SignatureHelpTriggerKind.TriggerCharacter,
    monaco: monaco.languages.SignatureHelpTriggerKind.TriggerCharacter
  },
  {
    lsp: ls.SignatureHelpTriggerKind.ContentChange,
    monaco: monaco.languages.SignatureHelpTriggerKind.ContentChange
  }
)
