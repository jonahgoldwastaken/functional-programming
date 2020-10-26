import { upper } from 'alphabet'
import { includes } from 'ramda'

export const sortArrayOfStringsAlphabetically = (a: string, b: string) =>
  upper.indexOf(a[0]) > upper.indexOf(b[0])
    ? 1
    : upper.indexOf(a[0]) === upper.indexOf(b[0])
    ? upper.indexOf(a[1]) > upper.indexOf(b[1])
      ? 1
      : -1
    : -1

export const arrayContainsValue: <T>(
  arr: T[]
) => (val: T) => boolean = arr => val => includes(val, arr)

export const arrayIsArray = (arr: any | any[]) => Array.isArray(arr)

export const filterEmptyArraysFromArray = (arr: any[]) => [...arr].length

export const mapEmptyArraysInArrayToOtherValue = <T>(val: T) => (arr: T[]) =>
  arr.length ? arr : val

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
