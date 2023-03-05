import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromCodeAction, toCodeAction } from '../index.js'

runTests(fromCodeAction, toCodeAction)(
  {
    lsp: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          code: undefined,
          codeDescription: undefined,
          relatedInformation: undefined,
          severity: ls.DiagnosticSeverity.Error,
          source: undefined,
          tags: undefined
        }
      ],
      disabled: undefined,
      edit: undefined,
      kind: undefined,
      isPreferred: false
    },
    monaco: {
      title: 'Do something',
      diagnostics: [
        {
          message: 'Something is wrong',
          code: undefined,
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          relatedInformation: undefined,
          severity: monaco.MarkerSeverity.Error,
          source: undefined,
          tags: undefined
        }
      ],
      disabled: undefined,
      edit: undefined,
      kind: undefined,
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
          code: undefined,
          codeDescription: undefined,
          relatedInformation: undefined,
          severity: ls.DiagnosticSeverity.Error,
          source: undefined,
          tags: undefined
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
          code: undefined,
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          relatedInformation: undefined,
          severity: monaco.MarkerSeverity.Error,
          source: undefined,
          tags: undefined
        }
      ],
      disabled: 'Because of testing',
      edit: { edits: [] },
      kind: 'custom kind',
      isPreferred: false
    }
  }
)
