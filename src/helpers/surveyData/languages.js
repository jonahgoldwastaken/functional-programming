import { pipe } from 'ramda'
import {
  filterStringIncludedInArray,
  mapCapitaliseString,
  replaceStringForObjectValue,
} from '../../utilities/strings.js'

export {
  filterStringOnValidLanguages,
  mapExpandShortenedLanguage,
  mapExpandCapitaliseLanguage,
}

/**
 * Look-up table for shortened languages
 */
const shortenedLanguages = {
  NL: 'Nederlands',
  EN: 'Engels',
  ENG: 'Engels',
}

/**
 * List of valid languages pulled from the practice data
 */
const validLanguages = [
  'nederlands',
  'engels',
  'duits',
  'spaans',
  'frans',
  'tessels',
  'berbers',
  'marokkaans-arabisch',
  'koreaans',
  'cantonees',
  'ghanees',
  'fries',
  'kroatisch',
  'amerikaans',
  'zweeds',
  'pools',
  'tamil',
  'papiaments',
  'indonesisch',
  'gebarentaal',
  'indisch',
  'arabisch',
  'chinees',
  'nl',
  'en',
  'eng',
]

function filterStringOnValidLanguages(lang) {
  return filterStringIncludedInArray(validLanguages)(lang)
}

function mapExpandShortenedLanguage(lang) {
  return replaceStringForObjectValue(shortenedLanguages)(lang)
}

function mapExpandCapitaliseLanguage(langs) {
  return pipe(mapExpandShortenedLanguage, mapCapitaliseString)(langs)
}
