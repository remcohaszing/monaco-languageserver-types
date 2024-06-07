import { runTests } from './utils.js'
import { fromSelectionRanges, toSelectionRanges } from '../src/index.js'

runTests(fromSelectionRanges, toSelectionRanges)(
  {
    lsp: { range: { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } } },
    monaco: [{ range: { startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 } }]
  },
  {
    lsp: {
      range: { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } },
      parent: {
        range: { start: { line: 10, character: 10 }, end: { line: 10, character: 10 } },
        parent: {
          range: { start: { line: 20, character: 20 }, end: { line: 20, character: 20 } }
        }
      }
    },
    monaco: [
      { range: { startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 } },
      { range: { startLineNumber: 11, startColumn: 11, endLineNumber: 11, endColumn: 11 } },
      { range: { startLineNumber: 21, startColumn: 21, endLineNumber: 21, endColumn: 21 } }
    ]
  }
)
