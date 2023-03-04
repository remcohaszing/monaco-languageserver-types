import { runTests } from './utils.js'
import { fromMarkdownString, toMarkdownString } from '../index.js'

runTests({
  from: fromMarkdownString,
  to: toMarkdownString,
  tests: [
    {
      lsp: {
        kind: 'markdown',
        value: 'Markdown content'
      },
      monaco: {
        value: 'Markdown content'
      }
    }
  ]
})
