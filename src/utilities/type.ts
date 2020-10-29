export { getType }

/**
 * Returns the type of provided value
 * @param val Value to type-check
 */
function getType(val: unknown): string {
  return typeof val
}
