import { pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object'
import {
  replaceStringThroughRegex,
  splitStringOnRegex,
} from '../utilities/strings'

const parsePets = <T>(dataset: T[]) =>
  [...dataset]
    .map(pickKeyFromObject('huisDieren'))
    .map(
      pipe(replaceStringThroughRegex(/\s/, ''), splitStringOnRegex(/-|,|\.|:/))
    )

export default parsePets
