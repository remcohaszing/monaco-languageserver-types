import { fromWorkspaceEditMetadata, toWorkspaceEditMetadata } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromWorkspaceEditMetadata, toWorkspaceEditMetadata)(
  {
    lsp: {
      label: 'Label',
      needsConfirmation: true
    },
    monaco: {
      label: 'Label',
      needsConfirmation: true
    }
  },
  {
    lsp: {
      label: 'Label',
      needsConfirmation: false,
      description: 'Metadata description'
    },
    monaco: {
      label: 'Label',
      needsConfirmation: false,
      description: 'Metadata description'
    }
  },
  {
    only: 'to',
    lsp: {
      label: 'Label'
    },
    monaco: {
      label: 'Label',
      needsConfirmation: false
    }
  }
)
