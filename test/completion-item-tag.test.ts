import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { fromCompletionItemTag, toCompletionItemTag } from '../src/index.js'
import { runTests } from './utils.js'

runTests(
  fromCompletionItemTag,
  toCompletionItemTag
)({
  lsp: lsp.CompletionItemTag.Deprecated,
  monaco: monaco.languages.CompletionItemTag.Deprecated
})
