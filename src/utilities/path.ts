import { resolve } from 'path'

/**
 * Resolves the 'results' folder inside this repo, attaching provided filename to the end
 * @param str Filename of file to save
 */
export const resolveResults: (fileName: string) => string = str =>
  resolve(__dirname, '..', '..', 'results', `${str}.json`)
