import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as ls from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromInlayHintKind, toInlayHintKind } from '../src/index.js'

runTests(fromInlayHintKind, toInlayHintKind)(
  { lsp: ls.InlayHintKind.Type, monaco: monaco.languages.InlayHintKind.Type },
  { lsp: ls.InlayHintKind.Parameter, monaco: monaco.languages.InlayHintKind.Parameter }
)
