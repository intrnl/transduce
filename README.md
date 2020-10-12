# `transduce`

Assortment of utility functions for efficient data processing

## Installation

- Install it with your package manager of choice
  - npm: `npm i @intrnl/transduce`
  - pnpm: `pnpm i @intrnl/transduce`
  - yarn: `yarn add @intrnl/transduce`

## Usage

```js
import * as t from '@intrnl/transduce';

let process = t.pipe([
  // Takes the first 5 numbers
  t.first(5),
  // Logs every single value to console
  t.tap((x) => console.log('value: %d', x)),
  // Takes only odd numbers
  t.filter((x) => x % 2 === 0),
  // Multiply by two
  t.map((x) => x * 2),
  // Return as an array
  t.toArray,
]);

process(t.range(1, 10));
// -> [4, 8]

// log: value: 1
// log: value: 2
// log: value: 3
// log: value: 4
// log: value: 5
```
