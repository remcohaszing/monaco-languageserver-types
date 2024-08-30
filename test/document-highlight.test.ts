import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromDocumentHighlight, toDocumentHighlight } from '../src/index.js'

runTests(fromDocumentHighlight, toDocumentHighlight)(
  {
    lsp: { range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } } },
    monaco: { range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 } }
  },
  {
    lsp: {
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      kind: lsp.DocumentHighlightKind.Text
    },
    monaco: {
      range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
      kind: monaco.languages.DocumentHighlightKind.Text
    }
  }
)
