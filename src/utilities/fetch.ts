import fetch, { Response } from 'node-fetch'

export const fetchData: (url: string) => Promise<Response> = url => fetch(url)

export const parseResToJson: (res: Response) => Promise<any> = res => res.json()
