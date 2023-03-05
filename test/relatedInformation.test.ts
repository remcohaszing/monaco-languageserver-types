import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromRelatedInformation, toRelatedInformation } from '../index.js'

runTests(
  fromRelatedInformation,
  toRelatedInformation,
  )([
    {
      lsp: {
        location: {
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          uri: 'file:///example.ts'
        },
        message: 'Additional info is found here'
      },
      monaco: {
        message: 'Additional info is found here',
        resource: monaco.Uri.parse('file:///example.ts'),
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      }
    }
  ]
)
