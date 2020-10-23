export const pickKeyFromObject = (key: string) => (
  dataset: GenericObject<string>
) => ({ ...dataset }[key])

export const convertObjectKeys = <obj extends GenericObject>(
  newKeysObj: obj
) => (objArray: obj[]) =>
  [...objArray].map(val =>
    Object.keys(val)?.reduce(
      (prev, curr: string) => ({ ...prev, [newKeysObj[curr]]: val[curr] }),
      {}
    )
  )
