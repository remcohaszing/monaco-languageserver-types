import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromDocumentHighlightKind, toDocumentHighlightKind } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromDocumentHighlightKind, toDocumentHighlightKind)(
  { lsp: lsp.DocumentHighlightKind.Text, monaco: monaco.languages.DocumentHighlightKind.Text },
  { lsp: lsp.DocumentHighlightKind.Read, monaco: monaco.languages.DocumentHighlightKind.Read },
  { lsp: lsp.DocumentHighlightKind.Write, monaco: monaco.languages.DocumentHighlightKind.Write }
)
