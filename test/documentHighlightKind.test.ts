import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromDocumentHighlightKind, toDocumentHighlightKind } from '../src/index.js'

runTests(fromDocumentHighlightKind, toDocumentHighlightKind)(
  { lsp: ls.DocumentHighlightKind.Text, monaco: monaco.languages.DocumentHighlightKind.Text },
  { lsp: ls.DocumentHighlightKind.Read, monaco: monaco.languages.DocumentHighlightKind.Read },
  { lsp: ls.DocumentHighlightKind.Write, monaco: monaco.languages.DocumentHighlightKind.Write }
)
