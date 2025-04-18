import { fromHover, toHover } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromHover, toHover)(
  {
    lsp: {
      range: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      contents: { kind: 'markdown', value: 'This is markdown' }
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      contents: [{ value: 'This is markdown' }]
    }
  },
  {
    lsp: {
      contents: { kind: 'markdown', value: 'This is markdown' }
    },
    monaco: {
      contents: [{ value: 'This is markdown' }]
    }
  },
  {
    only: 'to',
    lsp: {
      contents: 'This is markdown'
    },
    monaco: {
      contents: [{ value: 'This is markdown' }]
    }
  },
  {
    only: 'to',
    lsp: {
      contents: { language: 'typescript', value: 'string' }
    },
    monaco: {
      contents: [{ value: '```typescript\nstring\n```' }]
    }
  },
  {
    only: 'to',
    lsp: {
      contents: ['This is markdown', { language: 'typescript', value: 'string' }]
    },
    monaco: {
      contents: [{ value: 'This is markdown' }, { value: '```typescript\nstring\n```' }]
    }
  }
)
