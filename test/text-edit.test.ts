import { fromTextEdit, toTextEdit } from '../src/index.js'
import { runTests } from './utils.js'

runTests(
  fromTextEdit,
  toTextEdit
)({
  lsp: {
    newText: 'New text',
    range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
  },
  monaco: {
    range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
    text: 'New text'
  }
})
