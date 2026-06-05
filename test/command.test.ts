import { fromCommand, toCommand } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromCommand, toCommand)(
  {
    lsp: { title: 'Compile file', command: 'file.compile' },
    monaco: { title: 'Compile file', id: 'file.compile' }
  },
  {
    lsp: { title: 'Compile file', command: 'file.compile', arguments: ['/file.ts'] },
    monaco: { title: 'Compile file', id: 'file.compile', arguments: ['/file.ts'] }
  },
  {
    lsp: { title: 'Compile file', command: 'file.compile', tooltip: 'Tooltip' },
    monaco: { title: 'Compile file', id: 'file.compile', tooltip: 'Tooltip' }
  }
)
