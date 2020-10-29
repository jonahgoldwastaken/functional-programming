import { map, pipe } from 'ramda'
import { pickKeyFromObject } from '../utilities/object.js'
import { splitStringOnRegex } from '../utilities/strings.js'

export const pickKeySplitVals: (
  key: string
) => (arr: GenericObject<string>[]) => string[][] = key =>
  map(pipe(pickKeyFromObject(key), splitStringOnRegex(/[-|,|\.|:|\s]/g)))
