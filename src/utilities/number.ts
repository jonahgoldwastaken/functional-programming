export { greaterThan }

/**
 * Returns a function that checks if value passed into it is greater than the value passed into this function
 * @param a number
 */
function greaterThan(a: number): (b: number) => boolean {
  return b => a < b
}
