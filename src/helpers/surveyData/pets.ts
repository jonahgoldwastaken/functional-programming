import {
  anyPass,
  clone,
  filter,
  ifElse,
  isEmpty,
  length,
  pipe,
  reduce,
} from 'ramda'
import { validArrayIndex } from '../../modules/arrayNumber.js'
import { filterInvalidStringOccurenceTuples } from '../../modules/occurenceTuple.js'
import { arrayValueContainsString } from '../../modules/stringArray.js'
import { reduceArrayValuesToOccurenceAmount } from '../../utilities/array.js'
import {
  filterStringIncludedInArray,
  stringIsNumber,
} from '../../utilities/strings.js'
import { getType } from '../../utilities/type.js'

export { petReducer, filterInvalidPetValues }

const validPets = [
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
  'katten',
  'vissen',
  'vogels',
  'puma',
  'goudvis',
]

export const petLookUpTable = {
  dwerg: 'hond',
  teckel: '',
  sluierstaartgoudvis: 'goudvis',
  kater: 'kat',
  hont: 'hond',
  poes: 'kat',
  guppen: 'vissen',
  chihuahua: 'hond',
}

export const irrelevantValues = ['Moeder', 'Vader']

export const filterStringOnValidPets: (
  str: string
) => boolean = filterStringIncludedInArray(validPets)

function petReducer(initial: PetData): (arr: string[]) => PetData {
  return reduce(
    ifElse(
      (_, curr) => stringIsNumber(curr),
      parsePetAmount,
      ifElse(
        (_, curr) => arrayValueContainsString(validPets)(curr),
        parsePetSpecies,
        ifElse(
          (_, curr) => isPetName(curr),
          parsePetName,
          (acc: PetData) => clone(acc)
        )
      )
    ),
    initial
  )
}

function parsePetAmount(acc: PetData, curr: string): PetData {
  const { amount } = acc
  const numberedCurr = Number(curr)
  const i = length(amount) - 1

  return {
    ...acc,
    amount:
      validArrayIndex(i) && amount[i][1] < 1
        ? [
            ...amount.slice(0, i),
            [amount[i][0], amount[i][1] + numberedCurr],
            ...amount.slice(i),
          ]
        : [...amount, ['', numberedCurr]],
  }
}

function parsePetSpecies(acc: PetData, curr: string): PetData {
  const { names, amount } = acc
  const i = length(names) - 1

  return {
    ...acc,
    amount: reduceArrayValuesToOccurenceAmount(amount, curr),
    names:
      validArrayIndex(i) && !names[i][0]
        ? [...names.slice(0, i), [curr, names[i][1]], ...names.slice(i)]
        : [...names, [curr, '']],
  }
}

function parsePetName(acc: PetData, curr: string): PetData {
  const { names } = acc
  const i = length(names) - 1

  return {
    ...acc,
    names:
      validArrayIndex(i) && !names[i][1]
        ? [...names.slice(0, i), [names[i][0], curr], ...names.slice(i)]
        : [...names, [curr, '']],
  }
}

function isPetName(str: string): boolean {
  return !anyPass([stringIsNumber, arrayValueContainsString(validPets)])(str)
}

function filterInvalidPetValues(data: PetData | string): PetData | string {
  return getType(data) === 'string'
    ? data
    : {
        names: filterInvalidPetTuple((data as PetData).names),
        amount: filterInvalidStringOccurenceTuples((data as PetData).amount),
      }
}

function filterInvalidPetTuple(tups: PetTuple[]): PetTuple[] {
  return pipe(filter(petTupleSpeciesIsValid), filter(petTupleNameIsValid))(tups)
}

function petTupleNameIsValid(tup: PetTuple): boolean {
  return !isEmpty(tup[1])
}

function petTupleSpeciesIsValid(tup: PetTuple): boolean {
  return !isEmpty(tup[0])
}
