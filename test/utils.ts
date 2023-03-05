import { inspect, type InspectOptions } from 'node:util'

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import { expect, test } from 'vitest'

import { setMonaco } from '../index.js'

interface TestCase<M, L, MO, LO> {
  /**
   * If specified, only test `to` or `from`.
   */
  only?: 'from' | 'to'

  /**
   * The LSP value.
   */
  lsp: L

  /**
   * The Monaco editor value.
   */
  monaco: M

  /**
   * Additional options for converting from a Monaco editor value to a language server value.
   */
  toOptions?: LO

  /**
   * Additional options for converting from a language server value to a Monaco editor value.
   */
  fromOptions?: MO
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
 * @param from The function to convert from a Monaco editor type to a language server type.
 * @param to The function to convert from a language server type to a Monaco editor type.
 * @returns A function for running tests.
 */
export function runTests<M, L, MO = never, LO = never>(
  from: (monacoType: M, fromOptions: MO) => L,
  to: (lsType: L, toOptions: LO) => M
) {
  return (tests: Iterable<TestCase<M, L, MO, LO>>) => {
    for (const values of tests) {
      if (values.only !== 'from') {
        test(`${to.name}(${inspect(values.lsp, inspectOptions)})`, () => {
          const result = to(values.lsp, values.toOptions!)
          expect(result).toStrictEqual(values.monaco)
        })
      }
    }

    for (const values of tests) {
      if (values.only !== 'to') {
        test(`${from.name}(${inspect(values.monaco, inspectOptions)})`, () => {
          const result = from(values.monaco, values.fromOptions!)
          expect(result).toStrictEqual(values.lsp)
        })
      }
    }
  }
}
