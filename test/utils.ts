import { expect, test } from 'vitest'
import { inspect } from 'vitest/utils'

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
        test(`${to.name}(${inspect(values.lsp, { colors: true })})`, () => {
          const result = to(values.lsp, values.toOptions!)
          expect(result).toStrictEqual(values.monaco)
        })
      }
    }

    for (const values of tests) {
      if (values.only !== 'to') {
        test(`${from.name}(${inspect(values.monaco, { colors: true })})`, () => {
          const result = from(values.monaco, values.fromOptions!)
          expect(result).toStrictEqual(values.lsp)
        })
      }
    }
  }
}
