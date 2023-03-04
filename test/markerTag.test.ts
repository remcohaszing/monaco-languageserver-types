import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromMarkerTag, toMarkerTag } from '../index.js'

runTests({
  from: fromMarkerTag,
  to: toMarkerTag,
  tests: [
    {
      lsp: ls.DiagnosticTag.Deprecated,
      monaco: monaco.MarkerTag.Deprecated
    },
    {
      lsp: ls.DiagnosticTag.Unnecessary,
      monaco: monaco.MarkerTag.Unnecessary
    }
  ]
})
