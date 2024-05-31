/**
 *  Converts unions to the intersections
 *
 *  @example
 *  UnionToIntersection<'a' | 'b'> -> 'a' & 'b'
 *  UnionToIntersection<{ a: string } | { b: string }> -> { a: string } & { b: string }
 */

export type UnionToIntersection<TUnions> = (
  TUnions extends unknown ? (k: TUnions) => void : never
) extends (k: infer TIntersection) => void
  ? TIntersection
  : never;
