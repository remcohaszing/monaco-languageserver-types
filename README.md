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
- [API](#api)
  - [`fromCodeAction(codeAction)`](#fromcodeactioncodeaction)
  - [`fromCodeActionContext(codeActionContext)`](#fromcodeactioncontextcodeactioncontext)
  - [`fromCodeActionTriggerType(type)`](#fromcodeactiontriggertypetype)
  - [`fromCodeLens(codeLens)`](#fromcodelenscodelens)
  - [`fromColor(color)`](#fromcolorcolor)
  - [`fromColorInformation(colorInformation)`](#fromcolorinformationcolorinformation)
  - [`fromColorPresentation(colorPresentation)`](#fromcolorpresentationcolorpresentation)
  - [`fromCommand(command)`](#fromcommandcommand)
  - [`fromCompletionContext(completionContext)`](#fromcompletioncontextcompletioncontext)
  - [`fromCompletionItem(completionItem)`](#fromcompletionitemcompletionitem)
  - [`fromCompletionItemKind(kind)`](#fromcompletionitemkindkind)
  - [`fromCompletionItemTag(tag)`](#fromcompletionitemtagtag)
  - [`fromCompletionList(completionList)`](#fromcompletionlistcompletionlist)
  - [`fromCompletionTriggerKind(kind)`](#fromcompletiontriggerkindkind)
  - [`fromDefinition(definition)`](#fromdefinitiondefinition)
  - [`fromDocumentHighlight(documentHighlight)`](#fromdocumenthighlightdocumenthighlight)
  - [`fromDocumentHighlightKind(kind)`](#fromdocumenthighlightkindkind)
  - [`fromDocumentSymbol(documentSymbol)`](#fromdocumentsymboldocumentsymbol)
  - [`fromFoldingRange(foldingRange)`](#fromfoldingrangefoldingrange)
  - [`fromFormattingOptions(formattingOptions)`](#fromformattingoptionsformattingoptions)
  - [`fromHover(hover)`](#fromhoverhover)
  - [`fromInlayHint(inlayHint)`](#frominlayhintinlayhint)
  - [`fromInlayHintKind(inlayHintKind)`](#frominlayhintkindinlayhintkind)
  - [`fromInlayHintLabelPart(inlayHintLabelPart)`](#frominlayhintlabelpartinlayhintlabelpart)
  - [`fromLanguageFilter(languageFilter)`](#fromlanguagefilterlanguagefilter)
  - [`fromLink(link)`](#fromlinklink)
  - [`fromLinkedEditingRanges(linkedEditingRanges)`](#fromlinkededitingrangeslinkededitingranges)
  - [`fromLocation(location)`](#fromlocationlocation)
  - [`fromLocationLink(locationLink)`](#fromlocationlinklocationlink)
  - [`fromMarkdownString(markdownString)`](#frommarkdownstringmarkdownstring)
  - [`fromMarkerData(markerData)`](#frommarkerdatamarkerdata)
  - [`fromMarkerSeverity(severity)`](#frommarkerseverityseverity)
  - [`fromMarkerTag(tag)`](#frommarkertagtag)
  - [`fromParameterInformation(parameterInformation)`](#fromparameterinformationparameterinformation)
  - [`fromPosition(position)`](#frompositionposition)
  - [`fromRange(range)`](#fromrangerange)
  - [`fromRelativePattern(relativePattern)`](#fromrelativepatternrelativepattern)
  - [`fromRelatedInformation(relatedInformation)`](#fromrelatedinformationrelatedinformation)
  - [`fromSelectionRanges(selectionRanges)`](#fromselectionrangesselectionranges)
  - [`fromSemanticTokens(semanticTokens)`](#fromsemantictokenssemantictokens)
  - [`fromSemanticTokensEdit(semanticTokensEdit)`](#fromsemantictokenseditsemantictokensedit)
  - [`fromSemanticTokensEdits(semanticTokensEdits)`](#fromsemantictokenseditssemantictokensedits)
  - [`fromSignatureHelp(signatureHelp)`](#fromsignaturehelpsignaturehelp)
  - [`fromSignatureHelpContext(signatureHelpContext)`](#fromsignaturehelpcontextsignaturehelpcontext)
  - [`fromSignatureHelpTriggerKind(signatureHelpTriggerKind)`](#fromsignaturehelptriggerkindsignaturehelptriggerkind)
  - [`fromSignatureInformation(signatureInformation)`](#fromsignatureinformationsignatureinformation)
  - [`fromSingleEditOperation(singleEditOperation)`](#fromsingleeditoperationsingleeditoperation)
  - [`fromSymbolKind(symbolKind)`](#fromsymbolkindsymbolkind)
  - [`fromSymbolTag(symbolTag)`](#fromsymboltagsymboltag)
  - [`fromTextEdit(textEdit)`](#fromtextedittextedit)
  - [`fromWorkspaceEdit(workspaceEdit)`](#fromworkspaceeditworkspaceedit)
  - [`fromWorkspaceEditMetadata(workspaceEditMetadata)`](#fromworkspaceeditmetadataworkspaceeditmetadata)
  - [`fromWorkspaceFileEdit(workspaceFileEdit)`](#fromworkspacefileeditworkspacefileedit)
  - [`fromWorkspaceFileEditOptions(options)`](#fromworkspacefileeditoptionsoptions)
  - [`toCodeAction(codeAction)`](#tocodeactioncodeaction)
  - [`toCodeActionContext(codeActionContext)`](#tocodeactioncontextcodeactioncontext)
  - [`toCodeActionTriggerType(kind)`](#tocodeactiontriggertypekind)
  - [`toCodeLens(codeLens)`](#tocodelenscodelens)
  - [`toColor(color)`](#tocolorcolor)
  - [`toColorInformation(colorInformation)`](#tocolorinformationcolorinformation)
  - [`toColorPresentation(colorPresentation)`](#tocolorpresentationcolorpresentation)
  - [`toCommand(command)`](#tocommandcommand)
  - [`toCompletionContext(completionContext)`](#tocompletioncontextcompletioncontext)
  - [`toCompletionItem(completionItem, options)`](#tocompletionitemcompletionitem-options)
  - [`toCompletionItemKind(kind)`](#tocompletionitemkindkind)
  - [`toCompletionItemTag(tag)`](#tocompletionitemtagtag)
  - [`toCompletionList(completionList, options)`](#tocompletionlistcompletionlist-options)
  - [`toCompletionTriggerKind(kind)`](#tocompletiontriggerkindkind)
  - [`toDefinition(definition)`](#todefinitiondefinition)
  - [`toDocumentHighlight(documentHighlight)`](#todocumenthighlightdocumenthighlight)
  - [`toDocumentHighlightKind(kind)`](#todocumenthighlightkindkind)
  - [`toDocumentSymbol(documentSymbol)`](#todocumentsymboldocumentsymbol)
  - [`toFoldingRange(foldingRange)`](#tofoldingrangefoldingrange)
  - [`toFormattingOptions(formattingOptions)`](#toformattingoptionsformattingoptions)
  - [`toHover(hover)`](#tohoverhover)
  - [`toInlayHint(inlayHint)`](#toinlayhintinlayhint)
  - [`toInlayHintKind(inlayHintKind)`](#toinlayhintkindinlayhintkind)
  - [`toInlayHintLabelPart(inlayHintLabelPart)`](#toinlayhintlabelpartinlayhintlabelpart)
  - [`toLanguageFilter(filter)`](#tolanguagefilterfilter)
  - [`toLink(documentLink)`](#tolinkdocumentlink)
  - [`toLinkedEditingRanges(linkedEditingRanges)`](#tolinkededitingrangeslinkededitingranges)
  - [`toLocation(location)`](#tolocationlocation)
  - [`toLocationLink(locationLink)`](#tolocationlinklocationlink)
  - [`toMarkdownString(markupContent)`](#tomarkdownstringmarkupcontent)
  - [`toMarkerData(diagnostic)`](#tomarkerdatadiagnostic)
  - [`toMarkerSeverity(severity)`](#tomarkerseverityseverity)
  - [`toMarkerTag(tag)`](#tomarkertagtag)
  - [`toParameterInformation(parameterInformation)`](#toparameterinformationparameterinformation)
  - [`toPosition(position)`](#topositionposition)
  - [`toRange(range)`](#torangerange)
  - [`toRelativePattern(relativePattern)`](#torelativepatternrelativepattern)
  - [`toRelatedInformation(relatedInformation)`](#torelatedinformationrelatedinformation)
  - [`toSelectionRanges(selectionRange)`](#toselectionrangesselectionrange)
  - [`toSemanticTokens(semanticTokens)`](#tosemantictokenssemantictokens)
  - [`toSemanticTokensEdit(semanticTokensEdit)`](#tosemantictokenseditsemantictokensedit)
  - [`toSemanticTokensEdits(semanticTokensDelta)`](#tosemantictokenseditssemantictokensdelta)
  - [`toSignatureHelp(signatureHelp)`](#tosignaturehelpsignaturehelp)
  - [`toSignatureHelpContext(signatureHelpContext)`](#tosignaturehelpcontextsignaturehelpcontext)
  - [`toSignatureHelpTriggerKind(signatureHelpTriggerKind)`](#tosignaturehelptriggerkindsignaturehelptriggerkind)
  - [`toSignatureInformation(signatureInformation)`](#tosignatureinformationsignatureinformation)
  - [`toSingleEditOperation(textEdit)`](#tosingleeditoperationtextedit)
  - [`toSymbolKind(symbolKind)`](#tosymbolkindsymbolkind)
  - [`toSymbolTag(symbolTag)`](#tosymboltagsymboltag)
  - [`toTextEdit(textEdit)`](#totextedittextedit)
  - [`toWorkspaceEdit(workspaceEdit)`](#toworkspaceeditworkspaceedit)
  - [`toWorkspaceEditMetadata(changeAnnotation)`](#toworkspaceeditmetadatachangeannotation)
  - [`toWorkspaceFileEdit(workspaceFileEdit)`](#toworkspacefileeditworkspacefileedit)
  - [`toWorkspaceFileEditOptions(options)`](#toworkspacefileeditoptionsoptions)
- [License](#license)

## Installation

```sh
npm install monaco-languageserver-types
```

## Usage

This package exports function to convert language server types to Monaco editor types and vise
versa. It does so without importing `monaco-editor` or `vscode-languageserver-protocol`.

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

## API

### `fromCodeAction(codeAction)`

Convert a Monaco editor code action to an LSP code action.

#### Parameters

- `codeAction`
  ([`monaco.languages.CodeAction`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeAction))
  — the Monaco code action to convert

#### Returns

The code action as an LSP code action
([`lsp.CodeAction`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeAction)).

### `fromCodeActionContext(codeActionContext)`

Convert a Monaco editor code action context to an LSP code action context.

#### Parameters

- `codeActionContext`
  ([`monaco.languages.CodeActionContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeActionContext))
  — the Monaco code action context to convert

#### Returns

The code action context as an LSP code action context
([`lsp.CodeActionContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeActionContext)).

### `fromCodeActionTriggerType(type)`

Convert a Monaco editor code action trigger type to an LSP completion item kind.

#### Parameters

- `type`
  ([`monaco.languages.CodeActionTriggerType`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeActionTriggerType))
  — the Monaco code action trigger type to convert

#### Returns

The code action trigger type as an LSP completion item kind
([`lsp.CodeActionTriggerKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeActionTriggerKind)).

### `fromCodeLens(codeLens)`

Convert a Monaco editor code lens to an LSP code lens.

#### Parameters

- `codeLens`
  ([`monaco.languages.CodeLens`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeLens))
  — the Monaco code lens to convert

#### Returns

The code lens as an LSP code lens
([`lsp.CodeLens`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeLens)).

### `fromColor(color)`

Convert a Monaco editor color to an LSP color.

#### Parameters

- `color`
  ([`monaco.languages.IColor`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColor))
  — the Monaco color to convert

#### Returns

The color as an LSP color
([`lsp.Color`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#color)).

### `fromColorInformation(colorInformation)`

Convert a Monaco editor color information to an LSP color information.

#### Parameters

- `colorInformation`
  ([`monaco.languages.IColorInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColorInformation))
  — the Monaco color information to convert

#### Returns

The color information as an LSP color information
([`lsp.ColorInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#colorInformation)).

### `fromColorPresentation(colorPresentation)`

Convert a Monaco editor color presentation to an LSP color presentation.

#### Parameters

- `colorPresentation`
  ([`monaco.languages.IColorPresentation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColorPresentation))
  — the Monaco color presentation to convert

#### Returns

The color presentation as an LSP color presentation
([`lsp.ColorPresentation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#colorPresentation)).

### `fromCommand(command)`

Convert a Monaco editor command to an LSP command.

#### Parameters

- `command`
  ([`monaco.languages.Command`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Command))
  — the Monaco command to convert

#### Returns

The command as an LSP command
([`lsp.Command`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#command)).

### `fromCompletionContext(completionContext)`

Convert a Monaco editor completion context to an LSP completion context.

#### Parameters

- `completionContext`
  ([`monaco.languages.CompletionContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionContext))
  — the Monaco completion context to convert

#### Returns

The completion context as an LSP completion context
([`lsp.CompletionContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionContext)).

### `fromCompletionItem(completionItem)`

Convert a Monaco editor completion item to an LSP completion item.

#### Parameters

- `completionItem`
  ([`monaco.languages.CompletionItem`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItem))
  — the Monaco completion item to convert

#### Returns

The completion item as an LSP completion item
([`lsp.CompletionItem`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItem)).

### `fromCompletionItemKind(kind)`

Convert a Monaco editor completion item kind to an LSP completion item kind.

#### Parameters

- `kind`
  ([`monaco.languages.CompletionItemKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItemKind))
  — the Monaco completion item kind to convert

#### Returns

The completion item kind as an LSP completion item kind
([`lsp.CompletionItemKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItemKind)
\| `undefined`).

### `fromCompletionItemTag(tag)`

Convert a Monaco editor completion item tag to an LSP completion item tag.

#### Parameters

- `tag`
  ([`monaco.languages.CompletionItemTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItemTag))
  — the Monaco completion item tag to convert

#### Returns

The completion item tag as an LSP completion item tag
([`lsp.CompletionItemTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItemTag)).

### `fromCompletionList(completionList)`

Convert a Monaco editor completion list to an LSP completion list.

#### Parameters

- `completionList`
  ([`monaco.languages.CompletionList`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionList))
  — the Monaco completion list to convert

#### Returns

The completion list as an LSP completion list
([`lsp.CompletionList`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionList)).

### `fromCompletionTriggerKind(kind)`

Convert a Monaco editor completion trigger kind to an LSP completion trigger kind.

#### Parameters

- `kind`
  ([`monaco.languages.CompletionTriggerKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionTriggerKind))
  — the Monaco completion trigger kind to convert

#### Returns

The completion trigger kind as an LSP completion trigger kind
([`lsp.CompletionTriggerKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionTriggerKind)).

### `fromDefinition(definition)`

Convert a Monaco editor definition to an LSP definition.

#### Parameters

- `definition`
  ([`monaco.languages.Definition`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Definition))
  — the Monaco definition to convert

#### Returns

The definition as an LSP definition
([`lsp.Definition`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#definition)).

### `fromDocumentHighlight(documentHighlight)`

Convert a Monaco editor document highlight to an LSP document highlight.

#### Parameters

- `documentHighlight`
  ([`monaco.languages.DocumentHighlight`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentHighlight))
  — the Monaco document highlight to convert

#### Returns

The document highlight as an LSP document highlight
([`lsp.DocumentHighlight`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentHighlight)).

### `fromDocumentHighlightKind(kind)`

Convert a Monaco editor document highlight kind to an LSP document highlight kind.

#### Parameters

- `kind`
  ([`monaco.languages.DocumentHighlightKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentHighlightKind))
  — the Monaco document highlight kind to convert

#### Returns

The document highlight kind as an LSP document highlight kind
([`lsp.DocumentHighlightKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentHighlightKind)).

### `fromDocumentSymbol(documentSymbol)`

Convert a Monaco editor document symbol to an LSP document symbol.

#### Parameters

- `documentSymbol`
  ([`monaco.languages.DocumentSymbol`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentSymbol))
  — the Monaco document symbol to convert

#### Returns

The document symbol as an LSP document symbol
([`lsp.DocumentSymbol`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentSymbol)).

### `fromFoldingRange(foldingRange)`

Convert a Monaco editor folding range to an LSP folding range.

#### Parameters

- `foldingRange`
  ([`monaco.languages.FoldingRange`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.FoldingRange))
  — the Monaco folding range to convert

#### Returns

The folding range as an LSP folding range
([`lsp.FoldingRange`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#foldingRange)).

### `fromFormattingOptions(formattingOptions)`

Convert a Monaco editor formatting options to an LSP formatting options.

#### Parameters

- `formattingOptions`
  ([`monaco.languages.FormattingOptions`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.FormattingOptions))
  — the Monaco formatting options to convert

#### Returns

The formatting options as an LSP formatting options
([`lsp.FormattingOptions`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#formattingOptions)).

### `fromHover(hover)`

Convert a Monaco editor hover to an LSP hover.

#### Parameters

- `hover`
  ([`monaco.languages.Hover`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Hover))
  — the Monaco hover to convert

#### Returns

The hover as an LSP hover
([`lsp.Hover`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#hover)).

### `fromInlayHint(inlayHint)`

Convert a Monaco editor inlay hint to an LSP inlay hint.

#### Parameters

- `inlayHint`
  ([`monaco.languages.InlayHint`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHint))
  — the Monaco inlay hint to convert

#### Returns

The inlay hint as an LSP inlay hint
([`lsp.InlayHint`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHint)).

### `fromInlayHintKind(inlayHintKind)`

Convert a Monaco editor inlay hint kind to an LSP inlay hint kind.

#### Parameters

- `inlayHintKind`
  ([`monaco.languages.InlayHintKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHintKind))
  — the Monaco inlay hint kind to convert

#### Returns

The inlay hint kind as an LSP inlay hint kind
([`lsp.InlayHintKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHintKind)).

### `fromInlayHintLabelPart(inlayHintLabelPart)`

Convert a Monaco editor inlay hint label part to an LSP inlay hint label part.

#### Parameters

- `inlayHintLabelPart`
  ([`monaco.languages.InlayHintLabelPart`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHintLabelPart))
  — the Monaco inlay hint label part to convert

#### Returns

The inlay hint label part as an LSP inlay hint label part
([`lsp.InlayHintPart`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHintPart)).

### `fromLanguageFilter(languageFilter)`

Convert a Monaco editor language filter to an LSP document link.

#### Parameters

- `languageFilter`
  ([`monaco.languages.LanguageFilter`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LanguageFilter))
  — the Monaco language filter to convert

#### Returns

The language filter as an LSP notebook document filter
([`lsp.NotebookDocumentFilter`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#notebookDocumentFilter))
or text document filter
([`lsp.TextDocumentFilter`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocumentFilter)).

### `fromLink(link)`

Convert a Monaco editor link to an LSP document link.

#### Parameters

- `link`
  ([`monaco.languages.ILink`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.ILink))
  — the Monaco link to convert

#### Returns

The link as an LSP document link
([`lsp.DocumentLink`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentLink)).

### `fromLinkedEditingRanges(linkedEditingRanges)`

Convert Monaco editor linked editing ranges to LSP linked editing ranges.

#### Parameters

- `linkedEditingRanges`
  ([`monaco.languages.LinkedEditingRanges`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LinkedEditingRanges))
  — the Monaco linked editing ranges to convert

#### Returns

The linked editing ranges as LSP linked editing ranges
([`lsp.LinkedEditingRanges`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#linkedEditingRanges)).

### `fromLocation(location)`

Convert a Monaco editor location to an LSP location.

#### Parameters

- `location`
  ([`monaco.languages.Location`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Location))
  — the Monaco location to convert

#### Returns

The location as an LSP location
([`lsp.Location`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#location)).

### `fromLocationLink(locationLink)`

Convert a Monaco editor location link to an LSP location link.

#### Parameters

- `locationLink`
  ([`monaco.languages.LocationLink`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LocationLink))
  — the Monaco location link to convert

#### Returns

The location link as an LSP location link
([`lsp.LocationLink`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#locationLink)).

### `fromMarkdownString(markdownString)`

Convert a Monaco editor markdown string to an LSP markup content.

#### Parameters

- `markdownString`
  ([`monaco.IMarkdownString`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IMarkdownString))
  — the Monaco markdown string to convert

#### Returns

The markdown string as an LSP markup content
([`lsp.MarkupContent`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#markupContent)).

### `fromMarkerData(markerData)`

Convert a Monaco editor marker data to an LSP diagnostic.

#### Parameters

- `markerData`
  ([`monaco.editor.IMarkerData`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IMarkerData))
  — the Monaco marker data to convert

#### Returns

The marker data as an LSP diagnostic
([`lsp.Diagnostic`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnostic)).

### `fromMarkerSeverity(severity)`

Convert a Monaco editor marker severity to an LSP diagnostic severity.

#### Parameters

- `severity`
  ([`monaco.MarkerSeverity`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.MarkerSeverity))
  — the Monaco marker severity to convert

#### Returns

The marker severity as an LSP diagnostic severity
([`lsp.DiagnosticSeverity`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticSeverity)).

### `fromMarkerTag(tag)`

Convert a Monaco editor marker tag to an LSP diagnostic tag.

#### Parameters

- `tag`
  ([`monaco.MarkerTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.MarkerTag))
  — the Monaco marker tag to convert

#### Returns

The marker tag as an LSP diagnostic tag
([`lsp.DiagnosticTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticTag)).

### `fromParameterInformation(parameterInformation)`

Convert a Monaco editor parameter information to an LSP parameter information.

#### Parameters

- `parameterInformation`
  ([`monaco.languages.ParameterInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.ParameterInformation))
  — the Monaco parameter information to convert

#### Returns

The parameter information as an LSP parameter information
([`lsp.ParameterInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#parameterInformation)).

### `fromPosition(position)`

Convert a Monaco editor position to an LSP range.

#### Parameters

- `position`
  ([`monaco.IPosition`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IPosition))
  — the Monaco position to convert

#### Returns

The position as an LSP position
([`lsp.Position`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#position)).

### `fromRange(range)`

Convert a Monaco editor range to an LSP range.

#### Parameters

- `range`
  ([`monaco.IRange`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IRange))
  — the Monaco range to convert

#### Returns

The range as an LSP range
([`lsp.Range`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#range)).

### `fromRelativePattern(relativePattern)`

Convert a Monaco editor relative pattern to an LSP relative pattern.

#### Parameters

- `relativePattern`
  ([`monaco.editor.IRelativePattern`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IRelativePattern))
  — the Monaco relative pattern to convert

#### Returns

The relative pattern as an LSP relative pattern.
([`lsp.RelativePattern`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#telativePattern)).

### `fromRelatedInformation(relatedInformation)`

Convert a Monaco editor related information to an LSP diagnostic related information.

#### Parameters

- `relatedInformation`
  ([`monaco.editor.IRelatedInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IRelatedInformation))
  — the Monaco related information to convert

#### Returns

The related information as an LSP diagnostic related information
([`lsp.DiagnosticRelatedInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticRelatedInformation)).

### `fromSelectionRanges(selectionRanges)`

Convert Monaco editor selection ranges to an LSP selection range.

#### Parameters

- `selectionRanges`
  ([`monaco.languages.SelectionRange[]`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SelectionRange[]))
  — the Monaco selection ranges to convert

#### Returns

The selection range as an LSP selection range
([`lsp.SelectionRange`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#selectionRange)).

### `fromSemanticTokens(semanticTokens)`

Convert Monaco editor semantic tokens to LSP semantic tokens.

#### Parameters

- `semanticTokens`
  ([`monaco.languages.SemanticTokens`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokens))
  — the Monaco semantic tokens to convert

#### Returns

The semantic tokens as LSP semantic tokens
([`lsp.SemanticTokens`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokens)).

### `fromSemanticTokensEdit(semanticTokensEdit)`

Convert Monaco editor semantic tokens to LSP semantic tokens.

#### Parameters

- `semanticTokensEdit`
  ([`monaco.languages.SemanticTokensEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokensEdit))
  — the Monaco semantic tokens to convert

#### Returns

The semantic tokens as LSP semantic tokens
([`lsp.SemanticTokensEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokensEdit)).

### `fromSemanticTokensEdits(semanticTokensEdits)`

Convert Monaco editsor semantic tokens edits to an LSP semantic tokens delta.

#### Parameters

- `semanticTokensEdits`
  ([`monaco.languages.SemanticTokensEdits`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokensEdits))
  — the Monaco semantic tokens edits to convert

#### Returns

The semantic tokens edits as an LSP semantic tokens delta
([`lsp.SemanticTokensDelta`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokensDelta)).

### `fromSignatureHelp(signatureHelp)`

Convert a Monaco editor signature help to an LSP signature help.

#### Parameters

- `signatureHelp`
  ([`monaco.languages.SignatureHelp`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelp))
  — the Monaco signature help to convert

#### Returns

The signature help as an LSP signature help
([`lsp.SignatureHelp`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelp)).

### `fromSignatureHelpContext(signatureHelpContext)`

Convert a Monaco editor signature help context to an LSP signature help context.

#### Parameters

- `signatureHelpContext`
  ([`monaco.languages.SignatureHelpContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelpContext))
  — the Monaco signature help context to convert

#### Returns

The signature help context as an LSP signature help context
([`lsp.SignatureHelpContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelpContext)).

### `fromSignatureHelpTriggerKind(signatureHelpTriggerKind)`

Convert a Monaco editor signature help trigger kind to an LSP signature help trigger kind.

#### Parameters

- `signatureHelpTriggerKind`
  ([`monaco.languages.SignatureHelpTriggerKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelpTriggerKind))
  — the Monaco signature help trigger kind to convert

#### Returns

The signature help trigger kind as an LSP signature help trigger kind
([`lsp.SignatureHelpTriggerKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelpTriggerKind)).

### `fromSignatureInformation(signatureInformation)`

Convert a Monaco editor signature information to an LSP signature information.

#### Parameters

- `signatureInformation`
  ([`monaco.languages.SignatureInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureInformation))
  — the Monaco signature information to convert

#### Returns

The signature information as an LSP signature information
([`lsp.SignatureInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureInformation)).

### `fromSingleEditOperation(singleEditOperation)`

Convert a Monaco editor single edit operation to an LSP text edit.

#### Parameters

- `singleEditOperation`
  ([`monaco.editor.ISingleEditOperation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.ISingleEditOperation))
  — the Monaco single edit operation to convert

#### Returns

The single edit operation as an LSP text edit
([`lsp.TextEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textEdit)).

### `fromSymbolKind(symbolKind)`

Convert a Monaco editor symbol kind to an LSP symbol kind.

#### Parameters

- `symbolKind`
  ([`monaco.languages.SymbolKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SymbolKind))
  — the Monaco symbol kind to convert

#### Returns

The symbol kind as an LSP symbol kind
([`lsp.SymbolKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#symbolKind)).

### `fromSymbolTag(symbolTag)`

Convert a Monaco editor symbol tag to an LSP symbol tag.

#### Parameters

- `symbolTag`
  ([`monaco.languages.SymbolTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SymbolTag))
  — the Monaco symbol tag to convert

#### Returns

The symbol tag as an LSP symbol tag
([`lsp.SymbolTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#symbolTag)).

### `fromTextEdit(textEdit)`

Convert a Monaco editor text edit to an LSP text edit.

#### Parameters

- `textEdit`
  ([`monaco.languages.TextEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.TextEdit))
  — the Monaco text edit to convert

#### Returns

The text edit as an LSP text edit
([`lsp.TextEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textEdit)).

### `fromWorkspaceEdit(workspaceEdit)`

Convert a Monaco editor workspace edit to an LSP workspace edit.

#### Parameters

- `workspaceEdit`
  ([`monaco.languages.WorkspaceEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceEdit))
  — the Monaco workspace edit to convert

#### Returns

The workspace edit as an LSP workspace edit
([`lsp.WorkspaceEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#workspaceEdit)).

### `fromWorkspaceEditMetadata(workspaceEditMetadata)`

Convert a Monaco editor workspace edit metadata to an LSP change annotation.

#### Parameters

- `workspaceEditMetadata`
  ([`monaco.languages.WorkspaceEditMetadata`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceEditMetadata))
  — the Monaco workspace edit to convert

#### Returns

The workspace edit metadata as an LSP change annotation
([`lsp.ChangeAnnotation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#changeAnnotation)).

### `fromWorkspaceFileEdit(workspaceFileEdit)`

Convert Monaco editor workspace file edit options to LSP workspace file edit options.

#### Parameters

- `workspaceFileEdit`
  ([`monaco.languages.IWorkspaceFileEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IWorkspaceFileEdit))
  — the Monaco workspace file edit options to convert

#### Returns

The range as LSP workspace file edit options
(\[`lsp.CreateFile | lsp.DeleteFile | lsp.RenameFile`]\(<https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#createFile>
\| lsp.DeleteFile | lsp.RenameFile)).

### `fromWorkspaceFileEditOptions(options)`

Convert Monaco editor workspace file edit options to LSP workspace file edit options.

#### Parameters

- `options`
  ([`monaco.languages.WorkspaceFileEditOptions`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceFileEditOptions))
  — the Monaco workspace file edit options to convert

#### Returns

The range as LSP workspace file edit options
(\[`lsp.CreateFileOptions & lsp.DeleteFileOptions & lsp.RenameFileOptions`]\(<https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#createFileOptions>
& lsp.DeleteFileOptions & lsp.RenameFileOptions)).

### `toCodeAction(codeAction)`

Convert an LSP code action to a Monaco editor code action.

#### Parameters

- `codeAction`
  ([`lsp.CodeAction`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeAction))
  — the LSP code action to convert

#### Returns

The code action as Monaco editor code action
([`monaco.languages.CodeAction`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeAction)).

### `toCodeActionContext(codeActionContext)`

Convert an LSP code action context to a Monaco editor code action context.

#### Parameters

- `codeActionContext`
  ([`lsp.CodeActionContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeActionContext))
  — the LSP code action context to convert

#### Returns

The code action context as Monaco editor code action context
([`monaco.languages.CodeActionContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeActionContext)).

### `toCodeActionTriggerType(kind)`

Convert an LSP completion item kind to a Monaco editor code action trigger type.

#### Parameters

- `kind`
  ([`lsp.CodeActionTriggerType`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeActionTriggerType))
  — the LSP completion item kind to convert

#### Returns

The completion item kind as Monaco editor code action trigger type
([`monaco.languages.CodeActionTriggerType`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeActionTriggerType)).

### `toCodeLens(codeLens)`

Convert an LSP code lens to a Monaco editor code lens.

#### Parameters

- `codeLens`
  ([`lsp.CodeLens`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#codeLens))
  — the LSP code lens to convert

#### Returns

The code lens as Monaco editor code lens
([`monaco.languages.CodeLens`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CodeLens)).

### `toColor(color)`

Convert an LSP color to a Monaco editor color.

#### Parameters

- `color`
  ([`lsp.Color`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#color))
  — the LSP color to convert

#### Returns

The color as Monaco editor color
([`monaco.languages.IColor`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColor)).

### `toColorInformation(colorInformation)`

Convert an LSP color information to a Monaco editor color information.

#### Parameters

- `colorInformation`
  ([`lsp.ColorInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#colorInformation))
  — the LSP color information to convert

#### Returns

The color information as Monaco editor color information
([`monaco.languages.IColorInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColorInformation)).

### `toColorPresentation(colorPresentation)`

Convert an LSP color presentation to a Monaco editor color presentation.

#### Parameters

- `colorPresentation`
  ([`lsp.ColorPresentation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#colorPresentation))
  — the LSP color presentation to convert

#### Returns

The color presentation as Monaco editor color presentation
([`monaco.languages.IColorPresentation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IColorPresentation)).

### `toCommand(command)`

Convert an LSP command to a Monaco editor command.

#### Parameters

- `command`
  ([`lsp.Command`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#command))
  — the LSP command to convert

#### Returns

The command as Monaco editor command
([`monaco.languages.Command`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Command)).

### `toCompletionContext(completionContext)`

Convert an LSP completion context to a Monaco editor completion context.

#### Parameters

- `completionContext`
  ([`lsp.CompletionContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionContext))
  — the LSP completion context to convert

#### Returns

The completion context as Monaco editor completion context
([`monaco.languages.CompletionContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionContext)).

### `toCompletionItem(completionItem, options)`

Convert an LSP completion item to a Monaco editor completion item.

#### Parameters

- `completionItem`
  ([`lsp.CompletionItem`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItem))
  — the LSP completion item to convert
- `options` (`ToCompletionItemOptions`) — additional options needed to construct the Monaco
  completion item

#### Returns

The completion item as Monaco editor completion item
([`monaco.languages.CompletionItem`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItem)).

### `toCompletionItemKind(kind)`

Convert an LSP completion item kind to a Monaco editor completion item kind.

#### Parameters

- `kind`
  ([`lsp.CompletionItemKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItemKind))
  — the LSP completion item kind to convert

#### Returns

The completion item kind as Monaco editor completion item kind
([`monaco.languages.CompletionItemKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItemKind)).

### `toCompletionItemTag(tag)`

Convert an LSP completion item tag to a Monaco editor completion item tag.

#### Parameters

- `tag`
  ([`lsp.CompletionItemTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionItemTag))
  — the LSP completion item tag to convert

#### Returns

The completion item tag as Monaco editor completion item tag
([`monaco.languages.CompletionItemTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionItemTag)).

### `toCompletionList(completionList, options)`

Convert an LSP completion list to a Monaco editor completion list.

#### Parameters

- `completionList`
  ([`lsp.CompletionList`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionList))
  — the LSP completion list to convert
- `options` (`ToCompletionListOptions`) — additional options needed to construct the Monaco
  completion list

#### Returns

The completion list as Monaco editor completion list
([`monaco.languages.CompletionList`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionList)).

### `toCompletionTriggerKind(kind)`

Convert an LSP completion trigger kind to a Monaco editor completion trigger kind.

#### Parameters

- `kind`
  ([`lsp.CompletionTriggerKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#completionTriggerKind))
  — the LSP completion trigger kind to convert

#### Returns

The completion trigger kind as Monaco editor completion trigger kind
([`monaco.languages.CompletionTriggerKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.CompletionTriggerKind)).

### `toDefinition(definition)`

Convert an LSP definition to a Monaco editor definition.

#### Parameters

- `definition`
  ([`lsp.Definition`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#definition))
  — the LSP definition to convert

#### Returns

The definition as Monaco editor definition
([`monaco.languages.Definition`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Definition)).

### `toDocumentHighlight(documentHighlight)`

Convert an LSP document highlight to a Monaco editor document highlight.

#### Parameters

- `documentHighlight`
  ([`lsp.DocumentHighlight`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentHighlight))
  — the LSP document highlight to convert

#### Returns

The document highlight as Monaco editor document highlight
([`monaco.languages.DocumentHighlight`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentHighlight)).

### `toDocumentHighlightKind(kind)`

Convert an LSP document highlight kind to a Monaco editor document highlight kind.

#### Parameters

- `kind`
  ([`lsp.DocumentHighlightKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentHighlightKind))
  — the LSP document highlight kind to convert

#### Returns

The document highlight kind as Monaco editor document highlight kind
([`monaco.languages.DocumentHighlightKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentHighlightKind)).

### `toDocumentSymbol(documentSymbol)`

Convert an LSP document symbol to a Monaco editor document symbol.

#### Parameters

- `documentSymbol`
  ([`lsp.DocumentSymbol`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentSymbol))
  — the LSP document symbol to convert

#### Returns

The document symbol as Monaco editor document symbol
([`monaco.languages.DocumentSymbol`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.DocumentSymbol)).

### `toFoldingRange(foldingRange)`

Convert an LSP folding range to a Monaco editor folding range.

#### Parameters

- `foldingRange`
  ([`lsp.FoldingRange`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#foldingRange))
  — the LSP folding range to convert

#### Returns

The folding range as Monaco editor folding range
([`monaco.languages.FoldingRange`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.FoldingRange)).

### `toFormattingOptions(formattingOptions)`

Convert an LSP formatting options to a Monaco editor formatting options.

#### Parameters

- `formattingOptions`
  ([`lsp.FormattingOptions`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#formattingOptions))
  — the LSP formatting options to convert

#### Returns

The formatting options as Monaco editor formatting options
([`monaco.languages.FormattingOptions`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.FormattingOptions)).

### `toHover(hover)`

Convert an LSP hover to a Monaco editor hover.

#### Parameters

- `hover`
  ([`lsp.Hover`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#hover))
  — the LSP hover to convert

#### Returns

The hover as Monaco editor hover
([`monaco.languages.Hover`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Hover)).

### `toInlayHint(inlayHint)`

Convert an LSP inlay hint to a Monaco editor inlay hint.

#### Parameters

- `inlayHint`
  ([`lsp.InlayHint`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHint))
  — the LSP inlay hint to convert

#### Returns

The inlay hint as Monaco editor inlay hint
([`monaco.languages.InlayHint`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHint)).

### `toInlayHintKind(inlayHintKind)`

Convert an LSP inlay hint kind to a Monaco editor inlay hint kind.

#### Parameters

- `inlayHintKind`
  ([`lsp.InlayHintKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHintKind))
  — the LSP inlay hint kind to convert

#### Returns

The inlay hint kind as Monaco editor inlay hint kind
([`monaco.languages.InlayHintKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHintKind)).

### `toInlayHintLabelPart(inlayHintLabelPart)`

Convert an LSP inlay hint label part to a Monaco editor inlay hint label part.

#### Parameters

- `inlayHintLabelPart`
  ([`lsp.InlayHintLabelPart`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#inlayHintLabelPart))
  — the LSP inlay hint label part to convert

#### Returns

The inlay hint label part as Monaco editor inlay hint label part
([`monaco.languages.InlayHintLabelPart`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.InlayHintLabelPart)).

### `toLanguageFilter(filter)`

Convert an LSP document link to a Monaco editor link.

#### Parameters

- `filter`
  ([`lsp.NotebookDocumentFilter`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#notebookDocumentFilter))
  |
  ([`lsp.TextDocumentFilter`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocumentFilter))
  — the LSP text document filter or notebook filter to convert

#### Returns

The text document filter or notebook filter as Monaco editor language filter
([`monaco.languages.LanguageFilter`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LanguageFilter)).

### `toLink(documentLink)`

Convert an LSP document link to a Monaco editor link.

#### Parameters

- `documentLink`
  ([`lsp.DocumentLink`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#documentLink))
  — the LSP document link to convert

#### Returns

The document link as Monaco editor link
([`monaco.languages.ILink`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.ILink)).

### `toLinkedEditingRanges(linkedEditingRanges)`

Convert LSP linked editing ranges to Monaco editor linked editing ranges.

#### Parameters

- `linkedEditingRanges`
  ([`lsp.LinkedEditingRanges`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#linkedEditingRanges))
  — the LSP linked editing ranges to convert

#### Returns

The linked editing ranges Monaco editor linked editing ranges
([`monaco.languages.LinkedEditingRanges`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LinkedEditingRanges)).

### `toLocation(location)`

Convert an LSP location to a Monaco editor location.

#### Parameters

- `location`
  ([`lsp.Location`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#location))
  — the LSP location to convert

#### Returns

The location as Monaco editor location
([`monaco.languages.Location`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.Location)).

### `toLocationLink(locationLink)`

Convert an LSP location link to a Monaco editor location link.

#### Parameters

- `locationLink`
  ([`lsp.LocationLink`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#locationLink))
  — the LSP location link to convert

#### Returns

The location link as Monaco editor location link
([`monaco.languages.LocationLink`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.LocationLink)).

### `toMarkdownString(markupContent)`

Convert an LSP markup content to a Monaco editor markdown string.

#### Parameters

- `markupContent`
  ([`lsp.MarkupContent`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#markupContent))
  — the LSP markup content to convert

#### Returns

The markup content as a Monaco editor markdown string
([`monaco.IMarkdownString`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IMarkdownString)).

### `toMarkerData(diagnostic)`

Convert an LSP diagnostic to a Monaco editor marker data.

#### Parameters

- `diagnostic`
  ([`lsp.Diagnostic`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnostic))
  — the LSP diagnostic to convert

#### Returns

The diagnostic as Monaco editor marker data
([`monaco.editor.IMarkerData`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IMarkerData)).

### `toMarkerSeverity(severity)`

Convert an LSP diagnostic severity to a Monaco editor marker severity.

#### Parameters

- `severity`
  ([`lsp.DiagnosticSeverity`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticSeverity))
  — the LSP diagnostic severity to convert

#### Returns

The diagnostic severity as Monaco editor marker severity
([`monaco.MarkerSeverity`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.MarkerSeverity)).

### `toMarkerTag(tag)`

Convert an LSP diagnostic tag to a Monaco editor marker tag.

#### Parameters

- `tag`
  ([`lsp.DiagnosticTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticTag))
  — the LSP diagnostic tag to convert

#### Returns

The diagnostic tag as Monaco editor marker tag
([`monaco.MarkerTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.MarkerTag)).

### `toParameterInformation(parameterInformation)`

Convert an LSP parameter information to a Monaco editor parameter information.

#### Parameters

- `parameterInformation`
  ([`lsp.ParameterInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#parameterInformation))
  — the LSP parameter information to convert

#### Returns

The parameter information as Monaco editor parameter information
([`monaco.languages.ParameterInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.ParameterInformation)).

### `toPosition(position)`

Convert an LSP position to a Monaco editor position.

#### Parameters

- `position`
  ([`lsp.Position`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#position))
  — the LSP position to convert

#### Returns

The position as Monaco editor position
([`monaco.IPosition`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IPosition)).

### `toRange(range)`

Convert an LSP range to a Monaco editor range.

#### Parameters

- `range`
  ([`lsp.Range`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#range))
  — the LSP range to convert

#### Returns

The range as Monaco editor range
([`monaco.IRange`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.IRange)).

### `toRelativePattern(relativePattern)`

Convert an LSP relative pattern to a Monaco editor relative pattern.

#### Parameters

- `relatedInformation`
  ([`lsp.RelativePattern`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#relativePattern))
  — the LSP relative pattern to convert

#### Returns

The relative pattern as Monaco editor relative pattern.
([`monaco.editor.IRelativePattern`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IRelativePattern)).

### `toRelatedInformation(relatedInformation)`

Convert an LSP diagnostic related information to a Monaco editor related information.

#### Parameters

- `relatedInformation`
  ([`lsp.DiagnosticRelatedInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#diagnosticRelatedInformation))
  — the LSP diagnostic related information to convert

#### Returns

The diagnostic related information as Monaco editor related information
([`monaco.editor.IRelatedInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.IRelatedInformation)).

### `toSelectionRanges(selectionRange)`

Convert an LSP selection range to Monaco editor selection ranges.

#### Parameters

- `selectionRange`
  ([`lsp.SelectionRange`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#selectionRange))
  — the LSP selection range to convert

#### Returns

The selection range as Monaco editor selection ranges
([`monaco.languages.SelectionRange[]`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SelectionRange[])).

### `toSemanticTokens(semanticTokens)`

Convert LSP semantic tokens to Monaco editor semantic tokens.

#### Parameters

- `semanticTokens`
  ([`lsp.SemanticTokens`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokens))
  — the LSP semantic tokens to convert

#### Returns

The semantic tokens as Monaco editor semantic tokens
([`monaco.languages.SemanticTokens`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokens)).

### `toSemanticTokensEdit(semanticTokensEdit)`

Convert LSP semantic tokens to Monaco editor semantic tokens.

#### Parameters

- `semanticTokensEdit`
  ([`lsp.SemanticTokensEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokensEdit))
  — the LSP semantic tokens to convert

#### Returns

The semantic tokens as Monaco editor semantic tokens
([`monaco.languages.SemanticTokensEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokensEdit)).

### `toSemanticTokensEdits(semanticTokensDelta)`

Convert an LSP semantic tokens delta to Monaco editsor semantic tokens edits.

#### Parameters

- `semanticTokensDelta`
  ([`lsp.SemanticTokensDelta`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#semanticTokensDelta))
  — the LSP semantic tokens delta to convert

#### Returns

The semantic tokens delta as Monaco editsor semantic tokens edits
([`monaco.languages.SemanticTokensEdits`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SemanticTokensEdits)).

### `toSignatureHelp(signatureHelp)`

Convert an LSP signature help to a Monaco editor signature help.

#### Parameters

- `signatureHelp`
  ([`lsp.SignatureHelp`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelp))
  — the LSP signature help to convert

#### Returns

The signature help as Monaco editor signature help
([`monaco.languages.SignatureHelp`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelp)).

### `toSignatureHelpContext(signatureHelpContext)`

Convert an LSP signature help context to a Monaco editor signature help context.

#### Parameters

- `signatureHelpContext`
  ([`lsp.SignatureHelpContext`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelpContext))
  — the LSP signature help context to convert

#### Returns

The signature help context as Monaco editor signature help context
([`monaco.languages.SignatureHelpContext`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelpContext)).

### `toSignatureHelpTriggerKind(signatureHelpTriggerKind)`

Convert an LSP signature help trigger kind to a Monaco editor signature help trigger kind.

#### Parameters

- `signatureHelpTriggerKind`
  ([`lsp.SignatureHelpTriggerKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureHelpTriggerKind))
  — the LSP signature help trigger kind to convert

#### Returns

The signature help trigger kind as Monaco editor signature help trigger kind
([`monaco.languages.SignatureHelpTriggerKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureHelpTriggerKind)).

### `toSignatureInformation(signatureInformation)`

Convert an LSP signature information to a Monaco editor signature information.

#### Parameters

- `signatureInformation`
  ([`lsp.SignatureInformation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#signatureInformation))
  — the LSP signature information to convert

#### Returns

The signature information as Monaco editor signature information
([`monaco.languages.SignatureInformation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SignatureInformation)).

### `toSingleEditOperation(textEdit)`

Convert an LSP text edit to a Monaco editor single edit operation.

#### Parameters

- `textEdit`
  ([`lsp.TextEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textEdit))
  — the LSP text edit to convert

#### Returns

The text edit as Monaco editor single edit operation
([`monaco.editor.ISingleEditOperation`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.editor.ISingleEditOperation)).

### `toSymbolKind(symbolKind)`

Convert an LSP symbol kind to a Monaco editor symbol kind.

#### Parameters

- `symbolKind`
  ([`lsp.SymbolKind`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#symbolKind))
  — the LSP symbol kind to convert

#### Returns

The symbol kind as Monaco editor symbol kind
([`monaco.languages.SymbolKind`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SymbolKind)).

### `toSymbolTag(symbolTag)`

Convert an LSP symbol tag to a Monaco editor symbol tag.

#### Parameters

- `symbolTag`
  ([`lsp.SymbolTag`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#symbolTag))
  — the LSP symbol tag to convert

#### Returns

The symbol tag as Monaco editor symbol tag
([`monaco.languages.SymbolTag`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.SymbolTag)).

### `toTextEdit(textEdit)`

Convert an LSP text edit to a Monaco editor text edit.

#### Parameters

- `textEdit`
  ([`lsp.TextEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textEdit))
  — the LSP text edit to convert

#### Returns

The text edit as Monaco editor text edit
([`monaco.languages.TextEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.TextEdit)).

### `toWorkspaceEdit(workspaceEdit)`

Convert an LSP workspace edit to a Monaco editor workspace edit.

#### Parameters

- `workspaceEdit`
  ([`lsp.WorkspaceEdit`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#workspaceEdit))
  — the LSP workspace edit to convert

#### Returns

The workspace edit as Monaco editor workspace edit
([`monaco.languages.WorkspaceEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceEdit)).

### `toWorkspaceEditMetadata(changeAnnotation)`

Convert an LSP change annotation to a Monaco editor workspace edit metadata.

#### Parameters

- `changeAnnotation`
  ([`lsp.ChangeAnnotation`](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#changeAnnotation))
  — the LSP change annotation to convert

#### Returns

The change annotation as Monaco editor workspace edit
([`monaco.languages.WorkspaceEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceEditMetadata)).

### `toWorkspaceFileEdit(workspaceFileEdit)`

Convert an LSP workspace file edit to a Monaco editor workspace file edit.

#### Parameters

- `workspaceFileEdit`
  (\[`lsp.CreateFile | lsp.DeleteFile | lsp.RenameFile`]\(<https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#createFile>
  \| lsp.DeleteFile | lsp.RenameFile)) — the LSP workspace file edit to convert

#### Returns

The workspace file edit options Monaco editor workspace file edit options
([`monaco.languages.IWorkspaceFileEdit`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.IWorkspaceFileEdit)).

### `toWorkspaceFileEditOptions(options)`

Convert LSP workspace file edit options to Monaco editor workspace file edit options.

#### Parameters

- `options`
  (\[`lsp.CreateFileOptions & lsp.DeleteFileOptions & lsp.RenameFileOptions`]\(<https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#createFileOptions>
  & lsp.DeleteFileOptions & lsp.RenameFileOptions)) — the LSP workspace file edit options to convert

#### Returns

The workspace file edit options Monaco editor workspace file edit options
([`monaco.languages.WorkspaceFileEditOptions`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor_editor_api.languages.WorkspaceFileEditOptions)).

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
