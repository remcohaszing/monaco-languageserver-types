import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromSignatureHelpContext, toSignatureHelpContext } from '../index.js'

runTests(fromSignatureHelpContext, toSignatureHelpContext)(
  {
    lsp: { isRetrigger: true, triggerKind: ls.SignatureHelpTriggerKind.Invoked },
    monaco: { isRetrigger: true, triggerKind: monaco.languages.SignatureHelpTriggerKind.Invoke }
  },
  {
    lsp: {
      isRetrigger: true,
      triggerKind: ls.SignatureHelpTriggerKind.Invoked,
      triggerCharacter: '{'
    },
    monaco: {
      isRetrigger: true,
      triggerKind: monaco.languages.SignatureHelpTriggerKind.Invoke,
      triggerCharacter: '{'
    }
  },
  {
    lsp: {
      isRetrigger: true,
      triggerKind: ls.SignatureHelpTriggerKind.Invoked,
      triggerCharacter: '{',
      activeSignatureHelp: { activeParameter: 2, activeSignature: 3, signatures: [] }
    },
    monaco: {
      isRetrigger: true,
      triggerKind: monaco.languages.SignatureHelpTriggerKind.Invoke,
      triggerCharacter: '{',
      activeSignatureHelp: { activeParameter: 2, activeSignature: 3, signatures: [] }
    }
  }
)
