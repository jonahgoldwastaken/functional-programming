import { andThen, map, pipe } from 'ramda'
import { fetchData, parseResToJson } from '../utilities/fetch.js'

export const fetchAndParseJson: (url: string) => Promise<any> = pipe(
  fetchData,
  andThen(parseResToJson)
)

export const fetchAndParseMultipleJson: (uri: string[]) => any = uri =>
  Promise.all(map(fetchAndParseJson)(uri))
