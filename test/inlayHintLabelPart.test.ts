import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromInlayHintLabelPart, toInlayHintLabelPart } from '../index.js'

runTests(fromInlayHintLabelPart, toInlayHintLabelPart)(
  {
    lsp: { value: 'Label' },
    monaco: { label: 'Label' }
  },
  {
    lsp: { value: 'Label', tooltip: '' },
    monaco: { label: 'Label', tooltip: '' }
  },
  {
    lsp: { value: 'Label', command: { command: 'command', title: 'Command' } },
    monaco: { label: 'Label', command: { id: 'command', title: 'Command' } }
  },
  {
    lsp: {
      value: 'Label',
      location: {
        uri: 'file:///file.js',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
      }
    },
    monaco: {
      label: 'Label',
      location: {
        uri: monaco.Uri.parse('file:///file.js'),
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
      }
    }
  },
  {
    lsp: { value: 'Label', tooltip: { value: '', kind: 'markdown' } },
    monaco: { label: 'Label', tooltip: { value: '' } }
  }
)
