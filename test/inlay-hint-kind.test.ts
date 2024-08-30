import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import * as lsp from 'vscode-languageserver-protocol'

import { runTests } from './utils.js'
import { fromInlayHintKind, toInlayHintKind } from '../src/index.js'

runTests(fromInlayHintKind, toInlayHintKind)(
  { lsp: lsp.InlayHintKind.Type, monaco: monaco.languages.InlayHintKind.Type },
  { lsp: lsp.InlayHintKind.Parameter, monaco: monaco.languages.InlayHintKind.Parameter }
)
