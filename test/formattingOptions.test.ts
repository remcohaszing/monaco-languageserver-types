import { runTests } from './utils.js'
import { fromFormattingOptions, toFormattingOptions } from '../index.js'

runTests({
  from: fromFormattingOptions,
  to: toFormattingOptions,
  tests: [
    {
      lsp: {
        insertSpaces: true,
        tabSize: 2
      },
      monaco: {
        insertSpaces: true,
        tabSize: 2
      }
    }
  ]
})
