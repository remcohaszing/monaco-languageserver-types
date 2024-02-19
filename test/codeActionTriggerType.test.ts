import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCodeActionTriggerType, toCodeActionTriggerType } from '../src/index.js'

runTests(fromCodeActionTriggerType, toCodeActionTriggerType)(
  { lsp: lsp.CodeActionTriggerKind.Invoked, monaco: monaco.languages.CodeActionTriggerType.Invoke },
  { lsp: lsp.CodeActionTriggerKind.Automatic, monaco: monaco.languages.CodeActionTriggerType.Auto }
)
