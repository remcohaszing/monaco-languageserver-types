import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromSignatureHelpContext, toSignatureHelpContext } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSignatureHelpContext, toSignatureHelpContext)(
  {
    lsp: { isRetrigger: true, triggerKind: lsp.SignatureHelpTriggerKind.Invoked },
    monaco: { isRetrigger: true, triggerKind: monaco.languages.SignatureHelpTriggerKind.Invoke }
  },
  {
    lsp: {
      isRetrigger: true,
      triggerKind: lsp.SignatureHelpTriggerKind.Invoked,
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
      triggerKind: lsp.SignatureHelpTriggerKind.Invoked,
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
