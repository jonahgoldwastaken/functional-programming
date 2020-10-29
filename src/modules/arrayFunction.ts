import { valIsArray } from '../utilities/array.js'
import { returnFuncIfTrue } from '../utilities/function.js'

/**
 * Runs and returns the provided curried function if the provided value is an array.
 * Else it returns the value passed
 * @param func Function to run
 */
export const runFuncIfValIsArr = <T, R>(func: (val: T[]) => R) => (
  val: T | T[]
) => returnFuncIfTrue(valIsArray(val as T))(func, val as T[]) || (val as T)
