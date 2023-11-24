import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'
import { URI } from 'vscode-uri'

import { runTests } from './utils.js'
import { fromMarkerData, toMarkerData } from '../index.js'

runTests(fromMarkerData, toMarkerData)(
  {
    lsp: {
      code: 'unused',
      message: 'Unused variable "foo"',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      severity: ls.DiagnosticSeverity.Warning,
      source: 'ESLint'
    },
    monaco: {
      code: 'unused',
      message: 'Unused variable "foo"',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      severity: monaco.MarkerSeverity.Warning,
      source: 'ESLint'
    }
  },
  {
    lsp: {
      message: 'Deprecated and unused',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      severity: ls.DiagnosticSeverity.Hint,
      source: 'TypeScript',
      tags: [ls.DiagnosticTag.Deprecated, ls.DiagnosticTag.Unnecessary]
    },
    monaco: {
      message: 'Deprecated and unused',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
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
      source: 'ESLint'
    },
    monaco: {
      code: { value: 'Other location', target: URI.parse('file:///contributing.md') },
      message: 'Look over there!',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      relatedInformation: [
        {
          message: 'Look over here!',
          resource: URI.parse('file:///readme.md'),
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        }
      ],
      severity: monaco.MarkerSeverity.Info,
      source: 'ESLint'
    }
  },
  {
    only: 'to',
    lsp: {
      code: 'unused',
      message: 'Unused variable "foo"',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      source: 'ESLint'
    },
    monaco: {
      code: 'unused',
      message: 'Unused variable "foo"',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,

      severity: monaco.MarkerSeverity.Error,
      source: 'ESLint'
    }
  },
  {
    only: 'to',
    toOptions: { defaultSeverity: monaco.MarkerSeverity.Hint },
    lsp: {
      code: 'unused',
      message: 'Unused variable "foo"',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      source: 'ESLint'
    },
    monaco: {
      code: 'unused',
      message: 'Unused variable "foo"',
      startLineNumber: 1,
      startColumn: 11,
      endLineNumber: 3,
      endColumn: 21,
      severity: monaco.MarkerSeverity.Hint,
      source: 'ESLint'
    }
  }
)
