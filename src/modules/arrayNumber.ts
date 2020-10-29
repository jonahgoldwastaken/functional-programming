import { greaterThan } from '../utilities/number.js'

export { validArrayIndex }

/**
 * Checks if passed index is a valid array index
 * @param i Index to check
 */
function validArrayIndex(i: number): boolean {
  return greaterThan(-1)(i)
}
