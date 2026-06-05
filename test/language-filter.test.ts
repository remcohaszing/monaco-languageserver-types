import { fromLanguageFilter, toLanguageFilter } from '../src/index.js'
import { runTests } from './utils.js'

runTests(fromLanguageFilter, toLanguageFilter)(
  {
    lsp: { language: 'javascript', pattern: '**/*.js', scheme: 'file' },
    monaco: { language: 'javascript', pattern: '**/*.js', scheme: 'file' }
  },
  {
    lsp: { notebookType: 'mdx', pattern: '**/*.mdx', scheme: 'file' },
    monaco: { notebookType: 'mdx', pattern: '**/*.mdx', scheme: 'file' }
  },
  {
    lsp: { language: 'markdown' },
    monaco: { language: 'markdown' }
  },
  {
    lsp: { notebookType: 'restructuredtext' },
    monaco: { notebookType: 'restructuredtext' }
  },
  {
    lsp: { pattern: '**/*.ts' },
    monaco: { pattern: '**/*.ts' }
  },
  {
    lsp: { pattern: { baseUri: 'file:///home/user/Projects/project', pattern: '**/*.py' } },
    monaco: { pattern: { base: 'file:///home/user/Projects/project', pattern: '**/*.py' } }
  },
  {
    lsp: { scheme: 'ftp' },
    monaco: { scheme: 'ftp' }
  }
)
