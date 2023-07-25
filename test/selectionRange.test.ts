import { runTests } from './utils.js'
import { fromSelectionRange, toSelectionRange } from '../index.js'

runTests(
  fromSelectionRange,
  toSelectionRange
)({
  lsp: { range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } } },
  monaco: { range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 } }
})
