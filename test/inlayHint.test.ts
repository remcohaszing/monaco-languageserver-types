import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromInlayHint, toInlayHint } from '../src/index.js'

runTests(fromInlayHint, toInlayHint)(
  {
    lsp: { label: 'label', position: { line: 1, character: 2 } },
    monaco: { label: 'label', position: { lineNumber: 2, column: 3 } }
  },
  {
    lsp: { label: [{ value: '' }], position: { line: 1, character: 2 } },
    monaco: { label: [{ label: '' }], position: { lineNumber: 2, column: 3 } }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      kind: ls.InlayHintKind.Parameter
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      kind: monaco.languages.InlayHintKind.Parameter
    }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      paddingLeft: false
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      paddingLeft: false
    }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      paddingRight: false
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      paddingRight: false
    }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      textEdits: [
        {
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          newText: 'new text'
        }
      ]
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      textEdits: [
        {
          range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
          text: 'new text'
        }
      ]
    }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      tooltip: 'string'
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      tooltip: 'string'
    }
  },
  {
    lsp: {
      label: 'label',
      position: { line: 1, character: 2 },
      tooltip: { kind: 'markdown', value: '' }
    },
    monaco: {
      label: 'label',
      position: { lineNumber: 2, column: 3 },
      tooltip: { value: '' }
    }
  }
)
