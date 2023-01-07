import type { IsEqual } from './IsEqual';

/**
 * Pick parameters without readonly
 *
 * @example
 * PickWritable<{ readonly a: string; b: string }> -> { b: string; }
 */

export type PickWritable<TObject> = {
  [TKey in keyof TObject as Extract<
    keyof TObject,
    IsEqual<{ [Q in TKey]: TObject[TKey] }, { -readonly [Q in TKey]: TObject[TKey] }, TKey>
  >]: TObject[TKey];
};

/**
 * Returns keys of parameters without readonly
 *
 * @example
 * PickWritableKeys<{ readonly a: string; b: string }> -> 'b'
 */

export type PickWritableKeys<TObject> = keyof PickWritable<TObject>;
