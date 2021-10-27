# lezer-taslx

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/underlay/lezer-taslx)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/lezer-taslx)](https://www.npmjs.com/package/lezer-taslx) ![TypeScript types](https://img.shields.io/npm/types/lezer-taslx)

A Lezer grammar for the tasl mapping language.

> ⚠️ This is a low-level library for parsing the **AST** of the mapping language - if you want to parse .taslx files into proper `tasl.Mapping` objects, you want to use the main [`tasl`](https://github.com/underlay/tasl) package instead.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i lezer-taslx
```

## Usage

```ts
import { parser } from "lezer-taslx"

const tree = parser.parse(`# graph-to-dataset.taslx
namespace ex http://example.com/ns/

map ex:BlankNode <= ex:BlankNode (x) => x

map ex:Statement <= ex:Statement (x) => {
  ex:subject   <= x / ex:subject
  ex:predicate <= x / ex:predicate
  ex:object    <= x / ex:object
  ex:graph     <= {} % ex:defaultGraph
}
`)

// do something with tree.cursor() or tree.topNode ...
```

You can find documentation for the LR parser interface [on the Lezer website](https://lezer.codemirror.net/docs/ref/).

## API

```ts
import type { LRParser } from "@lezer/lr"

export const parser: LRParser
```

## Testing

Tests use [AVA 4](https://github.com/avajs/ava) (currently in alpha) and live in the [test](./test/) directory.

```
npm run test
```

## Contributing

This library is just intended to export the compiled lezer grammar, so I don't expect to add any features or functionality beyond that. If you find issues with the grammar definition itself please open an issue to discuss them!

## License

MIT © 2021 Joel Gustafson
