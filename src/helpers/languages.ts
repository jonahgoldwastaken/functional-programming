import { map, pipe } from 'ramda'
import {
  filterStringsInArray,
  mapCapitaliseString,
  replaceStringForObjectValue,
} from '../utilities/strings'

const shortenedLanguages = {
  NL: 'Nederlands',
  EN: 'Engels',
  ENG: 'Engels',
}

/**
 * List of valid languages pulled from the practice data
 */
export const validLanguages = [
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

export const filterStringOnValidLanguages: (
  lang: string
) => boolean = filterStringsInArray(validLanguages)

export const mapExpandShortenedLanguage: (
  lang: string
) => string = replaceStringForObjectValue(shortenedLanguages)

export const mapExpandCapitaliseLanguage: (langs: string) => string = pipe(
  mapExpandShortenedLanguage,
  mapCapitaliseString
)
