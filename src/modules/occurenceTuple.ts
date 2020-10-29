import { filter, isEmpty, pipe } from 'ramda'
import { getType } from '../utilities/type.js'

/**
 * Checks if the amount value in an OccurenceTuple is valid
 * @param tup OccurenceTuple to check
 */
const stringOccurenceTupleAmountIsValid = (tup: OccurenceTuple<string>) =>
  !Number.isNaN(tup[1])

/**
 * Checks if OccurenceTuple that should contian a string has a valid string
 * @param tup OccurenceTuple to check
 */
const occurenceTupleValueIsValidString = (tup: OccurenceTuple<string>) =>
  getType(tup[0]) === 'string' && !isEmpty(tup[0])

/**
 * Filters OccurenceTuples that should contain strings on if they have valid values and amounts.
 * @param tups Array of OccurenceTuples that should contain strings
 */
export const filterInvalidStringOccurenceTuples: (
  tups: OccurenceTuple<string>[]
) => OccurenceTuple<string>[] = pipe(
  filter(occurenceTupleValueIsValidString),
  filter(stringOccurenceTupleAmountIsValid)
)
