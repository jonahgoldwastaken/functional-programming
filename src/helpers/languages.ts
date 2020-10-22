import {
  replaceStringForObjectValue,
  stringIsInArray,
} from '../utilities/strings'

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
]

export const filterOnValidLanguages = (lang: string) =>
  stringIsInArray(validLanguages)(lang)

export const mapExpandShortenedLanguage = (lang: string) =>
  replaceStringForObjectValue(shortenedLanguages)(lang)
