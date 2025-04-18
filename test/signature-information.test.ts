import { fromSignatureInformation, toSignatureInformation } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromSignatureInformation, toSignatureInformation)(
  {
    lsp: { label: 'Label', parameters: [] },
    monaco: { label: 'Label', parameters: [] }
  },
  {
    only: 'to',
    lsp: { label: 'Label' },
    monaco: { label: 'Label', parameters: [] }
  },
  {
    lsp: { label: 'Label', documentation: '', parameters: [] },
    monaco: { label: 'Label', documentation: '', parameters: [] }
  },
  {
    lsp: { label: 'Label', documentation: { value: '', kind: 'markdown' }, parameters: [] },
    monaco: { label: 'Label', documentation: { value: '' }, parameters: [] }
  },
  {
    lsp: { label: 'Label', parameters: [{ label: 'Parameter' }] },
    monaco: { label: 'Label', parameters: [{ label: 'Parameter' }] }
  },
  {
    lsp: { label: 'Label', activeParameter: 0, parameters: [] },
    monaco: { label: 'Label', activeParameter: 0, parameters: [] }
  }
)
