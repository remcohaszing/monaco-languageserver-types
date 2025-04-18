import { URI } from 'vscode-uri'

import { fromDefinition, toDefinition } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromDefinition, toDefinition)(
  {
    lsp: {
      uri: 'file:///file.js',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
    },
    monaco: {
      uri: URI.parse('file:///file.js'),
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
        uri: URI.parse('file:///file.js'),
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
      }
    ]
  }
)
