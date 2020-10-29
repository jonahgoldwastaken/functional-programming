/**
 * Returns only the value from passed key in provided object
 * @param key Key to return from object
 */
export const pickKeyFromObject = (key: string) => (
  dataset: GenericObject<string>
) => ({ ...dataset }[key])

/**
 * Changes the keys inside provided object to values of newKeysObj
 * @param newKeysObj Lookup table containing old keys as keys and new keys as values
 */
export const convertObjectKeys = <obj extends GenericObject>(
  newKeysObj: obj
) => (objArray: obj[]) =>
  [...objArray].map(val =>
    Object.keys(val)?.reduce(
      (prev, curr: string) => ({ ...prev, [newKeysObj[curr]]: val[curr] }),
      {}
    )
  )
