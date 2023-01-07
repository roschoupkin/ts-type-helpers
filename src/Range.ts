import type { Enumerated } from './Enumerated';

/**
 * Returns a range from TMin to TMax (without TMax)
 *
 * @example
 * Range<1, 5> -> 1 | 2 | 3 | 4
 */

export type Range<TMin extends number, TMax extends number> = Exclude<
  Enumerated<TMax>,
  Enumerated<TMin>
>;
