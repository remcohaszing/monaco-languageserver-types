import { runTests } from './utils.js'
import { fromCommand, toCommand } from '../index.js'

runTests({
  from: fromCommand,
  to: toCommand,
  tests: [
    {
      lsp: { title: 'Compile file', command: 'file.compile', arguments: ['/file.ts'] },
      monaco: { title: 'Compile file', id: 'file.compile', arguments: ['/file.ts'] }
    }
  ]
})
