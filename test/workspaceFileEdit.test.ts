import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { runTests } from './utils.js'
import { fromWorkspaceFileEdit, toWorkspaceFileEdit } from '../index.js'

runTests({
  from: fromWorkspaceFileEdit,
  to: toWorkspaceFileEdit,
  tests: [
    {
      lsp: {
        kind: 'rename',
        oldUri: 'file:///old.txt',
        newUri: 'file:///new.txt',
        options: undefined
      },
      monaco: {
        oldResource: monaco.Uri.parse('file:///old.txt'),
        newResource: monaco.Uri.parse('file:///new.txt'),
        options: undefined
      }
    },
    {
      lsp: {
        kind: 'create',
        uri: 'file:///new.txt',
        options: undefined
      },
      monaco: {
        newResource: monaco.Uri.parse('file:///new.txt'),
        options: undefined
      }
    },
    {
      lsp: {
        kind: 'delete',
        uri: 'file:///new.txt',
        options: undefined
      },
      monaco: {
        oldResource: monaco.Uri.parse('file:///new.txt'),
        options: undefined
      }
    }
  ]
})
