import { runTests } from './utils.js'
import { fromColor, toColor } from '../src/index.js'

runTests(
  fromColor,
  toColor
)({
  lsp: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 },
  monaco: { red: 0.1, blue: 0.2, green: 0.3, alpha: 0.4 }
})
