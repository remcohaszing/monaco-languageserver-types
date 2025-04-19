import { fromWorkspaceFileEditOptions, toWorkspaceFileEditOptions } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromWorkspaceFileEditOptions, toWorkspaceFileEditOptions)(
  {
    lsp: {
      ignoreIfExists: true,
      ignoreIfNotExists: true,
      overwrite: true,
      recursive: true
    },
    monaco: {
      ignoreIfExists: true,
      ignoreIfNotExists: true,
      overwrite: true,
      recursive: true
    }
  },
  {
    lsp: {
      ignoreIfExists: false,
      ignoreIfNotExists: false,
      overwrite: false,
      recursive: false
    },
    monaco: {
      ignoreIfExists: false,
      ignoreIfNotExists: false,
      overwrite: false,
      recursive: false
    }
  },
  {
    lsp: {},
    monaco: {}
  }
)
