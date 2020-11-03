import { assoc, keys, reduce } from 'ramda'

export { pickKeyFromObject, renameObjectKeys }

/**
 * Returns only the value from passed key in provided object
 * @param key Key to return from object
 */
function pickKeyFromObject(key) {
  return object => ({ ...object }[key])
}

/**
 * Changes the keys inside provided object to values of newKeysObj
 * @param keyMap Lookup table containing old keys as keys and new keys as values
 */
function renameObjectKeys(keysMap) {
  return obj =>
    reduce(
      (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
      {}
    )(keys(obj))
}
