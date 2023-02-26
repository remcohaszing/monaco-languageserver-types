import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import { expect, test } from 'vitest'
import * as ls from 'vscode-languageserver-types'

import * as fns from './index.js'

interface TestCase<T extends (obj: any, Uri: typeof monaco.Uri) => any> {
  /**
   * Convert from Monaco editor to LSP.
   */
  from: (monacoType: ReturnType<T>) => Parameters<T>[0]

  /**
   * Convert from LSP to Monaco editor.
   */
  to: T

  /**
   * The tests to run.
   */
  tests: {
    /**
     * If specified, only test `to` or `from`.
     */
    only?: 'from' | 'to'

    /**
     * The LSP value.
     */
    lsp: Parameters<T>[0]

    /**
     * The Monaco editor value.
     */
    monaco: ReturnType<T>
  }[]
}

/**
 * @param testCase The test case to run
 */
function runTests<T extends (obj: any, Uri: typeof monaco.Uri) => any>(
  testCase: TestCase<T>
): void {
  for (const values of testCase.tests) {
    if (values.only !== 'from') {
      test(`${testCase.to.name}(${JSON.stringify(values.lsp)})`, () => {
        const result = testCase.to(values.lsp, monaco.Uri) as unknown
        expect(result).toStrictEqual(values.monaco)
      })
    }

    if (values.only !== 'to') {
      test(`${testCase.from.name}(${JSON.stringify(values.monaco)})`, () => {
        const result = testCase.from(values.monaco)
        expect(result).toStrictEqual(values.lsp)
      })
    }
  }
}

runTests({
  from: fns.fromCompletionItemKind,
  to: fns.toCompletionItemKind,
  tests: [
    { lsp: ls.CompletionItemKind.Text, monaco: monaco.languages.CompletionItemKind.Text },
    { lsp: ls.CompletionItemKind.Method, monaco: monaco.languages.CompletionItemKind.Method },
    { lsp: ls.CompletionItemKind.Function, monaco: monaco.languages.CompletionItemKind.Function },
    {
      lsp: ls.CompletionItemKind.Constructor,
      monaco: monaco.languages.CompletionItemKind.Constructor
    },
    { lsp: ls.CompletionItemKind.Field, monaco: monaco.languages.CompletionItemKind.Field },
    { lsp: ls.CompletionItemKind.Variable, monaco: monaco.languages.CompletionItemKind.Variable },
    { lsp: ls.CompletionItemKind.Class, monaco: monaco.languages.CompletionItemKind.Class },
    { lsp: ls.CompletionItemKind.Interface, monaco: monaco.languages.CompletionItemKind.Interface },
    { lsp: ls.CompletionItemKind.Module, monaco: monaco.languages.CompletionItemKind.Module },
    { lsp: ls.CompletionItemKind.Property, monaco: monaco.languages.CompletionItemKind.Property },
    { lsp: ls.CompletionItemKind.Unit, monaco: monaco.languages.CompletionItemKind.Unit },
    { lsp: ls.CompletionItemKind.Value, monaco: monaco.languages.CompletionItemKind.Value },
    { lsp: ls.CompletionItemKind.Enum, monaco: monaco.languages.CompletionItemKind.Enum },
    { lsp: ls.CompletionItemKind.Keyword, monaco: monaco.languages.CompletionItemKind.Keyword },
    { lsp: ls.CompletionItemKind.Snippet, monaco: monaco.languages.CompletionItemKind.Snippet },
    { lsp: ls.CompletionItemKind.Color, monaco: monaco.languages.CompletionItemKind.Color },
    { lsp: ls.CompletionItemKind.File, monaco: monaco.languages.CompletionItemKind.File },
    { lsp: ls.CompletionItemKind.Reference, monaco: monaco.languages.CompletionItemKind.Reference },
    { lsp: ls.CompletionItemKind.Folder, monaco: monaco.languages.CompletionItemKind.Folder },
    {
      lsp: ls.CompletionItemKind.EnumMember,
      monaco: monaco.languages.CompletionItemKind.EnumMember
    },
    { lsp: ls.CompletionItemKind.Constant, monaco: monaco.languages.CompletionItemKind.Constant },
    { lsp: ls.CompletionItemKind.Struct, monaco: monaco.languages.CompletionItemKind.Struct },
    { lsp: ls.CompletionItemKind.Event, monaco: monaco.languages.CompletionItemKind.Event },
    { lsp: ls.CompletionItemKind.Operator, monaco: monaco.languages.CompletionItemKind.Operator },
    {
      lsp: ls.CompletionItemKind.TypeParameter,
      monaco: monaco.languages.CompletionItemKind.TypeParameter
    }
  ]
})

runTests({
  from: fns.fromDocumentSymbol,
  to: fns.toDocumentSymbol,
  tests: [
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
})

runTests({
  from: fns.fromFormattingOptions,
  to: fns.toFormattingOptions,
  tests: [
    {
      lsp: {
        insertSpaces: true,
        tabSize: 2
      },
      monaco: {
        insertSpaces: true,
        tabSize: 2
      }
    }
  ]
})

runTests({
  from: fns.fromLocationLink,
  to: fns.toLocationLink,
  tests: [
    {
      lsp: {
        originSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        targetSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    },
    {
      lsp: {
        originSelectionRange: undefined,
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: undefined,
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        targetSelectionRange: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    },
    {
      only: 'from',
      lsp: {
        originSelectionRange: undefined,
        targetRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetSelectionRange: {
          start: { line: 0, character: 10 },
          end: { line: 2, character: 20 }
        },
        targetUri: 'file:///example'
      },
      monaco: {
        originSelectionRange: undefined,
        range: {
          startLineNumber: 1,
          startColumn: 11,
          endLineNumber: 3,
          endColumn: 21
        },
        uri: monaco.Uri.parse('file:///example')
      }
    }
  ]
})

runTests({
  from: fns.fromMarkerData,
  to: fns.toMarkerData,
  tests: [
    {
      lsp: {
        code: 'unused',
        codeDescription: undefined,
        message: 'Unused variable "foo"',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        relatedInformation: undefined,
        severity: ls.DiagnosticSeverity.Warning,
        source: 'ESLint',
        tags: undefined
      },
      monaco: {
        code: 'unused',
        message: 'Unused variable "foo"',
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21,
        relatedInformation: undefined,
        severity: monaco.MarkerSeverity.Warning,
        source: 'ESLint',
        tags: undefined
      }
    },
    {
      lsp: {
        code: undefined,
        codeDescription: undefined,
        message: 'Deprecated and unused',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        relatedInformation: undefined,
        severity: ls.DiagnosticSeverity.Hint,
        source: 'TypeScript',
        tags: [ls.DiagnosticTag.Deprecated, ls.DiagnosticTag.Unnecessary]
      },
      monaco: {
        code: undefined,
        message: 'Deprecated and unused',
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21,
        relatedInformation: undefined,
        severity: monaco.MarkerSeverity.Hint,
        source: 'TypeScript',
        tags: [monaco.MarkerTag.Deprecated, monaco.MarkerTag.Unnecessary]
      }
    },
    {
      lsp: {
        code: 'Other location',
        codeDescription: { href: 'file:///contributing.md' },
        message: 'Look over there!',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
        relatedInformation: [
          {
            message: 'Look over here!',
            location: {
              uri: 'file:///readme.md',
              range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
            }
          }
        ],
        severity: ls.DiagnosticSeverity.Information,
        source: 'ESLint',
        tags: undefined
      },
      monaco: {
        code: { value: 'Other location', target: monaco.Uri.parse('file:///contributing.md') },
        message: 'Look over there!',
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21,
        relatedInformation: [
          {
            message: 'Look over here!',
            resource: monaco.Uri.parse('file:///readme.md'),
            startLineNumber: 1,
            startColumn: 11,
            endLineNumber: 3,
            endColumn: 21
          }
        ],
        severity: monaco.MarkerSeverity.Info,
        source: 'ESLint',
        tags: undefined
      }
    }
  ]
})

runTests({
  from: fns.fromMarkerSeverity,
  to: fns.toMarkerSeverity,
  tests: [
    {
      lsp: ls.DiagnosticSeverity.Hint,
      monaco: monaco.MarkerSeverity.Hint
    },
    {
      lsp: ls.DiagnosticSeverity.Information,
      monaco: monaco.MarkerSeverity.Info
    },
    {
      lsp: ls.DiagnosticSeverity.Warning,
      monaco: monaco.MarkerSeverity.Warning
    },
    {
      lsp: ls.DiagnosticSeverity.Error,
      monaco: monaco.MarkerSeverity.Error
    }
  ]
})

runTests({
  from: fns.fromMarkerTag,
  to: fns.toMarkerTag,
  tests: [
    {
      lsp: ls.DiagnosticTag.Deprecated,
      monaco: monaco.MarkerTag.Deprecated
    },
    {
      lsp: ls.DiagnosticTag.Unnecessary,
      monaco: monaco.MarkerTag.Unnecessary
    }
  ]
})

runTests({
  from: fns.fromPosition,
  to: fns.toPosition,
  tests: [
    {
      lsp: { character: 0, line: 2 },
      monaco: { column: 1, lineNumber: 3 }
    }
  ]
})

runTests({
  from: fns.fromRange,
  to: fns.toRange,
  tests: [
    {
      lsp: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
      monaco: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 }
    }
  ]
})

runTests({
  from: fns.fromRelatedInformation,
  to: fns.toRelatedInformation,
  tests: [
    {
      lsp: {
        location: {
          range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } },
          uri: 'file:///example.ts'
        },
        message: 'Additional info is found here'
      },
      monaco: {
        message: 'Additional info is found here',
        resource: monaco.Uri.parse('file:///example.ts'),
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      }
    }
  ]
})

runTests({
  from: fns.fromSingleEditOperation,
  to: fns.toSingleEditOperation,
  tests: [
    {
      lsp: {
        newText: 'New text',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
      },
      monaco: {
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        text: 'New text'
      }
    }
  ]
})

runTests({
  from: fns.fromSymbolKind,
  to: fns.toSymbolKind,
  tests: [
    { lsp: ls.SymbolKind.File, monaco: monaco.languages.SymbolKind.File },
    { lsp: ls.SymbolKind.Module, monaco: monaco.languages.SymbolKind.Module },
    { lsp: ls.SymbolKind.Namespace, monaco: monaco.languages.SymbolKind.Namespace },
    { lsp: ls.SymbolKind.Package, monaco: monaco.languages.SymbolKind.Package },
    { lsp: ls.SymbolKind.Class, monaco: monaco.languages.SymbolKind.Class },
    { lsp: ls.SymbolKind.Method, monaco: monaco.languages.SymbolKind.Method },
    { lsp: ls.SymbolKind.Property, monaco: monaco.languages.SymbolKind.Property },
    { lsp: ls.SymbolKind.Field, monaco: monaco.languages.SymbolKind.Field },
    { lsp: ls.SymbolKind.Constructor, monaco: monaco.languages.SymbolKind.Constructor },
    { lsp: ls.SymbolKind.Enum, monaco: monaco.languages.SymbolKind.Enum },
    { lsp: ls.SymbolKind.Interface, monaco: monaco.languages.SymbolKind.Interface },
    { lsp: ls.SymbolKind.Function, monaco: monaco.languages.SymbolKind.Function },
    { lsp: ls.SymbolKind.Variable, monaco: monaco.languages.SymbolKind.Variable },
    { lsp: ls.SymbolKind.Constant, monaco: monaco.languages.SymbolKind.Constant },
    { lsp: ls.SymbolKind.String, monaco: monaco.languages.SymbolKind.String },
    { lsp: ls.SymbolKind.Number, monaco: monaco.languages.SymbolKind.Number },
    { lsp: ls.SymbolKind.Boolean, monaco: monaco.languages.SymbolKind.Boolean },
    { lsp: ls.SymbolKind.Array, monaco: monaco.languages.SymbolKind.Array },
    { lsp: ls.SymbolKind.Object, monaco: monaco.languages.SymbolKind.Object },
    { lsp: ls.SymbolKind.Key, monaco: monaco.languages.SymbolKind.Key },
    { lsp: ls.SymbolKind.Null, monaco: monaco.languages.SymbolKind.Null },
    { lsp: ls.SymbolKind.EnumMember, monaco: monaco.languages.SymbolKind.EnumMember },
    { lsp: ls.SymbolKind.Struct, monaco: monaco.languages.SymbolKind.Struct },
    { lsp: ls.SymbolKind.Event, monaco: monaco.languages.SymbolKind.Event },
    { lsp: ls.SymbolKind.Operator, monaco: monaco.languages.SymbolKind.Operator },
    { lsp: ls.SymbolKind.TypeParameter, monaco: monaco.languages.SymbolKind.TypeParameter }
  ]
})

runTests({
  from: fns.fromSymbolTag,
  to: fns.toSymbolTag,
  tests: [{ lsp: ls.SymbolTag.Deprecated, monaco: monaco.languages.SymbolTag.Deprecated }]
})

runTests({
  from: fns.fromTextEdit,
  to: fns.toTextEdit,
  tests: [
    {
      lsp: {
        newText: 'New text',
        range: { start: { line: 0, character: 10 }, end: { line: 2, character: 20 } }
      },
      monaco: {
        range: { startLineNumber: 1, startColumn: 11, endLineNumber: 3, endColumn: 21 },
        text: 'New text'
      }
    }
  ]
})
