import { stringIsInArray } from '../utilities/strings'

const validPets = [
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

export const isInValidPets = (str: string) => stringIsInArray(validPets)(str)
