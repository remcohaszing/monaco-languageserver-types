import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromWorkspaceEdit, toWorkspaceEdit } from '../index.js'

runTests(
  fromWorkspaceEdit,
  toWorkspaceEdit
)({
  lsp: {
    changes: {
      'file:///changes.txt': [
        {
          newText: 'new text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        }
      ]
    },
    documentChanges: [
      {
        textDocument: { uri: 'file:///versioned.txt', version: 42 },
        edits: [
          {
            newText: 'new text',
            range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
          }
        ]
      },
      {
        kind: 'rename',
        oldUri: 'file:///old.txt',
        newUri: 'file:///new.txt',
        options: undefined
      }
    ]
  },
  monaco: {
    edits: [
      {
        resource: monaco.Uri.parse('file:///changes.txt'),
        versionId: undefined,
        textEdit: {
          text: 'new text',
          range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
        }
      },
      {
        resource: monaco.Uri.parse('file:///versioned.txt'),
        versionId: 42,
        textEdit: {
          text: 'new text',
          range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
        }
      },
      {
        oldResource: monaco.Uri.parse('file:///old.txt'),
        newResource: monaco.Uri.parse('file:///new.txt'),
        options: undefined
      }
    ]
  }
})
