import { runTests } from './utils.js'
import { fromRange, toRange } from '../index.js'

runTests(
  fromRange,
  toRange
)({
  lsp: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
  monaco: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
})
