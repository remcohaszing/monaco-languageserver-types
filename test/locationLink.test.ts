import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromLocationLink, toLocationLink } from '../index.js'

runTests(
  fromLocationLink,
  toLocationLink,
  )([
    {
      lsp: {
        originSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        targetSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    },
    {
      lsp: {
        originSelectionRange: undefined,
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: undefined,
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        targetSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    },
    {
      only: 'from',
      lsp: {
        originSelectionRange: undefined,
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: undefined,
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    }
  ]
)
