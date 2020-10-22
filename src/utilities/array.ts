import { upper } from 'alphabet'

export const sortArrayOfStringsAlphabetically = (a: string, b: string) =>
  upper.indexOf(a[0]) > upper.indexOf(b[0])
    ? 1
    : upper.indexOf(a[0]) === upper.indexOf(b[0])
    ? upper.indexOf(a[1]) > upper.indexOf(b[1])
      ? 1
      : -1
    : -1
