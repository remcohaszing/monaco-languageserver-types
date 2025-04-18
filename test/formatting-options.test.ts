import { fromFormattingOptions, toFormattingOptions } from '../src/index.js'
import { runTests } from './utils.js'

runTests(
  fromFormattingOptions,
  toFormattingOptions
)({
  lsp: {
    insertSpaces: true,
    tabSize: 2
  },
  monaco: {
    insertSpaces: true,
    tabSize: 2
  }
})
