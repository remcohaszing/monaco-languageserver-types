import { runTests } from './utils.js'
import { fromCommand, toCommand } from '../src/index.js'

runTests(
  fromCommand,
  toCommand
)({
  lsp: { title: 'Compile file', command: 'file.compile', arguments: ['/file.ts'] },
  monaco: { title: 'Compile file', id: 'file.compile', arguments: ['/file.ts'] }
})
