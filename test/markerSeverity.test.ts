import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromMarkerSeverity, toMarkerSeverity } from '../src/index.js'

runTests(fromMarkerSeverity, toMarkerSeverity)(
  { lsp: ls.DiagnosticSeverity.Hint, monaco: monaco.MarkerSeverity.Hint },
  { lsp: ls.DiagnosticSeverity.Information, monaco: monaco.MarkerSeverity.Info },
  { lsp: ls.DiagnosticSeverity.Warning, monaco: monaco.MarkerSeverity.Warning },
  { lsp: ls.DiagnosticSeverity.Error, monaco: monaco.MarkerSeverity.Error }
)
