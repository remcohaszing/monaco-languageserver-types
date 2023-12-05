import { runTests } from './utils.js'
import { fromCodeLens, toCodeLens } from '../src/index.js'

runTests(fromCodeLens, toCodeLens)(
  {
    lsp: { range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } } },
    monaco: { range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 } }
  },
  {
    lsp: {
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      command: { command: 'lens', title: 'Lens' }
    },
    monaco: {
      range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
      command: { id: 'lens', title: 'Lens' }
    }
  }
)
