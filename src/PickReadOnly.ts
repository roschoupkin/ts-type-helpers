import type { IsEqual } from './IsEqual';

/**
 * Pick only readonly parameters
 *
 * @example
 * PickReadOnly<{ readonly a: string; b: string }> -> { readonly a: string; }
 */

export type PickReadOnly<TObject> = {
  [TKey in keyof TObject as Extract<
    keyof TObject,
    IsEqual<{ [Q in TKey]: TObject[TKey] }, { readonly [Q in TKey]: TObject[TKey] }, TKey>
  >]: TObject[TKey];
};

/**
 * Returns keys of only readonly parameters
 *
 * @example
 * PickReadOnlyKeys<{ readonly a: string; b: string }> -> 'a'
 */

export type PickReadOnlyKeys<TObject> = keyof PickReadOnly<TObject>;
