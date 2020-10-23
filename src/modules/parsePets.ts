import { pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object'
import {
  replaceStringThroughRegex,
  splitStringOnRegex,
  stringIsValidString,
} from '../utilities/strings'

const parsePets = <T>(dataset: T[]) =>
  [...dataset]
    .map(pickKeyFromObject('huisDieren'))
    .map(
      pipe(
        replaceStringThroughRegex(/\s+/g, ''),
        splitStringOnRegex(/-|,|\.|:/)
      )
    )
    .map(ans => ans.filter(stringIsValidString))

export default parsePets
