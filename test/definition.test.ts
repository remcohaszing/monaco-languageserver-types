import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromDefinition, toDefinition } from '../index.js'

runTests(fromDefinition, toDefinition)(
  {
    lsp: {
      uri: 'file:///file.js',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
    },
    monaco: {
      uri: monaco.Uri.parse('file:///file.js'),
      range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
    }
  },
  {
    lsp: [
      {
        uri: 'file:///file.js',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
      }
    ],
    monaco: [
      {
        uri: monaco.Uri.parse('file:///file.js'),
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
      }
    ]
  }
)
