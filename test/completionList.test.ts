import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionList, toCompletionList } from '../src/index.js'

runTests(fromCompletionList, toCompletionList)(
  {
    toOptions: {
      range: { startLineNumber: 999, startColumn: 999, endLineNumber: 999, endColumn: 999 }
    },
    lsp: {
      isIncomplete: false,
      items: [
        {
          kind: ls.CompletionItemKind.Class,
          label: 'Insert "text"',
          textEdit: {
            newText: 'text',
            range: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } }
          }
        }
      ]
    },
    monaco: {
      incomplete: false,
      suggestions: [
        {
          insertText: 'text',
          kind: monaco.languages.CompletionItemKind.Class,
          label: 'Insert "text"',
          range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
        }
      ]
    }
  },
  {
    only: 'to',
    toOptions: {
      range: { startLineNumber: 999, startColumn: 999, endLineNumber: 999, endColumn: 999 }
    },
    lsp: {
      isIncomplete: false,
      itemDefaults: {
        commitCharacters: ['"'],
        editRange: { start: { line: 0, character: 1 }, end: { line: 2, character: 3 } },
        insertTextFormat: ls.InsertTextFormat.Snippet
      },
      items: [
        {
          kind: ls.CompletionItemKind.Class,
          label: 'Insert "text"'
        }
      ]
    },
    monaco: {
      incomplete: false,
      suggestions: [
        {
          commitCharacters: ['"'],
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          insertText: '',
          kind: monaco.languages.CompletionItemKind.Class,
          label: 'Insert "text"',
          range: { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
        }
      ]
    }
  }
)
