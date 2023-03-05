import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromCompletionItem, toCompletionItem } from '../index.js'

runTests({
  from: fromCompletionItem,
  to: toCompletionItem,
  tests: [
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        }
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Event,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          insert: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } },
          replace: { start: { line: 4, character: 5 }, end: { line: 6, character: 7 } }
        }
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Event,
        label: 'Insert "text"',
        range: {
          insert: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
          replace: { startLineNumber: 5, startColumn: 6, endLineNumber: 7, endColumn: 8 }
        }
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        additionalTextEdits: [
          {
            newText: 'Hello',
            range: { start: { line: 4, character: 5 }, end: { line: 6, character: 7 } }
          }
        ]
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        additionalTextEdits: [
          {
            text: 'Hello',
            range: { startLineNumber: 5, startColumn: 6, endLineNumber: 7, endColumn: 8 }
          }
        ]
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        command: { title: 'Do stuff', command: 'doStuff', arguments: ['arg1', 'arg2'] }
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        command: { title: 'Do stuff', id: 'doStuff', arguments: ['arg1', 'arg2'] }
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        commitCharacters: [':']
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        commitCharacters: [':']
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        detail: 'Details'
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        detail: 'Details'
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        documentation: 'Documentation'
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        documentation: 'Documentation'
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        filterText: 'Filter text'
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        filterText: 'Filter text'
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        insertTextFormat: ls.InsertTextFormat.Snippet
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        insertTextMode: ls.InsertTextMode.adjustIndentation
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        preselect: true
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        preselect: true
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        sortText: 'Sort text'
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        sortText: 'Sort text'
      }
    },
    {
      toOptions: {},
      lsp: {
        kind: ls.CompletionItemKind.Class,
        label: 'Insert "text"',
        textEdit: {
          newText: 'text',
          range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
        },
        tags: [ls.CompletionItemTag.Deprecated]
      },
      monaco: {
        insertText: 'text',
        kind: monaco.languages.CompletionItemKind.Class,
        label: 'Insert "text"',
        range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 },
        tags: [monaco.languages.CompletionItemTag.Deprecated]
      }
    }
  ]
})
