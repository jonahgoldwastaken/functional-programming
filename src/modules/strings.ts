export const filterValidStrings = (str: string) =>
  str.length && Number.isNaN(Number(str)) ? true : false
