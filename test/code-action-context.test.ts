import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromCodeActionContext, toCodeActionContext } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromCodeActionContext, toCodeActionContext)(
  {
    lsp: {
      triggerKind: lsp.CodeActionTriggerKind.Invoked,
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          severity: lsp.DiagnosticSeverity.Error
        }
      ]
    },
    monaco: {
      trigger: monaco.languages.CodeActionTriggerType.Invoke,
      markers: [
        {
          message: 'Something is wrong',
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          severity: monaco.MarkerSeverity.Error
        }
      ]
    }
  },
  {
    lsp: {
      triggerKind: lsp.CodeActionTriggerKind.Automatic,
      only: ['quickfix'],
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          severity: lsp.DiagnosticSeverity.Error
        }
      ]
    },
    monaco: {
      trigger: monaco.languages.CodeActionTriggerType.Auto,
      only: 'quickfix',
      markers: [
        {
          message: 'Something is wrong',
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          severity: monaco.MarkerSeverity.Error
        }
      ]
    }
  },
  {
    only: 'to',
    lsp: {
      diagnostics: [
        {
          message: 'Something is wrong',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          severity: lsp.DiagnosticSeverity.Error
        }
      ]
    },
    monaco: {
      trigger: monaco.languages.CodeActionTriggerType.Auto,
      markers: [
        {
          message: 'Something is wrong',
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21,
          severity: monaco.MarkerSeverity.Error
        }
      ]
    }
  }
)
