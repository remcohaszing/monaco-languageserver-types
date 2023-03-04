import { runTests } from './utils.js'
import { fromColor, toColor } from '../index.js'

runTests({
  from: fromColor,
  to: toColor,
  tests: [
    {
      lsp: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 },
      monaco: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 }
    }
  ]
})
