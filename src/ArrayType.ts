/**
 * Extract array type union
 *
 * @example
 * ArrayType<Array<'a' | 'b' | 'c'>> -> 'a' | 'b' | 'c'
 * ArrayType<'a' | 'b' | 'c'> -> 'a' | 'b' | 'c'
 */

export type ArrayType<TType> = TType extends Array<infer TExtracted> ? TExtracted : TType;
