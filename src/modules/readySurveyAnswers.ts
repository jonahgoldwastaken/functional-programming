import { filter, pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object'
import { filterRegExFromArray } from '../utilities/array'
import {
  replaceStringThroughRegex,
  splitStringOnRegex,
  stringIsInArray,
  stringIsValidString,
} from '../utilities/strings'

export const filterInvalidSurveyAnswers: (
  filterRegEx?: RegExp
) => (stringArr: string[]) => (arr: string[]) => string[] = regEx => arr =>
  regEx
    ? pipe(
        filter(stringIsValidString),
        filter(filterRegExFromArray(regEx)),
        filter(stringIsInArray(arr))
      )
    : pipe(filter(stringIsValidString), filter(stringIsInArray(arr)))

export const pickAndReadySurveyAnswersForParsing: (
  key: string
) => (arr: GenericObject<string>[]) => string[][] = key => arr =>
  arr.map(
    pipe(
      pickKeyFromObject(key),
      replaceStringThroughRegex(/\s+/g, ''),
      splitStringOnRegex(/[-|,|\.|:]/g)
    )
  )
