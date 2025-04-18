import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromSymbolTag, toSymbolTag } from '../src/index.js'
import { runTests } from './utils.js'

runTests(
  fromSymbolTag,
  toSymbolTag
)({
  lsp: lsp.SymbolTag.Deprecated,
  monaco: monaco.languages.SymbolTag.Deprecated
})
