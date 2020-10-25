import { filter, pipe } from 'ramda'
import { filterStringsInArray, stringIsValidString } from '../utilities/strings'

type validValueFunc = (stringArr: string) => boolean

export const filterValidStringsWithFunc: (
  validValueFunc: validValueFunc
) => (arr: string[]) => string[] = func =>
  pipe(filter(stringIsValidString), filter(func))

export const filterValidStringsWithArr: (
  validStringArr: string[]
) => (arr: string[]) => string[] = validArr =>
  pipe(filter(stringIsValidString), filter(filterStringsInArray(validArr)))
