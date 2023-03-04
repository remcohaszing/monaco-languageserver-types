import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromSymbolTag, toSymbolTag } from '../index.js'

runTests({
  from: fromSymbolTag,
  to: toSymbolTag,
  tests: [
    {
      lsp: ls.SymbolTag.Deprecated,
      monaco: monaco.languages.SymbolTag.Deprecated
    }
  ]
})
