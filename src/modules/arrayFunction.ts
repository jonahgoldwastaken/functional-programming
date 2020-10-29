import { valIsArray } from '../utilities/array.js'
import { returnFuncIfTrue } from '../utilities/function.js'

export const runFuncIfValIsArr = <T, R>(func: (val: T[]) => R) => (
  val: T | T[]
) => returnFuncIfTrue(valIsArray(val as T))(func, val as T[]) || (val as T)
