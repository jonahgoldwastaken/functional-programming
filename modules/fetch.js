import { andThen, map, compose, pipe } from 'ramda'
import { fetchData, parseResToJson } from '../utilities/fetch.js'

export { fetchAndParseJson, fetchAndParseMultipleJson }

/**
 * Fetches and parses fetched data as JSON string
 * @param url URL to fetch data from
 */
function fetchAndParseJson(url) {
  return pipe(fetchData, andThen(parseResToJson))(url)
}

/**
 * Fetches data from passed array of URI
 * @param uri Array of URI to fetch data from
 */
function fetchAndParseMultipleJson(uri) {
  return pipe(map(fetchAndParseJson), Promise.all.bind(Promise))(uri)
}
