import { runTests } from './utils.js'
import { fromLinkedEditingRanges, toLinkedEditingRanges } from '../src/index.js'

runTests(fromLinkedEditingRanges, toLinkedEditingRanges)(
  {
    lsp: {
      ranges: [
        {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        }
      ]
    },
    monaco: {
      ranges: [
        {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        }
      ]
    }
  },
  {
    lsp: {
      ranges: [
        {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        }
      ],
      wordPattern: 'pattern'
    },
    monaco: {
      ranges: [
        {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        }
      ],
      wordPattern: /pattern/
    }
  }
)
