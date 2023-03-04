import { runTests } from './utils.js'
import { fromPosition, toPosition } from '../index.js'

runTests({
  from: fromPosition,
  to: toPosition,
  tests: [
    {
      lsp: { character: 0, line: 2 },
      monaco: { column: 1, lineNumber: 3 }
    }
  ]
})
