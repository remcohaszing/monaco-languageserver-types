import { fromSignatureHelp, toSignatureHelp } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSignatureHelp, toSignatureHelp)(
  {
    lsp: {
      activeParameter: 0,
      activeSignature: 1,
      signatures: [{ label: 'Label', parameters: [] }]
    },
    monaco: {
      activeParameter: 0,
      activeSignature: 1,
      signatures: [{ label: 'Label', parameters: [] }]
    }
  },
  {
    only: 'to',
    lsp: { signatures: [{ label: 'Label' }] },
    monaco: {
      activeParameter: 0,
      activeSignature: 0,
      signatures: [{ label: 'Label', parameters: [] }]
    }
  }
)
