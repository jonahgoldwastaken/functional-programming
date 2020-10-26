import { arch } from 'os'
import { parse } from 'path'
import { findIndex, length } from 'ramda'
import { validArrayIndex } from '../modules/arrayNumber'
import { arrayValueContainsString } from '../modules/stringArray'
import { runFunctionIfTrue } from '../utilities/function'
import {
  filterStringIncludedInArray,
  stringIsNumber,
} from '../utilities/strings'

export const validPets = [
  'kat',
  'hond',
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

export const petLookUpTable = {
  dwerg: 'hond',
  teckel: '',
  sluierstaartgoudvis: 'goudvis',
  kater: 'kat',
  hont: 'hond',
  poes: 'kat',
}

const pluralPetLookupTable = { katten: 'kat', vissen: 'vis', guppen: 'vis' }

export const pluralPets = Object.keys(pluralPetLookupTable)

export const irrelevantValues = ['Moeder', 'Vader']

export const filterStringOnValidPets: (
  str: string
) => boolean = filterStringIncludedInArray(validPets)

const parsePetAmount: (acc: PetData, curr: string) => PetData = (acc, curr) => {
  const { amount } = acc
  const numberedCurr = Number(curr)

  const i = length(amount) - 1

  if (amount[i][1] < 1) amount[i][1] = numberedCurr
  else amount.push(['', numberedCurr])

  return { ...acc, amount }
}

const parsePetPlural: (acc: PetData, curr: string) => PetData = (acc, curr) => {
  const singularPet = (pluralPetLookupTable as { [key: string]: string })[curr]

  return parsePetSingular(acc, singularPet)
}

const parsePetSingular: (acc: PetData, curr: string) => PetData = (
  acc,
  curr
) => {
  const { amount, names } = acc

  const i = length(names) - 1
  const j = findIndex(tup => tup[0] === curr, amount)

  if (validArrayIndex(i) && !names[i][0]) names[i][0] = curr
  else names.push([curr, ''])

  if (validArrayIndex(j)) amount[j][1]++
  else amount.push([curr, 1])

  return { amount, names }
}

const parsePetName: (acc: PetData, curr: string) => PetData = (acc, curr) => {
  let { names } = acc

  const i = length(names) - 1

  if (validArrayIndex(i) && !names[i][1]) names[i][1] = curr
  else names.push(['', curr])

  return { ...acc, names }
}

export const petReducer: (acc: PetData | undefined, curr: string) => PetData = (
  acc = { names: [], amount: [] },
  curr
) =>
  runFunctionIfTrue(stringIsNumber(curr))(parsePetAmount, acc, curr) ||
  runFunctionIfTrue(arrayValueContainsString(pluralPets)(curr))(
    parsePetPlural,
    acc,
    curr
  ) ||
  runFunctionIfTrue(arrayValueContainsString(validPets)(curr))(
    parsePetSingular,
    acc,
    curr
  ) ||
  parsePetName(acc, curr)
