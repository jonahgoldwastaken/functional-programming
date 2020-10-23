import { upper } from 'alphabet'

export const sortArrayOfStringsAlphabetically = (a: string, b: string) =>
  upper.indexOf(a[0]) > upper.indexOf(b[0])
    ? 1
    : upper.indexOf(a[0]) === upper.indexOf(b[0])
    ? upper.indexOf(a[1]) > upper.indexOf(b[1])
      ? 1
      : -1
    : -1

export const filterStringFromArray = (filterStr: string) => (str: string) =>
  !(str.slice().toLowerCase() === filterStr.slice().toLowerCase())

export const filterRegexFromArray = (filterRegex: RegExp) => (str: string) =>
  !str.slice().toLowerCase().match(filterRegex)

export const filterEmptyArraysFromArray = (arr: any[]) => [...arr].length

export const mapEmptyArraysInArrayToOtherValue = (val: any) => (arr: any[]) =>
  arr.length ? [...arr] : val

export const reduceArrayValuesToOccurenceAmount = <T>(
  acc: OccurenceTuple<T>[],
  curr: T
) => {
  const newTup = [...acc]
  const i = newTup.findIndex(tup => tup[0] === curr)

  if (i < 0) newTup.push([curr, 1])
  else newTup[i][1]++

  return newTup
}
