import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

/**
 * Convert a Monaco editor color to an LSP color.
 *
 * @param color The Monaco color to convert.
 * @returns The color as an LSP color.
 */
export function fromColor(color: monaco.languages.IColor): ls.Color {
  return {
    red: color.red,
    blue: color.blue,
    green: color.green,
    alpha: color.alpha
  }
}

/**
 * Convert an LSP color to a Monaco editor color.
 *
 * @param color The LSP color to convert.
 * @returns The color as Monaco editor color.
 */
export function toColor(color: ls.Color): monaco.languages.IColor {
  return {
    red: color.red,
    blue: color.blue,
    green: color.green,
    alpha: color.alpha
  }
}
