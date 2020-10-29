/**
 * Checks if provided string is valid
 * @param str String to check
 */
export const filterValidStrings = (str: string) =>
  str.length && Number.isNaN(Number(str)) ? true : false
