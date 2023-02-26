import type * as monaco from 'monaco-editor'
import type * as ls from 'vscode-languageserver-types'

import { fromMarkdownString, toMarkdownString } from './markdownString.js'
import { fromRange, toRange } from './range.js'

/**
 * Convert a Monaco editor hover to an LSP hover.
 *
 * @param hover The Monaco hover to convert.
 * @returns The hover as an LSP hover.
 */
export function fromHover(hover: monaco.languages.Hover): ls.Hover {
  return {
    range: hover.range && fromRange(hover.range),
    contents: fromMarkdownString(hover.contents[0])
  }
}

/**
 * Get value of a marked string.
 *
 * @param value The marked string to get the value from.
 * @returns The value of the marked string.
 */
function getDeprecatedMarkupValue(value: ls.MarkedString): monaco.IMarkdownString {
  if (typeof value === 'string') {
    return { value }
  }

  return { value: `\`\`\`\n${value.language}\n${value.value}\`\`\`` }
}

/**
 * Convert LSP hover item contents to a Monaco markdown string.
 *
 * @param contents The LSP hover contents to convert.
 * @returns The hover contents as a Monaco markdown string.
 */
function toHoverContents(
  contents: ls.MarkedString | ls.MarkedString[] | ls.MarkupContent
): monaco.IMarkdownString[] {
  if (typeof contents === 'string' || 'language' in contents) {
    return [getDeprecatedMarkupValue(contents)]
  }

  if (Array.isArray(contents)) {
    return contents.map(getDeprecatedMarkupValue)
  }

  return [toMarkdownString(contents)]
}

/**
 * Convert an LSP hover to a Monaco editor hover.
 *
 * @param hover The LSP hover to convert.
 * @returns The hover as Monaco editor hover.
 */
export function toHover(hover: ls.Hover): monaco.languages.Hover {
  return {
    range: hover.range && toRange(hover.range),
    contents: toHoverContents(hover.contents)
  }
}
