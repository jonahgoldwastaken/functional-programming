import { upper } from 'alphabet'

export const sortArrayAlphabetically = (arr: string[]) =>
  arr.sort((a, b) =>
    upper.indexOf(a[0]) > upper.indexOf(b[0])
      ? 1
      : upper.indexOf(a[0]) === upper.indexOf(b[0])
      ? 0
      : -1
  )
