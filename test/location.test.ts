import { URI } from 'vscode-uri'

import { runTests } from './utils.js'
import { fromLocation, toLocation } from '../index.js'

runTests(
  fromLocation,
  toLocation
)({
  lsp: {
    uri: 'file:///file.js',
    range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
  },
  monaco: {
    uri: URI.parse('file:///file.js'),
    range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
  }
})
