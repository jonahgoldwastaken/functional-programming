import fetch, { Response } from 'node-fetch'

/**
 * Fetches data from passed URL
 * @param url URL to fetch data from
 */
export const fetchData: (url: string) => Promise<Response> = url => fetch(url)

/**
 * Parses JSON string into a JavaScript value
 * @param res response object to parse as a JSON string
 */
export const parseResToJson: (res: Response) => Promise<any> = res => res.json()
