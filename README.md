# ts-type-helpers

A collection of types which can help in the future project

## Installation

```bash
npm install -D ts-type-helpers
```

## Usage

### `ToObject`

Fix unchecked indexes error in TS. Converts `interface` into `object`.

```ts
import { ToObject } from 'ts-type-helpers';

interface Int {
  a: string;
  b: number;
}

const fn = <T extends Record<string, unknown>>(arg: T) => arg;

fn<Int>; // Unchecked indexes error
fn<ToObject<Int>>; // Withot error
```

### `ArrayType`

Extract an array union type

```ts
import { ArrayType } from 'ts-type-helpers';

ArrayType<Array<'a' | 'b' | 'c'>>; // 'a' | 'b' | 'c'
ArrayType<'a' | 'b' | 'c'>; // 'a' | 'b' | 'c'
```

### `Enumerated`

Lists digits from zero to a set digit

```ts
import { Enumerated } from 'ts-type-helpers';

Enumerated<5>; // 0 | 1 | 2 | 3 | 4
```

### `IsEqual`

Compares to types they are the same type
Returns `TPositive` value or `TNegative` value

```ts
import { IsEqual } from 'ts-type-helpers';

IsEqual<{ str: string }, { num: number }, 1, 0>; // 0
IsEqual<{ str: string }, { str: string }, 1, 0>; // 1
```

### `EntitiesMap`

Just a Record of types with the key type

```ts
import { EntitiesMap } from 'ts-type-helpers';

EntitiesMap<{ id: number; value: string }, number>; // Record<number, { id: number; value: string } | undefined>
```

### `NormalizedList`

Type for normalized list with a manual key type

```ts
import { NormalizedList } from 'ts-type-helpers';

NormalizedList<{ id: number; value: string }, number>; // { ids: number[]; entities: Record<number, { id: number; value: string } | undefined> }
NormalizedList<{ id: number; value: string }, string>; // { ids: string[]; entities: Record<string, { id: number; value: string } | undefined> }
```

### `NormalizedListByKey`

Type for normalized list which extract key type by its name in object

```ts
import { NormalizedListByKey } from 'ts-type-helpers';

NormalizedListByKey<{ id: number; value: string }, 'id'>; // { ids: number[]; entities: Record<number, { id: number; value: string } | undefined> }
NormalizedListByKey<{ id: number; value: string }, 'value'>; // { ids: string[]; entities: Record<string, { id: number; value: string } | undefined> }
```

### `PickByType`

Pick object by parameters type

```ts
import { PickByType } from 'ts-type-helpers';

PickByType<{ foo: string; bar: number }, string>; // { foo: string }
PickByType<{ foo: string; bar: number }, number>; // { bar: number }
```

### `PickReadOnly`

Pick only readonly parameters

```ts
import { PickReadOnly } from 'ts-type-helpers';

PickReadOnly<{ readonly a: string; b: string }>; // { readonly a: string; }
```

### `PickReadOnlyKeys`

Returns keys of only readonly parameters

```ts
import { PickReadOnlyKeys } from 'ts-type-helpers';

PickReadOnlyKeys<{ readonly a: string; b: string }>; // 'a'
```

### `PickWritable`

Pick parameters without readonly

```ts
import { PickReadOnly } from 'ts-type-helpers';

PickReadOnly<{ readonly a: string; b: string }>; // { b: string; }
```

### `PickWritableKeys`

Returns keys of parameters without readonly

```ts
import { PickWritableKeys } from 'ts-type-helpers';

PickWritableKeys<{ readonly a: string; b: string }>; // 'b'
```

### `Range`

Returns a range from TMin to TMax (without TMax)

```ts
import { Range } from 'ts-type-helpers';

Range<1, 5>; // 1 | 2 | 3 | 4
```

### `ToCamelCaseDict`

Converts object keys from snake_case into camelCase

```ts
import { ToCamelCaseDict } from 'ts-type-helpers';

ToCamelCaseDict<{ readonly some_snake_case_str: string }>; // { readonly someSnakeCaseStr: string }
```

### `ToCamelCaseStr`

Converts snake_case string into camelCase

```ts
import { ToCamelCaseStr } from 'ts-type-helpers';

ToCamelCaseStr<'some_snake_case_str'>; // 'someSnakeCaseStr'
```

### `UnionsToTuple`

Converts unions to several lists of this unions
Helps when you need enumerate unions in a list

```ts
import { UnionsToTuple } from 'ts-type-helpers';

UnionsToTuple<'a' | 'b'>; // ['a', 'b'] | ['b', 'a']
```

### `UnionToIntersection`

Converts unions to the intersections. Usefull, when you need to map object and the convert it to the intersected object.

```ts
import { UnionToIntersection } from 'ts-type-helpers';

UnionToIntersection<'a' | 'b'>; // 'a' & 'b'
UnionToIntersection<{ a: string } | { b: string }>; // { a: string } & { b: string }
```
