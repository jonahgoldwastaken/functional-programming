import { andThen, map, pipe } from 'ramda'
import { fetchData, parseResToJson } from '../utilities/fetch.js'

/**
 * Fetches and parses fetched data as JSON string
 * @param url URL to fetch data from
 */
export const fetchAndParseJson: (url: string) => Promise<any> = pipe(
  fetchData,
  andThen(parseResToJson)
)

/**
 * Fetches data from passed array of URI
 * @param uri Array of URI to fetch data from
 */
export const fetchAndParseMultipleJson: (uri: string[]) => any = uri =>
  Promise.all(map(fetchAndParseJson)(uri))
