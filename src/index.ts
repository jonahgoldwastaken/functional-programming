// require('dotenv').config({ path: resolve(__dirname, '..', '.env') })
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { filter, map, pipe, reject, sort, toLower } from 'ramda'
import data from './data/practice-data.json'
import {
  filterStringOnValidLanguages,
  mapExpandCapitaliseLanguage
} from './helpers/languages'
import {
  filterInvalidPetValues,
  irrelevantValues,
  petLookUpTable,
  petReducer
} from './helpers/pets'
import { mapRunFuncIfCurrValIsArr } from './modules/arrayFunction'
import { pickKeySplitVals } from './modules/objectArray'
import {
  arrayValueContainsString,
  filterValidStringsWithFunc
} from './modules/stringArray'
import {
  mapEmptyArraysInArrayToOtherValue,
  sortArrayOfStringsAlphabetically
} from './utilities/array'
import {
  filterStringLength,
  replaceStringForObjectValue,
  stringEqualsString,
  stringMatchesRegEx
} from './utilities/strings'

const parseData = (data: GenericObject<string>[]) => {
  const parsedLangauges = pipe(
    pickKeySplitVals('gesprokenTalen'),
    map(
      pipe(
        filterValidStringsWithFunc(filterStringOnValidLanguages),
        map(mapExpandCapitaliseLanguage),
        sort(sortArrayOfStringsAlphabetically)
      )
    )
  )(data)

  // console.log(parsedLangauges)

  const parsedPets = pipe(
    pickKeySplitVals('huisDieren'),
    map(
      pipe(
        filter(stringMatchesRegEx(/geen/g)),
        filter(stringEqualsString('N>V>T>')),
        filter(filterStringLength),
        reject(arrayValueContainsString(irrelevantValues)),
        map(pipe(toLower, replaceStringForObjectValue(petLookUpTable))),
        mapEmptyArraysInArrayToOtherValue('Heeft geen huisdieren'),
        mapRunFuncIfCurrValIsArr<string, PetData>(
          petReducer({ amount: [], names: [] })
        ),
        filterInvalidPetValues
      )
    )
  )(data)

  // console.log(parsedPets)

  writeFileSync(
    resolve(__dirname, 'pets-test.json'),
    Buffer.from(JSON.stringify(parsedPets))
  )
}

parseData(data)
