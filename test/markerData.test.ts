import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromMarkerData, toMarkerData } from '../index.js'

runTests(fromMarkerData, toMarkerData)(
  {
    lsp: {
      code: 'unused',
      codeDescription: undefined,
      message: 'Unused variable "foo"',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      relatedInformation: undefined,
      severity: ls.DiagnosticSeverity.Warning,
      source: 'ESLint',
      tags: undefined
    },
    monaco: {
      code: 'unused',
      message: 'Unused variable "foo"',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      relatedInformation: undefined,
      severity: monaco.MarkerSeverity.Warning,
      source: 'ESLint',
      tags: undefined
    }
  },
  {
    lsp: {
      code: undefined,
      codeDescription: undefined,
      message: 'Deprecated and unused',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      relatedInformation: undefined,
      severity: ls.DiagnosticSeverity.Hint,
      source: 'TypeScript',
      tags: [ls.DiagnosticTag.Deprecated, ls.DiagnosticTag.Unnecessary]
    },
    monaco: {
      code: undefined,
      message: 'Deprecated and unused',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      relatedInformation: undefined,
      severity: monaco.MarkerSeverity.Hint,
      source: 'TypeScript',
      tags: [monaco.MarkerTag.Deprecated, monaco.MarkerTag.Unnecessary]
    }
  },
  {
    lsp: {
      code: 'Other location',
      codeDescription: { href: 'file:///contributing.md' },
      message: 'Look over there!',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      relatedInformation: [
        {
          message: 'Look over here!',
          location: {
            uri: 'file:///readme.md',
            range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
          }
        }
      ],
      severity: ls.DiagnosticSeverity.Information,
      source: 'ESLint',
      tags: undefined
    },
    monaco: {
      code: { value: 'Other location', target: monaco.Uri.parse('file:///contributing.md') },
      message: 'Look over there!',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      relatedInformation: [
        {
          message: 'Look over here!',
          resource: monaco.Uri.parse('file:///readme.md'),
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        }
      ],
      severity: monaco.MarkerSeverity.Info,
      source: 'ESLint',
      tags: undefined
    }
  }
)
