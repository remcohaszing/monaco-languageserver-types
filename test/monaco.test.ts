import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import type { MonacoEditor } from 'monaco-types'
import { afterEach, expect, test } from 'vitest'

import { setMonaco } from '../index.js'
import { getMonaco } from '../lib/monaco.js'

afterEach(() => {
  setMonaco(monaco)
})

test('getMonaco() defined', () => {
  setMonaco(monaco)

  expect(getMonaco()).toBe(monaco)
})

test('getMonaco() undefined', () => {
  setMonaco(undefined as unknown as MonacoEditor)

  expect(() => getMonaco()).toThrowError(
    new Error('Monaco is undefined. Call setMonaco(monaco) first.')
  )
})
