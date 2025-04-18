import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromCodeAction, toCodeAction } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromCodeAction, toCodeAction)(
  {
    lsp: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          severity: lsp.DiagnosticSeverity.Error
        }
      ],
      isPreferred: false
    },
    monaco: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          severity: monaco.MarkerSeverity.Error
        }
      ],
      isPreferred: false
    }
  },
  {
    lsp: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          severity: lsp.DiagnosticSeverity.Error
        }
      ],
      disabled: { reason: 'Because of testing' },
      edit: { changes: {}, documentChanges: [] },
      kind: 'custom kind',
      isPreferred: false
    },
    monaco: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          severity: monaco.MarkerSeverity.Error
        }
      ],
      disabled: 'Because of testing',
      edit: { edits: [] },
      kind: 'custom kind',
      isPreferred: false
    }
  }
)
