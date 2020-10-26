// import { resolve } from 'path'
// require('dotenv').config({ path: resolve(__dirname, '..', '.env') })
import { filter, map, pipe, reject, sort, toLower } from 'ramda'
import data from './data/practice-data.json'
import {
  filterStringOnValidLanguages,
  mapExpandCapitaliseLanguage,
} from './helpers/languages'
import {
  filterInvalidPetValues,
  irrelevantValues,
  petLookUpTable,
  petReducer,
} from './helpers/pets'
import { mapRunFuncIfCurrValIsArr } from './modules/arrayFunction'
import { pickKeySplitVals } from './modules/objectArray'
import {
  arrayValueContainsString,
  filterValidStringsWithFunc,
} from './modules/stringArray'
import { writeResult } from './modules/writeFile'
import {
  mapEmptyArraysInArrayToOtherValue,
  sortArrayOfStringsAlphabetically,
} from './utilities/array'
import {
  filterStringLength,
  replaceStringForObjectValue,
  stringEqualsString,
  stringMatchesRegEx,
} from './utilities/strings'

const parseLanguages = (data: GenericObject<string>[]) => {
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
  writeResult(parsedLangauges)('languages-test')
}

const parsePets = (data: GenericObject<string>[]) => {
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

  writeResult(parsedPets)('pets-test')
}

const parseSurveyData = (data: GenericObject<string>[]) => {
  parseLanguages(data)

  parsePets(data)
}

parseSurveyData(data)
