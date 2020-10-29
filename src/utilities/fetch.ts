import fetch, { Response } from 'node-fetch'

export { fetchData, parseResToJson }

/**
 * Fetches data from passed URL
 * @param url URL to fetch data from
 */
function fetchData(url: string): Promise<Response> {
  return fetch(url)
}

/**
 * Parses JSON string into a JavaScript value
 * @param res response object to parse as a JSON string
 */
function parseResToJson(res: Response): Promise<unknown> {
  return res.json()
}
