import { fromColorPresentation, toColorPresentation } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromColorPresentation, toColorPresentation)(
  {
    lsp: { label: 'Label' },
    monaco: { label: 'Label' }
  },
  {
    lsp: {
      label: 'Label',
      textEdit: {
        newText: '#ff0000',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
      }
    },
    monaco: {
      label: 'Label',
      textEdit: {
        text: '#ff0000',
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
      }
    }
  },
  {
    lsp: {
      label: 'Label',
      additionalTextEdits: [
        {
          newText: '#ff00ff',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
        }
      ]
    },
    monaco: {
      label: 'Label',
      additionalTextEdits: [
        {
          text: '#ff00ff',
          range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
        }
      ]
    }
  }
)
