import { runTests } from './utils.js'
import { fromFoldingRange, toFoldingRange } from '../index.js'

runTests(fromFoldingRange, toFoldingRange)(
  {
    lsp: { startLine: 10, endLine: 20 },
    monaco: { start: 11, end: 21 }
  },
  {
    lsp: { startLine: 10, endLine: 20, kind: 'region' },
    monaco: { start: 11, end: 21, kind: { value: 'region' } }
  }
)
