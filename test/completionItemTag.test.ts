import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromCompletionItemTag, toCompletionItemTag } from '../index.js'

runTests(
  fromCompletionItemTag,
  toCompletionItemTag
)({
  lsp: ls.CompletionItemTag.Deprecated,
  monaco: monaco.languages.CompletionItemTag.Deprecated
})
