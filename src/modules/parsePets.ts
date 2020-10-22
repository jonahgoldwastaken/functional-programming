import { pipe } from 'ramda'
import { pickKeyFromDataset } from '../utilities/data'
import {
  replaceStringThroughRegex,
  splitStringOnRegex,
} from '../utilities/strings'

const parsePets = <T>(dataset: T[]) =>
  dataset
    .map(pickKeyFromDataset('huisDieren'))
    .map(
      pipe(replaceStringThroughRegex(/\s/, ''), splitStringOnRegex(/-|,|\.|:/))
    )

export default parsePets
