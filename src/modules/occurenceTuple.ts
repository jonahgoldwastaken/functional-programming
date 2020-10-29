import { filter, isEmpty, pipe } from 'ramda'
import { getType } from '../utilities/type.js'

const stringOccurenceTupleAmountIsValid = (tup: OccurenceTuple<string>) =>
  !Number.isNaN(tup[1])

const occurenceTupleValueIsValidString = (tup: OccurenceTuple<string>) =>
  getType(tup[0]) === 'string' && !isEmpty(tup[0])

export const filterInvalidStringOccurenceTuples: (
  tups: OccurenceTuple<string>[]
) => OccurenceTuple<string>[] = pipe(
  filter(occurenceTupleValueIsValidString),
  filter(stringOccurenceTupleAmountIsValid)
)
