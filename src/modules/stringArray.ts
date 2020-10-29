import { filter, map, pipe, toLower } from 'ramda'
import { arrayContainsValue } from '../utilities/array.js'
import { filterStringIncludedInArray } from '../utilities/strings.js'
import { filterValidStrings } from './strings.js'

type validValueFunc = (stringArr: string) => boolean

export {
  filterValidStringsWithFunc,
  filterValidStringsWithArr,
  arrayValueContainsString,
}

function filterValidStringsWithFunc(
  func: validValueFunc
): (arr: string[]) => string[] {
  return pipe(filter(filterValidStrings), filter(func))
}

function filterValidStringsWithArr(
  validArr: string[]
): (arr: string[]) => string[] {
  return pipe(
    filter(filterValidStrings),
    filter(filterStringIncludedInArray(validArr))
  )
}

/**
 * Check if Array contains provided string value
 * @param arr Array of strings
 */
function arrayValueContainsString(arr: string[]): (val: string) => boolean {
  return pipe(toLower, pipe(map(toLower), arrayContainsValue)(arr))
}
