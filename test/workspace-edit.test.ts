import { URI } from 'vscode-uri'

import { fromWorkspaceEdit, toWorkspaceEdit } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromWorkspaceEdit, toWorkspaceEdit)(
  {
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
          newUri: 'file:///new.txt'
        }
      ]
    },
    monaco: {
      edits: [
        {
          resource: URI.parse('file:///changes.txt'),
          versionId: undefined,
          textEdit: {
            text: 'new text',
            range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
          }
        },
        {
          resource: URI.parse('file:///versioned.txt'),
          versionId: 42,
          textEdit: {
            text: 'new text',
            range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
          }
        },
        {
          oldResource: URI.parse('file:///old.txt'),
          newResource: URI.parse('file:///new.txt')
        }
      ]
    }
  },
  {
    only: 'to',
    lsp: {
      changes: {},
      documentChanges: [
        {
          textDocument: { uri: 'file:///versioned.txt', version: null },
          edits: [
            {
              newText: 'new text',
              range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
            }
          ]
        }
      ]
    },
    monaco: {
      edits: [
        {
          resource: URI.parse('file:///versioned.txt'),
          versionId: undefined,
          textEdit: {
            text: 'new text',
            range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
          }
        }
      ]
    }
  }
)
