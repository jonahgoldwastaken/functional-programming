import fetch, { Response } from 'node-fetch'

export const fetchData: (url: string) => Promise<Response> = fetch

export const parseFetchToJson: (res: Response) => Promise<any> = res =>
  res.json()
