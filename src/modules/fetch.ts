import { andThen, map, pipe } from 'ramda'
import { fetchData, parseResToJson } from '../utilities/fetch.js'

export { fetchAndParseJson, fetchAndParseMultipleJson }

/**
 * Fetches and parses fetched data as JSON string
 * @param url URL to fetch data from
 */
function fetchAndParseJson(url: string): Promise<unknown> {
  return pipe(fetchData, andThen(parseResToJson))(url)
}

/**
 * Fetches data from passed array of URI
 * @param uri Array of URI to fetch data from
 */
function fetchAndParseMultipleJson(uri: string[]): Promise<unknown[]> {
  return Promise.all(map(fetchAndParseJson)(uri))
}
