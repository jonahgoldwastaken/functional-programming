import { map, reduce } from 'ramda'

export { pickKeyFromObject, convertObjectKeys }

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
 * @param newKeysObj Lookup table containing old keys as keys and new keys as values
 */
function convertObjectKeys<obj extends GenericObject<string>>(
  newKeysObj: obj
): (objArray: obj[]) => obj[] {
  return objArray =>
    map<obj, obj>(keys =>
      reduce(
        (acc: GenericObject, curr: string) =>
          ({
            ...acc,
            [newKeysObj[curr]]: keys[curr],
          } as obj),
        {} as obj
      )(Object.keys(keys))
    )(objArray)
}
