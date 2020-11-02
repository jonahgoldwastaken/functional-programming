import { assoc, Dictionary, keys, reduce } from 'ramda'

export { pickKeyFromObject, renameObjectKeys }

/**
 * Returns only the value from passed key in provided object
 * @param key Key to return from object
 */
function pickKeyFromObject(
  key: string
): (object: GenericObject<string>) => string {
  return object => ({ ...object }[key])
}

/**
 * Changes the keys inside provided object to values of newKeysObj
 * @param keyMap Lookup table containing old keys as keys and new keys as values
 */
function renameObjectKeys(
  keysMap: Dictionary<string>
): (obj: Record<string, unknown>) => Record<string, unknown> {
  return obj =>
    reduce(
      (acc, key: string) => assoc(keysMap[key] || key, obj[key], acc),
      {}
    )(keys(obj))
}
