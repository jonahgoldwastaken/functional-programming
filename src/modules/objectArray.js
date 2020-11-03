import { map, pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object.js.js'
import { splitStringOnRegex } from '../utilities/strings.js.js'

/**
 * Picks a key from object and splits values based on known and safe characters to split on
 * @param key Key to pick
 */
export function pickKeySplitVals(key) {
  return map(pipe(pickKeyFromObject(key), splitStringOnRegex(/[-|,|.|:|\s]/g)))
}
