interface GenericObject {
  [key: string]: any
}

export const pickKeyFromDataset = (key: string) => (dataset: any[]) =>
  [...dataset].map(item => item[key])

export const convertObjectKeys = <obj extends GenericObject>(
  newKeysObj: obj
) => (objArray: obj[]) =>
  [...objArray].map(val =>
    Object.keys(val)?.reduce(
      (prev, curr: string) => ({ ...prev, [newKeysObj[curr]]: val[curr] }),
      {}
    )
  )
