import data from './practice-data.json'
import { compose } from 'ramda'
import { upper } from 'alphabet'

/*
  This is a data clean-up practice based on data from a questionnaire me and other students have filled in. The data is not publicly available, so if you want to run this code you need to supply your own data that's similar.

  Data requirements:
    The JSON data is a array containing objects that have a "gesprokenTalen" property/key
*/

/**
 * List of valid languages pulled from the practice data
 */
const validValues = [
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

/**
 * List of shortened languages that partially exist in the data
 */
const shortenedValues = {
  NL: 'Nederlands',
  EN: 'Engels',
  ENG: 'Engels',
}

/**
 * Sorts the languages given as answers alphabetically based on their first letters
 * @param answers Array of language answers
 */
const sortLanguagesAlphabetically = (answers: string[][]) =>
  answers.map(item =>
    item.sort((a, b) => (upper.indexOf(a[0]) > upper.indexOf(b[0]) ? 1 : -1))
  )

/**
 * Capitalises the first letter of the language and the first letter after a dash
 * @param answers Array of language answers
 */
const capitaliseLanguages = (answers: string[][]) =>
  answers.map(item =>
    item.map(lang =>
      lang
        .split('-')
        .map(s => s[0].toUpperCase() + s.slice(1))
        .join('-')
    )
  )

/**
 * Filters languages on if it's an empty string, a number and if it exists in the validValues array
 * @param answers Array of language answers
 */
const filterLanguagesOnInvalidValues = (answers: string[][]) =>
  answers.map(item =>
    item.filter(
      lang =>
        lang.length &&
        Number.isNaN(Number(lang)) &&
        validValues.includes(lang.toLowerCase())
    )
  )

/**
 * Expands short answers to their full language counterpart
 * @param answers Array of language answers
 */
const expandShortenedLanguages = (answers: string[][]) =>
  answers.map(item => item.map(lang => (shortenedValues as any)[lang] || lang))

/**
 * Splits the language answers so that every language has its own place in an array of languages
 * @param answers Array of language answers
 */
const splitLanguageString = (answers: string[]) =>
  answers.map(val => val.slice().split(/;|,|\.|\s/))

/**
 * Picks the languages answers from the dataset
 * @param d Raw data array
 */
const pickSpokenLanguages = (d: typeof data) =>
  d.map(item => item.gesprokenTalen)

/**
 * Composition of all the functions above to pass the data into
 */
const cleanUpSpokenLanguages = compose(
  sortLanguagesAlphabetically,
  capitaliseLanguages,
  filterLanguagesOnInvalidValues,
  expandShortenedLanguages,
  splitLanguageString,
  pickSpokenLanguages
)

console.log(cleanUpSpokenLanguages(data))
