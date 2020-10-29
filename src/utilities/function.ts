/**
 * Runs a function if the provided statement is true/truthy
 * @param bool Boolean derived from any statement that can be coerced into a boolean
 */
export const returnFuncIfTrue = (bool: boolean) => <R>(
  func: (...args: any[]) => R,
  ...args: any[]
): R | false => (bool ? func(...args) : false)
