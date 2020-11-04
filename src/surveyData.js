import { always, filter, ifElse, map, pipe, reject, sort, toLower } from 'ramda'
import data from './data/practice-data.js'
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
import { pickKeySplitVals } from './modules/objectArray.js'
import {
  arrayValueContainsString,
  filterValidStringsWithFunc,
} from './modules/stringArray.js'
import {
  mapEmptyArraysInArrayToOtherValue,
  sortArrayOfStringsAlphabetically,
  valIsArray,
} from './utilities/array.js'
import {
  filterStringLength,
  replaceStringForObjectValue,
  stringEqualsString,
  stringMatchesRegEx,
} from './utilities/strings.js'

function parseLanguages(data) {
  return pipe(
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
}

function parsePets(data) {
  return pipe(
    pickKeySplitVals('huisDieren'), // Picks the pets from the provided dataset and splits answers into arrays of usable values, each array representing an answer
    map(
      // Maps these answers
      pipe(
        filter(stringMatchesRegEx(/geen/g)), // Removes the answers saying 'geen'
        filter(stringEqualsString('N>V>T>')), // Removes one answers equaling this string
        filter(filterStringLength), // Filters empty string out of array
        reject(arrayValueContainsString(irrelevantValues)), // Rejects all strings containing irrelevant values
        map(pipe(toLower, replaceStringForObjectValue(petLookUpTable))), // Maps these answers, puts the strings in lowercase and replacing relevant values to the values inside the petLookUpTable
        mapEmptyArraysInArrayToOtherValue('Heeft geen huisdieren'), // Replaces all empty answers to 'Heeft geen huisdieren', stating that people which provided no valid answers
        ifElse(
          valIsArray, // Checks if the current value being mapped on is an array or not
          petReducer({ amount: [], names: [] }), // Reduces pets, creating an object with an OccurenceTuple array (amounts) and PetTuples (names) array. These types can be found in the types folder
          val => always(val)() // Returns a string if the current value being mapped is a string (which is the case when someone has no pets)
        ),
        filterInvalidPetValues // Filters invalid pet values, cleaning up the data
      )
    )
  )(data)
}

const parseSurveyData = () => {
  console.log(parseLanguages(data), parsePets(data))
}

parseSurveyData()
