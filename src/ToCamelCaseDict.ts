import type { ToCamelCaseStr } from './ToCamelCaseStr';

/**
 * Converts object keys from snake_case into camelCase
 *
 * @example
 * ToCamelCaseDict<{ readonly some_snake_case_str: string }> -> { readonly someSnakeCaseStr: string }
 */

export type ToCamelCaseDict<TObject> = {
  [TKey in keyof TObject as ToCamelCaseStr<TKey>]: TObject[TKey];
};
