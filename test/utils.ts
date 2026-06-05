import type { Plugin } from '@vitest/pretty-format'

import { format } from '@vitest/pretty-format'
import { expect, test } from 'vitest'
import { URI } from 'vscode-uri'

const uriPlugin: Plugin = {
  test: URI.isUri,

  serialize(val, config, indentation, depth, refs, printer) {
    return `URI.parse(${printer(val.toString(true), config, indentation, depth, refs)})`
  }
}

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

/**
 * @param from
 *   The function to convert from a Monaco editor type to a language server type.
 * @param to
 *   The function to convert from a language server type to a Monaco editor type.
 * @returns
 *   A function for running tests.
 */
export function runTests<M, L, MO = never, LO = never>(
  from: (monacoType: M, fromOptions: MO) => L | undefined,
  to: (lsType: L, toOptions: LO) => M | undefined
) {
  return (...tests: TestCase<M, L, MO, LO>[]) => {
    for (const values of tests) {
      if (values.only !== 'from') {
        test(`${to.name}(${format(values.lsp, { min: true, plugins: [uriPlugin], printBasicPrototype: false })})`, () => {
          const result = to(values.lsp, values.toOptions!)
          expect(result).toStrictEqual(values.monaco)
        })
      }
    }

    for (const values of tests) {
      if (values.only !== 'to') {
        test(`${from.name}(${format(values.monaco, { min: true, plugins: [uriPlugin], printBasicPrototype: false })})`, () => {
          const result = from(values.monaco, values.fromOptions!)
          expect(result).toStrictEqual(values.lsp)
        })
      }
    }
  }
}
