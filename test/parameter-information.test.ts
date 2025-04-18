import { fromParameterInformation, toParameterInformation } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromParameterInformation, toParameterInformation)(
  {
    lsp: { label: 'Label' },
    monaco: { label: 'Label' }
  },
  {
    lsp: { label: 'Label', documentation: '' },
    monaco: { label: 'Label', documentation: '' }
  },
  {
    lsp: { label: 'Label', documentation: { value: '', kind: 'markdown' } },
    monaco: { label: 'Label', documentation: { value: '' } }
  }
)
