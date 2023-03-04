import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-types'

import { runTests } from './utils.js'
import { fromCompletionItemTag, toCompletionItemTag } from '../index.js'

runTests({
  from: fromCompletionItemTag,
  to: toCompletionItemTag,
  tests: [
    {
      lsp: ls.CompletionItemTag.Deprecated,
      monaco: monaco.languages.CompletionItemTag.Deprecated
    }
  ]
})
