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
    pickKeySplitVals('gesprokenTalen'), // Picks the spoken languages from the provided dataset and splits answers into arrays of usable values, each array representing an answer
    map(
      // Maps these answers
      pipe(
        filterValidStringsWithFunc(filterStringOnValidLanguages), // Filters them on validity
        map(mapExpandCapitaliseLanguage), // Maps every answer, capitalising the first letter
        sort(sortArrayOfStringsAlphabetically) // Sorts the languages per person alphabetically
      )
    )
  )(data)
  writeResult(parsedLangauges)('languages-test') // Writes the result to a file in the 'results' folder name 'languages-test'
}

const parsePets = (data: GenericObject<string>[]) => {
  const parsedPets = pipe(
    pickKeySplitVals('huisDieren'), // Picks the pets from the provided dataset and splits answers into arrays of usable values, each array representing an answer
    map(
      // Maps these answers
      pipe(
        filter(stringMatchesRegEx(/geen/g)), // Removes the answers saying 'geen'
        filter(stringEqualsString('N>V>T>')), // Removes one answers euqaling this string
        filter(filterStringLength), // Filters empty string out of array
        reject(arrayValueContainsString(irrelevantValues)), // Rejects all strings containing irrelevant values
        map(pipe(toLower, replaceStringForObjectValue(petLookUpTable))), // Maps these answers, puts the strings in lowercase and replacing relevant values to the values inside the petLookUpTable
        mapEmptyArraysInArrayToOtherValue('Heeft geen huisdieren'), // Replaces all empty answers to 'Heeft geen huisdieren', stating that people which provided no valid answers
        runFuncIfValIsArr<string, PetData>(
          petReducer({ amount: [], names: [] }) // Reduces pets, creating an object with an OccurenceTuple array (amounts) and PetTuples (names) array. These types can be found in the types folder
        ),
        filterInvalidPetValues // Filters invalid pet values, cleaning up the data
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
