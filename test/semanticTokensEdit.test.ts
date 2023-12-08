import { runTests } from './utils.js'
import { fromSemanticTokensEdit, toSemanticTokensEdit } from '../src/index.js'

runTests(fromSemanticTokensEdit, toSemanticTokensEdit)(
  {
    lsp: { deleteCount: 3, start: 1 },
    monaco: { deleteCount: 3, start: 1 }
  },
  {
    lsp: { deleteCount: 3, start: 1, data: [7] },
    monaco: { deleteCount: 3, start: 1, data: Uint32Array.from([7]) }
  }
)
