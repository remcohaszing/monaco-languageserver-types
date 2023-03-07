# monaco-languageserver-types

[![github actions](https://github.com/remcohaszing/monaco-languageserver-types/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/monaco-languageserver-types/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/monaco-languageserver-types)](https://www.npmjs.com/package/monaco-languageserver-types)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![codecov](https://codecov.io/gh/remcohaszing/monaco-languageserver-types/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/monaco-languageserver-types)

Convert between language server types and [Monaco editor](https://microsoft.github.io/monaco-editor)
types.

## Installation

```sh
npm install monaco-languageserver-types
```

## Usage

This package exports function to convert language server types to Monaco editor types and vise
versa. It does so without importing `monaco-editor` or `vscode-languageserver-protocol`, meaning it
has no runtime dependencies.

For each Monaco editor / language server type, there are two functions:

- `from*` converts a value from a Monaco editor type to a language server type.
- `to*` converts a value from a language server type to a Monaco editor type.

Some types require the Monaco editor module. However, users may load Monaco from different sources.
To support this, you should call `setMonaco(monaco)` once in your application.

For example:

```typescript
import * as monaco from 'monaco-editor'
import { fromRange, setMonaco, toRange } from 'monaco-languageserver-types'

setMonaco(monaco)

const monacoRange: monaco.IRange = {
  startLineNumber: 1,
  startColumn: 2,
  endLineNumber: 3,
  endColumn: 4
}

const lsRange = fromRange(monacoRange)
// { start: { line: 0, column: 1 }, end: { line: 2, column: 3 } }

console.log(toRange(lsRange))
// { startLineNumber: 1, startColumn: 2, endLineNumber: 3, endColumn: 4 }
```

## License

[MIT](LICENSE.md) @ [Remco Haszing](https://github.com/remcohaszing)
