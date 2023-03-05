import { runTests } from './utils.js'
import { fromColorInformation, toColorInformation } from '../index.js'

runTests(
  fromColorInformation,
  toColorInformation,
  )([
    {
      lsp: {
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        color: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 }
      },
      monaco: {
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        color: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 }
      }
    }
  ]
)
