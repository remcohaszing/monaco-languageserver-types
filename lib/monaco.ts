import { type MonacoEditor } from 'monaco-types'

let monacoEditor: MonacoEditor | undefined

/**
 * Get the Monaco editor module
 *
 * @returns The Monaco editor module
 */
export function getMonaco(): MonacoEditor {
  if (!monacoEditor) {
    throw new Error('Monaco is undefined. Call setMonaco(monaco) first.')
  }
  return monacoEditor
}

/**
 * Set the Monaco editor module to use.
 *
 * @param monaco The Monaco editor module
 */
export function setMonaco(monaco: MonacoEditor): void {
  monacoEditor = monaco
}
