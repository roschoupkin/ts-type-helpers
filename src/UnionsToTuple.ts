/**
 *  Converts unions to several lists of this unions
 *
 *  @example
 *  UnionsToTuple<'a' | 'b'> -> ['a', 'b'] | ['b', 'a']
 */

export type UnionsToTuple<TKeys extends number | string, TTuple extends unknown[] = []> = {
  [TKey in TKeys]: Exclude<TKeys, TKey> extends never
    ? [...TTuple, TKey]
    : UnionsToTuple<Exclude<TKeys, TKey>, [...TTuple, TKey]>;
}[TKeys];
