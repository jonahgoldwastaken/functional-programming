import { greaterThan } from '../utilities/number.js'

export const validArrayIndex = (i: number) => greaterThan(-1)(i)
