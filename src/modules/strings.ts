export { filterValidStrings }

/**
 * Checks if provided string is valid
 * @param str String to check
 */
function filterValidStrings(str: string): boolean {
  return str.length && Number.isNaN(Number(str)) ? true : false
}
