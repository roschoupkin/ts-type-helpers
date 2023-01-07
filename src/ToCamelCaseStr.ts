/**
 * Converts snake_case str into camelCase
 *
 * @example
 * ToCamelCaseStr<'some_snake_case_str'> -> someSnakeCaseStr
 */

export type ToCamelCaseStr<TStr, TSeparator extends string = '__' | '_' | '-'> = TStr extends string
  ? TStr extends `${infer TLeftSide}${TSeparator}${infer TRightSide}`
    ? `${Uncapitalize<TLeftSide>}${Capitalize<ToCamelCaseStr<TRightSide>>}`
    : TStr
  : never;
