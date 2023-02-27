import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { fromColor, toColor } from './color.js'
import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor color information to an LSP color information.
 *
 * @param colorInformation The Monaco color information to convert.
 * @returns The color information as an LSP color information.
 */
export function fromColorInformation(
  colorInformation: monaco.languages.IColorInformation
): ls.ColorInformation {
  return {
    range: fromRange(colorInformation.range),
    color: fromColor(colorInformation.color)
  }
}

/**
 * Convert an LSP color information to a Monaco editor color information.
 *
 * @param colorInformation The LSP color information to convert.
 * @returns The color information as Monaco editor color information.
 */
export function toColorInformation(
  colorInformation: ls.ColorInformation
): monaco.languages.IColorInformation {
  return {
    range: toRange(colorInformation.range),
    color: toColor(colorInformation.color)
  }
}
