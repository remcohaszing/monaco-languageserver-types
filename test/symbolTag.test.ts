import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromSymbolTag, toSymbolTag } from '../src/index.js'

runTests(
  fromSymbolTag,
  toSymbolTag
)({
  lsp: ls.SymbolTag.Deprecated,
  monaco: monaco.languages.SymbolTag.Deprecated
})
