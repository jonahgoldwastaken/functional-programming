import { arrayIsArray } from '../utilities/array'

export const mapRunFuncIfCurrValIsArr = <T>(
  func: (...args: any[]) => (val: T[]) => any,
  ...args: any[]
) => (val: T | T[]) => (arrayIsArray(val) ? func(...args)(val as T[]) : val)
