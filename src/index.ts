import { resolve } from 'path'
require('dotenv').config({ path: resolve(__dirname, '..', '.env') })
import { map, pipe, sort } from 'ramda'
import data from './data/practice-data.json'
import {
  filterStringOnValidLanguages,
  mapExpandCapitaliseLanguages,
} from './helpers/languages'
import { filterStringOnValidPets } from './helpers/pets'
import { pickKeySplitVals } from './modules/objectArray'
import { filterValidStringsWithFunc } from './modules/stringArray'
import { sortArrayOfStringsAlphabetically } from './utilities/array'

const parseData = (data: GenericObject<string>[]) => {
  const parsedLangauges = pipe(
    pickKeySplitVals('gesprokenTalen'),
    map(
      pipe(
        filterValidStringsWithFunc(filterStringOnValidLanguages),
        mapExpandCapitaliseLanguages,
        sort(sortArrayOfStringsAlphabetically)
      )
    )
  )(data)

  console.log(parsedLangauges)

  const parsedPets = pipe(
    pickKeySplitVals('huisDieren'),
    map(filterValidStringsWithFunc(filterStringOnValidPets))
  )(data)

  console.log(parsedPets)
}

parseData(data)
