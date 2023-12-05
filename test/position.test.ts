import { runTests } from './utils.js'
import { fromPosition, toPosition } from '../src/index.js'

runTests(
  fromPosition,
  toPosition
)({
  lsp: { character: 0, line: 2 },
  monaco: { column: 1, lineNumber: 3 }
})
