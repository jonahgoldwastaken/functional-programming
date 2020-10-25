import { filterStringsInArray } from '../utilities/strings'

export const validPets = [
  'kat',
  'kat',
  'hond',
  'hont',
  'vogel',
  'vis',
  'kat',
  'rat',
  'konijn',
  'hamster',
  'kip',
  'cavia',
  'gup',
]

export const filterOnValidPets: (str: string) => boolean = filterStringsInArray(
  validPets
)
