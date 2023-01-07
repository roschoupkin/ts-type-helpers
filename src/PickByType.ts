/**
 * Pick object by parameters type
 *
 * @example
 * PickByType<{ foo: string; bar: number }, string> -> { foo: string }
 * PickByType<{ foo: string; bar: number }, number> -> { bar: number }
 */

export type PickByType<TObject, TType> = {
  [TKey in keyof TObject as Extract<
    keyof TObject,
    TObject[TKey] extends TType ? TKey : never
  >]: TObject[TKey];
};
