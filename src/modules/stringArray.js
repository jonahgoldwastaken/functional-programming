import { filter, map, pipe, toLower } from 'ramda'
import { arrayContainsValue } from '../utilities/array.js'
import { filterStringIncludedInArray } from '../utilities/strings.js'
import { filterValidStrings } from './strings.js'

export {
  filterValidStringsWithFunc,
  filterValidStringsWithArr,
  arrayValueContainsString,
}

function filterValidStringsWithFunc(func) {
  return pipe(filter(filterValidStrings), filter(func))
}

function filterValidStringsWithArr(validArr) {
  return pipe(
    filter(filterValidStrings),
    filter(filterStringIncludedInArray(validArr))
  )
}

/**
 * Check if Array contains provided string value
 * @param arr Array of strings
 */
function arrayValueContainsString(arr) {
  return pipe(toLower, pipe(map(toLower), arrayContainsValue)(arr))
}
