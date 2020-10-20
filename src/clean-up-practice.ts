import data from './practice-data.json'
import { compose } from 'ramda'

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
  'html',
  'scss',
  'javascript',
  'jquery',
  'php',
  'alles',
]

const shortenedValues = {
  NL: 'Nederlands',
  EN: 'Engels',
  ENG: 'Engels',
}

const filterValueOnValidValues = (lang: string) =>
  lang.length &&
  Number.isNaN(Number(lang)) &&
  validValues.includes(lang.toLowerCase())

const capitaliseLanguages = (answers: string[][]) =>
  answers.map(item => item.map(lang => lang[0].toUpperCase() + lang.slice(1)))

const filterLanguagesOnInvalidValues = (answers: string[][]) =>
  answers.map(item => item.filter(filterValueOnValidValues))

const expandShortenedLanguages = (answers: string[][]) =>
  answers.map(item => item.map(lang => (shortenedValues as any)[lang] || lang))

const splitLanguageString = (answers: string[]) =>
  answers.map(val => val.slice().split(/;|,|\.|\s/))

const pickSpokenLanguages = (d: typeof data) =>
  d.map(item => item.gesprokenTalen)

const cleanUpSpokenLanguages = compose(
  capitaliseLanguages,
  filterLanguagesOnInvalidValues,
  expandShortenedLanguages,
  splitLanguageString,
  pickSpokenLanguages
)

console.log(cleanUpSpokenLanguages(data))
