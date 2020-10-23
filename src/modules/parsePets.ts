import { pipe } from 'ramda'
import { isInValidPets } from '../helpers/pets'
import {
  filterRegexFromArray,
  mapEmptyArraysInArrayToOtherValue,
  reduceArrayValuesToOccurenceAmount,
} from '../utilities/array'
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
        splitStringOnRegex(/[-|,|\.|:]/g)
      )
    )
    .map(ans =>
      ans
        .filter(stringIsValidString)
        .filter(filterRegexFromArray(/geen/))
        .filter(isInValidPets)
    )
    .map(mapEmptyArraysInArrayToOtherValue(['Heeft geen huisdieren']))
    .map(ans => ans.reduce(reduceArrayValuesToOccurenceAmount, []))

export default parsePets
