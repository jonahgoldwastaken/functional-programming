import { arrayIsArray } from '../utilities/array'

export const mapRunFuncIfCurrValIsArr = <T, R>(func: (val: T[]) => R) => (
  val: T | T[]
) => (arrayIsArray(val) ? func(val as T[]) : (val as T))
