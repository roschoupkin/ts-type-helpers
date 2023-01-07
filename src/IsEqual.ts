/**
 * Compare two types they are the same
 * Return value with type TPositive or TNegative
 *
 * @example
 * IsEqual<{ str: string }, { num: number }, 1, 0> -> 0
 * IsEqual<{ str: string }, { str: string }, 1, 0> -> 1
 */

export type IsEqual<TValue, TOther, TPositive = TValue, TNegative = never> = (<
  T
>() => T extends TValue ? 1 : 2) extends <T>() => T extends TOther ? 1 : 2
  ? TPositive
  : TNegative;
