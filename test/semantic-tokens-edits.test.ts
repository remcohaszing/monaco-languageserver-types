import { fromSemanticTokensEdits, toSemanticTokensEdits } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSemanticTokensEdits, toSemanticTokensEdits)(
  {
    lsp: { edits: [{ deleteCount: 3, start: 1 }] },
    monaco: { edits: [{ deleteCount: 3, start: 1 }] }
  },
  {
    lsp: { edits: [{ deleteCount: 3, start: 1, data: [7] }] },
    monaco: { edits: [{ deleteCount: 3, start: 1, data: Uint32Array.from([7]) }] }
  },
  {
    lsp: { edits: [{ deleteCount: 3, start: 1 }], resultId: 'result' },
    monaco: { edits: [{ deleteCount: 3, start: 1 }], resultId: 'result' }
  }
)
