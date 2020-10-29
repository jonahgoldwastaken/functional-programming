import { filter, map, pipe, reject, sort, toLower } from 'ramda'
import data from './data/practice-data.json'
import {
  filterStringOnValidLanguages,
  mapExpandCapitaliseLanguage,
} from './helpers/surveyData/languages.js'
import {
  filterInvalidPetValues,
  irrelevantValues,
  petLookUpTable,
  petReducer,
} from './helpers/surveyData/pets.js'
import { runFuncIfValIsArr } from './modules/arrayFunction.js'
import { pickKeySplitVals } from './modules/objectArray.js'
import {
  arrayValueContainsString,
  filterValidStringsWithFunc,
} from './modules/stringArray.js'
import { writeResult } from './modules/writeFile.js'
import {
  mapEmptyArraysInArrayToOtherValue,
  sortArrayOfStringsAlphabetically,
} from './utilities/array.js'
import {
  filterStringLength,
  replaceStringForObjectValue,
  stringEqualsString,
  stringMatchesRegEx,
} from './utilities/strings.js'

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
        runFuncIfValIsArr<string, PetData>(
          petReducer({ amount: [], names: [] })
        ),
        filterInvalidPetValues
      )
    )
  )(data)

  writeResult(parsedPets)('pets-test')
}

const parseSurveyData = () => {
  parseLanguages(data)
  parsePets(data)
}

parseSurveyData()
