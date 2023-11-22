# monaco-languageserver-types

[![github actions](https://github.com/remcohaszing/monaco-languageserver-types/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/monaco-languageserver-types/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/monaco-languageserver-types)](https://www.npmjs.com/package/monaco-languageserver-types)
[![npm downloads](https://img.shields.io/npm/dm/monaco-languageserver-types)](https://www.npmjs.com/package/monaco-languageserver-types)
[![codecov](https://codecov.io/gh/remcohaszing/monaco-languageserver-types/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/monaco-languageserver-types)

Convert between language server types and [Monaco editor](https://microsoft.github.io/monaco-editor)
types.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

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

For example:

```typescript
import type * as monaco from 'monaco-editor'
import { fromRange, toRange } from 'monaco-languageserver-types'

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

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
