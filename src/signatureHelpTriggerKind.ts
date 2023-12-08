import type * as monaco from 'monaco-types'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert a Monaco editor signature help trigger kind to an LSP signature help trigger kind.
 *
 * @param signatureHelpTriggerKind
 *   The Monaco signature help trigger kind to convert.
 * @returns
 *   The signature help trigger kind as an LSP signature help trigger kind.
 */
export function fromSignatureHelpTriggerKind(
  signatureHelpTriggerKind: monaco.languages.SignatureHelpTriggerKind
): ls.SignatureHelpTriggerKind {
  return signatureHelpTriggerKind
}

/**
 * Convert an LSP signature help trigger kind to a Monaco editor signature help trigger kind.
 *
 * @param signatureHelpTriggerKind
 *   The LSP signature help trigger kind to convert.
 * @returns
 *   The signature help trigger kind as Monaco editor signature help trigger kind.
 */
export function toSignatureHelpTriggerKind(
  signatureHelpTriggerKind: ls.SignatureHelpTriggerKind
): monaco.languages.SignatureHelpTriggerKind {
  return signatureHelpTriggerKind
}
