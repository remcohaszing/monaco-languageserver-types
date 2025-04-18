import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromMarkerSeverity, toMarkerSeverity } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromMarkerSeverity, toMarkerSeverity)(
  { lsp: lsp.DiagnosticSeverity.Hint, monaco: monaco.MarkerSeverity.Hint },
  { lsp: lsp.DiagnosticSeverity.Information, monaco: monaco.MarkerSeverity.Info },
  { lsp: lsp.DiagnosticSeverity.Warning, monaco: monaco.MarkerSeverity.Warning },
  { lsp: lsp.DiagnosticSeverity.Error, monaco: monaco.MarkerSeverity.Error }
)
