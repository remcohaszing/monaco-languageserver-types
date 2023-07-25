import { runTests } from './utils.js'
import { fromParameterInformation, toParameterInformation } from '../index.js'

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
