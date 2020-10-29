import { greaterThan } from '../utilities/number.js'

/**
 * Checks if passed index is a valid array index
 * @param i Index to check
 */
export const validArrayIndex: (i: number) => boolean = greaterThan(-1)
