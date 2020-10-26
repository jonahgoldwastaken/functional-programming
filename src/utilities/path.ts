import { resolve } from 'path'

export const resolveResults: (fileName: string) => string = str =>
  resolve(__dirname, '..', '..', 'results', `${str}.json`)
