/**
 * Enumerates digits for from zero to TLength
 *
 * @example
 * Enumerated<5> -> 0 | 1 | 2 | 3 | 4
 */

export type Enumerated<
  TLength extends number,
  TList extends number[] = []
> = TList['length'] extends TLength
  ? TList[number]
  : Enumerated<TLength, [...TList, TList['length']]>;
