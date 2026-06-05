import { fromRelativePattern, toRelativePattern } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromRelativePattern, toRelativePattern)(
  {
    lsp: {
      baseUri: 'file:///home/user/Projects/project',
      pattern: '**/*.js'
    },
    monaco: {
      base: 'file:///home/user/Projects/project',
      pattern: '**/*.js'
    }
  },
  {
    only: 'to',
    lsp: {
      baseUri: { name: 'Project', uri: 'file:///home/user/Projects/project' },
      pattern: '**/*.js'
    },
    monaco: {
      base: 'file:///home/user/Projects/project',
      pattern: '**/*.js'
    }
  }
)
