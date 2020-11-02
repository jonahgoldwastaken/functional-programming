import { filter, isEmpty, pipe } from 'ramda'
import { getType } from '../utilities/type.js'

export { filterInvalidStringOccurenceTuples }

/**
 * Filters OccurenceTuples that should contain strings on if they have valid values and amounts.
 * @param tups Array of OccurenceTuples that should contain strings
 */
function filterInvalidStringOccurenceTuples(tups) {
  return pipe(
    filter(occurenceTupleValueIsValidString),
    filter(stringOccurenceTupleAmountIsValid)
  )(tups)
}

/**
 * Checks if the amount value in an OccurenceTuple is valid
 * @param tup OccurenceTuple to check
 */
function stringOccurenceTupleAmountIsValid(tup) {
  return !Number.isNaN(tup[1])
}

/**
 * Checks if OccurenceTuple that should contian a string has a valid string
 * @param tup OccurenceTuple to check
 */
function occurenceTupleValueIsValidString(tup) {
  return getType(tup[0]) === 'string' && !isEmpty(tup[0])
}
