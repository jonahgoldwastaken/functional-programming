import { upper } from 'alphabet'
import { includes } from 'ramda'

/**
 * Sorts arrays alphabetically, should only be used inside a sort Higher-Order function
 * @param a first argument passed by array.sort to callback
 * @param b second argument passed by array.sort to callback
 */
export const sortArrayOfStringsAlphabetically = (a: string, b: string) =>
  upper.indexOf(a[0]) > upper.indexOf(b[0])
    ? 1
    : upper.indexOf(a[0]) === upper.indexOf(b[0])
    ? upper.indexOf(a[1]) > upper.indexOf(b[1])
      ? 1
      : -1
    : -1

/**
 * Check if a certain value exists in an array containing values of the same type
 * @param arr Array of any type
 */
export const arrayContainsValue: <T>(
  arr: T[]
) => (val: T) => boolean = arr => val => includes(val, arr)

/**
 * Checks is value passed is an array
 * @param val Value that's being checked
 */
export const valIsArray = (val: any | any[]) => Array.isArray(val)

/**
 * Filters empty arrays from an array containg arrays
 * @param arr Array with arrays of which some are empty
 */
export const filterEmptyArraysFromArray = (arr: any[]) => [...arr].length

/**
 * Replace empty arrays inside an array to value passed
 * @param val The value that will be replacing the empty arrays inside passed array
 */
export const mapEmptyArraysInArrayToOtherValue = <T>(val: T) => (arr: T[]) =>
  arr.length ? arr : val

/**
 * A reducer function transforming an array into an array of tuples containing the amount of occurences for each unique value.
 * Example output: [['unique value', 5]] for ['unique value', 'unique value', 'unique value', 'unique value', 'unique value']
 * @param acc The accumulator, an OccurenceTuple
 * @param curr The current value being looped over
 */
export const reduceArrayValuesToOccurenceAmount = <T>(
  acc: OccurenceTuple<T>[],
  curr: T
) => {
  const newTup = [...acc]
  const i = newTup.findIndex(tup => tup[0] === curr)

  if (i < 0) newTup.push([curr, 1])
  else newTup[i][1]++

  return newTup
}
