import { URI } from 'vscode-uri'

import { runTests } from './utils.js'
import { fromLink, toLink } from '../index.js'

runTests(fromLink, toLink)(
  {
    lsp: {
      range: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      tooltip: 'Hello',
      target: 'file:///example'
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      tooltip: 'Hello',
      url: URI.parse('file:///example')
    }
  },
  {
    lsp: {
      range: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      }
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      }
    }
  }
)
