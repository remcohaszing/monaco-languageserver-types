import { inspect, type InspectOptions } from 'node:util'

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import { expect, test } from 'vitest'

import { setMonaco } from '../index.js'

interface TestCase<T extends (obj: any) => any> {
  /**
   * Convert from Monaco editor to LSP.
   */
  from: (monacoType: ReturnType<T>) => Parameters<T>[0]

  /**
   * Convert from LSP to Monaco editor.
   */
  to: T

  /**
   * The tests to run.
   */
  tests: Iterable<{
    /**
     * If specified, only test `to` or `from`.
     */
    only?: 'from' | 'to'

    /**
     * The LSP value.
     */
    lsp: Parameters<T>[0]

    /**
     * The Monaco editor value.
     */
    monaco: ReturnType<T>
  }>
}

setMonaco(monaco)

const inspectOptions: InspectOptions = {
  breakLength: Number.POSITIVE_INFINITY,
  compact: Number.POSITIVE_INFINITY,
  colors: true,
  depth: Number.POSITIVE_INFINITY,
  sorted: true
}

/**
 * @param testCase The test case to run
 */
export function runTests<T extends (obj: any) => any>(testCase: TestCase<T>): void {
  for (const values of testCase.tests) {
    if (values.only !== 'from') {
      test(`${testCase.to.name}(${inspect(values.lsp, inspectOptions)})`, () => {
        const result = testCase.to(values.lsp) as unknown
        expect(result).toStrictEqual(values.monaco)
      })
    }
  }

  for (const values of testCase.tests) {
    if (values.only !== 'to') {
      test(`${testCase.from.name}(${inspect(values.monaco, inspectOptions)})`, () => {
        const result = testCase.from(values.monaco)
        expect(result).toStrictEqual(values.lsp)
      })
    }
  }
}
