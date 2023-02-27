// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let monacoEditor: typeof import('monaco-editor') | undefined

/**
 * Get the Monaco editor module
 *
 * @returns The Monaco editor module
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export function getMonaco(): typeof import('monaco-editor') {
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
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export function setMonaco(monaco: typeof import('monaco-editor')): void {
  monacoEditor = monaco
}
