export const returnFuncIfTrue = (bool: boolean) => <R>(
  func: (...args: any[]) => R,
  ...args: any[]
): R | false => (bool ? func(...args) : false)
