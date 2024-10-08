import type * as monaco from 'monaco-types'
import type * as lsp from 'vscode-languageserver-protocol'

import { fromInlayHintKind, toInlayHintKind } from './inlay-hint-kind.js'
import { fromInlayHintLabelPart, toInlayHintLabelPart } from './inlay-hint-label-part.js'
import { fromMarkdownString, toMarkdownString } from './markdown-string.js'
import { fromPosition, toPosition } from './position.js'
import { fromTextEdit, toTextEdit } from './text-edit.js'

/**
 * Convert a Monaco editor inlay hint to an LSP inlay hint.
 *
 * @param inlayHint
 *   The Monaco inlay hint to convert.
 * @returns
 *   The inlay hint as an LSP inlay hint.
 */
export function fromInlayHint(inlayHint: monaco.languages.InlayHint): lsp.InlayHint {
  const result: lsp.InlayHint = {
    label:
      typeof inlayHint.label === 'string'
        ? inlayHint.label
        : inlayHint.label.map(fromInlayHintLabelPart),
    position: fromPosition(inlayHint.position)
  }

  if (inlayHint.kind != null) {
    result.kind = fromInlayHintKind(inlayHint.kind)
  }

  if (inlayHint.paddingLeft != null) {
    result.paddingLeft = inlayHint.paddingLeft
  }

  if (inlayHint.paddingRight != null) {
    result.paddingRight = inlayHint.paddingRight
  }

  if (inlayHint.textEdits) {
    result.textEdits = inlayHint.textEdits.map(fromTextEdit)
  }

  if (typeof inlayHint.tooltip === 'string') {
    result.tooltip = inlayHint.tooltip
  } else if (inlayHint.tooltip) {
    result.tooltip = fromMarkdownString(inlayHint.tooltip)
  }

  return result
}

/**
 * Convert an LSP inlay hint to a Monaco editor inlay hint.
 *
 * @param inlayHint
 *   The LSP inlay hint to convert.
 * @returns
 *   The inlay hint as Monaco editor inlay hint.
 */
export function toInlayHint(inlayHint: lsp.InlayHint): monaco.languages.InlayHint {
  const result: monaco.languages.InlayHint = {
    label:
      typeof inlayHint.label === 'string'
        ? inlayHint.label
        : inlayHint.label.map(toInlayHintLabelPart),
    position: toPosition(inlayHint.position)
  }

  if (inlayHint.kind != null) {
    result.kind = toInlayHintKind(inlayHint.kind)
  }

  if (inlayHint.paddingLeft != null) {
    result.paddingLeft = inlayHint.paddingLeft
  }

  if (inlayHint.paddingRight != null) {
    result.paddingRight = inlayHint.paddingRight
  }

  if (inlayHint.textEdits) {
    result.textEdits = inlayHint.textEdits.map(toTextEdit)
  }

  if (typeof inlayHint.tooltip === 'string') {
    result.tooltip = inlayHint.tooltip
  } else if (inlayHint.tooltip) {
    result.tooltip = toMarkdownString(inlayHint.tooltip)
  }

  return result
}
