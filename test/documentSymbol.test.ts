import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromDocumentSymbol, toDocumentSymbol } from '../index.js'

runTests(
  fromDocumentSymbol,
  toDocumentSymbol,
  )([
    {
      lsp: {
        children: undefined,
        detail: 'Person class',
        kind: ls.SymbolKind.Class,
        name: 'Person',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        tags: []
      },
      monaco: {
        children: undefined,
        detail: 'Person class',
        kind: monaco.languages.SymbolKind.Class,
        name: 'Person',
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        selectionRange: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        tags: []
      }
    },
    {
      lsp: {
        children: [
          {
            children: [],
            detail: undefined,
            kind: ls.SymbolKind.Property,
            name: 'name',
            range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
            selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
            tags: []
          }
        ],
        detail: 'Person class',
        kind: ls.SymbolKind.Class,
        name: 'Person',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        tags: [ls.SymbolTag.Deprecated]
      },
      monaco: {
        children: [
          {
            children: [],
            detail: '',
            kind: monaco.languages.SymbolKind.Property,
            name: 'name',
            range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
            selectionRange: {
              startLineNumber: 1,
              startColumn: 11,
              endLineNumber: 3,
              endColumn: 21
            },
            tags: []
          }
        ],
        detail: 'Person class',
        kind: monaco.languages.SymbolKind.Class,
        name: 'Person',
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        selectionRange: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        tags: [monaco.languages.SymbolTag.Deprecated]
      }
    }
  ]
)
