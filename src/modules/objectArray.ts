import { pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object'
import { splitStringOnRegex } from '../utilities/strings'

export const pickKeySplitVals: (
  key: string
) => (arr: GenericObject<string>[]) => string[][] = key => arr =>
  arr.map(pipe(pickKeyFromObject(key), splitStringOnRegex(/[-|,|\.|:|\s]/g)))
