import { expect, test } from 'vitest'
import { URI } from 'vscode-uri'

import { runTests } from './utils.js'
import { fromWorkspaceFileEdit, toWorkspaceFileEdit } from '../index.js'

runTests(fromWorkspaceFileEdit, toWorkspaceFileEdit)(
  {
    lsp: {
      kind: 'rename',
      oldUri: 'file:///old.txt',
      newUri: 'file:///new.txt'
    },
    monaco: {
      oldResource: URI.parse('file:///old.txt'),
      newResource: URI.parse('file:///new.txt')
    }
  },
  {
    lsp: {
      kind: 'rename',
      oldUri: 'file:///old.txt',
      newUri: 'file:///new.txt',
      options: { ignoreIfExists: true, overwrite: false }
    },
    monaco: {
      oldResource: URI.parse('file:///old.txt'),
      newResource: URI.parse('file:///new.txt'),
      options: { ignoreIfExists: true, overwrite: false }
    }
  },
  {
    lsp: {
      kind: 'create',
      uri: 'file:///new.txt'
    },
    monaco: {
      newResource: URI.parse('file:///new.txt')
    }
  },
  {
    lsp: {
      kind: 'create',
      uri: 'file:///new.txt',
      options: { ignoreIfExists: false, overwrite: true }
    },
    monaco: {
      newResource: URI.parse('file:///new.txt'),
      options: { ignoreIfExists: false, overwrite: true }
    }
  },
  {
    lsp: {
      kind: 'delete',
      uri: 'file:///new.txt'
    },
    monaco: {
      oldResource: URI.parse('file:///new.txt')
    }
  },
  {
    lsp: {
      kind: 'delete',
      uri: 'file:///new.txt',
      options: { recursive: true }
    },
    monaco: {
      oldResource: URI.parse('file:///new.txt'),
      options: { recursive: true }
    }
  }
)

test('fromWorkspaceFileEditOptions({})', () => {
  expect(() => fromWorkspaceFileEdit({})).toThrowError(
    new Error('Could not convert workspace file edit to language server type')
  )
})
