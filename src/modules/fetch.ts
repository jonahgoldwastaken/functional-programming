import { andThen, map, pipe } from 'ramda'
import { fetchData, parseFetchToJson } from '../utilities/fetch.js'

export const fetchMultiple: (uri: string[]) => Promise<any>[] = map(
  pipe(fetchData, andThen(parseFetchToJson))
)
