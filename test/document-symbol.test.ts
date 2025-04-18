import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromDocumentSymbol, toDocumentSymbol } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromDocumentSymbol, toDocumentSymbol)(
  {
    lsp: {
      detail: 'Person class',
      kind: lsp.SymbolKind.Class,
      name: 'Person',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      tags: []
    },
    monaco: {
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
          detail: '',
          kind: lsp.SymbolKind.Property,
          name: 'name',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          tags: []
        }
      ],
      detail: 'Person class',
      kind: lsp.SymbolKind.Class,
      name: 'Person',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      tags: [lsp.SymbolTag.Deprecated]
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
  },
  {
    only: 'to',
    lsp: {
      children: [
        {
          children: [],
          kind: lsp.SymbolKind.Property,
          name: 'name',
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
        }
      ],
      detail: 'Person class',
      kind: lsp.SymbolKind.Class,
      name: 'Person',
      range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      selectionRange: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      tags: [lsp.SymbolTag.Deprecated]
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
)
