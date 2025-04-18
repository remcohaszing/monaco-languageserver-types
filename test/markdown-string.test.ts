import { fromMarkdownString, toMarkdownString } from '../src/index.js'
import { runTests } from './utils.js'

runTests(
  fromMarkdownString,
  toMarkdownString
)({
  lsp: {
    kind: 'markdown',
    value: 'Markdown content'
  },
  monaco: {
    value: 'Markdown content'
  }
})
