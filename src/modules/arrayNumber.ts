import { greaterThan } from '../utilities/number'

export const validArrayIndex = (i: number) => greaterThan(-1)(i)
