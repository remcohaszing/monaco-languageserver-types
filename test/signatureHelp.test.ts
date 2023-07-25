import { runTests } from './utils.js'
import { fromSignatureHelp, toSignatureHelp } from '../index.js'

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
    lsp: { activeParameter: 1, activeSignature: 0, signatures: [{ label: 'Label' }] },
    monaco: {
      activeParameter: 1,
      activeSignature: 0,
      signatures: [{ label: 'Label', parameters: [] }]
    }
  }
)
