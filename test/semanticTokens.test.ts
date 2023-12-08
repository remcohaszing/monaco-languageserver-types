import { runTests } from './utils.js'
import { fromSemanticTokens, toSemanticTokens } from '../src/index.js'

runTests(fromSemanticTokens, toSemanticTokens)(
  {
    lsp: { data: [42] },
    monaco: { data: Uint32Array.from([42]) }
  },
  {
    lsp: { data: [7], resultId: 'tokens' },
    monaco: { data: Uint32Array.from([7]), resultId: 'tokens' }
  }
)
