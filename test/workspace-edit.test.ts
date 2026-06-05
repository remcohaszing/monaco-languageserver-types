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
          },
          {
            newText: 'more text',
            range: { start: { line: 4, character: 5 }, end: { line: 6, character: 7 } }
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
          resource: URI.parse('file:///changes.txt'),
          versionId: undefined,
          textEdit: {
            text: 'more text',
            range: { startLineNumber: 5, startColumn: 6, endLineNumber: 7, endColumn: 8 }
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
    lsp: {
      changeAnnotations: {
        0: { label: 'Zero', needsConfirmation: false },
        1: { label: 'One', needsConfirmation: true }
      },
      changes: {},
      documentChanges: [
        {
          textDocument: { uri: 'file:///versioned.txt', version: 42 },
          edits: [
            {
              newText: 'zero',
              range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } },
              annotationId: '0'
            },
            {
              newText: 'one',
              range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } },
              annotationId: '1'
            }
          ]
        }
      ]
    },
    monaco: {
      edits: [
        {
          metadata: {
            label: 'Zero',
            needsConfirmation: false
          },
          resource: URI.parse('file:///versioned.txt'),
          textEdit: {
            range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
            text: 'zero'
          },
          versionId: 42
        },
        {
          metadata: {
            label: 'One',
            needsConfirmation: true
          },
          resource: URI.parse('file:///versioned.txt'),
          textEdit: {
            range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
            text: 'one'
          },
          versionId: 42
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
