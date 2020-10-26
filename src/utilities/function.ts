export const runFunctionIfTrue = (bool: boolean) => <R>(
  funcTrue: (...args: any[]) => R,
  ...args: any[]
): R | false => (bool ? funcTrue(...args) : false)
