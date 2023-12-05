import { runTests } from './utils.js'
import { fromMarkdownString, toMarkdownString } from '../src/index.js'

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
