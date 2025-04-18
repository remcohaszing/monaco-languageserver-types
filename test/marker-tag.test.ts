import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromMarkerTag, toMarkerTag } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromMarkerTag, toMarkerTag)(
  {
    lsp: lsp.DiagnosticTag.Deprecated,
    monaco: monaco.MarkerTag.Deprecated
  },
  {
    lsp: lsp.DiagnosticTag.Unnecessary,
    monaco: monaco.MarkerTag.Unnecessary
  }
)
