import type { PickByType } from './PickByType';

type AllowedKeyType = number | string | symbol;

/**
 * Just a Record of types with key type
 */

export type EntitiesMap<TObject, TKeyType extends AllowedKeyType = AllowedKeyType> = Record<
  TKeyType,
  TObject | undefined
>;

/**
 * Type for normalized list with a manual key type
 *
 * @example
 * NormalizedList<{ id: number; value: string }, number> -> { ids: number[]; entities: Record<number, { id: number; value: string }> }
 * NormalizedList<{ id: number; value: string }, string> -> { ids: string[]; entities: Record<string, { id: number; value: string }> }
 */

export interface NormalizedList<TObject, TKeyType extends AllowedKeyType> {
  readonly entities: EntitiesMap<TObject, TKeyType>;
  readonly ids: TKeyType[];
}

/**
 * Type for normalized list which extract key type by its name in object
 *
 * @example
 * NormalizedListByKey<{ id: number; value: string }, 'id'> -> { ids: number[]; entities: Record<number, { id: number; value: string }> }
 * NormalizedListByKey<{ id: number; value: string }, 'value'> -> { ids: string[]; entities: Record<string, { id: number; value: string }> }
 */

export type NormalizedListByKey<
  TObject extends { [K in TKey]: TObject[K] },
  TKey extends keyof PickByType<TObject, AllowedKeyType>
> = NormalizedList<TObject, TObject[TKey]>;
