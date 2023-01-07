/**
 * Fix for index signature TS error:
 * Index signature is missing for...
 */

export type ToObject<T> = {
  [K in keyof T]: T[K];
};
