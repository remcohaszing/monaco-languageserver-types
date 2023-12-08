import type * as monaco from 'monaco-types'
import { type Writable } from 'type-fest'
import type * as ls from 'vscode-languageserver-protocol'

/**
 * Convert Monaco editor semantic tokens to LSP semantic tokens.
 *
 * @param semanticTokens
 *   The Monaco semantic tokens to convert.
 * @returns
 *   The semantic tokens as LSP semantic tokens.
 */
export function fromSemanticTokens(
  semanticTokens: monaco.languages.SemanticTokens
): ls.SemanticTokens {
  const result: ls.SemanticTokens = {
    data: [...semanticTokens.data]
  }

  if (semanticTokens.resultId != null) {
    result.resultId = semanticTokens.resultId
  }

  return result
}

/**
 * Convert LSP semantic tokens to Monaco editor semantic tokens.
 *
 * @param semanticTokens
 *   The LSP semantic tokens to convert.
 * @returns
 *   The semantic tokens as Monaco editor semantic tokens.
 */
export function toSemanticTokens(
  semanticTokens: ls.SemanticTokens
): monaco.languages.SemanticTokens {
  const result: Writable<monaco.languages.SemanticTokens> = {
    data: Uint32Array.from(semanticTokens.data)
  }

  if (semanticTokens.resultId != null) {
    result.resultId = semanticTokens.resultId
  }

  return result
}
