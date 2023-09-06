import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCodeActionTriggerType, toCodeActionTriggerType } from '../index.js'

runTests(fromCodeActionTriggerType, toCodeActionTriggerType)(
  { lsp: ls.CodeActionTriggerKind.Invoked, monaco: monaco.languages.CodeActionTriggerType.Invoke },
  { lsp: ls.CodeActionTriggerKind.Automatic, monaco: monaco.languages.CodeActionTriggerType.Auto }
)
