import { URI } from 'vscode-uri'

import { fromLocationLink, toLocationLink } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromLocationLink, toLocationLink)(
  {
    lsp: {
      originSelectionRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetSelectionRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetUri: 'file:///example'
    },
    monaco: {
      originSelectionRange: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      targetSelectionRange: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      uri: URI.parse('file:///example')
    }
  },
  {
    lsp: {
      targetRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetSelectionRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetUri: 'file:///example'
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      targetSelectionRange: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      uri: URI.parse('file:///example')
    }
  },
  {
    only: 'from',
    lsp: {
      targetRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetSelectionRange: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      targetUri: 'file:///example'
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      uri: URI.parse('file:///example')
    }
  }
)
